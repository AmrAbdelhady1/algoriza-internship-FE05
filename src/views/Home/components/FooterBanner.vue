<template>
  <div class="relative mb-[80px]">
    <img :src="footerBannerImg" alt="footer-banner" class="w-full h-[280px]" />
    <img
      :src="footerHandImg"
      alt="footer-hand"
      class="absolute bottom-0 top-0 right-5"
    />
    <div class="absolute top-[64px] left-[69px] text-white">
      <h1
        class="w-[580px] text-[28px] font-semibold leading-[39.2px] mb-[30px]"
      >
        Download the mobile application for bonus coupons and travel codes
      </h1>
      <button
        class="text-[15px] font-medium leading-5 tracking-[0.3px] px-[18px] py-3 rounded-md bg-[#2F80ED] border border-[#2F80ED] hover:bg-transparent"
      >
        Download mobile app
      </button>
    </div>
  </div>
</template>

<script>
import footerBannerImg from "../../../assets/images/footerBanner.png";
import footerHandImg from "../../../assets/images/footerHand.png";

export default {
  data() {
    return {
      footerBannerImg: footerBannerImg,
      footerHandImg: footerHandImg,
    };
  },
};
</script>
