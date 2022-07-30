import React from "react";
import Homepage from "../components/pages/homePage";
import { userAuth } from "../context/AuthContext";
import Entry from "../components/entry/entry"

export default function Home() {

  return (
    <div className="flex  bg-home w-full">
      <Homepage />
      <div className="w-auto h-auto absolute left-48 m-1">
        <Entry title={"Ey addadasdasdsadasdsddasdsd "}>Deneme</Entry>
        <Entry title={"Ey mdasdsaeasdmasdddsadsaeli "}>Deneme</Entry>
        <Entry title={"Ey masdedaddasdadasasmeasdli "}>Deneme</Entry>
      </div>
    </div>
  );
}
