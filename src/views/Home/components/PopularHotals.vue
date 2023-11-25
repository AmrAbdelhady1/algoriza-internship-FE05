<template>
  <h1 class="text-[#181818] text-[28px] font-semibold mb-6">Popular hotels</h1>

  <div class="w-full grid grid-cols-4 gap-5 mb-[60px]">
    <div v-for="hotel in hotels" :id="hotel.id" class="text-[#181818] cursor-pointer hover:underline">
      <img
        :src="hotel.image"
        alt="hotel"
        class="max-h-[300px] w-full h-full rounded-lg mb-[14px]"
        loading="lazy"
      />
      <h1 class="text-xl font-semibold mb-[6px]">{{ hotel.name }}</h1>
      <p class="text-sm tracking-[0.28px]">{{ hotel.properties }} properties</p>
    </div>
  </div>
</template>

<script>
import hotelImg1 from "../../../assets/images/hotel1.png";
import hotelImg2 from "../../../assets/images/hotel2.png";
import hotelImg3 from "../../../assets/images/hotel3.png";
import hotelImg4 from "../../../assets/images/hotel4.png";

export default {
  data() {
    return {
      hotels: [
        {
          id: 1,
          name: "Lakeside Motel Warefront",
          properties: 2246,
          image: hotelImg1,
        },
        {
          id: 2,
          name: "Recce Graham resort",
          properties: 1278,
          image: hotelImg2,
        },
        {
          id: 3,
          name: "Fireside Dinners",
          properties: 480,
          image: hotelImg3,
        },
        {
          id: 4,
          name: "Oculous Inn Stay",
          properties: 320,
          image: hotelImg4,
        },
      ],
    };
  },
};
</script>
