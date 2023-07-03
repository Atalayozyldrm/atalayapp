import axios from "axios";
import Cookie from "universal-cookie";

const getCsrf = async () => {
  const cookie = new Cookie();
  const response = await axios(`/csrf`, {
    method: "GET",
    withCredentials: true,
    header: {
      "Access-Control-Allow-Origin": "",
      "Access-Control-Allow-Credentials": true,
      mode: "same-origin",
      redirect: "follow",
    },
  });
  axios.defaults.headers.common["X-CSRF-Token"] = response.data.csrf;
};
export default getCsrf;
