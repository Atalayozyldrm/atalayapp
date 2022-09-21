import React from "react";
import Navbar from "../navbar/Navbar";
import FrindesAdd from "../input/frindesAdd.js";
import Entry from "../entry/entry.js";
import { userEntry } from "../../context/EntryContext.js";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import toast, { Toaster } from "react-hot-toast";
import AddClupPopup from "../input/addClup.js";
import { userClup } from "../../context/ClupContext.js";
import "react-loading-skeleton/dist/skeleton.css";
import NavbarButton from "../button/button.js";
import { userAuth } from "../../context/AuthContext";

export default function Homepage() {
  const { post } = userEntry();
  const { popup, show } = userClup();
  const { user } = userAuth();
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
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
                titleClass={"title"}
                className={"entry m-4 slm code-123 amkCardı h-auto"}
                key={a}
                profile={`/profile/${d[1].authorId}`}
                content={d[1].entry}
                procsess={d[1]._id}
                profileImage={d[1].authorImage}
                link={`/entry/${d[1]._id}`}
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
