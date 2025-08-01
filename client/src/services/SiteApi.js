import SummaryApi from "../common/SummaryApi";
import Axios from "../util/Axios";

export async function registerSite({ data }) {
  const res = await Axios({
    ...SummaryApi.site.register,
    data: data,
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });

  return res;
}
export async function updateWorkProgressApi({ data, siteId }) {
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
      return res.data;
    })
    .catch((error) => {
      return error;
    });
  return res;
}
export async function updateInventoryItem({ data, siteId }) {
  const res = await Axios({
    ...SummaryApi.site.updateInventoryItem,
  });
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

export async function deleteSiteApi(siteId) {
  const res = await Axios({
    ...SummaryApi.site.deleteSite(siteId),
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
  return res;
}
