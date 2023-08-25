import { adminRoute } from "../base";
import httpService from "../base/httpService";

export const getDashboardMetricsApi = async (data) => {
  const response = await httpService.get(`${adminRoute}/dashboard`);
  return response;
};

