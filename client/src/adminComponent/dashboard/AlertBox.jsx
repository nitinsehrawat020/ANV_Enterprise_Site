import { useMemo } from "react";
import { useWorker } from "../../hooks/useWorker";
import {
  StyleAlertBox,
  AlertHeader,
  AlertBadge,
  AlertList,
  AlertItem,
  AlertIcon,
  EmptyAlert,
} from "./styleDashboard";
import { useGetVendour } from "../../hooks/useVendour";
import { capitalizeFirstLetter } from "../../util/helper";

function AlertBox() {
  const { workers, isLoading: isWorkerLoading } = useWorker();
  const { vendour: vendours, isVendourLoading } = useGetVendour();

  const alert = useMemo(() => {
    if (!workers || !vendours) return [];

    const curDate = new Date().getDate();
    const curMonth = new Date().getMonth();
    const utilVariable = {
      notAvaibleWorkerCount: 0,
      paymentWorkerCount: 0,
      noMonthlyPaymentWorker: 0,
    };
    const AlertMessage = [];

    for (const worker of workers) {
      let consecutiiveNotAvaible = 0;

      if (worker.attendance?.attendanceData) {
        worker.attendance.attendanceData.forEach((monthData) => {
          if (monthData.data && Array.isArray(monthData.data)) {
            monthData.data.forEach((dayData) => {
              if (dayData.value === "not_available") {
                consecutiiveNotAvaible++;
              }
            });
          }
        });
      }
      if (consecutiiveNotAvaible > 5) {
        utilVariable.notAvaibleWorkerCount++;
      }

      if (worker.payment?.totalSalary > 30000) {
        utilVariable.paymentWorkerCount++;
      }

      if (curDate > 18) {
        const hasCurrentMonthPayment = worker.paymentLog?.some((payment) => {
          const paymentDate = new Date(payment.date);
          return (
            paymentDate.getMonth() === curMonth &&
            payment.paymentFor === "salary"
          );
        });
        if (!hasCurrentMonthPayment) {
          utilVariable.noMonthlyPaymentWorker++;
        }
      }
    }

    if (utilVariable.notAvaibleWorkerCount > 0) {
      AlertMessage.push({
        type: "urgent",
        icon: "⚠️",
        message: `${utilVariable.notAvaibleWorkerCount} worker${
          utilVariable.notAvaibleWorkerCount > 1 ? "s" : ""
        } attendance has been pending for last 5 days. Kindly fill their attendance.`,
      });
    }

    if (utilVariable.paymentWorkerCount > 0) {
      AlertMessage.push({
        type: "warning",
        icon: "💰",
        message: `${utilVariable.paymentWorkerCount} worker${
          utilVariable.paymentWorkerCount > 1 ? "s" : ""
        } payment has increased over ₹30,000.`,
      });
    }

    if (utilVariable.noMonthlyPaymentWorker > 0) {
      AlertMessage.push({
        type: "urgent",
        icon: "💸",
        message: `${utilVariable.noMonthlyPaymentWorker} worker${
          utilVariable.noMonthlyPaymentWorker > 1 ? "s" : ""
        } monthly payment hasn't been paid yet.`,
      });
    }

    for (const vendour of vendours) {
      if (vendour.payment?.totalBalance > 150000) {
        AlertMessage.push({
          type: "warning",
          icon: "🏪",
          message: `${capitalizeFirstLetter(
            vendour.name
          )} payment amount has exceeded ₹1,50,000. Kindly make payment.`,
        });
      }
    }

    return AlertMessage;
  }, [workers, vendours]);

  return (
    <StyleAlertBox>
      <AlertHeader>
        <h4>🔔 Important Notifications</h4>
        <AlertBadge>{alert.length}</AlertBadge>
      </AlertHeader>

      {alert.length === 0 ? (
        <EmptyAlert>
          <div className="icon">✅</div>
          <div className="message">All systems running smoothly!</div>
        </EmptyAlert>
      ) : (
        <AlertList>
          {alert.map((alertItem, index) => (
            <AlertItem key={index}>
              <AlertIcon>{alertItem.icon}</AlertIcon>
              {alertItem.message}
            </AlertItem>
          ))}
        </AlertList>
      )}
    </StyleAlertBox>
  );
}

export default AlertBox;
