import SummaryApi from "../common/SummaryApi";
import Axios from "../util/Axios";

export async function getVendoursApi() {
  const res = await Axios({ ...SummaryApi.vendour.getVendours })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return err;
    });
  return res;
}

export async function addVendourApi({ data }) {
  const res = await Axios({ ...SummaryApi.vendour.addVendours, data: data })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export async function updatePaymentApi({ data, vendourId }) {
  const res = await Axios({
    ...SummaryApi.vendour.updatePayment(vendourId),
    data,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export async function updatetransaction({ data, vendourId }) {
  const res = await Axios({
    ...SummaryApi.vendour.updateTransaction(vendourId),
    data,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
