import React, { useState } from "react";

const AddComment = React.createContext();

export const AddCommentProvider = ({ children }) => {
  const [inpValue, setInPvalue] = useState("");
  const [show, setShow] = useState(null);

  const createComment = (element) => {
    setInPvalue(element);
  };
  const popup = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <AddComment.Provider value={{ inpValue, createComment, popup, show }}>
      {children}
    </AddComment.Provider>
  );
};

export const userComment = () => {
  return React.useContext(AddComment);
};
