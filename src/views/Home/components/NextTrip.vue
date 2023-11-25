<template>
  <h1 class="text-[#181818] text-[28px] font-semibold mb-6">
    Get inspiration for your next trip
  </h1>

  <div class="grid grid-cols-3 w-full gap-5 mb-[60px]">
    <div v-for="trip in trips" :id="trip.id" class="relative max-h-[280px] cursor-pointer">
      <img
        :src="trip.image"
        alt="trip"
        class="w-full h-full rounded-lg"
        loading="lazy"
      />
      <div
        class="absolute top-0 w-full h-full rounded-lg text-white p-5 flex flex-col justify-end hover:underline"
      >
        <h1 class="text-xl font-semibold mb-[10px]">{{ trip.title }}</h1>
        <p class="text-sm font-normal tracking-[0.32px]">
          {{ trip.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import tripImg1 from "../../../assets/images/trip1.png";
import tripImg2 from "../../../assets/images/trip2.png";
import tripImg3 from "../../../assets/images/trip3.png";

export default {
  data() {
    return {
      trips: [
        {
          id: 1,
          title: "Sydeny’s 10 most fashionable 5 star hotels",
          description:
            "Browse the fastest growing tourism sector in the heart of Australia tourism capital ....",
          image: tripImg1,
        },
        {
          id: 2,
          title: "Top cities for Vegan Travellers",
          description:
            "Top sites where you do not have to worry about being a vegan. Our tourist guide is here...",
          image: tripImg2,
        },
        {
          id: 3,
          title: "World’s top destinations during and post covid timeline",
          description:
            "Pandemic is still intact and will be here for a longer time. Here’s where your next destination...",
          image: tripImg3,
        },
      ],
    };
  },
};
</script>
