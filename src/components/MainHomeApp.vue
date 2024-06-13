<script>
import CargoSection from "./MainHomeComponents/CargoSection.vue";
import TransportSectionElements from "./MainHomeComponents/TransportSectionElements.vue";
import MainService from "./MainHomeComponents/MainService.vue";
import StaffNumbers from "./MainHomeComponents/StaffNumbers.vue";
export default {
  name: "MainHomeApp",
  components: {
    CargoSection,
    TransportSectionElements,
    MainService,
    StaffNumbers,
  },
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
    <section id="staff-numbers">
      <div class="bg-camion">
        <StaffNumbers />
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
  background-image: linear-gradient(-45deg, #2a2d30 0%, #111117 100%);
  background-color: #111117;
}
.overlay {
  background-color: rgba(28, 28, 28, 0.724); /* Colore scuro con opacità */
}
#cargo {
  margin-bottom: 30px;
}

.bg-camion {
  background-image: url(../assets/img/bg-10.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
