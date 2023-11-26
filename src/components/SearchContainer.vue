<template>
  <div
    class="flex left-0 right-0 bottom-[-32px] absolute items-center justify-between gap-[15px] px-3 mx-[105px] bg-white h-[64px] shadow-hero rounded-lg"
  >
    <div
      class="flex items-center w-[206px] p-3 gap-[10px] bg-[#F2F2F2] rounded relative"
    >
      <LocationSvg />
      <div
        class="cursor-pointer flex items-center justify-between w-full"
        @click="toggleMenu"
      >
        <p class="text-[#4F4F4F] text-[13px] tracking-[-0.26px]">
          {{ selectedLocation || "Where are you going?" }}
        </p>
        <ArrowUpSvg v-if="showMenu" />
        <ArrowDownSvg v-else />
      </div>
      <DropdownMenu
        v-if="showMenu"
        :data="data"
        @item-selected="updateSelectedLocation"
        class="left-0 absolute top-[120%]"
      />
    </div>
    <VueDatePicker />
    <div
      class="flex items-center gap-[10px] p-3 w-[148px] rounded bg-[#F2F2F2]"
    >
      <GuestSvg />
      <input
        type="text"
        name="guests"
        :value="guests"
        @input="handleChange"
        placeholder="Guests"
        class="bg-transparent focus:outline-none w-full text-[#4F4F4F] text-[13px] tracking-[-0.26px]"
      />
    </div>
    <div
      class="flex items-center gap-[10px] p-3 w-[148px] rounded bg-[#F2F2F2]"
    >
      <RoomsSvg />
      <input
        type="text"
        name="rooms"
        :value="rooms"
        @input="handleChange"
        placeholder="Rooms"
        class="bg-transparent focus:outline-none w-full text-[#4F4F4F] text-[13px] tracking-[-0.26px]"
      />
    </div>
    <button
      @click="logData"
      class="text-white text-[15px] font-medium leading-5 tracking-[0.3px] bg-[#2F80ED] rounded-md py-3 px-[18px] w-[134px] hover:bg-white hover:text-[#2F80ED] border-2 border-[#2F80ED]"
    >
      Search
    </button>
  </div>
</template>

<script>
import heroBanner from "../assets/images/heroBanner.png";
import ArrowDownSvg from "../assets/svg/arrowDownSvg.vue";
import ArrowUpSvg from "../assets/svg/arrowUpSvg.vue";
import GuestSvg from "../assets/svg/guestSvg.vue";
import RoomsSvg from "../assets/svg/roomsSvg.vue";
import LocationSvg from "../assets/svg/locationSvg.vue";
import DropdownMenu from "./DropdownMenu.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  components: {
    LocationSvg,
    ArrowDownSvg,
    ArrowUpSvg,
    DropdownMenu,
    GuestSvg,
    RoomsSvg,
    VueDatePicker,
  },
  data() {
    return {
      heroBanner: heroBanner,
      showMenu: false,
      data: ["Cairo", "Giza", "Aswan", "Luxor"],
      selectedLocation: null,
      guests: "",
      rooms: "",
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    updateSelectedLocation(item) {
      this.selectedLocation = item;
      this.showMenu = false;
    },
    handleChange(event) {
      this[event.target.name] = event.target.value;
    },
    logData() {
      console.log(this.guests);
      console.log(this.rooms);
    },
  },
};
</script>