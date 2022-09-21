import React, { useEffect } from "react";
import Homepage from "../components/pages/homePage";
import getCsrf from "../service/auth/csrf.js";

export default function Home() {
  useEffect(() => {
    getCsrf();
  }, []);
  return (
    <div className="flex relative overflow-auto bg-home w-full">
      <Homepage />
    </div>
  );
}
