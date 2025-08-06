export const BASE_URL =
  import.meta.env.VITE_SERVER_URL || "http://localhost:5000";

const SummaryApi = {
  user: {
    register: {
      url: "/api/user/register-user",
      method: "post",
    },
    login: {
      url: "/api/user/login",
      method: "post",
    },
    Logout: {
      url: "/api/user/logout",
      method: "get",
    },
    password: {
      url: "/api/user/forget-password",
      method: "put",
    },
    submitOtp: {
      url: "/api/user/verify-forget-password-otp",
      method: "put",
    },
    resetPassword: {
      url: "/api/user/reset-password",
      method: "put",
    },
    refreshToken: {
      url: "/api/user/refresh-token",
      method: "post",
    },
    getUser: {
      url: "/api/user/userInfo",
      method: "get",
    },
    changeAvatar: {
      url: "/api/user/upload-avatar",
      method: "put",
    },
    updateUser: {
      url: "/api/user/update-user",
      method: "put",
    },
    changePassword: {
      url: "/api/user/changePassword",
      method: "put",
    },
  },
  design: {
    getAllDesign: {
      url: "/api/design/get-all-designs",
      method: "get",
    },
    getAllMoldingDesign: {
      url: "/api/design/get-molding-designs",
      method: "get",
    },
    getAllFalseCeilDesign: {
      url: "/api/design/get-false-ceil-designs",
      method: "get",
    },
    getDesignDetails: (designId) => ({
      url: `/api/design/get-design-detail/${designId}`,
      method: "put",
    }),
    getUserFavDesign: {
      url: "/api/user/favDesign",
      method: "get",
    },
    addFavDesign: (designId) => ({
      url: `/api/user/add-to-fav/${designId}`,
      method: "post",
    }),
    removeFavDesign: (designId) => ({
      url: `/api/user/remove-from-fav/${designId}`,
      method: "post",
    }),
    addDesign: {
      url: "/api/design/add-design",
      method: "post",
    },
    deleteDesign: (designId) => ({
      url: `/api/design/delete-design/${designId}`,
      method: "delete",
    }),
  },
  site: {
    register: {
      url: "/api/site/register-site",
      method: "post",
    },
    updateWorkProgress: (siteId) => ({
      url: `/api/site/update-work-progress/${siteId}`,
      method: "post",
    }),
    addInventoryItem: (siteId) => ({
      url: `/api/site/add-item-to-inventory/${siteId}`,
      method: "post",
    }),
    UpdateInventoryItem: (siteId) => ({
      url: `/api/site/update-inventory-item/${siteId}`,
      method: "post",
    }),
    removeInventoryItem: (siteId) => ({
      url: `/api/site/remove-item-from-inventory/${siteId}`,
      method: "post",
    }),
    addPayment: (siteId) => ({
      url: `/api/site/add-payment-log/${siteId}`,
      method: "post",
    }),
    getSite: {
      url: "/api/site/get-sites",
      method: "get",
    },
    addSite: {
      url: "/api/site/register-site",
      method: "post",
    },
    deleteSite: (siteId) => ({
      url: `/api/site/delete-site/${siteId}`,
      method: "delete",
    }),
  },
  worker: {
    getWorker: {
      url: "api/worker/getAllWorker",
      method: "get",
    },
    markAttendance: {
      url: "/api/worker/mark-attendance",
      method: "put",
    },
    updateWednesdayPayment: {
      url: "/api/worker/update-wednesday-payment",
      method: "put",
    },
    updatepayment: {
      url: "/api/worker/update-payment",
      method: "put",
    },
    addWorker: {
      url: "/api/worker/add-worker",
      method: "post",
    },
  },
  vendour: {
    getVendours: {
      url: "api/vendour/get-vendour",
      method: "get",
    },
    addVendours: {
      url: "api/vendour/add-vendour",
      method: "post",
    },

    updateTransaction: (vendourId) => ({
      url: `api/vendour/update-transaction/${vendourId}`,
      method: "put",
    }),
    updateHistoryPayment: (vendourId) => ({
      url: `api/vendour/update-paymentHistory/${vendourId}`,
      method: "put",
    }),
    deleteVendour: (vendourId) => ({
      url: `api/vendour/delete-vendour/${vendourId}`,
      method: "delete",
    }),
  },
};

export default SummaryApi;
