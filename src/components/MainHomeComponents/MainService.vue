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
    <div class="content">
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
        <div class="d-flex gap-1">
          <div
            v-for="card in dataHomePage.service.card"
            class="me-4 card bg-card light-grey margin-btm rounded-4 mt-3 transition"
            style="width: 50rem"
          >
            <div class="card-body p-5">
              <div class="d-flex justify-content-between fs-4 pb-5 water-color">
                <font-awesome-icon
                  :icon="['fas', card.name]"
                  class="bg-water p-3 rounded-pill"
                />
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
              </div>

              <h5 class="card-title text-white fs-3">{{ card.title }}</h5>
              <p class="card-text">
                {{ card.text }}
              </p>
            </div>
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
.bg-water {
  background-color: #1f383d;
}

.btn-see {
  border: #00a6a6 2px solid;
}
.btn-see:hover {
  color: white;
  background-color: #00a6a6;
}

.bg-card {
  background-image: linear-gradient(-45deg, #2a2d30 0%, #111117 100%);
  background-color: #111117;
}

.margin-btm {
  margin-bottom: 10%;
}

.transition:hover {
  transform: translateY(-10px);
  transition: 0.5s;
  cursor: pointer;
}
</style>
