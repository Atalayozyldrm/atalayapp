import axios from "axios";
import React, { useState } from "react";
import { userClup } from "../../context/ClupContext";
import Cookies from "universal-cookie";
import { userAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import anime from "animejs";

export default function AddClupPopup(props) {
  const { createClup } = userClup();
  const { user } = userAuth();
  const [AddVal, setAddValue] = useState(null);
  const [entry, setEntry] = useState(null);

  const cookie = new Cookies();
  const token = cookie.get("acsess_token");
  const popup = () => {
    props.toggle();
  };
  const closePopup = () => {
    props.close();
  };
  const entryValue = (e) => {
    setEntry(e.target.value);
  };
  const post = () => {
    axios("/api/entry/add", {
      method: "POST",
      headers: {
        Authorization: token,
      },
      data: {
        entry: {
          title: AddVal,
          entry: entry,
          author: user.name,
          authorId: user._id,
        },
      },
    })
      .then((res) => toast("Entryy yolllandııııı oleeeeyy 🚀"))
      .catch((err) => toast("Hata ile karşılaşıldı  tekrar dene 🤔"));
    console.log(user);
  };
  const addClupValue = (e) => {
    setAddValue(e.target.value);
  };
  const addClupValueHook = () => {
    createClup(AddVal);
    post();
    closePopup();
  };
  return (
    <>
      <div className="w-full absolute h-full bg-transp-1"></div>

      <div className="w-96  h-56 popup code-0x2 absolute flex justify-center aligin-center flex-col pt-5  ">
        <div onClick={popup} className="absolute z-3 top-4 right-5">
          <svg
            onChange={closePopup}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="w-96 mt-4 clp-main">
          <input
            onChange={addClupValue}
            className="p-5 code-Entry w-96 mt-4 rounded-xs shadow-xl"
            type="text"
            placeholder="#hasthag  😎 ?"
          />
          <textarea
            onChange={entryValue}
            type="text"
            className="p-5 code-Entry w-96 h-36 mt-4 rounded-xs"
            placeholder="Entry'ni gir de sosyal alem entry görsün 🚀 "
          />
          <button
            onClick={addClupValueHook}
            className="block text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Gönder 🚀
          </button>
        </div>
      </div>
    </>
  );
}
