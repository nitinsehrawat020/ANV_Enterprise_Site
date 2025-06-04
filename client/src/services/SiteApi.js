import SummaryApi from "../common/SummaryApi";
import Axios from "../util/Axios";

export async function registerSite(data) {
  const res = await Axios({
    ...SummaryApi.site.register,
    data: data,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      return error;
    });

  return res;
}
export async function updateWorkProgress({ data, siteId }) {
  const res = await Axios({
    ...SummaryApi.site.updateWorkProgress(siteId),
    data: data,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      return error;
    });
  return res;
}
export async function addInventoryItem({ data, siteId }) {
  const res = await Axios({
    ...SummaryApi.site.addInventoryItem(siteId),
    data: data,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      return error;
    });
  return res;
}

export async function removeInventory({ data, siteId }) {
  const res = await Axios({
    ...SummaryApi.site.removeInventoryItem(siteId),
    data: data,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      return error;
    });
  return res;
}

export async function addPaymentApi({ data, siteId }) {
  const res = await Axios({
    ...SummaryApi.site.addPayment(siteId),
    data: data,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      return error;
    });
  return res;
}

export async function getSiteApi() {
  const res = await Axios({
    ...SummaryApi.site.getSite,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      return error;
    });
  return res;
}
