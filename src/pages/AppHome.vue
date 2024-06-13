<script>
import FooterApp from "../components/FooterApp.vue";
import HeaderApp from "../components/HeaderApp.vue";
import MainHomeApp from "../components/MainHomeApp.vue";
import { dataHeader } from "../data/dataHeader";

export default {
  name: "AppHome",
  components: { FooterApp, MainHomeApp, HeaderApp },
  setup() {
    return {
      data: dataHeader,
    };
  },
};
</script>
<template>
  <HeaderApp
    :telephoneNumber="data.contacts.telephoneNumber"
    :mainMailAdress="data.contacts.mainMailAdress"
    :openHours="data.contacts.openHours"
  />
  <MainHomeApp />
  <FooterApp />
</template>

<style lang="scss" scoped></style>
