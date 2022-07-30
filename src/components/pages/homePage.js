import React, { useEffect ,useState} from "react";
import Navbar from "../navbar/Navbar";
import FrindesAdd from "../input/frindesAdd";
import { userEntry } from "../../context/EntryContext";
import axios from "axios"
import Cookies from "universal-cookie"

export default function Homepage() {
  
  return (
    <>
      <Navbar />
      <FrindesAdd />
   
    </>
  );
}
