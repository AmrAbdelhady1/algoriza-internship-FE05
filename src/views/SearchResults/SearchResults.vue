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
          <span v-if="meta.length > 0">{{ meta[0]?.title }}</span>
          <span v-else>0</span> search results found
        </p>

        <SortByMenu :sort-list="sortList" @selected-item="handleSortBy" />
      </div>

      <SearchedHotals
        :hotels="hotels?.hotels"
        :arrival_date="data?.arrival_date"
        :departure_date="data?.departure_date"
      />

      <div v-if="meta.length > 0" class="flex w-full justify-center mt-[56px]">
        <el-pagination
          background
          :page-size="20"
          :pager-count="4"
          layout="prev, pager, next"
          :total="parseInt(meta[0]?.title)"
          @current-change="handlePageChange"
        />
      </div>
    </div>
  </div>
  <div class="lg:px-[100px] md:px-[35px] px-[10px]">
    <WarningMessage class="mt-[96px] mb-[72px]" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getData } from "../../axios/axiosClient";

import RateFilter from "./components/RateFilter.vue";
import SearchByName from "./components/SearchByName.vue";
import BudgetFilter from "./components/BudgetFilter.vue";
import SearchedHotals from "./components/SearchedHotals.vue";
import WarningMessage from "../../components/WarningMessage.vue";
import SearchContainer from "../../components/SearchContainer.vue";
import SortByMenu from "./components/SortByMenu.vue";

const emit = defineEmits(["footer-color", "show-links"]);
const route = useRoute();
const data = ref({ ...route.query });
const hotels = ref([]);
const meta = ref([]);
const filteredHotels = ref([]);
const sortList = ref([]);

const getHotels = async (query) => {
  const url = "searchHotels";
  const params = { ...query };
  delete params.selectedCityName;
  const response = await getData(params, url, true);

  if (response) {
    hotels.value = response.data.data;
    filteredHotels.value = response.data.data;

    if (response.data.data.meta.length > 0) {
      meta.value = response.data.data.meta;
    }
  }
};

const getSortList = async (query) => {
  const url = "getSortBy";
  const params = { ...query };
  delete params.selectedCityName;
  const response = await getData(params, url, false);

  if (response) {
    sortList.value = response.data.data;
  }
};

onMounted(() => {
  getHotels(data.value);
  getSortList(data.value);

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
    query = { ...data.value, page_number: "1" };
    delete query.price_min;
    delete query.price_max;
  } else {
    query = { ...data.value, price_min: min, price_max: max, page_number: "1" };
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

const handlePageChange = (page) => {
  const query = { ...data.value, page_number: page };
  data.value = query;

  getHotels(query);
};

const handleSortBy = (item) => {
  const query = { ...data.value, page_number: 1, sort_by: item.id };
  data.value = query;

  getHotels(query);
};
</script>
