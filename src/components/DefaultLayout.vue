<template>
  <div class="lg:px-[100px] md:px-[35px] px-[10px]">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
  <Footer />
</template>

<script>
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
