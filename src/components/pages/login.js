import React from "react";
import Forms from "../input/Forms.js";
import Content from "../layout/Content.js";
import RegisterPopup from "../input/RegisterUser.js";
import { registerUser } from "../../context/RegisterContext.js";

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
