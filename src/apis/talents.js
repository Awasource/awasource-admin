import { adminRoute } from "../base";
import httpService from "../base/httpService";

export const getTalentsApi = async (data) => {
  const response = await httpService.get(`${adminRoute}/talents`);
  return response;
};

