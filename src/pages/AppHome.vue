<script>
import { toRaw } from "vue";
import FooterApp from "../components/FooterApp.vue";
import HeaderApp from "../components/HeaderApp.vue";
import MainHomeApp from "../components/MainHomeApp.vue";
import { dataHeader } from "../data/dataHeader";

export default {
  name: "AppHome",
  components: { FooterApp, MainHomeApp, HeaderApp },
  setup() {
    const data = toRaw(dataHeader);
    return {
      data,
    };
  },
};
</script>
<template>
  <HeaderApp
    :telephoneNumber="this.data.contacts.telephoneNumber"
    :mainMailAdress="this.data.contacts.mainMailAdress"
    :openHours="this.data.contacts.openHours"
  />
  <MainHomeApp />
  <FooterApp />
</template>

<style lang="scss" scoped></style>
