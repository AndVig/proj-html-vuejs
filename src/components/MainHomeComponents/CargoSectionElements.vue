<script>
export default {
  name: "CargoSectionElements",
  props: ["subTitle", "title", "text"],
};
</script>
<template>
  <!-- INTERPOLAZIONE DELLE PROPS DAL COMPONENTS CARGOSECTION  -->
  <div class="col-4">
    <h6>{{ subTitle }}</h6>
  </div>
</template>

<style lang="scss" scoped></style>
