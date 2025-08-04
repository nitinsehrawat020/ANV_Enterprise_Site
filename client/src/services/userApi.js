import toast from "react-hot-toast";
import SummaryApi from "../common/SummaryApi";
import Axios from "../util/Axios";

export async function registerUserApi(data) {
  const res = await Axios({ ...SummaryApi.user.register, data: data })
    .then((res) => {
      toast.success("user register");
      console.log(res);
      return res.data.data;
    })
    .catch((err) => {
      toast.error(err?.response?.data?.message);

      throw err;
    });
  return res.data.data;
}

export async function loginApi({ email, password }) {
  const res = await Axios({
    ...SummaryApi.user.login,
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
    ...SummaryApi.user.password,
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
    ...SummaryApi.user.submitOtp,
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
    ...SummaryApi.user.resetPassword,
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
    ...SummaryApi.user.getUser,
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
    ...SummaryApi.user.Logout,
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });

  return res.data.data;
}

export async function changeAvatarApi(data) {
  if (!(data instanceof File)) {
    console.log("issue");
  }

  const formData = new FormData();

  formData.append("avatar", data);

  const res = await Axios({
    ...SummaryApi.user.changeAvatar,
    data: formData,
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });

  return res.data.data;
}

export async function updateUserApi({ data }) {
  const res = await Axios({
    ...SummaryApi.user.updateUser,
    data: data,
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });

  return res.data.data;
}
export async function changePasswordApi(data) {
  const res = await Axios({
    ...SummaryApi.user.changePassword,
    data: data,
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });

  return res.data.data;
}
