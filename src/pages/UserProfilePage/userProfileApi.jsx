import axios from "axios";
export const userProfileGetInfo = (username) => {
  return axios.get(`/api/v1/users/${username}`);
};
