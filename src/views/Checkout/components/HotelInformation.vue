<template>
  <div class="w-[400px] h-[400px] bg-white rounded-md mb-[30px]">
    <img
      :src="hotelImg"
      alt="hotel"
      class="w-[400px] h-[180] rounded-t-md mb-5"
    />

    <div class="px-5 text-[#4F4F4F] text-sm leading-5 tracking-[0.28px]">
      <h1
        class="text-[#181818] text-lg font-medium tracking-[0.18px] mb-[10px]"
      >
        {{ hotel?.hotel_name }}
      </h1>
      <div class="flex items-center mb-2">
        <RevieweRates :rate="Math.floor(hotel?.reviewScore / 2)" />
        <p class="text-[#4F4F4F] text-sm tracking-[0.28px] mx-3">
          {{ Math.floor(hotel?.reviewScore / 2) }} ({{ hotel?.reviewCount }}
          Reviews)
        </p>
      </div>

      <div class="flex flex-col gap-1 mt-[25px]">
        <p class="text-[#EB5757]">Non refundable</p>
        <p>Check in: {{ checkIn }}</p>
        <p>Check out: {{ checkOut }}</p>
        <p>2 night stay</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";

import hotelImg from "../../../assets/images/hotel.png";
import RevieweRates from "../../../components/RevieweRates.vue";

const { hotel } = defineProps({
  hotel: {
    default: {},
  },
});

const checkIn = moment(hotel?.arrival_date).format("dddd, MMMM D, YYYY");
const checkOut = moment(hotel?.departure_date).format("dddd, MMMM D, YYYY");
</script>
