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
            data.push({
              date: new Date(currentYear, currentMonth, day),
              value: "", // Default value
            });
          }

          // Add the new month to attendance data
          attendance.attendanceData.push({
            month: monthNames[currentMonth],
            data: data,
          });

          await attendance.save();

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
