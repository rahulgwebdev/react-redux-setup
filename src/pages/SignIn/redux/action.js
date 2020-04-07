import Api from "../../../Utils/Api";
import { LOGIN } from "./types";

export const signIn = (body) => async (dispatch) => {
  try {
    const result = await Api.post("/users/authenticate", {
      username: "sukanta",
      password: "123456",
    });
    const { data } = result;
    console.log(data);
    dispatch({ type: LOGIN });
  } catch (error) {
    dispatch({ type: "Error" });
  }
};
