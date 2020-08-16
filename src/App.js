import React, { useEffect } from "react";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routings/Routes";
import "./App.css"
import { useDispatch } from "react-redux";
import { onAppLoad } from "./pages/SignIn/redux/action";

function App() {
  // console.log(process.env);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onAppLoad())
  }, [dispatch])

  return (
    <BrowserRouter>
        <Nav />
        <Routes />
    </BrowserRouter>
  );
}

export default App;
