<template>
  <div
    class="w-full bg-[#FCEFCA] h-[72px] rounded-lg flex items-center px-6 gap-5"
  >
    <WarningSvg />
    <p class="text-[#333333] tracking-[0.32px]">
      Check the latest COVID-19 restrictions before you travel.
      <span
        @click="openTravelRequirementsPage"
        class="text-[#2F80ED] cursor-pointer hover:underline underline-offset-2"
      >
        Learn more
      </span>
    </p>
  </div>
</template>

<script>
import WarningSvg from "../assets/svg/warningSvg.vue";

export default {
  components: {
    WarningSvg,
  },
  methods: {
    openTravelRequirementsPage() {
      window.open(
        "https://www.emirates.com/eg/english/help/covid-19/travel-requirements-by-destination/"
      );
    },
  },
};
</script>
