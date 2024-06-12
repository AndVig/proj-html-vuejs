<script>
import WhoWeAre from "./MainAboutComponents/WhoWeAre.vue";
import AppHero from "./MainAboutComponents/AppHero.vue";
export default {
  name: "MainAboutApp",
  components: { WhoWeAre, AppHero },
};
</script>
<template>
  <AppHero />
  <WhoWeAre />
</template>

<style lang="scss" scoped></style>
