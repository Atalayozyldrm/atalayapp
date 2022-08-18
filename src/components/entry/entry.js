import React from "react";

export default function Entry(props) {
  return (
    <div className="entry m-4 slm code-123 code-0x1 h-auto">
      <div className="w-full h-auto">
        <a href={props.link} className="text-xl" rel="noopenner">
          #{props.title}
        </a>
      </div>
      <div className="text-base ml-5 mt-4">
        Ne haber benden dert yok tasa yok
        {props.content}
      </div>
      <div className="w-full h-auto flex relative top-20">
        <div className="img w-8 rounded-full mr-2 s ">
          <img
            className="rounded-full"
            src="https://scontent.fsaw2-1.fna.fbcdn.net/v/t1.6435-9/70043768_100756527983912_5331784942558904320_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dFgzoTKqOwQAX9934DE&_nc_ht=scontent.fsaw2-1.fna&oh=00_AT8xbx7wwELh-Wej1SlC2wVZmK9X4pIDdIZGs3qGAZ_Qgw&oe=6323F446"
          ></img>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg> */}
        </div>
        <span className="author w-18"> Atalay Özyıldırım </span>
        <div className="emoji flex  relative left-36">
          <div className="emoji">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="cursor-pointer h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
