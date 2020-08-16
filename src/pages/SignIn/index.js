import React, { useEffect } from "react";
import { signIn } from "./redux/action";
import { useDispatch } from "react-redux";
import io from 'socket.io-client';
import { useState } from "react";
// import cookies from "js-cookie";
const socket = io('http://localhost:5000');
export default () => {
  const dispatch = useDispatch();
  const [formValue, _formValue] = useState({username: "", password: ""});

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(signIn(formValue));
  };

  useEffect(() => {
    socket.on('connect', function(s){
      console.log("connected")
    });
    setTimeout(()=>{
      // console.log('set cookie')
      // cookies.set('x-access-token',"asld");
    },5000)
  }, [])

  const onChange = (e) => {
    _formValue({...formValue,[e.target.name]: e.target.value})
  }

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
        <input type="text" name="username" onChange={onChange} value={formValue.username}  />
        <label>Password :</label>
        <input type="password" name="password" value={formValue.password} onChange={onChange}   />
        {/* <input type="submit" value="Sign In" /> */}
        <button onClick={handleSignIn}>Sign In</button>
      </div>
    </div>
  );
};
