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
  <div class="col-12">
    <div class="ms-5 pt-5">
      <div class="d-flex">
        <div class="col-8">
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
        <div class="col-3">
          <button
            type="button"
            class="btn btn-read px-4 rounded-pill fs-6 btn-lg text-white"
          >
            See All
          </button>
        </div>
      </div>

      <div class="card mb-3 mt-3" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
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
</style>
