import SummaryApi from "../common/SummaryApi";
import Axios from "../util/Axios";

export async function getFavDesign() {
  const res = await Axios({
    ...SummaryApi.design.getUserFavDesign,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
  return res;
}

export async function FalseCeildesignApi() {
  const res = await Axios({
    ...SummaryApi.design.getAllFalseCeilDesign,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      throw error;
    });
  return res;
}
export async function moldingDesignApi() {
  const res = await Axios({
    ...SummaryApi.design.getAllMoldingDesign,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });

  return res;
}

export async function addFavDesignApi(designId) {
  const res = await Axios({
    ...SummaryApi.design.addFavDesign(designId),
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
  return res;
}

export async function removeFavDesignApi(designId) {
  const res = await Axios({
    ...SummaryApi.design.removeFavDesign(designId),
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
  return res;
}
