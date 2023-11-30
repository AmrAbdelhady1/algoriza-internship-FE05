<template>
  <div class="w-[810px] h-[440px] rounded-md bg-white mb-[140px]">
    <div class="w-full h-[60px] bg-[#F2C94C] rounded-t-md px-6 py-[18px]">
      <p class="text-[#333333] text-lg font-medium tracking-[0.18px] leading-6">
        Important information about your booking
      </p>
    </div>

    <div
      class="px-6 mt-[32px] text-[#333333] text-[14px] tracking-[0.3px] leading-6"
    >
      <p>
        1. This rate is non-refundable. If you change or cancel your booking you
        will not get a refund or credit to use for a
      </p>
      <p class="mx-4">future stay.</p>
      <p>2. Stay extensions will require a new reservation.</p>
      <p>3. Front desk staff will greet guests on arrival.</p>
      <p class="mb-[32px]">
        4. No refunds will be issued for late check-in or early check-out.
      </p>
      <p class="text-[13px]">
        By clicking the button below, I acknowledge that I have reviewed the
        <span class="text-[#2F80ED]">Privacy Statement</span> and have reviewd
        and accept the
        <span class="text-[#2F80ED]">Rules and Restrictions</span> and
        <span class="text-[#2F80ED]">Terms of Use</span>.
      </p>
    </div>

    <button
      @click="handleShowCard"
      class="text-white text-[15px] font-medium tracking-[0.3px] leading-5 px-[18px] py-3 rounded-md bg-[#2F80ED] m-6"
    >
      Complete Booking
    </button>

    <div class="flex items-center gap-2 px-6">
      <SecureSvg />
      <p class="text-[#4F4F4F] text-sm leading-5 tracking-[0.28px]">
        We use secure transmission and encrypted storage to protect your
        personal information
      </p>
    </div>
  </div>

  <BookingSuccessfully v-if="showCard" />
</template>

<script setup>
import { ref } from "vue";
import SecureSvg from "../../../assets/svg/secureSvg.vue";
import BookingSuccessfully from "../../../components/BookingSuccessfully.vue";

const showCard = ref(false);

const handleShowCard = () => {
  showCard.value = true;
};
</script>
