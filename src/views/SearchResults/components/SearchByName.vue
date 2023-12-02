<template>
  <div class="w-[295px] h-[119px] rounded-md bg-[#F2F2F2] p-5">
    <p class="text-[#181818] font-medium tracking-[0.16px] mb-3">
      Search by property name
    </p>
    <div
      class="w-full p-3 flex items-center gap-[10px] rounded bg-white border border-[#E0E0E0]"
    >
      <SearchIconSvg />
      <input
        type="text"
        placeholder="eg. Beach westpalm"
        @input="handleChange"
        class="bg-transparent w-full border-none focus:outline-none text-[#4F4F4F] text-sm leading-5 tracking-[0.28px]"
      />
    </div>
  </div>
</template>

<script setup>
import SearchIconSvg from "../../../assets/svg/searchIconSvg.vue";

const emit = defineEmits(["change"]);

const handleChange = (event) => {
  emit("change", event.target.value);
};
</script>
