import React, { useState } from "react";

const RegisterUser = React.createContext();

export const Register = ({ children }) => {
  const [show, setShow] = useState(null);

  const edit = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(null);
    }
  };
  return (
    <RegisterUser.Provider value={{ edit, show }}>
      {children}
    </RegisterUser.Provider>
  );
};

export const registerUser = () => {
  return React.useContext(RegisterUser);
};
