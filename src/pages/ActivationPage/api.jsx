import axios from "axios";
export const activateUser = (token) => {
  return axios.patch(`/api/v1/users/${token}/active`);
};
