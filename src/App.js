import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routings/Routes";
import "./App.css"

function App() {
  // console.log(process.env);
  return (
    <BrowserRouter>
        <Nav />
        <Routes />
    </BrowserRouter>
  );
}

export default App;
