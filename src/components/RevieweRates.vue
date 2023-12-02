<template>
  <p v-for="i in 5">
    <StarSvg v-if="i <= rate" />
    <HalfStarSvg v-else-if="i - 0.5 === rate" />
  </p>
</template>

<script setup>
import StarSvg from "../assets/svg/starSvg.vue";
import HalfStarSvg from "../assets/svg/halfStarSvg.vue";

defineProps({
  rate: {
    default: 0,
  },
});
</script>
