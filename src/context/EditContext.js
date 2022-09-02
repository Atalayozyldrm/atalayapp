import React, { useState } from "react";

const EditProfile = React.createContext();

export const EditContext = ({ children }) => {
  const [inpValue, setInPvalue] = useState(null);
  const [nameValue, setNamvalue] = useState(null);

  const [show, setShow] = useState(null);

  const createEdit = (element, name) => {
    setInPvalue(element);
    setNamvalue(name);
  };
  const edit = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <EditProfile.Provider value={{ inpValue, createEdit, edit, show }}>
      {children}
    </EditProfile.Provider>
  );
};

export const userContent = () => {
  return React.useContext(EditProfile);
};
