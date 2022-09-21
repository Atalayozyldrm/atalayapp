import Cookie from "universal-cookie";
import toast, { Toaster } from "react-hot-toast";
const cookie = new Cookie();

const LogoutProccsess = () => {
  cookie.remove("acsess_token");
  cookie.remove("google_acsess_token");
  cookie.remove("id");
  toast.error("Bir hata  ile karşılaşıldı. Çıkış yapılıyor...");
  setTimeout(() => {
    window.location.href = "/";
  }, 1000);
};

export default LogoutProccsess;
