<template>
  <Loader />
  <div
    class="h-[68px] w-full flex items-center gap-1 lg:px-[100px] md:px-[35px] px-[10px] mb-[92px]"
  >
    <LogoSvg />
    <h1 class="text-[#1B1F2D] font-medium text-lg tracking-[0.36px]">
      my Dream Place
    </h1>
  </div>

  <form
    @submit.prevent="submitForm"
    class="flex flex-col items-center w-full gap-5 text-[#181818] text-sm font-medium tracking-[0.28px] leading-5"
  >
    <h1 class="text-[28px] font-semibold mb-10">Sign in</h1>
    <div>
      <h1>Email address</h1>
      <input
        type="text"
        id="email"
        v-model="signInData.email"
        class="w-[400px] h-[44px] p-3 rounded bg-[#F2F2F2] mt-1 focus:outline-none focus:bg-white focus:border focus:border-[#2F80ED]"
      />
      <p class="text-red-600 mt-1">{{ errors.isEmailRegistered }}</p>
    </div>
    <div>
      <h1>Password</h1>
      <div class="relative">
        <input
          type="password"
          id="password"
          v-model="signInData.password"
          class="w-[400px] pr-10 h-[44px] p-3 rounded bg-[#F2F2F2] mt-1 focus:outline-none focus:bg-white focus:border focus:border-[#2F80ED]"
        />
        <button
          type="button"
          @click="togglePasswordVisibility"
          class="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          <ShowPasswordSvg />
        </button>
      </div>
      <p class="text-red-600 mt-1">{{ errors.isPasswordRegistered }}</p>
    </div>
    <button
      type="submit"
      class="mt-[13px] bg-[#2F80ED] rounded-md w-[400px] h-[43px] text-white text-[15px] font-medium leading-5 tracking-[0.3px]"
    >
      Sign in
    </button>
    <p class="text-[#4F4F4F] text-base tracking-[0.32px]">
      Don’t have an account?
      <router-link
        :to="{ name: 'signup' }"
        class="text-[#2F80ED] cursor-pointer hover:underline"
        >Register</router-link
      >
    </p>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../../stores/Store";

import Loader from "../../components/Loader.vue";
import LogoSvg from "../../assets/svg/logoSvg.vue";
import ShowPasswordSvg from "../../assets/svg/showPasswordSvg.vue";

const store = useStore();
const router = useRouter();
const signInData = ref({
  email: "",
  password: "",
});
const errors = ref({
  isEmailRegistered: null,
  isPasswordRegistered: null,
});
const showPassword = ref(false);

const submitForm = () => {
  const oldData = JSON.parse(localStorage.getItem("user")) || [];
  const isEmailRegistered = oldData.some(
    (user) => user.email === signInData.value.email
  );
  const isPasswordRegistered = oldData.some(
    (user) => user.password === signInData.value.password
  );
  if (isEmailRegistered && isPasswordRegistered) {
    store.updateLoader();

    const token = oldData.find(
      (user) => user.email === signInData.value.email
    ).token;

    localStorage.setItem("token", token);
    store.loggedIn();

    setTimeout(() => {
      store.updateLoader();
      router.push("/");
    }, 2000);
  } else if (isEmailRegistered) {
    errors.value.isPasswordRegistered = "Password is wrong";
  } else {
    errors.value.isEmailRegistered = "Email address is wrong";
  }
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
  const input = document.getElementById("password");
  if (input) {
    input.type = showPassword.value ? "text" : "password";
  }
};
</script>
