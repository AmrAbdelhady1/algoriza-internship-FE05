<template>
  <div class="min-h-screen pt-[60px] bg-[#F4F4F4] lg:px-[100px] md:px-[35px] px-[10px]">
    <h1 class="text-[#1A1A1A] text-[32px] font-semibold tracking-[0.32px]"  >
      Secure your reservation
    </h1>

    <WarningMessage class="my-[30px]"/>

    <div class="flex items-start gap-[30px]">
      <div>
        <RoomData />
        <PaymentOptions />
        <BookingInformation />
      </div>
      <div>
          <HotelInformation />
          <PriceDetails />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import WarningMessage from "../../components/WarningMessage.vue";
import RoomData from "./components/RoomData.vue";
import PaymentOptions from "./components/PaymentOptions.vue";
import BookingInformation from "./components/BookingInformation.vue";
import HotelInformation from "./components/HotelInformation.vue";
import PriceDetails from "./components/PriceDetails.vue";

const emit = defineEmits(["footer-color", "show-links"]);

onMounted(() => {
  emit("footer-color", "hide");
  emit("show-links", false);
});
</script>
