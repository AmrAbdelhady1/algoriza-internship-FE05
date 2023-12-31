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
    <h1 class="text-[28px] font-semibold mb-10">Register</h1>
    <div>
      <h1>Email address</h1>
      <input
        type="text"
        id="email"
        v-model="signUpData.email"
        class="w-[400px] h-[44px] p-3 rounded bg-[#F2F2F2] mt-1 focus:outline-none focus:bg-white focus:border focus:border-[#2F80ED]"
      />
      <p class="text-red-600 mt-1">{{ errors.email }}</p>
    </div>
    <div>
      <h1>Password</h1>
      <div class="relative">
        <input
          type="password"
          id="password"
          v-model="signUpData.password"
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
      <p class="text-red-600 mt-1">{{ errors.password }}</p>
    </div>
    <div>
      <h1>Confirm password</h1>
      <div class="relative">
        <input
          type="password"
          id="confirmPassword"
          v-model="signUpData.confirmPassword"
          class="w-[400px] pr-10 h-[44px] p-3 rounded bg-[#F2F2F2] mt-1 focus:outline-none focus:bg-white focus:border focus:border-[#2F80ED]"
        />
        <button
          type="button"
          @click="toggleConfirmPasswordVisibility"
          class="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          <ShowPasswordSvg />
        </button>
      </div>
      <p class="text-red-600 mt-1">{{ errors.confirmPassword }}</p>
    </div>
    <button
      type="submit"
      class="mt-[13px] bg-[#2F80ED] rounded-md w-[400px] h-[43px] text-white text-[15px] font-medium leading-5 tracking-[0.3px]"
    >
      Submit
    </button>
    <p class="text-red-600 mt-1">{{ errors.isEmailRegistered }}</p>
    <p class="text-[#4F4F4F] text-base tracking-[0.32px]">
      Already have an account?
      <router-link
        :to="{ name: 'signin' }"
        class="text-[#2F80ED] cursor-pointer hover:underline"
        >Sign in</router-link
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
const signUpData = ref({
  email: "",
  password: "",
  confirmPassword: "",
});
const errors = ref({
  email: null,
  password: null,
  confirmPassword: null,
  isEmailRegistered: null,
});
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(signUpData.value.email)) {
    errors.value.email = "Invalid email format";
  } else {
    errors.value.email = null;
  }
};

const validatePassword = () => {
  if (signUpData.value.password.length < 6) {
    errors.value.password = "Password must be at least 6 characters long";
  } else {
    errors.value.password = null;
  }
};

const validateConfirmPassword = () => {
  if (signUpData.value.confirmPassword !== signUpData.value.password) {
    errors.value.confirmPassword = "Passwords do not match";
  } else {
    errors.value.confirmPassword = null;
  }
};

const generateRandomToken = () => {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  const token = Array.from(randomBytes)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  return token;
};

const submitForm = () => {
  validateEmail();
  validatePassword();
  validateConfirmPassword();

  if (
    !errors.value.email &&
    !errors.value.password &&
    !errors.value.confirmPassword
  ) {
    const oldData = JSON.parse(localStorage.getItem("user")) || [];
    const isEmailRegistered = oldData.some(
      (user) => user.email === signUpData.value.email
    );
    if (isEmailRegistered) {
      errors.value.isEmailRegistered = "Email is already registered!";
    } else {
      store.updateLoader();
      const randomToken = generateRandomToken();
      errors.value.isEmailRegistered = null;
      oldData.push({
        email: signUpData.value.email,
        password: signUpData.value.password,
        token: randomToken,
        hotels: [],
      });
      localStorage.setItem("user", JSON.stringify(oldData));
      localStorage.setItem("token", randomToken);
      store.loggedIn();
      setTimeout(() => {
        store.updateLoader();
        router.push("/");
      }, 2000);
    }
  }
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
  const input = document.getElementById("password");
  if (input) {
    input.type = showPassword.value ? "text" : "password";
  }
};
const toggleConfirmPasswordVisibility = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
  const input = document.getElementById("confirmPassword");
  if (input) {
    input.type = showConfirmPassword.value ? "text" : "password";
  }
};
</script>
