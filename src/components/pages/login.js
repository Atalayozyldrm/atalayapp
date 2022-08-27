import React from "react";
import Forms from "../input/Forms";
import Content from "../layout/Content";
import RegisterPopup from "../input/RegisterUser";
import { registerUser } from "../../context/RegisterContext";

export default function LoginAuth() {
  const { edit, show } = registerUser();
  return (
    <>
      <Forms />
      <Content />
      {show ? <RegisterPopup close={edit} toggle={edit} /> : null}
    </>
  );
}
