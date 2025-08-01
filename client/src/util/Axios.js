import axios from "axios";
import SummaryApi, { BASE_URL } from "../common/SummaryApi";

const Axios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

Axios.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error);

    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");

        if (!refreshToken) {
          // No refresh token, clear auth and reject original error
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          return Promise.reject(error);
        }

        const newAccessToken = await refreshAccessToken(refreshToken);

        if (newAccessToken) {
          // Update header and retry original request
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return Axios(originalRequest);
        } else {
          // Refresh failed, clear auth and reject original error
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          return Promise.reject(error);
        }
      } catch (refreshError) {
        // Refresh failed, clear auth and reject original error
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        return Promise.reject(refreshError);
      }
    }

    // For all other errors (including non-401), pass through unchanged
    return Promise.reject(error);
  }
);

const refreshAccessToken = async (refreshToken) => {
  try {
    // Use base axios to avoid interceptor loops
    const res = await axios({
      url: `${BASE_URL}${SummaryApi.user.refreshToken.url}`,
      method: SummaryApi.user.refreshToken.method,
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
      withCredentials: true,
    });

    const accessToken = res.data.data.accessToken;
    localStorage.setItem("accessToken", accessToken);
    return accessToken;
  } catch (error) {
    console.log("Token refresh failed:", error);
    return null; // Return null instead of rejecting
  }
};

export default Axios;
