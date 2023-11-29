<template>
  <div class="w-[810px] h-[328px] rounded-md bg-white mb-[30px]">
    <div
      class="w-full h-[60px] bg-[#2F80ED] rounded-t-md flex items-center gap-[18px] text-white font-medium px-5 mb-[32px]"
    >
      <div class="flex items-center gap-4">
        <SecuirtyUserSvg />
        <h1 class="text-[18px]">Room 1</h1>
      </div>
      <p>2 adults, 1 double bed and 1 twin bed, Non-smoking</p>
    </div>

    <div
      class="flex items-start px-8 gap-5 text-[#181818] text-sm font-medium tracking-[0.28px] mb-5"
    >
      <div>
        <h1>First name</h1>
        <input
          type="text"
          value="Juilis"
          class="w-[240px] mt-1 p-3 rounded bg-[#F2F2F2] text-[15px] font-normal border border-[#F2F2F2] text-[#333333] focus:bg-white focus:border-[#2F80ED] focus:outline-none"
        />
      </div>
      <div>
        <h1>Last name</h1>
        <input
          type="text"
          value="Lorenzo"
          class="w-[240px] mt-1 p-3 rounded bg-[#F2F2F2] text-[15px] font-normal border border-[#F2F2F2] text-[#333333] focus:bg-white focus:border-[#2F80ED] focus:outline-none"
        />
      </div>
    </div>

    <div class="px-8 text-[#181818] text-sm font-medium tracking-[0.28px] mb-5">
      <h1>Mobile number</h1>
      <div class="flex items-center gap-3 mt-1">
        <div
          class="flex items-center gap-[10px] w-[150px] p-3 rounded bg-[#F2F2F2]"
        >
          <img :src="flagImg" alt="flag" class="w-6 h-6" />
          <div class="flex items-center justify-between w-full">
            <p class="text-[#333333] text-[15px] font-normal">+61</p>
            <ArrowDownSvg />
          </div>
        </div>
        <input
          type="text"
          value="88672778"
          class="w-[240px] p-3 rounded bg-[#F2F2F2] text-[15px] font-normal border border-[#F2F2F2] text-[#333333] focus:bg-white focus:border-[#2F80ED] focus:outline-none"
        />
      </div>
    </div>

    <div class="px-8 flex items-center gap-2">
      <input
        type="checkbox"
        class="!w-5 !h-5 !rounded-[5px] !border !border-[#BDBDBD]"
      />
      <p class="text-[#333333] font-normal text-sm">
        Receive text alerts about this trip.
      </p>
    </div>
  </div>
</template>

<script setup>
import flagImg from "../../../assets/images/flag.png";
import ArrowDownSvg from "../../../assets/svg/arrowDownSvg.vue";
import SecuirtyUserSvg from "../../../assets/svg/secuirtyUserSvg.vue";
</script>
