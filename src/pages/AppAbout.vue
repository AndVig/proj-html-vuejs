<script>
import FooterApp from "../components/FooterApp.vue";
import HeaderApp from "../components/HeaderApp.vue";
import MainAboutApp from "../components/MainAboutApp.vue";
import { dataHeader } from "../data/dataHeader";

export default {
  name: "AppAbout",
  components: { HeaderApp, FooterApp, MainAboutApp },
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
  <MainAboutApp />
  <FooterApp />
</template>

<style lang="scss" scoped></style>
