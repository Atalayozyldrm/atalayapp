import React from "react";

export default function ProfileEdit(props) {
  const show = () => {
    props.show();
  };
  return (
    <>
      <div
        className="absolute top-60 right-16   manga w-36 h-12"
        onClick={show}
      >
        <span className="flex justify-center relative top-2 align-center">
          Profili düzenle
        </span>
      </div>
    </>
  );
}
