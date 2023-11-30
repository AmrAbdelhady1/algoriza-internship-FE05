<template>
  <div class="w-[810px] h-[580px] rounded-md bg-white mb-[30px]">
    <div
      class="w-full h-[60px] bg-[#2F80ED] rounded-t-md flex items-center gap-[16px] text-white font-medium px-5 mb-[32px]"
    >
      <PaymentOptionsSvg />
      <p>Payment options</p>
    </div>

    <div class="w-full h-[30px] border-b border-b-[#E0E0E0] px-8 flex">
      <div class="px-[14px] border-b-[3px] border-b-[#2F80ED] w-[146px]">
        <p class="text-[#333333] text-sm tracking-[0.28px]">
          Debit/Credit Card
        </p>
      </div>
    </div>

    <div class="flex items-center gap-[6px] px-8 pt-8 pb-[26px]">
      <div
        class="w-[60px] h-10 rounded-[5px] bg-[#F2F2F2] flex items-center justify-center"
      >
        <img :src="mastercardImg" alt="payment-method" />
      </div>
      <div
        class="w-[60px] h-10 rounded-[5px] bg-[#F2F2F2] flex items-center justify-center"
      >
        <img :src="visaImg" alt="payment-method" />
      </div>
      <div
        class="w-[60px] h-10 rounded-[5px] bg-[#F2F2F2] flex items-center justify-center"
      >
        <img :src="expressImg" alt="payment-method" />
      </div>
      <div
        class="w-[60px] h-10 rounded-[5px] bg-[#F2F2F2] flex items-center justify-center"
      >
        <img :src="discoverImg" alt="payment-method" />
      </div>
    </div>

    <div class="text-[#181818] text-sm font-medium tracking-[0.28px] px-8">
      <p>Name on card</p>
      <div class="flex items-center gap-4 mt-1 mb-5">
        <input
          type="text"
          value="Julius Lorenzo"
          class="w-[500px] p-3 rounded bg-[#F2F2F2] text-[15px] font-normal border border-[#F2F2F2] text-[#333333] focus:bg-white focus:border-[#2F80ED] focus:outline-none"
        />
        <RightMarkSvg />
      </div>

      <p>Debit/Credit card number</p>
      <div class="flex items-center gap-4 mt-1 mb-5">
        <input
          type="text"
          value="9923464374822293"
          class="w-[500px] p-3 rounded bg-[#F2F2F2] text-[15px] font-normal border border-[#F2F2F2] text-[#333333] focus:bg-white focus:border-[#2F80ED] focus:outline-none"
        />
        <RightMarkSvg />
      </div>

      <p>Expiration Date</p>
      <div class="flex items-center gap-4 mt-1 mb-5">
        <div
          class="flex items-center gap-[10px] w-[150px] p-3 rounded bg-[#F2F2F2]"
        >
          <div class="flex items-center justify-between w-full">
            <p class="text-[#333333] text-[15px] font-normal">April</p>
            <ArrowDownSvg />
          </div>
        </div>
        <div
          class="flex items-center gap-[10px] w-[150px] p-3 rounded bg-[#F2F2F2]"
        >
          <div class="flex items-center justify-between w-full">
            <p class="text-[#333333] text-[15px] font-normal">2026</p>
            <ArrowDownSvg />
          </div>
        </div>
        <RightMarkSvg />
      </div>

      <div class="flex items-center gap-5">
        <div>
          <p>Security Code</p>
          <div class="flex items-center gap-4 mt-1 mb-5">
            <input
              type="text"
              value="543"
              class="w-[240px] p-3 rounded bg-[#F2F2F2] text-[15px] font-normal border border-[#F2F2F2] text-[#333333] focus:bg-white focus:border-[#2F80ED] focus:outline-none"
            />
          </div>
        </div>
        <div>
          <p>Billing Zip code</p>
          <div class="flex items-center gap-4 mt-1 mb-5">
            <input
              type="text"
              value="203846"
              class="w-[240px] p-3 rounded bg-[#F2F2F2] text-[15px] font-normal border border-[#F2F2F2] text-[#333333] focus:bg-white focus:border-[#2F80ED] focus:outline-none"
            />
            <RightMarkSvg />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PaymentOptionsSvg from "../../../assets/svg/paymentOptionsSvg.vue";
import ArrowDownSvg from "../../../assets/svg/arrowDownSvg.vue";
import RightMarkSvg from "../../../assets/svg/rightMarkSvg.vue";
import mastercardImg from "../../../assets/images/mastercard.png";
import visaImg from "../../../assets/images/visa.png";
import expressImg from "../../../assets/images/express.png";
import discoverImg from "../../../assets/images/discover.png";
</script>
