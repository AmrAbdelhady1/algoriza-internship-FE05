<template>
  <div class="w-[400px]">
    <iframe
      id="map"
      width="400"
      height="240"
      frameborder="0"
      class="rounded-md mb-[35px]"
      :src="mapUrl"
    ></iframe>

    <p class="text-[#181818] text-lg font-medium tracking-[0.18px]">
      Explore the area
    </p>

    <div
      class="text-[#4F4F4F] text-sm leading-5 tracking-[0.28px] flex flex-col gap-2 mt-[22px]"
    >
      <div class="w-full flex items-center justify-between">
        <div class="flex items-center gap-2">
          <PlaneSvg />
          <p>Hotel Penselvenyia</p>
        </div>
        <p>2 min drive</p>
      </div>
      <div class="w-full flex items-center justify-between">
        <div class="flex items-center gap-2">
          <GrayLocationSvg />
          <p>Travis Bakery store house</p>
        </div>
        <p>10 min drive</p>
      </div>
      <div class="w-full flex items-center justify-between">
        <div class="flex items-center gap-2">
          <GrayLocationSvg />
          <p>Olivia Johnson Garden</p>
        </div>
        <p>15 min drive</p>
      </div>
      <div class="w-full flex items-center justify-between">
        <div class="flex items-center gap-2">
          <GrayLocationSvg />
          <p>Norman Opera Circus</p>
        </div>
        <p>18 min drive</p>
      </div>
      <div class="w-full flex items-center justify-between">
        <div class="flex items-center gap-2">
          <GrayLocationSvg />
          <p>Rockdeset hotel</p>
        </div>
        <p>32 min drive</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import PlaneSvg from "../../../assets/svg/planeSvg.vue";
import GrayLocationSvg from "../../../assets/svg/grayLocationSvg.vue";

const {latitude, longitude} = defineProps({
  latitude: {
    default: 0,
  },
  longitude: {
    default: 0,
  },
});

const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
</script>
