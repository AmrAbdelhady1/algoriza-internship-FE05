<template>
  <div
    class="flex left-0 right-0 bottom-[-32px] absolute items-center justify-between gap-[15px] px-3 mx-[105px] bg-white h-[64px] shadow-hero rounded-lg"
  >
    <div
      class="flex items-center w-full p-3 gap-[10px] bg-[#F2F2F2] rounded relative"
    >
      <LocationSvg />
      <div
        class="cursor-pointer flex items-center justify-between w-full"
        @click="openCitiesMenu"
      >
        <p class="text-[#4F4F4F] text-[13px] tracking-[-0.26px]">
          {{ searchData.selectedCity?.name || "Where are you going?" }}
        </p>
        <ArrowUpSvg v-if="showCityMenu" />
        <ArrowDownSvg v-else />
      </div>
      <DropdownMenu
        v-if="showCityMenu"
        :cityList="cityList"
        @selected-city="handleSelectedCity"
        class="left-0 absolute top-[120%]"
      />
    </div>
    <div class="flex items-center gap-[10px] p-3 w-full rounded bg-[#F2F2F2]">
      <CalendarSvg />
      <input
        type="date"
        name="checkIn"
        :value="searchData.checkIn"
        @input="handleChange"
        placeholder="Check in date"
        class="bg-transparent focus:outline-none w-full text-[#4F4F4F] text-[13px] tracking-[-0.26px]"
      />
    </div>
    <div class="flex items-center gap-[10px] p-3 w-full rounded bg-[#F2F2F2]">
      <CalendarSvg />
      <input
        type="date"
        name="checkOut"
        :value="searchData.checkOut"
        @input="handleChange"
        placeholder="Check out date"
        class="bg-transparent focus:outline-none w-full text-[#4F4F4F] text-[13px] tracking-[-0.26px]"
      />
    </div>
    <div class="flex items-center gap-[10px] p-3 w-full rounded bg-[#F2F2F2]">
      <GuestSvg />
      <input
        type="text"
        name="guest"
        :value="searchData.guest"
        @input="handleChange"
        placeholder="Guests"
        class="bg-transparent focus:outline-none w-full text-[#4F4F4F] text-[13px] tracking-[-0.26px]"
      />
    </div>
    <div class="flex items-center gap-[10px] p-3 w-full rounded bg-[#F2F2F2]">
      <RoomsSvg />
      <input
        type="text"
        name="rooms"
        :value="searchData.rooms"
        @input="handleChange"
        placeholder="Rooms"
        class="bg-transparent focus:outline-none w-full text-[#4F4F4F] text-[13px] tracking-[-0.26px]"
      />
    </div>
    <button
      @click="handleSubmit"
      class="text-white text-[15px] font-medium leading-5 tracking-[0.3px] bg-[#2F80ED] rounded-md py-3 px-[18px] w-[134px] hover:bg-white hover:text-[#2F80ED] border-2 border-[#2F80ED]"
    >
      Search
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getData } from "../axios";
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";

import DropdownMenu from "./DropdownMenu.vue";
import GuestSvg from "../assets/svg/guestSvg.vue";
import RoomsSvg from "../assets/svg/roomsSvg.vue";
import ArrowUpSvg from "../assets/svg/arrowUpSvg.vue";
import LocationSvg from "../assets/svg/locationSvg.vue";
import CalendarSvg from "../assets/svg/calendarSvg.vue";
import ArrowDownSvg from "../assets/svg/arrowDownSvg.vue";

const emit = defineEmits(["search-data"]);

const { queryData } = defineProps({
  queryData: {
    default: null,
  },
});

const router = useRouter();
const showCityMenu = ref(false);
const cityList = ref([]);
const searchData = ref({
  selectedCity: queryData
    ? {
        dest_id: queryData.dest_id,
        search_type: queryData.search_type,
        name: queryData.selectedCityName,
      }
    : null,
  checkIn: queryData?.arrival_date || "",
  checkOut: queryData?.departure_date || "",
  guest: queryData?.adults || "",
  rooms: queryData?.room_qty || "",
});

onMounted(async () => {
  const params = { query: "egypt" };
  const url = "searchDestination";

  // const response = await getData(params, url, false);

  // if (response) {
  //   cityList.value = response.data.data;
  // }
});

const openCitiesMenu = async () => {
  showCityMenu.value = !showCityMenu.value;
};

const handleSelectedCity = (item) => {
  searchData.value.selectedCity = item;
  showCityMenu.value = false;
};
const handleChange = (event) => {
  searchData.value[event.target.name] = event.target.value;
};

const validateSearch = () => {
  let isValid = true;

  if (searchData.value.selectedCity === null) {
    toast.error("Please select the city");
    isValid = false;
  } else if (searchData.value.checkIn === "") {
    toast.error("Please select check in data");
    isValid = false;
  } else if (searchData.value.checkOut === "") {
    toast.error("Please select check out data");
    isValid = false;
  }

  return isValid;
};

const handleSubmit = () => {
  if(localStorage.getItem("token")){
    const isValid = validateSearch();
  
    if (isValid) {
      emit("search-data", searchData);
    }
  }else{
    router.push("/reg")
  }
};
</script>
