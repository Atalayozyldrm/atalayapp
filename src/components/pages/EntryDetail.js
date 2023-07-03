import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { userEntry } from "../../context/EntryContext.js";
import Entry from "../entry/entry.js";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "../navbar/Navbar.js";
import EntryComment from "../entry/entryComment.js";
import { userComment } from "../../context/Comment.js";
import CommentForm from "../input/CommentForm.js";
import { userAuth } from "../../context/AuthContext.js";

export default function EntryDetail(props) {
  const { token } = userEntry();
  const { id } = useParams();
  const { user } = userAuth();
  const { popup, show } = userComment();
  const [entry, setEntry] = useState({});
  const [comment, setComment] = useState([]);
  const [load, setLoad] = useState(false);

  const coomentUser = async () => {
    const atalay = axios
      .get(`/entry/entry/reply/${id}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setLoad(true);
        if (res.data.message === "[]") return setLoad(false);
        setLoad(true);
        const data = Object.entries(res.data.message);
        setComment(data);
      })
      .catch((err) => console.log(err));
  };
  console.log(comment);
  const getEntry = async () => {
    const d = await axios
      .get(`/entry/${id}`, {
        headers: { Authorization: token },
      })
      .then((atalay) => {
        coomentUser();
        setEntry(atalay.data.entry[0]);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getEntry();
  }, []);
  return (
    <>
      <div className="bg-profile w-full overflow-hidden  md:bg-blend-darken relative">
        <Navbar />
        <Link to="/home" replace>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 relative z-1 exit left-36 top-5 cursor-pointer"
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
        <section className="w-auto flex flex-col flex-wrap code-Ox-m h-auto  mt-3 ">
          {show ? (
            <CommentForm popup={popup} author={user.name} toggle={popup} />
          ) : null}
          <div className="text-white flex flex-col  m-auto">
            {!entry ? (
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton count={5} />
              </SkeletonTheme>
            ) : (
              <Entry
                titleClass={"title-2"}
                className={
                  "bg-[#36393f] justify-center   top-10 p-18 relative sm:p-0 md:w-full code-124 algin-center  flex-col h-auto flex"
                }
                cardCss={"h-full  flex flex-col w-full"}
                // profileImage={entry.profile_image}
                title={entry.title}
                content={entry.entry}
                author={entry.author}
              />
            )}
          </div>
        </section>
        <p className="text-xl flex justify-center relative top-24 text-white">
          {comment.length === 0 ? null : "#Yorumlar"}
        </p>
        <div className="mt-9 relative m-auto  amınakodugumunkartı justify-center algin-center flex flex-row relative right-4.5 flex-wrap h-auto">
          {!load
            ? null
            : comment.map((d, a) => (
                <EntryComment
                  titleClass={"title-2"}
                  className={
                    "comment mt-36 justify-center algin-center sm:flex-col amkCardı md:flex-col h-auto flex"
                  }
                  key={a}
                  // profileImage={d[1].profile_image}
                  link={`/profile/${d[1].authorId}`}
                  content={d[1].content}
                  author={d[1].name}
                />
              ))}
        </div>
      </div>
    </>
  );
}
