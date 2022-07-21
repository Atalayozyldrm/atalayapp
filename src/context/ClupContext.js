import React, { useState } from "react";

const AddClup = React.createContext();

export const AddClupProvider = ({ children }) => {
  const [inpValue, setInPvalue] = useState(null);

  const createClup = (element) => {
    setInPvalue(element);
    console.log(element);
  };
  return (
    <AddClup.Provider value={{ inpValue, createClup }}>
      {" "}
      {children}
    </AddClup.Provider>
  );
};

export const userClup = () => {
  return React.useContext(AddClup);
};
