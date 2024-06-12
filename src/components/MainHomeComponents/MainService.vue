<script>
import { dataHomePage } from "../../data/dataHomePage";

export default {
  name: "MainService",
  data() {
    return {
      dataHomePage,
    };
  },
};
</script>

<template>
  <div class="col">
    <div class="ms-5 pt-5">
      <div class="d-flex gap-5">
        <div class="col-3 flex-grow-1">
          <p class="water-color fw-bold pt-5">
            {{ dataHomePage.service.sub_title }}
          </p>
          <h2 class="text-white display-5 fw-bold">
            {{ dataHomePage.service.title }}
          </h2>

          <p class="light-grey mb-5 me-3">
            {{ dataHomePage.service.pharagraph }}
          </p>
        </div>
        <div class="col-2 ps-5 pt-5 mt-5 align-self-center">
          <button
            type="button"
            class="btn px-4 rounded-pill fs-6 btn-lg light-grey btn-see bord-all"
          >
            SEE ALL
          </button>
        </div>
      </div>
<div class="d-flex gap-3 ">
    <div v-for="card in dataHomePage.service.card" class="me-5  card light-grey  mb-3 mt-3" style="width: 23rem">
      <div class="card-body ">
        <span></span>
        <span></span>
        <h5 class="card-title">{{ card.title }}</h5>
        <p class="card-text">
          {{ card.text }}
        </p>
      </div>
    </div>
</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.water-color {
  color: #00a6a6;
}
.light-grey {
  color: #606d8b;
}

.btn-see {
  border: #00a6a6 2px solid;
}
.btn-see:hover {
  color: white;
  background-color: #00a6a6;
}
</style>
