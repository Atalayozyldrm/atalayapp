import React from "react";
import Homepage from "../components/pages/homePage";
import { userAuth } from "../context/AuthContext";
export default function Home() {

  return (
    <div className="flex  bg-home w-full">
      <Homepage />
    </div>
  );
}
