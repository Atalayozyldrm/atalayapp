import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import FrindesAdd from "../input/frindesAdd";
import Entry from "../entry/entry"
export default function Homepage() {

  return (
    <>
      <Navbar />
      <FrindesAdd />
      <Entry />
    </>
  );
}
