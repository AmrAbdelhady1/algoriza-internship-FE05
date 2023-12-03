<template>
  <div class="mt-10 pb-[172px]">
    <h1 class="text-[#181818] text-[24px] font-semibold pb-8">
      Available rooms
    </h1>

    <div class="w-full gap-[15px] flex items-start">
      <div
        class="w-[400px] h-[340px] rounded-md bg-gradient-to-b from-[#4796FF] to-[#2366BF] flex items-center justify-center"
      >
        <div class="text-white text-[24px] font-bold">
          <div class="flex items-center gap-1">
            <WhiteLogoSvg />
            <p class="font-medium text-[18px]">my Dream Place</p>
          </div>
          <p>20% off</p>
          <p>Use Promotional</p>
          <p>Coupon Code:</p>
          <p class="text-[#FFD723]">Orlando</p>
        </div>
        <CodeSvg />
      </div>

      <div class="w-[400px] h-[432px] rounded-md bg-white">
        <img
          class="w-[400px] h-[200px] rounded-t-md mb-5"
          src="https://s3-alpha-sig.figma.com/img/c864/e83b/9a98fc52848e731d30ecb375dad664ba?Expires=1702252800&Signature=GYrL~dH49U7DciQXyX3vejSCiXCG1ZIYQUy4mEpqEl5qu10TsOLA9w8IBt5EL0dyUAtkVdf-Q3lk16sKBkKCNTLmoOa3fr5k6ZH8qoTkQcV0Vsuf9HzJya4TvhBtxA9xFI83qN7lUQgjoGORQ4xrDyfE205lcmuLA6L0LvqPJFUzkXFkywJeZVwj3Qqj-rbBOxpMUZle0nfeQctFfbeZ-Y-fBChaZlIuWjKbeLmHShMCm0ZZHNrL4MJB0e4rmXhj4iRMnYHFudPxaJCxuorFt6ej4rZnaBsl83sXJ7LIaZhlc4IYy6vToGs-gwj5PeS3pGgxsSIehu5QwVbeZHtrPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="room1"
        />

        <div class="px-5 text-[#4F4F4F] text-sm flex flex-col gap-[10px]">
          <h1 class="text-[#1A1A1A] text-lg font-medium mb-2">
            Standard twin ben, Multiple beds
          </h1>
          <p>300 sq ft</p>
          <p>Sleeps 3</p>
          <p>1 double bed and 1 twin bed</p>

          <button
            @click="handleAddHotel"
            class="text-white font-medium text-[15px] bg-[#2F80ED] w-full py-3 px-[18px] rounded-md mt-3"
          >
            Reserve suite
          </button>
        </div>
      </div>
      <div class="w-[400px] h-[432px] rounded-md bg-white">
        <img
          class="w-[400px] h-[200px] rounded-t-md mb-5"
          src="https://s3-alpha-sig.figma.com/img/c864/e83b/9a98fc52848e731d30ecb375dad664ba?Expires=1702252800&Signature=GYrL~dH49U7DciQXyX3vejSCiXCG1ZIYQUy4mEpqEl5qu10TsOLA9w8IBt5EL0dyUAtkVdf-Q3lk16sKBkKCNTLmoOa3fr5k6ZH8qoTkQcV0Vsuf9HzJya4TvhBtxA9xFI83qN7lUQgjoGORQ4xrDyfE205lcmuLA6L0LvqPJFUzkXFkywJeZVwj3Qqj-rbBOxpMUZle0nfeQctFfbeZ-Y-fBChaZlIuWjKbeLmHShMCm0ZZHNrL4MJB0e4rmXhj4iRMnYHFudPxaJCxuorFt6ej4rZnaBsl83sXJ7LIaZhlc4IYy6vToGs-gwj5PeS3pGgxsSIehu5QwVbeZHtrPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="room1"
        />

        <div class="px-5 text-[#4F4F4F] text-sm flex flex-col gap-[10px]">
          <h1 class="text-[#1A1A1A] text-lg font-medium mb-2">
            Standard twin ben, Multiple beds
          </h1>
          <p>300 sq ft</p>
          <p>Sleeps 3</p>
          <p>1 double bed and 1 twin bed</p>

          <button
            @click="handleAddHotel"
            class="text-white font-medium text-[15px] bg-[#2F80ED] w-full py-3 px-[18px] rounded-md mt-3"
          >
            Reserve suite
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

import CodeSvg from "../../../assets/svg/codeSvg.vue";
import WhiteLogoSvg from "../../../assets/svg/whiteLogoSvg.vue";

const router = useRouter();
const { hotelDetails, reviewScore, reviewCount, price } = defineProps({
  hotelDetails: {
    default: {},
  },
  reviewScore: {
    default: 0,
  },
  reviewCount: {
    default: 0,
  },
  price: {
    default: 0,
  },
});

const handleAddHotel = () => {
  const users = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const updatedUsers = users.map((user) => {
    if (user.token === token) {
      const updatedHotels = user.hotels;
      updatedHotels.push({ ...hotelDetails, reviewScore, reviewCount, price });
      return { ...user, hotels: updatedHotels };
    }
    return user;
  });
  localStorage.removeItem("user");
  localStorage.setItem("user", JSON.stringify(updatedUsers));
  router.push("/checkout");
};
</script>
