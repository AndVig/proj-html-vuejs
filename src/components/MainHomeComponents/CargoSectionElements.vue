<script>
export default {
  name: "CargoSectionElements",
  props: ["subTitle", "title", "text"],
};
</script>
<template>
  <!-- INTERPOLAZIONE DELLE PROPS DAL COMPONENTS CARGOSECTION  -->

  <div class="col-4 ms-5">
    <h6 class="text-uppercase clr-sub-text pt-4">{{ subTitle }}</h6>
    <h1 class="text-uppercase display-2 text-white fw-bold py-3">
      {{ title }}
    </h1>
    <p class="pb-3">{{ text }}</p>
    <div class="d-flex gap-3 pb-5">
      <button
        type="button"
        class="btn btn-touch fs-6 px-4 rounded-pill btn-lg text-white"
      >
        <span>GET IN TOUCH</span>
      </button>
      <button
        type="button"
        class="btn btn-read px-4 rounded-pill fs-6 btn-lg text-white"
      >
        <span>READ MORE</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.clr-sub-text {
  color: #00a6a6;
}

p {
  width: 120%;
  color: rgba($color: #fdfbfb, $alpha: 0.7);
}

.margin {
  margin-right: 30px;
}
.btn-touch {
  background-color: #00a6a6;
}
.btn-read {
  border: #00a6a6 2px solid;
}

.btn-read span {
  color: rgba($color: #fdfbfb, $alpha: 0.7);
}
.btn-read span:hover {
  color: white;
}
</style>
