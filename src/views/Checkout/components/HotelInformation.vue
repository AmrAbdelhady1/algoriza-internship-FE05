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
        Lakeside Motel Warefront
      </h1>
      <p>4.5 (1200 Reviews)</p>

      <div class="flex flex-col gap-1 mt-[25px]">
        <p class="text-[#EB5757]">Non refundable</p>
        <p>Check in: Sunday, March 18, 2022</p>
        <p>Check out: Tuesday, March 20, 2022</p>
        <p>2 night stay</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import hotelImg from "../../../assets/images/hotel.png";
</script>
