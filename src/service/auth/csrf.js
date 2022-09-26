import axios from "axios";
import Cookie from "universal-cookie";

const getCsrf = async () => {
  const client = "/api/";
  const cookie = new Cookie();
  const csrf = cookie.get("_csrf");
  const response = await axios(`${client}api/csrf`, {
    method: "GET",
    withCredentials: true,
    header: {
      "Access-Control-Allow-Origin": "https://atalay.netlify.app/",
      "Access-Control-Allow-Credentials": true,
      mode: "same-origin",
      redirect: "follow",
    },
  });
  axios.defaults.headers.common["X-CSRF-Token"] = csrf;
};
export default getCsrf;
