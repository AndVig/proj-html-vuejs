<script>
import FooterApp from "../components/FooterApp.vue";
import HeaderApp from "../components/HeaderApp.vue";
import MainAboutApp from "../components/MainAboutApp.vue";

export default {
  name: "AppAbout",
  components: { HeaderApp, FooterApp, MainAboutApp },
};
</script>

<template>
  <HeaderApp />
  <MainAboutApp />
  <FooterApp />
</template>

<style lang="scss" scoped></style>
