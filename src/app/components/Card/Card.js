"use client";
import Header from "./Header";
import GoogleLogin from "./GoogleLogin";
import FlowNodeImport from "./FlowNodeImport";
import Form from "./Form";
import { useState } from "react";

export default function Card() {
  const [currentShow, setCurrentShow] = useState("GoogleLogin");
  let Component;

  if (currentShow === "GoogleLogin") {
    Component = GoogleLogin;
  } else if (currentShow === "FlowNodeImport") {
    Component = FlowNodeImport;
  } else if (currentShow === "Form") {
    Component = Form;
  }

  return (
    <div className="block min-w-[500px] p-6 pt-2 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <Header />
      <Component setCurrentShow={setCurrentShow} />
    </div>
  );
}
