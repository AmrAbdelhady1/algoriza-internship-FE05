import { useStore } from "./stores/Store";
import axios from "axios";

export const getData = async (params, url, isLoader) => {
  const store = useStore();
  const options = {
    method: "GET",
    url: `https://booking-com15.p.rapidapi.com/api/v1/hotels/${url}`,
    params: { ...params },
    headers: {
      "X-RapidAPI-Key": "05a545a2d6msh5d2f6ed8625837ep1e20b8jsn25622160cefd",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    if (isLoader) {
      store.updateLoader();
    }
    const response = await axios.request(options);

    return response;
  } catch (error) {
    console.error(error);
  } finally {
    if (isLoader) {
      store.updateLoader();
    }
  }
};
