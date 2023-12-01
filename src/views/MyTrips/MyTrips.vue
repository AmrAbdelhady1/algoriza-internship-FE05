<template>
  <div
    class="bg-[#F4F4F4] text-[#1A1A1A] min-h-screen lg:px-[100px] md:px-[35px] px-[10px] pt-[60px] flex flex-col justify-between"
  >
    <div class="px-[105px]">
      <h1 class="text-[32px] font-semibold tracking-[0.32px] mb-7">My trips</h1>
      <div
        class="w-full h-[240px] bg-white rounded-[5px] border border-[#E0E0E0] p-5 flex items-center gap-6"
      >
        <img
          src="https://s3-alpha-sig.figma.com/img/fb3e/d52f/37a798a336642d26bce4af69deada3a0?Expires=1701648000&Signature=QB7GuIcxjYSAwSQLli9yVnOagdLIrr~Y7dDOiEetbmpYLrGhuTIXySw4t60Pj6EEw5rVBrJ6VEHGDuQwucUqnrSiAe1dv2j3MvekYRJLD6UPgOSZ4QFwEIUmfh5pJ-2dc1jO5H3jKSHplrB4sgmNqNOGwlM7dQxOTrDP4GHEHa8VReydZ22vJTH-Lj~v48pOKWSJcasPA4bes6eH2NxqmdiVb4TFY-nAUilJTP4xTMhtgviB4GHn~7FlUg61CCKOIuNy3-shIiDdl5cTHKETT-zPecNeh1dfG0~zEKhQGv7QaQGBpv9RG7fURz-MZpn~vdSVSVnkdyTa5LtnrI3lRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="hotel"
          class="w-[285px] h-[200px] rounded-[5px]"
        />
        <div class="w-full">
          <h1 class="text-xl font-medium tracking-[0.2px] h-[32px]">
            Lakeside Motel Warefront
          </h1>
          <p class="text-[#4F4F4F] text-sm tracking-[0.28px] mb-[30px]">
            4.5 (1200 Reviews)
          </p>
          <div
            class="flex justify-between items-center text-[#4F4F4F] text-sm tracking-[0.14px] w-full"
          >
            <div class="flex flex-col gap-2">
              <p class="text-[#EB5757]">Non refundable</p>
              <p>Check in: Sunday, March 18, 2022</p>
              <p>Check out: Tuesday, March 20, 2022</p>
              <p>2 night stay</p>
            </div>
            <div class="flex flex-col items-end">
              <p
                class="text-[#333333] text-xl font-medium tracking-[0.2px] mb-1"
              >
                <span
                  class="text-[#EB5757] text-sm line-through tracking-[0.14px]"
                  >$150</span
                >
                $300
              </p>
              <p class="font-light tracking-[0.28px] mb-4">
                Includes taxes and fees
              </p>
              <button
                class="text-white text-[15px] tracking-[0.3px] bg-[#2F80ED] rounded-md py-[10px] px-[18px] border border-[#2F80ED] hover:bg-white hover:text-[#2F80ED]"
              >
                View trip details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <WarningMessage class="mb-[80px]" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "../../stores/Store";
import WarningMessage from "../../components/WarningMessage.vue";

const emit = defineEmits(["footer-color", "show-links"]);
const store = useStore();
onMounted(() => {
  console.log("amr",store.hotels)
  emit("footer-color", "#F4F4F4");
  emit("show-links", true);
});
</script>
