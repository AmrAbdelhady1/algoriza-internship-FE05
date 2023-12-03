<template>
  <div class="flex flex-col gap-6">
    <div
      v-for="hotel in hotels"
      class="w-full p-5 flex items-center gap-6 rounded-[5px] border border-[#E0E0E0] bg-white"
    >
      <img
        :src="hotel?.property?.photoUrls[0] || searchHotelImg"
        alt="hotel"
        class="w-[285px] h-[200px] rounded-[5px]"
      />

      <div class="w-full">
        <div class="flex justify-between w-full items-center mb-1">
          <h1 class="text-[#1A1A1A] text-xl font-medium">
            {{ hotel?.property?.name }}
          </h1>
        </div>

        <div class="flex items-center mb-2">
          <RevieweRates :rate="Math.floor(hotel?.property?.reviewScore / 2)" />
          <p class="text-[#4F4F4F] text-sm tracking-[0.28px] mx-3">
            {{ Math.floor(hotel?.property?.reviewScore / 2) }} ({{
              hotel?.property?.reviewCount
            }}
            Reviews)
          </p>
        </div>

        <div class="flex justify-between w-full">
          <p class="max-w-[75%] text-[#4F4F4F] text-[13px]">
            {{ hotel?.accessibilityLabel }}
          </p>
        </div>

        <div class="flex items-end justify-between w-full">
          <button
            @click="handleHotelSelection(hotel)"
            class="text-white text-[15px] tracking-[0.3px] bg-[#2F80ED] rounded-md h-[40px] px-[18px] border border-[#2F80ED] hover:bg-white hover:text-[#2F80ED]"
          >
            See availability
          </button>
          <div class="flex flex-col items-end">
            <p class="text-[#333333] text-xl font-medium tracking-[0.2px] mb-1">
              <span
                v-if="hotel?.property?.priceBreakdown?.strikethroughPrice"
                class="text-[#EB5757] text-sm line-through tracking-[0.14px]"
                >{{
                  hotel?.property?.priceBreakdown?.strikethroughPrice?.currency
                }}
                {{
                  Math.floor(
                    hotel?.property?.priceBreakdown?.strikethroughPrice?.value
                  )
                }}</span
              >
              {{ hotel?.property?.priceBreakdown?.grossPrice?.currency }}
              {{
                Math.floor(hotel?.property?.priceBreakdown?.grossPrice?.value)
              }}
            </p>
            <p class="font-light tracking-[0.28px] mb-4">
              Includes taxes and fees
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

import RevieweRates from "../../../components/RevieweRates.vue";
import searchHotelImg from "../../../assets/images/searchHotel.png";

const { arrival_date, departure_date } = defineProps({
  hotels: {
    default: [],
  },
  arrival_date: {
    default: "",
  },
  departure_date: {
    default: "",
  },
});
const router = useRouter();

const handleHotelSelection = (hotel) => {
  router.push({
    name: "hotelDetails",
    params: { id: hotel?.property?.id },
    query: {
      reviewScore: hotel?.property?.reviewScore,
      reviewCount: hotel?.property?.reviewCount,
      price: hotel?.property?.priceBreakdown?.grossPrice?.value,
      arrival_date,
      departure_date,
    },
  });
};
</script>
