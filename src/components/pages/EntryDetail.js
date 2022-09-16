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

export default function EntryDetail(props) {
  const { token } = userEntry();
  const { id } = useParams();
  const [entry, setEntry] = useState({});
  const [comment, setComment] = useState([]);
  const [load, setLoad] = useState(false);

  const coomentUser = async () => {
    const atalay = axios
      .get(`/api/entry/entry/reply/${id}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setLoad(true);
        if (res.data.message === "[]") return setLoad(false);
        setLoad(true);
        const data = Object.entries(res.data.message);
        setComment(data);
        console.log(res.data.message);
      })
      .catch((err) => console.log(err));
  };
  const getEntry = async () => {
    const d = await axios
      .get(`/api/entry/${id}`, {
        headers: { Authorization: token },
      })
      .then((atalay) => {
        coomentUser();
        setEntry(atalay.data.entry[0]);
      })
      .catch((err) => console.log(err));
  };
  console.log(entry);
  useEffect(() => {
    getEntry();
  }, []);
  return (
    <>
      <div className="bg-profile">
        <Navbar />
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
        <section className="w-full flex flex-col flex-wrap  code-Ox-m h-auto absolute mt-10 m-auto">
          <div className="text-white m-auto">
            {!entry ? (
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton count={5} />
              </SkeletonTheme>
            ) : (
              <Entry
                titleClass={"title-2"}
                className={"code-124 entry h-auto flex"}
                cardCss={"h-full md w-full"}
                title={entry.title}
                content={entry.entry}
                author={entry.author}
              />
            )}
          </div>
          <div className="m-auto mt-9 flex flex-row  flex-wrap h-auto">
            {!load
              ? null
              : comment.map((d, a) => (
                  <EntryComment
                    titleClass={"title-2"}
                    className={"comment mt-36  h-auto flex"}
                    key={a}
                    content={"What dedin gülüm"}
                    author={"Atalay Özyıldırım"}
                  />
                ))}
          </div>
        </section>
      </div>
    </>
  );
}
