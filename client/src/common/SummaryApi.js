export const BASE_URL = "http://localhost:5000";

const SummaryApi = {
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
  getWorker: {
    url: "api/worker/getWorker/681909a9e429bc250e2c4fa5",
    method: "post",
  },

  getDesign: {
    url: "/api/design/get-all-designs",
    method: "get",
  },
};

export default SummaryApi;
