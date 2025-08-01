// Helper function to get hours for each status
export const getHoursForStatus = (status) => {
  switch (status) {
    case "absent":
      return 0;
    case "half_day":
      return 4;
    case "present":
      return 7;
    case "full_present":
      return 9;
    case "night":
      return 11;
    case "not_available":
      return 0;
    default:
      return 0;
  }
};

// Process attendance data for calendar display
export const processAttendanceData = (worker, currentDate) => {
  const attendanceMap = new Map();

  // Handle new data structure (worker.attendance.attendanceData)
  if (worker.attendance?.attendanceData) {
    worker.attendance.attendanceData.forEach((monthData) => {
      if (monthData.data && Array.isArray(monthData.data)) {
        monthData.data.forEach((dayData) => {
          const date = new Date(dayData.date);
          // JavaScript months are 0-indexed, so July = 6
          const dateKey = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

          // Keep the backend status values as they are now
          let displayStatus = dayData.value || "no-data";

          // Map any legacy values to the new naming convention
          switch (dayData.value) {
            case "halfday":
              displayStatus = "half_day";
              break;
            case "overtime":
              displayStatus = "night";
              break;
            case "leave":
              displayStatus = "absent";
              break;
            case "not_available":
              displayStatus = "not_available";
              break;
            default:
              displayStatus = dayData.value || "no-data";
          }

          attendanceMap.set(dateKey, {
            status: displayStatus,
            site: dayData.site || "No site assigned",
            hours: getHoursForStatus(displayStatus),
            notes: dayData.notes || "",
            originalValue: dayData.value, // Keep original for debugging
          });
        });
      }
    });
  }
  // Fallback to old structure if needed
  else if (worker.attendance && typeof worker.attendance === "object") {
    Object.entries(worker.attendance).forEach(([date, details]) => {
      const dateObj = new Date(date);
      // Use consistent date key format: YYYY-M-D (without zero padding)
      const dateKey = `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()}`;

      const status = typeof details === "object" ? details.value : details;
      attendanceMap.set(dateKey, {
        status: status,
        site: typeof details === "object" ? details.site : "No site assigned",
        hours: getHoursForStatus(status),
        notes: typeof details === "object" ? details.notes : "",
      });
    });
  }

  return attendanceMap;
};

// Calculate payment summary
export const calculatePaymentSummary = (worker, currentDate) => {
  const summary = {
    weeklyGiven: 0,
    advanceGiven: 0,
    totalSalary: 0,
    pendingPayment: 0,
  };

  const currentMonth = currentDate.getMonth(); // 0-indexed (July = 6)
  const currentYear = currentDate.getFullYear();
  const today = new Date();
  const isCurrentMonth =
    currentMonth === today.getMonth() && currentYear === today.getFullYear();

  if (isCurrentMonth) {
    // Current month: use worker.payment data
    if (worker.payment && typeof worker.payment === "object") {
      summary.totalSalary = parseFloat(worker.payment.totalSalary) || 0;
      summary.advanceGiven = parseFloat(worker.payment.advance) || 0;
      summary.weeklyGiven = parseFloat(worker.payment.weeklyGiven) || 0;
      summary.pendingPayment = parseFloat(worker.payment.remainingBal) || 0;
    }
  } else {
    // Different month: use attendance.attendanceData[month].payment
    if (worker.attendance?.attendanceData) {
      // Find the matching month data
      const monthData = worker.attendance.attendanceData.find((monthEntry) => {
        if (monthEntry.month && monthEntry.year) {
          // Check if the month data matches the selected month/year
          return (
            monthEntry.month === currentMonth + 1 &&
            monthEntry.year === currentYear
          ); // month might be 1-indexed
        }
        // Fallback: check if any data in this month matches our selected month
        if (
          monthEntry.data &&
          Array.isArray(monthEntry.data) &&
          monthEntry.data.length > 0
        ) {
          const firstDataDate = new Date(monthEntry.data[0].date);
          return (
            firstDataDate.getMonth() === currentMonth &&
            firstDataDate.getFullYear() === currentYear
          );
        }
        return false;
      });

      if (
        monthData &&
        monthData.payment &&
        typeof monthData.payment === "object"
      ) {
        summary.totalSalary = parseFloat(monthData.payment.totalSalary) || 0;
        summary.advanceGiven = parseFloat(monthData.payment.advance) || 0;
        summary.weeklyGiven = parseFloat(monthData.payment.weeklyGiven) || 0;
        summary.pendingPayment =
          parseFloat(monthData.payment.remainingBal) || 0;
      }
    }
  }

  return summary;
};

// Generate calendar days for the selected month
export const generateCalendarDays = (currentDate, attendanceData) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-indexed (July = 6)
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  const days = [];
  const today = new Date();

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push({ day: "", isEmpty: true, status: "empty" });
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    // Use consistent date key format: YYYY-M-D (without zero padding)
    const dateKey = `${year}-${month}-${day}`;
    const attendance = attendanceData.get(dateKey);
    const isToday = date.toDateString() === today.toDateString();

    days.push({
      day,
      date: date,
      dateKey: dateKey,
      attendance: attendance || {
        status: "no-data",
        site: "No data available",
        hours: 0,
        notes: "",
      },
      isEmpty: false,
      isToday: isToday,
    });
  }

  return days;
};

// Attendance status colors
export const attendanceColors = {
  absent: "#ef4444",
  half_day: "#f59e0b",
  present: "#10b981",
  full_present: "#059669",
  night: "#8b5cf6",
  not_available: "transparent",
  "no-data": "#e5e7eb",
};

export function isWorkerNotAvailableOnDay(worker, targetDay) {
  if (!worker.attendance?.attendanceData) {
    return false;
  }
  if (targetDay === "Today") {
    targetDay = new Date();
  }
  const targetDate = new Date(targetDay).toISOString().split("T")[0];

  for (const monthData of worker.attendance.attendanceData) {
    if (monthData.data && Array.isArray(monthData.data)) {
      for (const dayData of monthData.data) {
        const attendanceDate = new Date(dayData.date)
          .toISOString()
          .split("T")[0];

        if (
          attendanceDate === targetDate &&
          dayData.value === "not_available"
        ) {
          return true;
        }
      }
    }
  }

  return false;
}
