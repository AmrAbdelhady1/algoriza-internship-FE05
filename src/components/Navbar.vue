<template>
  <nav
    class="flex items-center justify-between h-[68px]"
    :class="{
      'bg-[#2969BF]': showLinks === 'blue',
    }"
  >
    <router-link
      :to="{ name: 'home' }"
      class="flex items-center gap-1 cursor-pointer"
    >
    <WhiteLogoSvg v-if="showLinks === 'blue'"/>
      <LogoSvg v-else/>
      <p
        class="text-[#1B1F2D] text-lg font-medium tracking-[0.36px]"
        :class="{
          'text-white': showLinks === 'blue',
        }"
      >
        my Dream Place
      </p>
    </router-link>
    <div
      v-if="showLinks"
      class="flex items-center gap-12 text-[#333333] tracking-[0.32px]"
      :class="{ 'text-white': showLinks === 'blue' }"
    >
      <p
        v-for="(item, index) in navigationItems"
        :key="index"
        @mouseover="setHovered(index)"
        @mouseleave="setHovered(-1)"
        :class="[index === hoveredIndex ? 'hover:underline' : '', '']"
      >
        {{ item }}
      </p>
    </div>
    <div v-else></div>
    <div v-if="isLoggedin" class="flex items-center gap-[22px]">
      <NotificationSvg />
      <div class="relative cursor-pointer" @click="toggleMenu">
        <ProfilePicSvg />
        <UserMenu v-if="showMenu" class="absolute right-0 top-[110%]" />
      </div>
    </div>
    <router-link
      :to="{ name: 'signup' }"
      v-else
      class="px-[18px] py-[10px] rounded-md bg-[#2F80ED] hover:bg-transparent hover:text-[#2F80ED] border border-[#2F80ED] text-white text-[15px] font-medium tracking-[0.3px]"
    >
      Register
    </router-link>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import LogoSvg from "../assets/svg/logoSvg.vue";
import WhiteLogoSvg from "../assets/svg/whiteLogoSvg.vue";
import NotificationSvg from "../assets/svg/notificationSvg.vue";
import ProfilePicSvg from "../assets/svg/profilePicSvg.vue";
import UserMenu from "./UserMenu.vue";

const isLoggedin = localStorage.getItem("token") ? true : false;
const navigationItems = ["Home", "Discover", "Activities", "About", "Contact"];
const hoveredIndex = ref(-1);
const showMenu = ref(false);

const setHovered = (index) => {
  hoveredIndex.value = index;
};
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

defineProps({
  showLinks: {
    default: true,
  },
});
</script>
