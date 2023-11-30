<template>
  <div
    v-if="store.openLoader"
    class="fixed w-full min-h-screen bg-black/75 top-0 right-0 left-0 bottom-0 z-50 flex items-center justify-center"
  >
    <div
      class="w-[250px] h-[200px] bg-white rounded-md flex items-center justify-center flex-col"
    >
      <p class="text-[#181818] font-medium text-lg mb-8">Loading please wait...</p>
      <div class="border-gray-300 h-16 w-16 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "../stores/Store";

const store = useStore();

</script>
