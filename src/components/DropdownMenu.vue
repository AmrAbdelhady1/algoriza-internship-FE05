<template>
  <div
    class="bg-white rounded-[10px] shadow-md flex w-[206px] items-center flex-col"
  >
    <div
      v-for="item in data"
      @click="selectItem(item)"
      class="py-[10px] border-b border-b-[#D6D6D6] text-[#4F4F4F] text-[13px] tracking-[0.26px] w-full flex justify-center
      hover:bg-[#D6D6D6] cursor-pointer"
    >
      <p>{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    selectItem(item) {
      this.$emit("item-selected", item);
    },
  },
};
</script>
