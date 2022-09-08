import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { userAuth } from "../../context/AuthContext";
import Cookies from "universal-cookie";
import Navbar from "../navbar/Navbar";
import { toast, ToastContainer } from "react-toastify";

export default function ProfilDetail() {
  const [userData, setUser] = useState({});

  const cookie = new Cookies();

  const { logoutProccsess } = userAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const userId = cookie.get("id");
  const token = cookie.get("acsess_token");
  const getUser = async () => {
    const data = await axios
      .get(`/api/user/profile/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .catch((err) => {
        toast.error(
          "Upps sunucu hata verdi tekrar giriş yap ? Tamam yönlendiriyorum ."
        );
        logoutProccsess();
      });
    const res = Object.assign(data.data.profile[0]);
    setUser(res);
  };
  useEffect(() => {
    if (userId === id) {
      navigate("/profile");
    }
    getUser();
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex relative overflow-auto bg-profile h-full w-full">
        <ToastContainer />
        <div className="relative profile-a12A AtA11">
          <div className="flex w-full flex-col relative">
            <div className="card-bg profile-a12C "></div>
            <div className="profile-image-card">
              <img
                className="rounded-full"
                src="https://scontent.fsaw2-1.fna.fbcdn.net/v/t1.6435-9/70043768_100756527983912_5331784942558904320_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dFgzoTKqOwQAX9934DE&_nc_ht=scontent.fsaw2-1.fna&oh=00_AT8xbx7wwELh-Wej1SlC2wVZmK9X4pIDdIZGs3qGAZ_Qgw&oe=6323F446"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-wrap">
              <div className="text-xl text-bold profile-text"></div>
              <div className="profile-content relative">{userData.content}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
