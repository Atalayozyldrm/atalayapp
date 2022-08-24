import React from "react";
import { Link } from "react-router-dom";
import { userAuth } from "../../context/AuthContext";
import { userContent } from "../../context/EditContext";
import ProfileEdit from "../button/ProfileEdit";
import EditProfile from "../input/EditProfile";
import Navbar from "../navbar/Navbar";

export default function Profile() {
  const { user } = userAuth();
  const { edit, show } = userContent();

  return (
    <>
      <Navbar className="atalay" />
      <div className="flex relative overflow-auto bg-profile h-full w-full">
        <Link to="/home" replace>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 relative exit left-36 top-5 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Link>
        <div className="relative profile-a12A AtA11">
          <div className="flex  flex-col relative">
            <div className="card-bg profile-a12C "></div>
            <ProfileEdit show={edit} />
            {show ? <EditProfile show={edit} toggle={edit} /> : null}
            <div className="profile-image-card">
              <img
                className="rounded-full"
                src="https://scontent.fsaw2-1.fna.fbcdn.net/v/t1.6435-9/70043768_100756527983912_5331784942558904320_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dFgzoTKqOwQAX9934DE&_nc_ht=scontent.fsaw2-1.fna&oh=00_AT8xbx7wwELh-Wej1SlC2wVZmK9X4pIDdIZGs3qGAZ_Qgw&oe=6323F446"
                width={100}
                height={100}
              />
            </div>
            <div className="text-xl text-bold profile-text ">{user.name}</div>
            <div className="profile-content relative">
              {" "}
              {!user.content
                ? "Sana benden bir tavisye gel inceldiği yerden kopalım biz"
                : user.content}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
