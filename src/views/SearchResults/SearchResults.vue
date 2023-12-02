<template>
  <div class="h-[132px] bg-gradient-to-b from-[#2969BF] to-[#144E9D] relative">
    <SearchContainer @search-data="handleSearch" :queryData="data" />
  </div>

  <div
    class="flex items-start gap-[31px] mt-[104px] lg:px-[100px] md:px-[35px] px-[10px]"
  >
    <div>
      <SearchByName @change="handleSearchByName" />
      <BudgetFilter @get-budget="handleBudgetFilter" />
      <RateFilter @get-rate="handleRateFilter" />
    </div>

    <div class="w-full">
      <div class="flex items-start justify-between mb-6">
        <p class="text-[#181818] text-[24px] font-semibold">
          {{ route.query.selectedCityName }} :
          <span v-if="hotels?.meta">{{ hotels?.meta[0]?.title }}</span>
          <span v-else>0</span> search results found
        </p>
      </div>

      <SearchedHotals :hotels="hotels?.hotels" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getData } from "../../axios";

import RateFilter from "./components/RateFilter.vue";
import SearchByName from "./components/SearchByName.vue";
import BudgetFilter from "./components/BudgetFilter.vue";
import SearchedHotals from "./components/SearchedHotals.vue";
import SearchContainer from "../../components/SearchContainer.vue";

const emit = defineEmits(["footer-color", "show-links"]);
const route = useRoute();
const data = ref({ ...route.query });
const hotels = ref([]);
const filteredHotels = ref([]);

const getHotels = async (query) => {
  const url = "searchHotels";
  const params = { ...query };
  delete params.selectedCityName;
  const response = await getData(params, url, true);

  if (response) {
    hotels.value = response.data.data;
    filteredHotels.value = response.data.data;
  }
};

onMounted(() => {
  // getHotels(searchData);

  emit("footer-color", "white");
  emit("show-links", "blue");
});

const handleSearch = (searchData) => {
  const query = {
    dest_id: searchData.value.selectedCity.dest_id,
    search_type: searchData.value.selectedCity.search_type,
    arrival_date: searchData.value.checkIn,
    departure_date: searchData.value.checkOut,
    adults: searchData.value.guest,
    room_qty: searchData.value.rooms,
    page_number: "1",
    selectedCityName: searchData.value.selectedCity.name,
  };
  data.value = query;

  getHotels(query);
};

const handleSearchByName = (name) => {
  const filteredData = filteredHotels.value.hotels.filter((hotel) =>
    hotel?.property?.name.toLowerCase().includes(name.toLowerCase())
  );

  hotels.value = { ...hotels.value, hotels: filteredData };
};

const handleBudgetFilter = (min, max, valid) => {
  let query;
  if (valid) {
    query = { ...data.value };
    delete query.price_min;
    delete query.price_max;
  } else {
    query = { ...data.value, price_min: min, price_max: max };
  }
  data.value = query;

  getHotels(query);
};

const handleRateFilter = (value) => {
  const filteredData = filteredHotels.value.hotels.filter(
    (hotel) => Math.floor(hotel?.property?.reviewScore / 2) >= value
  );

  hotels.value = { ...hotels.value, hotels: filteredData };
};
</script>
