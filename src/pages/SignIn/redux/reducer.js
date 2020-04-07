import { LOGIN } from "./types";

const store = {
  isAuthenticated: false,
};

export default (state = store, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isAuthenticated: "",
      };
    }
    default: {
      return state;
    }
  }
};
