import { baseUrl } from "../base";
import axios from "axios";

const adminRoute = `${baseUrl}/api/admin`;

export const login = async (data) => {
  const response = await axios.post(`${adminRoute}/login`, data);
  return response;
};
