<template>
  <div
    class="fixed w-full min-h-screen bg-black/75 top-0 right-0 left-0 bottom-0 z-50 flex items-center justify-center"
  >
    <div
      class="w-[400px] h-[500px] bg-white rounded-[10px] flex flex-col justify-center items-center"
    >
      <div
        class="w-[240px] h-[200px] bg-[#6FCF97]/20 rounded-[10px] mb-[45px] flex items-center justify-center mt-[30px]"
      >
        <img :src="successImg" alt="booking-success" />
      </div>

      <h1 class="text-[#181818] text-xl font-semibold mb-3">
        Booking Successful
      </h1>

      <div
        class="mb-[45px] text-[#4F4F4F] leading-6 tracking-[0.32px] flex flex-col items-center"
      >
        <p>Congratulations your reservation has been made.</p>
        <p>You will be notified 2 days prior the date.</p>
      </div>

      <button
        @click="handleSubmit"
        class="text-white text-[15px] font-medium leading-5 tracking-[0.3px] rounded-md bg-[#2F80ED] w-[352px] flex items-center justify-center py-3"
      >
        View Trip
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import successImg from "../assets/images/successImg.png";

const router = useRouter();

const handleSubmit = () => {
  router.push("/trips");
};
</script>
