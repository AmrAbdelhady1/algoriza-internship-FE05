<template>
  <Navbar :showLinks="showLinks" class="lg:px-[100px] md:px-[35px] px-[10px]" />
  <main>
    <router-view
      @footer-color="changeFooterColor"
      @show-links="handleShowLinks"
    />
  </main>
  <Footer :color="footerColor" />
</template>

<script setup>
import { ref } from "vue";

import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";

const footerColor = ref("white");
const showLinks = ref(true);

const changeFooterColor = (color) => {
  footerColor.value = color;
};
const handleShowLinks = (isHide) => {
  showLinks.value = isHide;
};
</script>
