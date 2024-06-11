<script>
import CargoSection from "./MainHomeComponents/CargoSection.vue";

export default {
  name: "MainHomeApp",
  components: { CargoSection },
};
</script>
<template>
  <section class="bg-cargo">
    <CargoSection />
  </section>
</template>

<style lang="scss" scoped>
.bg-cargo {
  background-image: url(../assets/img/bg-9.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
