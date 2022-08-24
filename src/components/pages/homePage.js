import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import FrindesAdd from "../input/frindesAdd";
import Entry from "../entry/entry";
import { userEntry } from "../../context/EntryContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import AddClupPopup from "../input/addClup";
import { userClup } from "../../context/ClupContext";
import "react-loading-skeleton/dist/skeleton.css";
import NavbarButton from "../button/button";

export default function Homepage() {
  const { post } = userEntry();
  const { popup, show } = userClup();
  return (
    <>
      <Navbar />
      <section className="w-full h-full ">
        <FrindesAdd />
        <div className="btn-amnakodugumbuttonu  w-8 h-8">
          <NavbarButton show={popup} name="Entry" />
        </div>
        {show ? <AddClupPopup close={popup} toggle={popup} /> : null}
        <div className="w-auto flex flex-row flex-wrap  code-Ox-m h-auto absolute left-48 m-1">
          <SkeletonTheme
            baseColor="#202020"
            highlightColor="#444"
          ></SkeletonTheme>
          {!post ? (
            <Skeleton count={10} />
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
