import axios from "axios";

const getCsrf = async () => {
  const client = "https://atalayapp.herokuapp.com/";

  const response = await axios.get(`${client}api/csrf`, {
    header: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      withCredentials: true,
    },
  });
  axios.defaults.headers.common["X-CSRF-Token"] = response.data.csrf;
};
export default getCsrf;
