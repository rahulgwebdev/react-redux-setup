import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API,
  responseType: "json",
//   headers: {
//     "x-authorization":
//       localStorage.getItem("x-authorization") !== null
//         ? localStorage.getItem("x-authorization")
//         : "emptyToken"
//   }
});
