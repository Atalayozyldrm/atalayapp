import React from "react";
import { HiOutlineHeart } from "react-icons/hi";

export default function EntryComment(props) {
  return (
    <>
      <div className="code-125 entry h-auto flex flex-col ml-5 justify-center w-80 h-64 bg-[#36393f] text-white mt-2 rounded-xl p-5 ">
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
        <div className="text-base pavyon flex justify-start w-full  p-2 flex-wrap ml-5 mt-4">
          {props.content}
        </div>
        <div className="relative flex flex-row justify-end mr-6 cursor-pointer">
          <HiOutlineHeart />
        </div>
      </div>
    </>
  );
}
