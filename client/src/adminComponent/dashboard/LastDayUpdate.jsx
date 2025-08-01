import { useWorker } from "../../hooks/useWorker";
import {
  StyleLastDayUpdate,
  UpdateHeader,
  UpdateList,
  UpdateItem,
  AttendanceStatus,
  EmptyUpdate,
} from "./styleDashboard";

function LastDayUpdate() {
  const { workers, isLoading: isWorkerLoading } = useWorker();

  if (isWorkerLoading || !workers) {
    return (
      <StyleLastDayUpdate>
        <UpdateHeader>
          <h4>📅 Yesterday&apos;s Activity</h4>
        </UpdateHeader>
        <div
          style={{
            padding: "2rem",
            textAlign: "center",
            color: "var(--color-text-secondary)",
          }}
        >
          Loading updates...
        </div>
      </StyleLastDayUpdate>
    );
  }

  const curDate = new Date();
  curDate.setDate(curDate.getDate() - 1);

  let lastDayWorkerUpdate = [];
  workers.forEach((worker) => {
    if (worker.attendance?.attendanceData?.length > 0) {
      const latestMonth = worker.attendance.attendanceData.at(-1);
      if (latestMonth?.data && Array.isArray(latestMonth.data)) {
        latestMonth.data.forEach((dayData) => {
          const dayDate = new Date(dayData.date);
          if (
            dayDate.getDate() === curDate.getDate() &&
            dayDate.getMonth() === curDate.getMonth() &&
            dayDate.getFullYear() === curDate.getFullYear()
          ) {
            lastDayWorkerUpdate.push({
              worker: worker.name,
              site: worker.currentSite || "Not Assigned",
              data: dayData,
            });
          }
        });
      }
    }
  });

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusDisplay = (status) => {
    switch (status) {
      case "present":
        return "Present";
      case "absent":
        return "Absent";
      case "not_available":
        return "Not Available";
      case "half_day":
        return "Half Day";
      default:
        return status || "Unknown";
    }
  };

  return (
    <StyleLastDayUpdate>
      <UpdateHeader>
        <h4>📅 Yesterday&apos;s Activity</h4>
        <div className="date">{formatDate(curDate)}</div>
      </UpdateHeader>

      {lastDayWorkerUpdate.length === 0 ? (
        <EmptyUpdate>
          <div className="icon">📝</div>
          <div className="message">No activity records found for yesterday</div>
        </EmptyUpdate>
      ) : (
        <UpdateList>
          {lastDayWorkerUpdate.map((update, index) => (
            <UpdateItem key={index}>
              <div className="worker-info">
                <div className="worker-name">{update.worker}</div>
                <AttendanceStatus status={update.data.value}>
                  {getStatusDisplay(update.data.value)}
                </AttendanceStatus>
              </div>
              <div className="worker-details">
                <div className="site-info">
                  <span>🏗️</span>
                  <span>{update.site}</span>
                </div>
                <div className="time-info">
                  {update.data.checkInTime && (
                    <span>⏰ {update.data.checkInTime}</span>
                  )}
                </div>
              </div>
            </UpdateItem>
          ))}
        </UpdateList>
      )}
    </StyleLastDayUpdate>
  );
}

export default LastDayUpdate;
