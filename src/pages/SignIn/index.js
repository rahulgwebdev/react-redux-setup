import React from "react";
import { signIn } from "./redux/action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default () => {
  const reduxData = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(signIn(null));
  };

  console.log(reduxData);

  return (
    <div
      style={{
        display: "flex",
        // flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>Username or Email :</label>
        <input type="email" name="" id="" />
        <label>Password :</label>
        <input type="password" name="" id="" />
        {/* <input type="submit" value="Sign In" /> */}
        <button onClick={handleSignIn}>Sing In</button>
      </div>
    </div>
  );
};
