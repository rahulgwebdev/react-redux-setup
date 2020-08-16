import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PageLoader from "../components/PageLoader";
import { useSelector } from "react-redux";
const About = lazy(() => import("../pages/About"));
const AddPost = lazy(() => import("../pages/AddPost"));
const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Home = lazy(() => import("../pages/Home"));
const Chat = lazy(() => import("../pages/Chats"));


export default function Routes() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        {isAuthenticated ? (
          <>
            <Route path="/" exact render={()=><Redirect to="/home" />} />
            <Route path="/home" exact component={Home} />
            <Route path="/addpost" exact component={AddPost} />
            <Route path="/posts/:id" component={Home} />
            <Route path="/chat" component={Chat} />
            <Route path="/about" exact component={About} />
          </>
        ) : (
          <>
            <Route path="/" exact render={()=><Redirect to="/signin" />} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
          </>
        )}
      </Switch>
    </Suspense>
  );
}
