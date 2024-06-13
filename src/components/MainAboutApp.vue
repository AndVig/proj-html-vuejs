<script>
import WhoWeAre from "./MainAboutComponents/WhoWeAre.vue";
import AppHero from "./MainAboutComponents/AppHero.vue";
import ResultSection from "./MainAboutComponents/ResultSection.vue";
import CompanySection from "./MainAboutComponents/CompanySection.vue";
export default {
  name: "MainAboutApp",
  components: { WhoWeAre, AppHero, ResultSection, CompanySection },
};
</script>
<template>
  <AppHero />
  <WhoWeAre />
  <ResultSection />
  <CompanySection />
</template>

<style lang="scss" scoped></style>
