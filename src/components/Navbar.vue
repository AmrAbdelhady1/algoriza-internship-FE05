<template>
  <nav
    class="flex items-center justify-between h-[68px]"
  >
    <div class="flex items-center gap-1">
      <LogoSvg />
      <p class="text-[#1B1F2D] text-lg font-medium tracking-[0.36px]">
        my Dream Place
      </p>
    </div>
    <div class="flex items-center gap-12 text-[#333333] tracking-[0.32px]">
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
    <button
      class="px-[18px] py-[10px] rounded-md bg-[#2F80ED] border border-[#2F80ED] text-white text-[15px] font-medium tracking-[0.3px]"
    >
      Register
    </button>
  </nav>
</template>

<script>
import LogoSvg from "../assets/svg/logoSvg.vue";

export default {
  components: {
    LogoSvg,
  },
  data() {
    return {
      navigationItems: ["Home", "Discover", "Activities", "About", "Contact"],
      hoveredIndex: -1,
    };
  },
  methods: {
    setHovered(index) {
      this.hoveredIndex = index;
    },
  },
};
</script>
