import axios from "axios";

const getCsrf = async () => {
  const client = "https://atalayapp.herokuapp.com/";

  const API = axios.create({
    baseURL: "https://atalayapp.herokuapp.com/",
    withCredentials: true,
  });
  const response = await axios(`${client}api/csrf`, {
    method: "GET",
    header: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      mode: "same-origin",
      redirect: "follow",
      withCredentials: true,
    },
  });
  axios.defaults.headers.common["X-CSRF-Token"] = response.data.csrf;
};
export default getCsrf;
