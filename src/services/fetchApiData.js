import { path } from "../config";

export const fetchApiData = async (url) => {
  try {
    const response = await fetch(path(url)).then((response) => response.json());
    return response;
  } catch (err) {
    if (err.reponse) {
      return err.response;
    }
    return { message: err.message };
  }
};
