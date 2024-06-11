<script>
import CargoSectionElements from "./MainHomeComponents/CargoSectionElements.vue";

export default {
  name: "MainHomeApp",
  components: { CargoSectionElements },
};
</script>
<template>
  <section class="bg-cargo">
    <CargoSectionElements />
  </section>
</template>

<style lang="scss" scoped>
.bg-cargo {
  background-image: url(../assets/img/bg-9.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
