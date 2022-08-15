import axios from "axios";
import React, { useState } from "react";
import { userClup } from "../../context/ClupContext"
import Cookies from "universal-cookie";
import {userAuth} from "../../context/AuthContext"

export default function AddClupPopup(props) {
  const { createClup } = userClup();
  const {user} = userAuth()
  const [AddVal, setAddValue] = useState(null);
  const [entry,setEntry] = useState(null)
  
  const cookie = new Cookies()
  const token = cookie.get("acsess_token")
  const popup = () => {
    props.toggle();
  };
  const closePopup = () => {
    props.close();
  };
  const entryValue = (e) => {
    setEntry(e.target.value)
  }
  const post = () => {
      axios("/api/entry/add",{
        method : "POST",
        headers : {
          "Authorization" : token,
        },
        data : {
          entry : {
            title : AddVal,
            entry : entry,
            author : "Atalay"
          }
        }
      })
      console.log(user)
  } 
  const addClupValue = (e) => {
    setAddValue(e.target.value);
  };
  const addClupValueHook = () => {
    createClup(AddVal);
    post()
    closePopup();
  };
  return (
    <>
      <div className="w-96 h-56 popup absolute flex justify-center aligin-center flex-col pt-5  ">
        <div onClick={popup} className="absolute z-3 top-4 right-5">
          <svg
            onClick={closePopup}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="w-80 mt-3 clp-main">
          <input
            onChange={addClupValue}
            type="text"
            className="bg-gray-50 mt-3 border clpV border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="#hasthag  😎 ?"
          />
          <textarea
            onChange={entryValue}
            type="text"
            className="bg-gray-50 border clpV border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Entry'ni gir de sosyal alem entry görsün 🚀 "
          />
          <button
            onClick={addClupValueHook}
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Oluştur 🚀
          </button>
        </div>
      </div>
    </>
  );
}
