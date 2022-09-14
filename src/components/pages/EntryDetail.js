import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { userEntry } from "../../context/EntryContext.js";
import Entry from "../entry/entry.js";
import Navbar from "../navbar/Navbar.js";

export default function EntryDetail(props) {
  const { token } = userEntry();
  const { id } = useParams();
  const [entry, setEntry] = useState({});

  const getEntry = async () => {
    const d = await axios.get(`/api/entry/${id}`, {
      headers: { Authorization: token },
    });

    setEntry(d.data.entry[0]);
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
        <div className="flex justify-center align-center ">
          <div className="text-white">
            <Entry
              titleClass={"title-2"}
              className={"code-124 entry h-auto flex"}
              cardCss={"h-full md w-full"}
              title={entry.title}
              content={entry.entry}
              author={entry.author}
            />
          </div>
        </div>
      </div>
    </>
  );
}
