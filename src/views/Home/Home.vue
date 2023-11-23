<template>
  <HeroBanner />
  <WarningMessage class="mt-[82px] mb-[50px]"/>
</template>

<script>
import WarningMessage from "../../components/WarningMessage.vue";
import HeroBanner from "./components/HeroBanner.vue";

export default {
  components: {
    HeroBanner,
    WarningMessage
},
};
</script>
