<template>
  <div class="lg:px-[100px] md:px-[35px] px-[10px] flex items-start gap-5 my-6">
    <img :src="hotelImg1" alt="image1" class="w-full h-[452px]" />
    <div>
      <img :src="hotelImg2" alt="image2" class="mb-4 h-[218px]" />
      <img :src="hotelImg3" alt="image3" class="h-[218px]" />
    </div>
  </div>
</template>

<script setup>
import hotelImg1 from "../../../assets/images/hotelImage1.png";
import hotelImg2 from "../../../assets/images/hotelImage2.png";
import hotelImg3 from "../../../assets/images/hotelImage3.png";
</script>
