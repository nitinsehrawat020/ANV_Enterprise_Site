import mongoose from "mongoose";
import WorkerModel from "../models/worker.module.js";
import uploadImageClodinary from "../utils/uploadImageClodinary.js";
import AttendanceModel from "../models/attendance.module.js";

export async function addWorker(req, res) {
  try {
    const { name, phoneNumber, join, memberType } = req.body; // Added memberType
    const addharFile = req.file;

    if (!name || !phoneNumber) {
      return res.status(400).json({
        message: "kindly provide all the required field",
        success: false,
        error: true,
      });
    }

    // Only upload to Cloudinary if file exists
    let addharCardUrl = null;
    if (addharFile) {
      const upload = await uploadImageClodinary(addharFile, "addhar");
      addharCardUrl = upload?.secure_url;
    }

    const payload = {
      name,
      phoneNumber,
      join: join || new Date().toDateString(),
      memberType, // This was missing in your original code
      addharCard: addharCardUrl,
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
        value: "not_available", // Default attendance value
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

export async function updatePayment(req, res) {
  try {
    const { workers } = req.body; // workers is the array of all the worker which salary need to be updated

    for (const worker of workers) {
      const { workerId, date, amount, paymentFor } = worker;

      const workerDb = await WorkerModel.findById(workerId);

      let payload;
      if (!workerDb) {
        return res.status(400).json({
          message: "no worker found",
          success: false,
          error: true,
        });
      }
      if (paymentFor === "advance") {
        workerDb.payment.advance += amount;
        workerDb.payment.remainingBal =
          workerDb.payment.totalSalary - workerDb.payment.advance;
        payload = {
          amount: amount,
          date: date,
          paymentFor: "advance",
        };
      }
      if (paymentFor === "salary") {
        //chcek for if the salary is given for lasy month or for current
        const saleryMonth = new Date(date).getMonth();
        const curMonth = new Date().getMonth();

        // if cur then reduce the value from cur salary
        if (saleryMonth === curMonth) {
          workerDb.payment.salaryGiven += amount;
          workerDb.payment.remainingBal -= amount;
        } else {
          workerDb.attendance.attendanceData.at(-2).payment.salaryGiven +=
            amount;
          workerDb.attendance.attendanceData.at(-2).payment.remainingBal -=
            amount;
        }
        //if last month then go to worker.attendance.month.payment and update
        payload = {
          amount: amount,
          date: date,
          paymentFor: "salary",
        };
      }

      workerDb.paymentLog.push(payload);
      workerDb.save();

      // await workerDb.save();
    }

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
    const { date, workers } = req.body; // workers is an array of {workerId, value, siteId}

    // Validate inputs
    if (!date || !workers || !Array.isArray(workers) || workers.length === 0) {
      return res.status(400).json({
        message: "Date and workers array are required",
        success: false,
        error: true,
      });
    }

    // Validate attendance values
    const validValues = [
      "present",
      "absent",
      "half_day",
      "night",
      "full_present",
    ];

    // Validate each worker entry
    for (const worker of workers) {
      if (!worker.workerId || !worker.value) {
        return res.status(400).json({
          message: "Each worker entry must have workerId and value",
          success: false,
          error: true,
        });
      }

      if (!validValues.includes(worker.value)) {
        return res.status(400).json({
          message: `Invalid attendance value for worker ${worker.workerId}. Must be one of: present, absent, half-day, night, full_present`,
          success: false,
          error: true,
        });
      }
    }

    const dateParts = date.split("-");

    // Parse the date
    const attendanceDate = new Date(
      parseInt(dateParts[0]), // year
      parseInt(dateParts[1]) - 1, // month (0-indexed)
      parseInt(dateParts[2]) // day
    );
    const day = attendanceDate.getDate();
    const month = attendanceDate.getMonth();
    const year = attendanceDate.getFullYear();

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

    const results = [];
    const errors = [];

    // Process each worker
    for (const workerData of workers) {
      try {
        const { workerId, value, siteId } = workerData;

        // Check if worker exists
        const worker = await WorkerModel.findById(workerId);
        if (!worker) {
          errors.push({
            workerId,
            error: "Worker not found",
          });
          continue;
        }

        // Find attendance record
        let attendance = await AttendanceModel.findOne({ workerId });
        if (!attendance) {
          errors.push({
            workerId,
            error:
              "Attendance record not found. Please initialize attendance first.",
          });
          continue;
        }

        // Find the month data
        const monthData = attendance.attendanceData.find(
          (m) => m.month === monthName
        );

        if (!monthData) {
          errors.push({
            workerId,
            error: `No attendance data found for ${monthName}`,
          });
          continue;
        }

        // Find the day data
        const dayData = monthData.data.find((d) => {
          const dDate = new Date(d.date);
          return dDate.getDate() === day;
        });

        if (!dayData) {
          errors.push({
            workerId,
            error: `No attendance data found for day ${day}`,
          });
          continue;
        }

        // Check if attendance was already marked for this day (to avoid double salary calculation)
        const previousValue = dayData.value;

        // Calculate salary based on attendance value
        const baseSalary =
          worker.memberType === "worker"
            ? parseInt(process.env.WORKER_SALERY) || 600
            : parseInt(process.env.HELPER_SALERY) || 300;

        let salaryMultiplier = 0;
        let dailySalary = 0;

        switch (value) {
          case "night":
            salaryMultiplier = 2;
            break;
          case "full_present":
            salaryMultiplier = 1.5;
            break;
          case "present":
            salaryMultiplier = 1;
            break;
          case "half_day":
            salaryMultiplier = 0.5;
            break;
          case "absent":
            salaryMultiplier = 0;
            break;
          default:
            salaryMultiplier = 0;
        }

        dailySalary = baseSalary * salaryMultiplier;

        // If attendance was already marked, subtract the previous salary calculation
        if (
          previousValue &&
          previousValue !== "not_available" &&
          previousValue !== ""
        ) {
          let previousMultiplier = 0;
          switch (previousValue) {
            case "night":
              previousMultiplier = 2;
              break;
            case "full_present":
              previousMultiplier = 1.5;
              break;
            case "present":
              previousMultiplier = 1;
              break;
            case "half_day":
              previousMultiplier = 0.5;
              break;
            case "absent":
              previousMultiplier = 0;
              break;
          }
          const previousDailySalary = baseSalary * previousMultiplier;
          worker.payment.totalSalary -= previousDailySalary;

          // Update summary count (decrease previous value)
          if (monthData.summary[previousValue] !== undefined) {
            monthData.summary[previousValue]--;
          }
        }

        // Update attendance value and site
        dayData.value = value;
        if (siteId) {
          dayData.site = siteId;
        }

        // Add daily salary to worker's total salary
        worker.payment.totalSalary += dailySalary;
        worker.payment.remainingBal =
          worker.payment.totalSalary -
          (worker.payment.advance + worker.payment.weeklyGiven);

        // Update summary count (increase new value)
        if (monthData.summary[value] !== undefined) {
          monthData.summary[value]++;
        } else {
          monthData.summary[value] = 1;
        }

        console.log(
          `Worker: ${worker.name}, Attendance: ${value}, Daily Salary: ${dailySalary}, Total Salary: ${worker.payment.totalSalary}`
        );

        // Save both attendance and worker
        await attendance.save();
        await worker.save();

        if (!worker.attendance) {
          worker.attendance = attendance._id;
          await worker.save();
        }

        results.push({
          workerId,
          workerName: worker.name,
          day,
          month: monthName,
          year,
          value,
          site: dayData.site,
          dailySalary,
          totalSalary: worker.payment.totalSalary,
          success: true,
        });
      } catch (workerError) {
        errors.push({
          workerId: workerData.workerId,
          error: workerError.message || "Unknown error occurred",
        });
      }
    }

    return res.status(200).json({
      message: `Attendance marked for ${results.length} workers${errors.length > 0 ? `, ${errors.length} failed` : ""}`,
      success: true,
      error: false,
      data: {
        successful: results,
        failed: errors,
        totalProcessed: workers.length,
        successCount: results.length,
        errorCount: errors.length,
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

export async function updateWednesdayPayment(req, res) {
  try {
    const { date } = req.body; // workers wil be the array of all the worker

    const workers = await WorkerModel.find();
    if (!workers) {
      return res.status(500).json({
        message: error.message || error,
        success: false,
        error: true,
      });
    }
    for (const worker of workers) {
      const payload = {
        amount: +process.env.WEEKLY_GIVEN_AMOUNT,
        date: date,
        paymentFor: "weekly",
        paymentType: "cash",
      };
      worker.paymentLog.push(payload);
      worker.payment.weeklyGiven += +process.env.WEEKLY_GIVEN_AMOUNT;
      worker.payment.remainingBal =
        worker.payment.totalSalary - worker.payment.weeklyGiven;
      worker.save();
    }

    return res.status(200).json({
      message: "payment updated successfully ",
      success: true,
      error: false,
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
