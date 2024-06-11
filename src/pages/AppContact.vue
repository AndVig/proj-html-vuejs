<script>
import FooterApp from "../components/FooterApp.vue";
import HeaderApp from "../components/HeaderApp.vue";
import MainContactApp from "../components/MainContactApp.vue";

export default {
  name: "AppContact",
  components: { HeaderApp, FooterApp, MainContactApp },
};
</script>
<template>
  <HeaderApp />
  <MainContactApp />
  <FooterApp />
</template>

<style lang="scss" scoped></style>
