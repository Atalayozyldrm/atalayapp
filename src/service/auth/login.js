import axios from "axios";

const loginT = (data, token) => {
  const URI = `http://localhost:5500/api/token/${token}`;
  const csrf_token = localStorage.getItem("X-CSRF-TOKEN");
  axios.defaults.headers.common["X-CSRF-TOKEN"] = csrf_token;
  axios(URI, {
    method: "post",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
export default loginT;
