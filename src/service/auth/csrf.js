import axios from "axios";
const URI = "http://localhost:5500/api/csrf/";

const getCsrf = async () => {
  const res = await axios.get(URI);
  const token = res.data.csrf;
  console.log(token);
  localStorage.setItem("X-CSRF-TOKEN", token);
};
export default getCsrf;
