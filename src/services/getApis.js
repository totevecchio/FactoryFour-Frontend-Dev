import { API_NAMES } from "../config";
import { fetchApiData } from "./fetchApiData";

export const getApis = async () => {
  let apiList = await Promise.all(
    API_NAMES.map(async (name) => {
      const data = await fetchApiData(name);
      data.name = name;
      if (!data.time) {
        data.time = Date.now();
      }
      return data;
    })
  );
  return apiList;
};
