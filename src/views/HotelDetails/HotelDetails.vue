<template>
  <HotelImages />
  <NavigationTab />

  <div class="bg-[#F4F4F4] pt-10 lg:px-[100px] md:px-[35px] px-[10px]">
    <div class="flex items-start justify-between gap-[30px]">
      <div class="w-full">
        <h1
          class="text-[#1A1A1A] text-[32px] font-semibold tracking-[0.32px] mb-2"
        >
          Lakeside Motel Warefront
        </h1>
        <p class="text-[#4F4F4F] text-sm leading-5 tracking-[0.28px] mb-2">
          4.5 (1200 Reviews)
        </p>
        <div class="flex items-center gap-[6px] mb-8">
          <BlueLocationSvg />
          <p class="text-[#333333] text-sm leading-5 tracking-[0.28px]">
            Lorem ipsum road, Tantruim-2322, Melbourne, Australia
          </p>
        </div>

        <Overview />
      </div>
      <MapArea />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import MapArea from "./components/MapArea.vue";
import Overview from "./components/Overview.vue";
import HotelImages from "./components/HotelImages.vue";
import NavigationTab from "./components/NavigationTab.vue";
import WarningMessage from "../../components/WarningMessage.vue";
import BlueLocationSvg from "../../assets/svg/blueLocationSvg.vue";

const emit = defineEmits(["footer-color", "show-links"]);
onMounted(() => {
  emit("footer-color", "#F4F4F4");
  emit("show-links", true);
});
</script>
