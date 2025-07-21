import cron from "node-cron";
import AttendanceModel from "../models/attendance.module.js";
import WorkerModel from "../models/worker.module.js";

/**
 * Schedule task to automatically initialize attendance for the new month
 */
export function setupMonthlyAttendanceScheduler() {
  // Run at midnight (00:00) on the 1st day of every month
  cron.schedule("0 0 1 * *", async () => {
    try {
      console.log(
        `[${new Date().toISOString()}] Running monthly attendance initialization`
      );

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

      // Get all active workers
      const workers = await WorkerModel.find({ activeStatus: true });
      console.log(`Found ${workers.length} active workers`);

      for (const worker of workers) {
        // Find or create attendance record
        let attendance = await AttendanceModel.findOne({
          workerId: worker._id,
        });

        if (!attendance) {
          attendance = new AttendanceModel({
            workerId: worker._id,
            attendanceData: [],
          });
        }

        // Check if this month already exists in attendance data
        const monthExists = attendance.attendanceData.some(
          (m) => m.month === monthNames[currentMonth]
        );

        if (!monthExists) {
          // Create the data for the days of the month
          const daysInMonth = new Date(
            currentYear,
            currentMonth + 1,
            0
          ).getDate();
          const data = [];

          for (let day = 1; day <= daysInMonth; day++) {
            // Create date using ISO string format to avoid timezone issues
            const year = currentYear;
            const month = String(currentMonth + 1).padStart(2, "0"); // currentMonth is 0-indexed, so add 1
            const dayStr = String(day).padStart(2, "0");

            // Create date from ISO string to ensure correct date
            const dateForDay = new Date(
              `${year}-${month}-${dayStr}T00:00:00.000Z`
            );

            data.push({
              date: dateForDay,
              value: "not_available",
              site: null,
            });
          }

          // Add the new month to attendance data
          attendance.attendanceData.push({
            month: monthNames[currentMonth],
            summary: {
              full_present: 0,
              night: 0,
              half_day: 0,
              present: 0,
              absent: 0,
            },
            data: data,
          });
          if (attendance.attendanceData.at(-2)) {
            attendance.attendanceData.at(-2).payment = worker.payment;
          }
          await attendance.save();
          (worker.payment = {
            totalSalary: 0,
            advance: 0,
            weeklyGiven: 0,
            remainingBal: 0,
          }),
            await worker.save();

          await WorkerModel.findByIdAndUpdate(worker._id, {
            attendance: attendance._id,
          });

          console.log(
            `Initialized attendance for worker ${worker._id} for ${monthNames[currentMonth]} ${currentYear}`
          );
        }
      }

      console.log("Monthly attendance initialization completed successfully");
    } catch (error) {
      console.error("Error initializing monthly attendance:", error);
    }
  });
}
