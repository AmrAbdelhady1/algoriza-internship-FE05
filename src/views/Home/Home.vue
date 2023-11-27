<template>
  <div class="lg:px-[100px] md:px-[35px] px-[10px]">
    <HeroBanner />
    <WarningMessage class="mt-[82px] mb-[50px]" />
    <DreamVacations />
    <NextTrip />
    <PopularHotals />
    <FooterBanner />

    <h1
      class="text-center text-[#181818] text-[28px] font-semibold leading-[39.2px]"
    >
      Explore the world with My Dream place
    </h1>
    <p
      class="text-center text-[#2F80ED] text-base font-normal leading-[39.2px] mb-[80px] tracking-[0.32px] hover:underline underline-offset-2 cursor-pointer"
    >
      Discover new places and experiences
    </p>
  </div>

  <WelcomeCard v-if="showCard" @hide-card="toggleCardChange" />
</template>

<script>
import WarningMessage from "../../components/WarningMessage.vue";
import WelcomeCard from "../../components/WelcomeCard.vue";
import DreamVacations from "./components/DreamVacations.vue";
import FooterBanner from "./components/FooterBanner.vue";
import HeroBanner from "./components/HeroBanner.vue";
import NextTrip from "./components/NextTrip.vue";
import PopularHotals from "./components/PopularHotals.vue";
import { useStore } from "../../stores/Store";

export default {
  components: {
    HeroBanner,
    WarningMessage,
    DreamVacations,
    NextTrip,
    PopularHotals,
    FooterBanner,
    WelcomeCard,
  },
  mounted() {
    this.$emit("footerColor", "white");
  },
  data() {
    const store = useStore();
    return {
      showCard: store.showCard,
    };
  },
  methods: {
    toggleCardChange() {
      this.showCard = false;
    },
  },
};
</script>
