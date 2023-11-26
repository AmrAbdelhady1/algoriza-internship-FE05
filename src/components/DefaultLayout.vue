<template>
    <Navbar class="lg:px-[100px] md:px-[35px] px-[10px]" />
    <main>
      <router-view @footerColor="changeFooterColor" />
    </main>
  <Footer :color="footerColor" />
</template>

<script>
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      footerColor: "white",
    };
  },
  methods: {
    changeFooterColor(color) {
      this.footerColor = color;
    },
  },
};
</script>
