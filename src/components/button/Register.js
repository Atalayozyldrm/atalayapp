import React from "react";

export default function Register(props) {
  const show = () => {
    props.show();
  };
  return (
    <>
      <span
        onClick={show}
        className="justify-items-center  mt-3 text-black text-sm mt-"
      >
        Kayıtlı değilmisin ? Kayıt ol
      </span>
    </>
  );
}
