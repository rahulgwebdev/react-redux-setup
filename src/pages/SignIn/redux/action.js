import Api from "../../../Utils/Api";
import { LOGIN } from "./types";

export const signIn = (body) => async (dispatch) => {
  try {
    const result = await Api.post("/users/authenticate", body);
    const { data } = result;
    dispatch({ type: LOGIN , payload: {token: data.token,username: data.user.username, email: data.user.email, name: data.user.name, isAuthenticated: true}});
  } catch (error) {
    dispatch({ type: "Error" });
  }
};

export const onAppLoad = () => async (dispatch) => {
  try {
    const { data } = await Api.post("/validateToken");
    dispatch({ type: LOGIN , payload: {token: data.token,username: data.user.username, email: data.user.email, name: data.user.name, isAuthenticated: true}});
  } catch (error) {
    dispatch({ type: LOGIN , payload: {token: null,username: null, email: null, name: null, isAuthenticated: false}});
  }
}

export const signOut = () => async (dispatch) => {
  try {
    const { data } = await Api.post("/users/signout");
    console.log(data)
    dispatch({ type: LOGIN , payload: {token: null,username: null, email: null, name: null, isAuthenticated: false}});
  } catch (error) {
    console.log(error)
    dispatch({ type: LOGIN , payload: {token: null,username: null, email: null, name: null, isAuthenticated: false}});
  }
}