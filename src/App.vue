<script>
import FooterApp from "./components/FooterApp.vue";
import HeaderApp from "./components/HeaderApp.vue";
import MainApp from "./components/MainApp.vue";

export default {
  components: {
    HeaderApp,
    MainApp,
    FooterApp,
  },
};
</script>

<template>
  <HeaderApp />
  <router-view></router-view>
  <MainApp />
  <FooterApp />
</template>

<style lang="scss" scoped></style>
