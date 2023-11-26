<template>
  <div
    class="fixed w-full min-h-screen bg-black/75 top-0 right-0 left-0 bottom-0 z-50 flex items-center justify-center"
  >
    <div
      class="w-[400px] h-[500px] bg-white rounded-[10px] flex flex-col justify-center items-center"
    >
      <div
        class="flex w-[240px] h-[200px] bg-[#2F80ED4D] rounded-full items-center justify-center mb-[45px]"
      >
        <BoyCardSvg />
        <GirlCardSvg />
      </div>
      <h1 class="text-[#181818] text-xl font-semibold h-8 mb-3">
        Welcome to My Dream Place
      </h1>
      <p
        class="w-[352px] text-[#4F4F4F] tracking-[0.32px] leading-[22.4px] mb-[45px] text-center"
      >
        You can now enjoy your travel experience with easy access to resources
        and more
      </p>
      <button
        @click="hideCard"
        class="w-[352px] py-3 px-[18px] rounded-md bg-[#2F80ED] text-white text-[15px] font-medium tracking-[0.3px] leading-5"
      >
        Get Started
      </button>
    </div>
  </div>
</template>

<script>
import BoyCardSvg from "../assets/svg/boyCardSvg.vue";
import GirlCardSvg from "../assets/svg/girlCardSvg.vue";

export default {
  components: { BoyCardSvg, GirlCardSvg },
  methods: {
    hideCard() {
      this.$emit("hide-card");
    },
  },
};
</script>
