<template>
  <div class="bg-white w-full rounded-md mb-10 py-6">
    <h1 class="text-[#181818] text-lg font-medium tracking-[0.18px] mx-[30px]">
      Overview
    </h1>

    <div class="text-[#4F4F4F] flex flex-col gap-4 mt-5 mb-10 mx-[30px]">
      <p>
        Featuring free WiFi throughout the property, Lakeside Motel Waterfront
        offers accommodations in Lakes Entrance, 19 mi from Bairnsdale. Free
        private parking is available on site.
      </p>

      <p>
        Each room at this motel is air conditioned and comes with a flat-screen
        TV. You will find a kettle, toaster and a microwave in the room. Each
        room is fitted with a private bathroom. Guests have access to barbecue
        facilities and a lovely large lawn area. Metung is 6.8 mi from Lakeside
        Motel Waterfront, while Paynesville is 14 mi from the property.
      </p>
      <p>
        Couples in particular like the location – they rated it 9.2 for a
        two-person trip.
      </p>
    </div>

    <div
      class="p-[30px] border-t border-t-[#E0E0E0] text-[#4F4F4F] text-[15px]"
    >
      <h1 class="text-[#181818] text-lg font-medium mb-6">Top facilities</h1>
      <div class="grid grid-cols-2 gap-3">
        <div class="flex items-center gap-3">
          <WifiSvg />
          <p>Free wifi</p>
        </div>
        <div class="flex items-center gap-3">
          <BusinessSvg />
          <p>Business Services</p>
        </div>
        <div class="flex items-center gap-3">
          <AirSvg />
          <p>Air Conditioning</p>
        </div>
        <div class="flex items-center gap-3">
          <PoolSvg />
          <p>Swimming pool</p>
        </div>
        <div class="flex items-center gap-3">
          <ParkingSvg />
          <p>Parking available</p>
        </div>
        <div class="flex items-center gap-3">
          <TopRatedSvg />
          <p>Top rated in area</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AirSvg from "../../../assets/svg/airSvg.vue";
import PoolSvg from "../../../assets/svg/poolSvg.vue";
import WifiSvg from "../../../assets/svg/wifiSvg.vue";
import ParkingSvg from "../../../assets/svg/parkingSvg.vue";
import TopRatedSvg from "../../../assets/svg/topRatedSvg.vue";
import BusinessSvg from "../../../assets/svg/businessSvg.vue";
</script>
