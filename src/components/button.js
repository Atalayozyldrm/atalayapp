import React from "react";

export default function NavbarButton(props) {
  const handle = () => {
    props.show();
  };
  return (
    <div
      onClick={handle}
      className="nvbr-btns mt-3 flex flex-col w-14 h-14 rounded-xl "
    >
      {props.name}
    </div>
  );
}
