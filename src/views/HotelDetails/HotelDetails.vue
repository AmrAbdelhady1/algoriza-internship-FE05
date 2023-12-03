<template>
  <HotelImages />
  <NavigationTab />

  <div class="bg-[#F4F4F4] pt-10 lg:px-[100px] md:px-[35px] px-[10px]">
    <div class="flex items-start justify-between gap-[30px]">
      <div class="w-full">
        <h1
          class="text-[#1A1A1A] text-[32px] font-semibold tracking-[0.32px] mb-2"
        >
          {{ hotelDetails?.hotel_name }}
        </h1>
        <div class="flex items-center mb-2">
          <RevieweRates :rate="Math.floor(route.query.reviewScore / 2)" />
          <p class="text-[#4F4F4F] text-sm tracking-[0.28px] mx-3">
            {{ Math.floor(route.query.reviewScore / 2) }} ({{
              route.query.reviewCount
            }}
            Reviews)
          </p>
        </div>

        <div class="flex items-center gap-[6px] mb-8">
          <BlueLocationSvg />
          <p class="text-[#333333] text-sm leading-5 tracking-[0.28px]">
            {{ hotelDetails?.address }}
          </p>
        </div>

        <Overview />
      </div>
      <MapArea
        v-if="hotelDetails?.latitude"
        :latitude="hotelDetails?.latitude"
        :longitude="hotelDetails?.longitude"
      />
    </div>

    <AvailableRooms
      :hotelDetails="hotelDetails"
      :reviewScore="route.query.reviewScore"
      :reviewCount="route.query.reviewCount"
      :price="route.query.price"
    />

    <div class="py-[100px]">
      <WarningMessage />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getData } from "../../axios/axiosClient";

import MapArea from "./components/MapArea.vue";
import Overview from "./components/Overview.vue";
import HotelImages from "./components/HotelImages.vue";
import NavigationTab from "./components/NavigationTab.vue";
import RevieweRates from "../../components/RevieweRates.vue";
import AvailableRooms from "./components/AvailableRooms.vue";
import WarningMessage from "../../components/WarningMessage.vue";
import BlueLocationSvg from "../../assets/svg/blueLocationSvg.vue";

const emit = defineEmits(["footer-color", "show-links"]);
const route = useRoute();
const hotelDetails = ref([]);

const getHotelsDetails = async () => {
  const url = "getHotelDetails";
  const params = {
    hotel_id: route.params.id,
    arrival_date: route.query.arrival_date,
    departure_date: route.query.departure_date,
  };
  const response = await getData(params, url, true);

  if (response) {
    hotelDetails.value = response.data.data;
  }
};

onMounted(() => {
  getHotelsDetails();
  emit("footer-color", "#F4F4F4");
  emit("show-links", true);
});
</script>
