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
  <section id="staff-numbers">
    <div class="bg-img">
      <ResultSection />
    </div>
  </section>
  <CompanySection />
</template>

<style lang="scss" scoped>
.bg-img {
  background-image: url(../assets/img/download.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
