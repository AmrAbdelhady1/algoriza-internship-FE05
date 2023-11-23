<template>
  <div class="lg:px-[100px] md:px-[35px] px-[10px]">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
