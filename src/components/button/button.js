import React from "react";

export default function NavbarButton(props) {
  const handle = () => {
    props.show();
  };
  return (
    <div
      onClick={handle}
      className="nvbr-btns mt-3 flex flex-col w-14 aligin-center justify-center items-center h-14 rounded-xl "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    </div>
  );
}
