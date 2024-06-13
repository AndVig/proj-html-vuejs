<script>
import FooterApp from "../components/FooterApp.vue";
import HeaderApp from "../components/HeaderApp.vue";
import MainContactApp from "../components/MainContactApp.vue";
import { dataHeader } from "../data/dataHeader";

export default {
  name: "AppContact",
  components: { HeaderApp, FooterApp, MainContactApp },
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
  <MainContactApp />
  <FooterApp />
</template>

<style lang="scss" scoped></style>
