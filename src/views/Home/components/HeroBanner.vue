<template>
  <div class="mt-3 relative">
    <img :src="heroBanner" alt="hero-banner" class="w-full" />
    <div
      class="absolute flex flex-col items-center top-0 bottom-0 left-0 right-0 justify-center m-auto text-white text-xl tracking-[0.4px]"
    >
      <h1 class="text-[32px] font-bold tracking-normal mb-5">
        Enjoy Your Dream Vacation
      </h1>
      <p>
        Plan and book our perfect trip with expert advice, travel tips,
        destination
      </p>
      <p>information and inspiration from us</p>
    </div>

    <SearchContainer />
  </div>
</template>

<script>
import heroBanner from "../../../assets/images/heroBanner.png";
import SearchContainer from "../../../components/SearchContainer.vue";

export default {
  data() {
    return {
      heroBanner: heroBanner,
    };
  },
  components: { SearchContainer },
};
</script>
