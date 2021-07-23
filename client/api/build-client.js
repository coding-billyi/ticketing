import axios from "axios";

const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    // We are on Server
    return axios.create({
      baseURL: "http://www.billyi.me",
      headers: req.headers,
    });
  } else {
    // We are on Browser
    return axios.create({
      baseURL: "/",
    });
  }
};

export default buildClient;
