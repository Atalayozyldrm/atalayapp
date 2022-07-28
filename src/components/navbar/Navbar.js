import React, { useState } from "react";
import NavbarButton from "../button/button";
import { LogoutIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import AddClupPopup from "../input/addClup";
export default function Navbar() {
  const [show, setShow] = useState(null);
  const navigate = useNavigate();

  const popup = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(null);
    }
  };
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="nvbr flex justify-start  flex-col w-28 rounded-4">
      <div className="flex flex-col h-full ml-4 mt-5">
        <NavbarButton name="Profile" />
        <NavbarButton show={popup} name="Külüp" />
        <NavbarButton name="+" />
        <div>{show ? <AddClupPopup close={popup} toggle={popup} /> : null}</div>
      </div>
      <div className="ml-6 mb-4">
        <svg
          onClick={handleLogout}
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 exit w-7 z-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
