<script>
import WhoWeAre from "./MainAboutComponents/WhoWeAre.vue";
import AppHero from "./MainAboutComponents/AppHero.vue";
import ResultSection from "./MainAboutComponents/ResultSection.vue";
export default {
  name: "MainAboutApp",
  components: { WhoWeAre, AppHero, ResultSection },
};
</script>
<template>
  <AppHero />
  <WhoWeAre />
  <ResultSection />
</template>

<style lang="scss" scoped></style>
