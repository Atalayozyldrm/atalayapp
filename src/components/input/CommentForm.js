import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Cookie from "universal-cookie";
import axios from "axios";
import { userAuth } from "../../context/AuthContext";

export default function CommentForm(props) {
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = userAuth();

  const cookie = new Cookie();
  const token = cookie.get("acsess_token");

  const close = () => {
    props.close();
  };

  const popup = () => {
    props.popup();
  };

  const sendRequest = async () => {
    await axios(`/entry/reply`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Access-Control-Allow-Origin": "",
        "Access-Control-Allow-Credentials": true,
        withCredentials: true,
      },
      data: {
        replyUser: {
          authorId: user._id,
          entryId: id,
          replyId: Math.floor(Math.random() * 10),
          name: user.name,
          content: comment,
          token: token,
        },
      },
    });
    navigate(0);
  };

  const get = async () => {
    const response = await axios.get(`/csrf`, {
      header: {
        Authorization: token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        mode: "same-origin",
        redirect: "follow",
        withCredentials: true,
      },
    });
    axios.defaults.headers.common["X-CSRF-Token"] = response.data.csrf;
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <>
      <div className="w-full absolute h-full bg-transp-1"></div>
      <div className="w-96  h-56 popup code-0x2 absolute flex justify-center aligin-center flex-col pt-5  ">
        <div onClick={popup} className="absolute z-3 top-4 right-5">
          <svg
            onChange={close}
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
          <span className="text-white">{props.author}</span>
          <textarea
            onChange={(e) => setComment(e.target.value)}
            type="text"
            className="p-5 code-Entry w-96 h-36 mt-4 rounded-xs"
            placeholder="Yorum yap"
          />
          <button
            onClick={sendRequest}
            className="block text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Yorumla
          </button>
        </div>
      </div>
    </>
  );
}
