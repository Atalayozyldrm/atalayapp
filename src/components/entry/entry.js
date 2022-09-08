import React from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Entry(props) {
  return (
    <>
      <div className="entry m-4 slm code-123  code-0x1 h-auto">
        <div className="w-full h-auto">
          <a
            href={props.link}
            data-key={props.procsess}
            className="text-xl"
            rel="noopenner"
          >
            #{props.title}
          </a>
        </div>
        <div className="text-base ml-5 mt-4">{props.content}</div>
        <div className="relative flex flex-row justify-end  cursor-pointer">
          <HiOutlineHeart />
        </div>
        <div className="w-full OxA-mobile h-auto flex relative top-14">
          <div className="img w-8 rounded-full mr-2">
            <img
              className="rounded-full image-card"
              src="https://scontent.fsaw2-1.fna.fbcdn.net/v/t1.6435-9/70043768_100756527983912_5331784942558904320_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dFgzoTKqOwQAX9934DE&_nc_ht=scontent.fsaw2-1.fna&oh=00_AT8xbx7wwELh-Wej1SlC2wVZmK9X4pIDdIZGs3qGAZ_Qgw&oe=6323F446"
            ></img>
          </div>
          <a href={props.profile} rel="noopenner">
            <span className="author w-18">{props.author}</span>
          </a>
        </div>
      </div>
    </>
  );
}
