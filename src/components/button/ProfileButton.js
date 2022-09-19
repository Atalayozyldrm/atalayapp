import React from "react";
import { userAuth } from "../../context/AuthContext";

export default function ProfileButton() {
  const { user } = userAuth();
  return (
    <div className="nvbr-btns mt-3 flex flex-col w-14 aligin-center justify-center items-center h-14 rounded-xl">
      {!user.profile_image ? null : (
        <img
          className="rounded-xl w-full h-full"
          src={user.profile_image}
          height={50}
          width={50}
          alt="profile"
        />
      )}
    </div>
  );
}
