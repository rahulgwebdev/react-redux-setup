import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import PageLoader from "../components/PageLoader";
const About = lazy(() => import("../pages/About"));
const AddPost = lazy(() => import("../pages/AddPost"));
const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Home = lazy(() => import("../pages/Home"));

export default function Routes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/addpost" exact component={AddPost} />
        <Route path="/posts/:id" component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </Suspense>
  );
}
