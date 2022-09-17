import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";

export default function EntryComment(props) {
  return (
    <>
      <div className="entry h-auto flex w-56   relative flex-col ml-5 border-2  border-white justify-center  h-64 bg-[#36393f] text-white mt-2 rounded-xl p-5 ">
        <div className={props.titleClass}>
          <a
            href={props.link}
            data-key={props.procsess}
            className="text-xl"
            rel="noopenner"
          >
            {props.author}
          </a>
        </div>
        <div className="text-base pavyon flex  justify-start w-full  p-2 flex-wrap ml-5 mt-4">
          {props.content}
        </div>
        <div className="relative flex flex-row justify-end mr-6 cursor-pointer">
          <FcLikePlaceholder />
        </div>
      </div>
    </>
  );
}
