import { adminRoute } from "../base";
import httpService from "../base/httpService";

export const getClientsApi = async (data) => {
  const response = await httpService.get(`${adminRoute}/clients`);
  return response;
};

