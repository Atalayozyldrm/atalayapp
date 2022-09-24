import axios from "axios";

const getCsrf = async () => {
  const client = "https://atalayapp.herokuapp.com/";

  const response = await axios.get(`${client}api/csrf`);
  axios.defaults.headers.common["X-CSRF-Token"] = response.data.csrf;
};
export default getCsrf;
