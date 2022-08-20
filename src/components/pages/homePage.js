import React from "react";
import Navbar from "../navbar/Navbar";
import FrindesAdd from "../input/frindesAdd";
import Entry from "../entry/entry";
import Profile from "../pages/Profile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { userEntry } from "../../context/EntryContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Homepage() {
  const { post } = userEntry();
  return (
    <>
      <Navbar />
      <section className="w-full h-full ">
        <FrindesAdd />
        <div className="w-auto flex flex-row flex-wrap  h-auto absolute left-48 m-1">
          {!post ? (
            <Skeleton />
          ) : (
            post.map((d, a) => (
              <Entry
                key={a}
                link={d[1]._id}
                author={d[1].author}
                title={d[1].title}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
}
