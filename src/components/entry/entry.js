import React from "react";
import { BiComment } from "react-icons/bi";
import { FcLikePlaceholder } from "react-icons/fc";

import { Link } from "react-router-dom";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { userComment } from "../../context/Comment";

const contentLoader = (content, url) => {
  if (!content)
    return (
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton count={5} />
      </SkeletonTheme>
    );
  if (content.length >= 100 && window.location.pathname === "/home") {
    return (
      <div className="flex flex-wrap">
        <Link to={url}>{content.slice(0, 100) + "..."}</Link>
      </div>
    );
  }
  return <div>{content}</div>;
};

export default function Entry(props) {
  const { popup } = userComment();
  return (
    <>
      <div className={props.className}>
        <div className={props.cardCss}>
          <div className={props.titleClass}>
            <a
              href={props.link}
              data-key={props.procsess}
              className="text-xl"
              rel="noopenner"
            >
              #{props.title}
            </a>
          </div>
          <div className="text-base pavyon flex p-2 flex-wrap ml-5 mt-4">
            {contentLoader(props.content, props.link)}
          </div>
          <div className="relative flex flex-row justify-end mr-9 cursor-pointer">
            <BiComment onClick={popup} className="mr-3 mt-0.5" />
            <FcLikePlaceholder />
          </div>
          <div className="w-auto flex-wrap ml-2 OxA-mobile h-full align-end flex  ">
            <div className="img w-8 rounded-full mr-2"></div>
            <a href={props.profile} rel="noopenner">
              <span className="w-18">{props.author}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
