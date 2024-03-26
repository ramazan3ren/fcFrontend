import axios from "axios";
export const Api = (body) => {
  return axios.post("/api/v1/users", body);
};
