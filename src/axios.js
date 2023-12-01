import { useStore } from "./stores/Store";
import axios from "axios";

export const getData = async (params, url, isLoader) => {
  const store = useStore();
  const options = {
    method: "GET",
    url: `https://booking-com15.p.rapidapi.com/api/v1/hotels/${url}`,
    params: { ...params },
    headers: {
      "X-RapidAPI-Key": "36cc29f680msh644618b9ef34857p132d36jsnb0c335893ec6",
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
