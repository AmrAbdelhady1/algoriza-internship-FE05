<template>
  <div
    class="bg-white rounded-[10px] shadow-md flex w-[206px] items-center flex-col"
  >
    <div
      v-for="city in cityList"
      @click="selectCity(city)"
      class="py-[10px] border-b border-b-[#D6D6D6] text-[#4F4F4F] text-[13px] tracking-[0.26px] w-full flex justify-center hover:bg-[#D6D6D6] cursor-pointer"
    >
      <p>{{ city?.name }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cityList: {
    default: [],
  },
});
const emit = defineEmits(["selected-city"]);

const selectCity = (city) => {
  emit("selected-city", city);
};
</script>
