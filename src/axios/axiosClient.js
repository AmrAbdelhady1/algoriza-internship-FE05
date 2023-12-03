import { useRouter } from "vue-router";
import { useStore } from "../stores/Store";
import axios from "axios";

export const getData = async (params, url, isLoader) => {
  const router = useRouter();
  if (isLoader && !localStorage.getItem("token")) {
    router.push("/");
  } else {
    const store = useStore();
    const options = {
      method: "GET",
      url: `https://booking-com15.p.rapidapi.com/api/v1/hotels/${url}`,
      params: { ...params },
      headers: {
        "X-RapidAPI-Key": "3cf3750bedmshf4ecf4743af592ep154407jsn08d3688d27cc",
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
  }
};
