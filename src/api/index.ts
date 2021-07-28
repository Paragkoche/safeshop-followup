import axios from "axios";

const url = process.env.REACT_APP_URL;
export const phone = async (data: any) => {
  return await axios.post(`${url}/api/v1/ph/`, data).then((r) => r.data);
};
export const what = async (data: any) => {
  return await axios.post(`${url}/api/v1/what/`, data).then((r) => r.data);
};
