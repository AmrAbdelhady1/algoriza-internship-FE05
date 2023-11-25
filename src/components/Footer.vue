<template>
  <div
    class="lg:px-[100px] md:px-[35px] px-[10px] mb-[60px] flex flex-wrap justify-between items-start"
  >
    <div class="flex items-start gap-1">
      <LogoSvg />
      <div>
        <h1 class="text-[#1B1F2D] font-medium text-lg tracking-[0.36px]">
          my Dream Place
        </h1>
        <p
          class="w-[200px] text-[#4F4F4F] text-sm tracking-[0.28px] leading-[19px]"
        >
          Your next goto companion for travel
        </p>
      </div>
    </div>
    <div v-for="item in data" :id="item.header">
      <h1 class="font-medium tracking-[0.32px] mb-5">{{ item.header }}</h1>
      <p
        v-for="link in item.links"
        :id="link"
        :class="[
          link === 'See more' ? 'text-[#2F80ED]' : 'text-[#4F4F4F]',
          'mb-[10px] text-sm tracking-[0.28px] cursor-pointer hover:underline',
        ]"
      >
        {{ link }}
      </p>
    </div>
  </div>
  <div
    class="w-full h-[40px] bg-[#EBEBEB] flex justify-end items-center px-[205px] gap-[6px]"
  >
    <CopyRightSvg />
    <p class="text-[#4F4F4F] text-sm leading-[19.6px]">my Dream Place 2022</p>
  </div>
</template>

<script>
import CopyRightSvg from "../assets/svg/copyRightSvg.vue";
import LogoSvg from "../assets/svg/logoSvg.vue";

export default {
  components: { CopyRightSvg, LogoSvg },
  data() {
    return {
      data: [
        {
          header: "Company",
          links: ["About", "Jobs", "Newsroom", "Advertising", "Contact us"],
        },
        {
          header: "Explore",
          links: [
            "Australia",
            "New Zealand",
            "United States America (USA)",
            "Greece",
            "Maldives",
            "Singapore",
            "See more",
          ],
        },
        {
          header: "Terms and Policies",
          links: [
            "Privacy Policy",
            "Terms of use",
            "Acessibility",
            "Reward system policy",
          ],
        },
        {
          header: "Help",
          links: [
            "Support",
            "Cancel your bookings",
            "Use Coupon",
            "Refund Policies",
            "International Travel Documents",
          ],
        },
      ],
    };
  },
};
</script>
