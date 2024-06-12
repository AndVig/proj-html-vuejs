<script>
import CargoSection from "./MainHomeComponents/CargoSection.vue";
import TransportSectionElements from "./MainHomeComponents/TransportSectionElements.vue";
import MainService from "./MainHomeComponents/MainService.vue";
export default {
  name: "MainHomeApp",
  components: { CargoSection, TransportSectionElements, MainService },
};
</script>
<template>
  <div class="container-full">
    <section id="cargo">
      <div class="bg-cargo">
        <div class="overlay">
          <CargoSection />
        </div>
      </div>
    </section>
    <section id="transport">
      <TransportSectionElements />
    </section>
    <section id="main-services">
      <div class="bg-more-black">
        <MainService />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.bg-cargo {
  background-image: url(../assets/img/bg-9.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
}
.bg-more-black {
  background-color: #16171c;
}
.overlay {
  background-color: rgba(28, 28, 28, 0.724); /* Colore scuro con opacità */
}
#cargo {
  margin-bottom: 30px;
}
</style>
