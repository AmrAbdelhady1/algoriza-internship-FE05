<template>
  <h1 class="text-[#333333] text-lg font-semibold tracking-[0.36px] m-5">
    Filter by
  </h1>

  <div class="w-[295px] bg-white rounded-md border border-[#E0E0E0]">
    <div
      class="w-full p-[18px] border-b border-b-[#E0E0E0] bg-[#F2F2F2] rounded-t-md"
    >
      <p class="text-[#181818] font-medium tracking-[0.16px]">
        Your budget per day
      </p>
    </div>

    <div class="p-[18px] text-[#333333] text-[14px] tracking-[0.28px]">
      <div class="flex flex-col gap-[14px] mb-5">
        <label
          v-for="(item, index) in checkboxes"
          :key="index"
          class="flex items-center gap-2"
        >
          <input
            type="checkbox"
            :checked="item.value === selectedBudget.value ? true : false"
            @click="handleInputChange(item)"
            class="w-5 h-5"
          />
          <span>{{ item.label }}</span>
        </label>
      </div>

      <div class="flex items-center justify-between">
        <p class="text-[#4F4F4F]">Set your own budget</p>
        <el-switch v-model="showOwnBudget" />
      </div>

      <form
        v-if="showOwnBudget"
        @keyup.enter="handleSubmit"
        class="mt-1 border border-dashed border-[#D9D9D9] text-xs w-full p-[10px]"
      >
        <div class="flex items-center gap-[13px] mb-2">
          <input
            type="text"
            v-model="minBudget"
            placeholder="Min budget"
            class="w-[103px] h-[39px] p-3 rounded border border-[#E0E0E0] focus:outline-none"
          />
          <input
            type="text"
            v-model="maxBudget"
            placeholder="Max budget"
            class="w-[103px] h-[39px] p-3 rounded border border-[#E0E0E0] focus:outline-none"
          />
        </div>
        <p>Press Enter to filter</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["get-budget"]);

const checkboxes = [
  { label: "$ 0 - $ 200", value: "budget1", min: 0, max: 200 },
  { label: "$ 200 - $ 500", value: "budget2", min: 200, max: 500 },
  { label: "$ 500 - $ 1,000", value: "budget3", min: 500, max: 1000 },
  { label: "$ 1,000 - $ 2,000", value: "budget4", min: 1000, max: 2000 },
  { label: "$ 2,000 - $ 5,000", value: "budget5", min: 2000, max: 5000 },
];

const selectedBudget = ref({});
const minBudget = ref("");
const maxBudget = ref("");
const showOwnBudget = ref(false);

const handleInputChange = (selectedValue) => {
  let valid = false;
  if (selectedBudget.value.value) {
    if (selectedBudget.value.value === selectedValue.value) {
      valid = true;
    }
  }
  selectedBudget.value =
    selectedBudget.value === selectedValue.value ? "" : selectedValue;
  emit("get-budget", selectedValue.min, selectedValue.max, valid);
};

const handleSubmit = () => {
  if (minBudget.value || maxBudget.value) {
    emit(
      "get-budget",
      minBudget.value === "" ? 0 : parseFloat(minBudget.value),
      maxBudget.value === "" ? 0 : parseFloat(maxBudget.value)
    );
  }
};
</script>
