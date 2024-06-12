<script>
import CargoSection from "./MainHomeComponents/CargoSection.vue";
import TransportSectionElements from "./MainHomeComponents/TransportSectionElements.vue";

export default {
  name: "MainHomeApp",
  components: { CargoSection, TransportSectionElements },
};
</script>
<template>
  <section id="cargo">
    <div class="container-full">
      <div class="bg-cargo">
        <div class="overlay">
          <CargoSection />
        </div>
      </div>
    </div>
  </section>
  <section id="transport">
    <div class="container-full">
      <TransportSectionElements />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bg-cargo {
  background-image: url(../assets/img/bg-9.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
}

.overlay {
  background-color: rgba(28, 28, 28, 0.724); /* Colore scuro con opacità */
}
#cargo {
  margin-bottom: 30px;
}
</style>
