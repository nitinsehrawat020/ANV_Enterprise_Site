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

export async function addWorkerApi({ data }) {
  try {
    const config = {
      ...SummaryApi.worker.addWorker,
      data: data,
    };

    // When sending FormData, don't set Content-Type header
    // Let the browser set it automatically with the boundary
    if (data instanceof FormData) {
      // Remove any existing Content-Type header to let browser handle it
      if (config.headers) {
        delete config.headers["Content-Type"];
      }
    }

    console.log("Sending request with config:", config);
    const res = await Axios(config);
    return res.data;
  } catch (err) {
    console.error("API Error:", err.response?.data || err.message);
    throw err;
  }
}
