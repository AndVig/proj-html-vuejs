<script>
import { dataHomePage } from "../../data/dataHomePage";
import CargoSectionElements from "./CargoSectionElements.vue";
export default {
  name: "CargoSection",
  components: {
    CargoSectionElements,
  },
  data() {
    return {
      dataHomePage,
    };
  },
};
</script>

<template>
  <CargoSectionElements
    v-for="text in dataHomePage.cargo"
    :subTitle="text.sub_title"
    :title="text.title"
    :text="text.text"
  />
</template>

<style lang="scss" scoped></style>
