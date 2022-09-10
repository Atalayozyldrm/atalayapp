import Cookie from "universal-cookie";
import { toast } from "react-toastify";
const cookie = new Cookie();

const LogoutProccsess = () => {
  cookie.remove("acsess_token");
  cookie.remove("id");
  toast.error("Çok fazla istek yapıldı. Çıkış yapılıyor  !");
  setTimeout(() => {
    window.location.href = "/";
  }, 1000);
};

export default LogoutProccsess;
