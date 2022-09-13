import React from "react";
import { userAuth } from "../../context/AuthContext.js";
export default function FrindesAdd() {
  const { user } = userAuth();
  return (
    <>
      <div className="frindes h-10 relative w-full flex ">
        <div className="flex ml-6 OxA-1-m  mt-3 relative left-36 flex-row">
          <input
            disabled
            type="text"
            className="add-inpt h-8 w-60 p-2"
            placeholder="Entry ara"
          />
        </div>
      </div>
      <div className="flex relative code-text text-name p-3 align-center r w-full">
        {user.name}
      </div>
    </>
  );
}
