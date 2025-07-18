import mongoose from "mongoose";
import WorkerModel from "../models/worker.module.js";
import uploadImageClodinary from "../utils/uploadImageClodinary.js";
import AttendanceModel from "../models/attendance.module.js";

export async function addWorker(req, res) {
  try {
    const { name, phoneNumber, join, memberType, addharCard } = req.body;
    const addharFile = req.file;
    if (!name || !phoneNumber || !memberType) {
      return res.status(400).json({
        message: "kindly provide all the required field",
        success: false,
        error: true,
      });
    }

    const upload = await uploadImageClodinary(addharFile, "addhar");

    const payload = {
      name,
      phoneNumber,
      join: join || new Date().toDateString(),
      memberType,
      addharCard: upload?.secure_url,
      activeStatus: true,
    };

    const worker = new WorkerModel(payload);
    const savedWorker = await worker.save();

    // Now create attendance record for the current month
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Create data array for each day in the month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const data = [];

    for (let day = 1; day <= daysInMonth; day++) {
      data.push({
        date: new Date(currentYear, currentMonth, day),
        value: "", // Default attendance value
      });
    }

    // Create attendance record
    const attendance = new AttendanceModel({
      workerId: savedWorker._id,
      attendanceData: [
        {
          month: monthNames[currentMonth],
          data: data,
        },
      ],
    });

    // Save the attendance record
    const savedAttendance = await attendance.save();

    // Update the worker with the attendance reference
    savedWorker.attendance = savedAttendance._id;
    await savedWorker.save();

    return res.status(200).json({
      message: "the worker has been added succesfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

export async function addInventoryItem(req, res) {
  try {
    const { name, quantity } = req.body;
    const workerId = req.params.workerId;
    if (!name || !quantity) {
      return res.status(400).json({
        message: "please provide all the required field",
        success: false,
        error: true,
      });
    }

    const worker = await WorkerModel.findById(workerId);

    if (!worker) {
      return res.status(400).json({
        message: "no worker found! ",
        success: false,
        error: true,
      });
    }

    const payload = { name, quantity };

    worker.inventory.push(payload);
    const save = worker.save();

    return res.status(200).json({
      message: "item added succesfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

export async function removeInventoryItem(req, res) {
  try {
    const workerId = req.params.workerId;
    const { itemId } = req.body;

    const worker = await WorkerModel.findById(workerId);
    if (!itemId) {
      return res.status(400).json({
        message: "kindly provide all required field",
        success: false,
        error: true,
      });
    }

    if (!worker) {
      return res.status(400).json({
        message: "worker cannot be found",
        success: false,
        error: true,
      });
    }
    const updatedInventory = worker.inventory.filter((item) => {
      console.log(itemId, item.id);

      return item.id !== itemId;
    });

    const save = await WorkerModel.findByIdAndUpdate(workerId, {
      inventory: updatedInventory,
    });

    return res.status(200).json({
      message: "item removed sucessfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

export async function updatePaymentLog(req, res) {
  try {
    const { amount, date, paymentFor, paymentType } = req.body;
    const workerId = req.params.workerId;

    const worker = await WorkerModel.findById(workerId);
    if (!worker) {
      return res.status(400).json({
        message: "no worker found",
        success: false,
        error: true,
      });
    }
    if (paymentFor === "advance") {
      worker.payment.advance += amount;
    }
    if (paymentFor === "weeklyGiven") {
      worker.payment.weeklyGiven += amount;
    }

    worker.paymentLog.push({
      amount,
      date: date || new Date().toDateString(),
      paymentFor,
      paymentType,
    });

    await worker.save();

    return res.status(200).json({
      message: "payment added succesfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

export async function markAttendance(req, res) {
  try {
    const workerId = req.params.workerId;
    const { date, value, siteId } = req.body;

    // Validate inputs
    if (!date || !value) {
      return res.status(400).json({
        message: "Date and attendance value are required",
        success: false,
        error: true,
      });
    }

    // Validate attendance value
    const validValues = [
      "present",
      "absent",
      "half-day",
      "night",
      "half-night",
    ];
    if (!validValues.includes(value)) {
      return res.status(400).json({
        message:
          "Invalid attendance value. Must be one of: present, absent, half-day, night, half-night",
        success: false,
        error: true,
      });
    }

    // Check if worker exists
    const worker = await WorkerModel.findById(workerId);
    if (!worker) {
      return res.status(404).json({
        message: "Worker not found",
        success: false,
        error: true,
      });
    }

    const dateParts = date.split("-");

    // Parse the date
    const attendanceDate = new Date(
      parseInt(dateParts[0]), // year
      parseInt(dateParts[1]) - 1, // month (0-indexed)
      parseInt(dateParts[2]) // day
    );
    const day = attendanceDate.getDate() + 1;
    const month = attendanceDate.getMonth();
    const year = attendanceDate.getFullYear();
    console.log(day);

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthName = monthNames[month];

    // Find attendance record
    let attendance = await AttendanceModel.findOne({ workerId });
    if (!attendance) {
      return res.status(404).json({
        message:
          "Attendance record not found. Please initialize attendance first.",
        success: false,
        error: true,
      });
    }

    // Find the month data
    const monthData = attendance.attendanceData.find((m) => {
      console.log(m.month, monthName);

      return m.month === monthName;
    });
    if (!monthData) {
      return res.status(404).json({
        message: `No attendance data found for ${monthName}`,
        success: false,
        error: true,
      });
    }

    // Find the day data
    const dayData = monthData.data.find((d) => {
      const dDate = new Date(d.date);
      return dDate.getDate() === day;
    });

    if (!dayData) {
      return res.status(404).json({
        message: `No attendance data found for day ${day}`,
        success: false,
        error: true,
      });
    }

    // Update the attendance
    dayData.value = value;
    dayData.site = siteId || dayData.site;

    // Save the updated attendance
    await attendance.save();

    // Update worker's reference to attendance if not already set
    if (!worker.attendance) {
      worker.attendance = attendance._id;
      await worker.save();
    }

    return res.status(200).json({
      message: "Attendance marked successfully",
      success: true,
      error: false,
      data: {
        day,
        month: monthName,
        year,
        value,
        site: dayData.site,
      },
    });
  } catch (error) {
    console.error("Error marking attendance:", error);
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

export async function getAllWorker(req, res) {
  try {
    const data = await WorkerModel.find().populate("attendance");
    return res.status(200).json({
      message: "data of the worker fetched",
      success: true,
      error: false,
      data: data,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

export async function getWorker(req, res) {
  try {
    const workerId = req.params.workerId;
    const worker = await WorkerModel.findById(workerId).populate("attendance");
    if (!worker) {
      return res.status(400).json({
        message: "no worker found !",
        success: false,
        error: true,
      });
    }
    return res.status(200).json({
      message: "worker data fetched",
      success: true,
      error: false,
      data: worker,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}
