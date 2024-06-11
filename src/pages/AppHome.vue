<script>
import FooterApp from "../components/FooterApp.vue";
import HeaderApp from "../components/HeaderApp.vue";
import MainHomeApp from "../components/MainHomeApp.vue";

export default {
  name: "AppHome",
  components: { FooterApp, MainHomeApp, HeaderApp },
};
</script>
<template>
  <HeaderApp />
  <MainHomeApp />
  <FooterApp />
</template>

<style lang="scss" scoped></style>
