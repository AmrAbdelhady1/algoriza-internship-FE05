<template>
  <h1 class="text-[#181818] text-[28px] font-semibold mb-4">
    Enjoy your dream vacation
  </h1>
  <p
    class="w-[610px] text-[#333333] tracking-[0.32px] mb-[30px] text-base leading-[22.4px]"
  >
    Plan and book our perfect trip with expert advice, travel tips, destination
    information and inspiration from us
  </p>

  <div class="w-full grid grid-cols-4 gap-5 mb-[60px]">
    <div v-for="country in countries" :id="country.id" class="text-[#181818] cursor-pointer hover:underline">
      <img
        :src="country.image"
        alt="country"
        class="max-h-[220px] w-full h-full rounded-lg mb-[14px]"
        loading="lazy"
      />
      <h1 class="text-xl font-semibold mb-[6px]">{{ country.name }}</h1>
      <p class="text-sm tracking-[0.28px]">
        {{ country.properties }} properties
      </p>
    </div>
  </div>
</template>

<script>
import countryImg1 from "../../../assets/images/country1.png";
import countryImg2 from "../../../assets/images/country2.png";
import countryImg3 from "../../../assets/images/country3.png";
import countryImg4 from "../../../assets/images/country4.png";

export default {
  data() {
    return {
      countries: [
        {
          id: 1,
          name: "Australia",
          properties: 2246,
          image: countryImg1,
        },
        {
          id: 2,
          name: "Japan",
          properties: 1278,
          image: countryImg2,
        },
        {
          id: 3,
          name: "New Zealand",
          properties: 480,
          image: countryImg3,
        },
        {
          id: 4,
          name: "Greece",
          properties: 320,
          image: countryImg4,
        },
      ],
    };
  },
};
</script>
