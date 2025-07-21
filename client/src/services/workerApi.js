import toast from "react-hot-toast";
import SummaryApi from "../common/SummaryApi";
import Axios from "../util/Axios";

export async function getWorkerApi() {
  const res = await Axios({ ...SummaryApi.worker.getWorker })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      toast.error(err?.response?.data?.message);
    });
  return res.data.data;
}

export async function updateWorkerAttendance({ data }) {
  const res = await Axios({ ...SummaryApi.worker.markAttendance, data: data })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
  return res.data.data;
}

export async function updateWedesdayPaymentApi({ data }) {
  const res = await Axios({
    ...SummaryApi.worker.updateWednesdayPayment,
    data: data,
  })
    .then((res) => {
      console.log(res);

      return res.data;
    })
    .catch((err) => {
      return err;
    });
  return res;
}
export async function updateWorkerPaymentApi({ data }) {
  const res = await Axios({
    ...SummaryApi.worker.updatepayment,
    data: data,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
  return res;
}
