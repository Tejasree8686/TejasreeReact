import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
const Applayoutcomponent = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
root.render(<Applayoutcomponent />);
