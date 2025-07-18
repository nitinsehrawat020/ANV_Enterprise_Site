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
