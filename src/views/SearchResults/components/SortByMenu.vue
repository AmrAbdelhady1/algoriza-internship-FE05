<template>
  <div
    @click="openMenu"
    class="flex items-center w-[230px] justify-between p-3 bg-white rounded-md border border-[#BDBDBD] relative"
  >
    <p class="text-[#4F4F4F] text-[13px] tracking-[-0.26px]">
      {{ selectedItem?.title || "Sort by" }}
    </p>
    <ArrowUpSvg v-if="showMenu" />
    <ArrowDownSvg v-else />

    <div
      v-if="showMenu"
      class="bg-white rounded-[10px] shadow-md w-full flex justify-center items-center flex-col left-0 absolute top-[110%]"
    >
      <div
        v-for="item in sortList"
        @click="selectItem(item)"
        class="py-[10px] border-b border-b-[#D6D6D6] text-[#4F4F4F] text-[13px] tracking-[0.26px] w-full flex justify-center hover:bg-[#D6D6D6] cursor-pointer"
      >
        <p>{{ item?.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import ArrowUpSvg from "../../../assets/svg/arrowUpSvg.vue";
import ArrowDownSvg from "../../../assets/svg/arrowDownSvg.vue";

defineProps({
  sortList: {
    default: [],
  },
});
const emit = defineEmits(["selected-item"]);

const selectedItem = ref(null);
const showMenu = ref(false);

const openMenu = async () => {
  showMenu.value = !showMenu.value;
};

const selectItem = (item) => {
  emit("selected-item", item);
  selectedItem.value = item;
};
</script>
