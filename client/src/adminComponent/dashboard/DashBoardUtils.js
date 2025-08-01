export function calclateStats({ workers, vendour, sites }) {
  const dashboardStats = {
    activeSite: 0,
    activeWorker: 0,
    totalRevenue: 0,
    totalVendourExpenses: 0,
    totalWorkerExpenses: 0,
    totalExpenses: 0,
  };
  const curMonth = new Date().getMonth();
  if (sites && Array.isArray(sites)) {
    sites.forEach((site) => {
      if (site.status === "active") {
        dashboardStats.activeSite++;
      }

      // Check if paymentLog exists and is an array before processing
      if (site.paymentLog && Array.isArray(site.paymentLog)) {
        const curMonPaymentLog = site.paymentLog.filter((log) => {
          const logMonth = new Date(log.date).getMonth();

          return logMonth === curMonth;
        });

        const siteRevenue = curMonPaymentLog.reduce((revenue, log) => {
          return revenue + (log.amount || 0);
        }, 0);

        dashboardStats.totalRevenue += siteRevenue;
      }
    });
  }

  // Check if workers exists and is an array
  if (workers && Array.isArray(workers)) {
    workers.forEach((worker) => {
      if (worker.activeStatus === true) {
        dashboardStats.activeWorker++;
      }
      const workerLog = worker.paymentLog.filter((log) => {
        const logMonth = new Date(log.date).getMonth();
        return logMonth === curMonth;
      });
      const workerExpenses = workerLog.reduce(
        (expenses, log) => expenses + log.amount,
        0
      );

      dashboardStats.totalWorkerExpenses += workerExpenses;
    });
  }
  if (vendour && Array.isArray(vendour)) {
    vendour.forEach((vendour) => {
      const curMonTransLog = vendour.transaction.filter((log) => {
        const logMonth = new Date(log.date).getMonth();
        return logMonth === curMonth;
      });
      const vendourExpenses = curMonTransLog.reduce(
        (expenses, trans) => expenses + trans.amount,
        0
      );
      dashboardStats.totalVendourExpenses += vendourExpenses;
    });
  }
  return dashboardStats;
}
