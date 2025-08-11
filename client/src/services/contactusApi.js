import SummaryApi from "../common/SummaryApi";
import Axios from "../util/Axios";

export async function submitContactusFormApi(data) {
  const res = await Axios({
    ...SummaryApi.contactUs.submitForm,
    data: data,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);

      return err;
    });
  return res.data;
}
