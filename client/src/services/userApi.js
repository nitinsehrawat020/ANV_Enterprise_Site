import toast from "react-hot-toast";
import SummaryApi from "../common/SummaryApi";
import Axios from "../util/Axios";

export async function registerUserApi(data) {
  try {
    await Axios({ ...SummaryApi.register, data: data })
      .then(() => {
        toast.success("user register");
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);

        throw new Error(err);
      });
  } catch (error) {
    throw new Error(error);
  }
}

export async function loginApi({ email, password }) {
  const res = await Axios({
    ...SummaryApi.login,
    data: { email, password },
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
  return res;
}

export async function forgotPasswordApi({ email }) {
  const res = await Axios({
    ...SummaryApi.password,
    data: { email },
  })
    .then((res) => {
      toast.success(res.data.message);
      return res;
    })
    .catch((error) => {
      toast.error(error);
      throw error;
    });

  return res;
}

export async function submitOtpApi({ email, otp }) {
  const res = await Axios({
    ...SummaryApi.submitOtp,
    data: { email, otp },
  })
    .then((res) => {
      toast.success(res.data.message);
      return res;
    })
    .catch((error) => {
      throw error;
    });
  return res;
}

export async function ResetPasswordApi({
  email,
  newPassword,
  confirmedNewPassword,
}) {
  const res = Axios({
    ...SummaryApi.resetPassword,
    data: { email, newPassword, confirmedNewPassword },
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });
  return res;
}

export async function getCurrentUser() {
  const res = await Axios({
    ...SummaryApi.getUser,
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });

  return res.data.data;
}

export async function logoutUser() {
  const res = await Axios({
    ...SummaryApi.Logout,
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });

  return res.data.data;
}
