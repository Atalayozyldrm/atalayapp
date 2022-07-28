import axios from "axios";

const getCsrf = async () => {
  const response = await axios.get('/api/csrf');
  axios.defaults.headers.common['X-CSRF-Token'] = response.data.csrf;

};
export default getCsrf;
