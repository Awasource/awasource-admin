import { adminRoute } from "../base";
import httpService from "../base/httpService";

export const loginApi = async (data) => {
  const response = await httpService.post(`${adminRoute}/login`, data);
  if (response?.status === "success") {
    httpService.defaults.headers.common['authorization'] = "Bearer " + response?.data?.token;
  }
  return response;
};

export const verifyApi = async (data) => {
  const response = await httpService.post(`${adminRoute}/twofactor`, data);
  if (response?.status === "success") {
    httpService.defaults.headers.common['authorization'] = "Bearer " + response?.data?.token;
  }
  return response;
};
