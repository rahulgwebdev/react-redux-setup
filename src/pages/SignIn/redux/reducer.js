import { LOGIN } from "./types";

const store = {
  isAuthenticated: false,
  username: "",
  token: "",
  name: ""
};

export default (state = store, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
