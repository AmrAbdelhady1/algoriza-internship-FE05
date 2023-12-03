<template>
  <div
    class="bg-[#F4F4F4] text-[#1A1A1A] min-h-screen lg:px-[100px] md:px-[35px] px-[10px] pt-[60px] flex flex-col justify-between"
  >
    <div class="px-[105px]">
      <h1 class="text-[32px] font-semibold tracking-[0.32px] mb-7">My trips</h1>
      <div
        v-if="hotels.length > 0"
        v-for="item in hotels"
        class="w-full h-[240px] bg-white rounded-[5px] border border-[#E0E0E0] p-5 flex items-center gap-6 mb-5"
      >
        <img
          src="https://s3-alpha-sig.figma.com/img/fb3e/d52f/37a798a336642d26bce4af69deada3a0?Expires=1701648000&Signature=QB7GuIcxjYSAwSQLli9yVnOagdLIrr~Y7dDOiEetbmpYLrGhuTIXySw4t60Pj6EEw5rVBrJ6VEHGDuQwucUqnrSiAe1dv2j3MvekYRJLD6UPgOSZ4QFwEIUmfh5pJ-2dc1jO5H3jKSHplrB4sgmNqNOGwlM7dQxOTrDP4GHEHa8VReydZ22vJTH-Lj~v48pOKWSJcasPA4bes6eH2NxqmdiVb4TFY-nAUilJTP4xTMhtgviB4GHn~7FlUg61CCKOIuNy3-shIiDdl5cTHKETT-zPecNeh1dfG0~zEKhQGv7QaQGBpv9RG7fURz-MZpn~vdSVSVnkdyTa5LtnrI3lRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="hotel"
          class="w-[285px] h-[200px] rounded-[5px]"
        />
        <div class="w-full">
          <h1 class="text-xl font-medium tracking-[0.2px] h-[32px]">
            {{ item?.hotel_name }}
          </h1>
          <div class="flex items-center mb-2">
            <RevieweRates :rate="Math.floor(item?.reviewScore / 2)" />
            <p class="text-[#4F4F4F] text-sm tracking-[0.28px] mx-3">
              {{ Math.floor(item?.reviewScore / 2) }} ({{ item?.reviewCount }}
              Reviews)
            </p>
          </div>
          <div
            class="flex justify-between items-center text-[#4F4F4F] text-sm tracking-[0.14px] w-full"
          >
            <div class="flex flex-col gap-2">
              <p class="text-[#EB5757]">Non refundable</p>
              <p>
                Check in:
                {{ moment(item?.arrival_date).format("dddd, MMMM D, YYYY") }}
              </p>
              <p>
                Check out:
                {{ moment(item?.departure_date).format("dddd, MMMM D, YYYY") }}
              </p>
              <p>2 night stay</p>
            </div>
            <div class="flex flex-col items-end">
              <p
                class="text-[#333333] text-xl font-medium tracking-[0.2px] mb-1"
              >
                $ {{ item?.price }}
              </p>
              <p class="font-light tracking-[0.28px] mb-4">
                Includes taxes and fees
              </p>
              <button
                @click="handleViewHotel(item)"
                class="text-white text-[15px] tracking-[0.3px] bg-[#2F80ED] rounded-md py-[10px] px-[18px] border border-[#2F80ED] hover:bg-white hover:text-[#2F80ED]"
              >
                View trip details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <WarningMessage class="my-[80px]" />
  </div>
</template>

<script setup>
import moment from "moment";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import RevieweRates from "../../components/RevieweRates.vue";
import WarningMessage from "../../components/WarningMessage.vue";

const hotels = ref([]);
const emit = defineEmits(["footer-color", "show-links"]);

onMounted(() => {
  const users = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  hotels.value = users.find((user) => user.token === token).hotels;

  emit("footer-color", "#F4F4F4");
  emit("show-links", true);
});

const router = useRouter();

const handleViewHotel = (hotel) => {
  router.push({
    name: "hotelDetails",
    params: { id: hotel?.hotel_id },
    query: {
      reviewScore: hotel?.reviewScore,
      reviewCount: hotel?.reviewCount,
      price: hotel?.price,
      arrival_date: hotel?.arrival_date,
      departure_date: hotel?.departure_date,
    },
  });
};
</script>
