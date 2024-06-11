<script>
import CargoSection from "./CargoSection.vue";
export default {
  name: "CargoSectionElements",
  props: ["subTitle", "title", "text"],
  components: {
    CargoSection,
  },
};
</script>
<template>
  <!-- INTERPOLAZIONE DELLE PROPS DAL COMPONENTS CARGOSECTION  -->
  <div class="col-4">
    <h6>{{ subTitle }}</h6>
  </div>
</template>

<style lang="scss" scoped></style>
