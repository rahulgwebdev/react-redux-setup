import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../pages/SignIn/redux/action";


export default function Nav() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  
  const logout = () => {
    dispatch(signOut())
  }

  return (
    <header>
      <nav>
        <h2>Logo</h2>
        <ul>
          {isAuthenticated ? (
            <>
              <li>
                <Link to={"/home"}>Home</Link>
              </li>
              <li>
                <Link to={"/addpost"}>Add Post</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/chat"}>Chat</Link>
              </li>
              <li>
                <span onClick={logout}>Sign out</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={"/signup"}>Sign up</Link>
              </li>
              <li>
                <Link to={"/signin"}>Sign in</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
