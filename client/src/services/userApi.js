import toast from "react-hot-toast";
import SummaryApi from "../common/SummaryApi";
import Axios from "../util/Axios";

export async function registerUserApi(data) {
  try {
    await Axios({ ...SummaryApi.register, data: data })
      .then((res) => {
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
  try {
    const res = await Axios({
      ...SummaryApi.login,
      data: { email, password },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);

        throw new Error("user cannot login");
      });
    return res;
  } catch (error) {
    console.log(error);

    throw new Error("user cannot login");
  }
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
      console.log(error);
      toast.error(error?.message || "issue in userApi");
    });

  return res;
}

export async function submitOtpApi({ email, otp }) {
  try {
    const res = await Axios({
      ...SummaryApi.submitOtp,
      data: { email, otp },
    })
      .then((res) => {
        toast.success(res.data.message);
        return res;
      })
      .catch((error) => {
        toast.error(error.response.data.message || "issue in submitOtpApi");
      });
    return res;
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
}

export async function ResetPasswordApi({
  email,
  newPassword,
  confirmedNewPassword,
}) {
  try {
    const res = Axios({
      ...SummaryApi.resetPassword,
      data: { email, newPassword, confirmedNewPassword },
    })
      .then((res) => {
        toast.success(res.data.message);
        return res;
      })
      .catch((error) => {
        toast.error(error.response.data.message || "issue in submitOtpApi");
      });
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
}
