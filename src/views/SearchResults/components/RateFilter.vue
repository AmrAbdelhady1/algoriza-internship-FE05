<template>
  <div class="w-[295px] rounded-md border border-[#E0E0E0] mt-5">
    <div
      class="w-full p-[18px] rounded-t-md border-b border-b-[#E0E0E0] bg-[#F2F2F2] mb-5"
    >
      <p class="text-[#181818] font-medium tracking-[0.16px]">Rating</p>
    </div>

    <p class="mb-1 text-[#4F4F4F] text-sm tracking-[0.28px] mx-[18px]">
      Show only ratings more than
    </p>

    <div
      class="w-[250px] mb-6 ml-[18px] h-[46px] rounded-[5px] border border-[#E0E0E0] flex items-center text-[#333333]"
    >
      <div
        @click="handleRateChage(1)"
        class="flex items-center justify-center gap-[1px] border-r border-r-[#E0E0E0] w-full h-full cursor-pointer"
        :class="{ 'bg-[#E0E0E0]': selectedRate === 1 }"
      >
        <p>1</p>
        <StartSvg />
      </div>
      <div
        @click="handleRateChage(2)"
        class="flex items-center justify-center gap-[1px] border-r border-r-[#E0E0E0] w-full h-full cursor-pointer"
        :class="{ 'bg-[#E0E0E0]': selectedRate === 2 }"
      >
        <p>2</p>
        <StartSvg />
      </div>
      <div
        @click="handleRateChage(3)"
        class="flex items-center justify-center gap-[1px] border-r border-r-[#E0E0E0] w-full h-full cursor-pointer"
        :class="{ 'bg-[#E0E0E0]': selectedRate === 3 }"
      >
        <p>3</p>
        <StartSvg />
      </div>
      <div
        @click="handleRateChage(4)"
        class="flex items-center justify-center gap-[1px] border-r border-r-[#E0E0E0] w-full h-full cursor-pointer"
        :class="{ 'bg-[#E0E0E0]': selectedRate === 4 }"
      >
        <p>4</p>
        <StartSvg />
      </div>
      <div
        @click="handleRateChage(5)"
        class="flex items-center justify-center gap-[1px] cursor-pointer w-full h-full"
        :class="{ 'bg-[#E0E0E0]': selectedRate === 5 }"
      >
        <p>5</p>
        <StartSvg />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import StartSvg from "../../../assets/svg/starSvg.vue";

const emit = defineEmits(["get-rate"]);
const selectedRate = ref("");

const handleRateChage = (rate) => {
  selectedRate.value = rate;
  emit("get-rate", rate);
};
</script>
