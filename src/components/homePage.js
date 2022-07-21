import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import FrindesAdd from "../components/frindesAdd";
import { Socket, io } from "socket.io-client";
import loginT from "../service/auth/login";
import { userAuth } from "../context/AuthContext";

export default function Homepage() {
  const socket = io("http://localhost:5000", {
    cors: { origin: "http://localhost:3000" },
  });
  socket.on("connection", () => {
    alert("Bağlandı !");
  });

  return (
    <>
      <Navbar />
      <FrindesAdd />
    </>
  );
}
