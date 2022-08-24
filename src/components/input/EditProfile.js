import React, { useState } from "react";
import Cookies from "universal-cookie";
import { userAuth } from "../../context/AuthContext";
import { userContent } from "../../context/EditContext";

export default function EditProfile(props) {
  const [AddVal, setAddValue] = useState(null);
  const [entry, setEntry] = useState(null);

  const { user } = userAuth();

  const cookie = new Cookies();
  const token = cookie.get("acsess_token");

  const popup = () => {
    props.toggle();
  };
  const closePopup = () => {
    props.close();
  };
  // const EditProfileH = () => {
  //   createEdit();
  // };
  return (
    <>
      <div className="w-full  popup-edit absolute flex justify-center aligin-center flex-col pt-5  ">
        <div onClick={popup} className="absolute z-3 top-1 right-3">
          <svg
            onChange={closePopup}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 svg-edit"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="card-bg  code-bg-edit h-full"></div>
        <div className="profile-image-card-edit">
          <img
            className="rounded-full profile-image-card-edit"
            src="https://scontent.fsaw2-1.fna.fbcdn.net/v/t1.6435-9/70043768_100756527983912_5331784942558904320_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dFgzoTKqOwQAX9934DE&_nc_ht=scontent.fsaw2-1.fna&oh=00_AT8xbx7wwELh-Wej1SlC2wVZmK9X4pIDdIZGs3qGAZ_Qgw&oe=6323F446"
            width={100}
            height={100}
          />
          <div className="add none"></div>
        </div>
        <div className="w-full relative clp-main-edit mt-3 p-3 clp-main">
          <input
            type="text"
            className="bg-gray-50 mt-3 border  clpV border-white-300 text-gray-900 text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Açıklama"
          />
          <input
            type="text"
            className="bg-gray-50 mt-3 border  clpV border-white-300 text-gray-900 text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={user.name}
          />
          <div className="social-media-link"></div>
          <button
            // onClick={EditProfileH}
            className="block text-white bg-yellow-200 hover:bg-yellow-400 focus:ring-4 mt-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Kaydet
          </button>
        </div>
      </div>
    </>
  );
}
