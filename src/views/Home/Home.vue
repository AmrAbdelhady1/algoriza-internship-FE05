<template>
  <div class="lg:px-[100px] md:px-[35px] px-[10px]">
    <div class="relative">
      <HeroBanner />
      <SearchContainer @search-data="handleSearch" :queryData="null" />
    </div>
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

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../../stores/Store";

import NextTrip from "./components/NextTrip.vue";
import HeroBanner from "./components/HeroBanner.vue";
import FooterBanner from "./components/FooterBanner.vue";
import WelcomeCard from "../../components/WelcomeCard.vue";
import PopularHotals from "./components/PopularHotals.vue";
import DreamVacations from "./components/DreamVacations.vue";
import WarningMessage from "../../components/WarningMessage.vue";
import SearchContainer from "../../components/SearchContainer.vue";

const emit = defineEmits(["footer-color", "show-links"]);
const store = useStore();
const router = useRouter();
const showCard = ref(store.showCard);

onMounted(() => {
  emit("footer-color", "white");
  emit("show-links", true);
});

const toggleCardChange = () => {
  showCard.value = false;
};

const handleSearch = (searchData) => {
  const query = {
    dest_id: searchData.value.selectedCity.dest_id,
    search_type: searchData.value.selectedCity.dest_type,
    arrival_date: searchData.value.checkIn,
    departure_date: searchData.value.checkOut,
    adults: searchData.value.guest,
    room_qty: searchData.value.rooms,
    page_number: "1",
    selectedCityName: searchData.value.selectedCity.name,
  };

  router.push({
    name: "searchResults",
    query,
  });
};
</script>
