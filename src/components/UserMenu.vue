<template>
  <div
    class="bg-white rounded-[10px] shadow-md py-[10px] flex w-[206px] items-center flex-col z-50 text-[#4F4F4F] text-[13px] tracking-[0.26px]"
  >
    <div
      class="py-[10px] px-[14px] gap-[10px] border-b border-b-[#D6D6D6] w-full flex hover:bg-[#D6D6D6] cursor-pointer"
    >
      <AccountSvg />
      <p>Manage account</p>
    </div>
    <router-link
      :to="{ name: 'myTrips' }"
      class="py-[10px] px-[14px] gap-[10px] border-b border-b-[#D6D6D6] w-full flex hover:bg-[#D6D6D6] cursor-pointer"
    >
      <TripsSvg />
      <p>My trips</p>
    </router-link>
    <div
      class="py-[10px] px-[14px] gap-[10px] border-b border-b-[#D6D6D6] w-full flex hover:bg-[#D6D6D6] cursor-pointer"
    >
      <WalletSvg />
      <p>Reward and wallet</p>
    </div>
    <div
      @click="signOut"
      class="py-[10px] px-[14px] gap-[10px] w-full flex hover:bg-[#D6D6D6] cursor-pointer"
    >
      <SignoutSvg />
      <p>Sign out</p>
    </div>
  </div>
</template>

<script>
import AccountSvg from "../assets/svg/accountSvg.vue";
import SignoutSvg from "../assets/svg/signoutSvg.vue";
import TripsSvg from "../assets/svg/tripsSvg.vue";
import WalletSvg from "../assets/svg/walletSvg.vue";

export default {
  components: {
    AccountSvg,
    SignoutSvg,
    TripsSvg,
    WalletSvg,
  },
  data() {
    const signOut = () => {
      localStorage.removeItem("token");
      setTimeout(() => {
        window.open("/", "_self");
      }, 1000);
    };

    return {
      signOut,
    };
  },
};
</script>
