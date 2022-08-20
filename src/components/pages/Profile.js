import React from "react";
import { userAuth } from "../../context/AuthContext";
import Navbar from "../navbar/Navbar";

export default function Profile(props) {
  const { user } = userAuth;

  return (
    <>
      <Navbar className="atalay" />
      <div className="flex relative overflow-auto   bg-profile h-full w-full">
        <div className="relative md:w-80 md:h-full AtA11">
          <div className="flex flex-col relative">
            <div className="card-bg"></div>
            <div className="profile-image-card">
              <img
                className="rounded-full"
                src="https://scontent.fsaw2-1.fna.fbcdn.net/v/t1.6435-9/70043768_100756527983912_5331784942558904320_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dFgzoTKqOwQAX9934DE&_nc_ht=scontent.fsaw2-1.fna&oh=00_AT8xbx7wwELh-Wej1SlC2wVZmK9X4pIDdIZGs3qGAZ_Qgw&oe=6323F446"
                width={100}
                height={100}
              />
            </div>
            <div className="text-xl text-bold profile-text ">{props.name}</div>
            <div className="profile-content relative"> {props.content} </div>
            {user == undefined ? null : user.map((s) => console.log(s.name))}
          </div>
        </div>
      </div>
    </>
  );
}
