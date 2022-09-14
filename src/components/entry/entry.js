import React from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { Link } from "react-router-dom";

const contentLoader = (content, url) => {
  if (!content) return <p>Yükleniyor</p>;
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
          <div className="text-base flex p-2 flex-wrap ml-5 mt-4">
            {contentLoader(props.content, props.link)}
          </div>
          <div className="relative flex flex-row justify-end  cursor-pointer">
            <HiOutlineHeart />
          </div>
          <div className="w-auto flex-wrap OxA-mobile h-full align-end flex  ">
            <div className="img w-8 rounded-full mr-2">
              <img
                className="rounded-full image-card"
                src="https://scontent.fsaw2-1.fna.fbcdn.net/v/t1.6435-9/70043768_100756527983912_5331784942558904320_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dFgzoTKqOwQAX9934DE&_nc_ht=scontent.fsaw2-1.fna&oh=00_AT8xbx7wwELh-Wej1SlC2wVZmK9X4pIDdIZGs3qGAZ_Qgw&oe=6323F446"
              ></img>
            </div>
            <a href={props.profile} rel="noopenner">
              <span className="w-18">{props.author}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
