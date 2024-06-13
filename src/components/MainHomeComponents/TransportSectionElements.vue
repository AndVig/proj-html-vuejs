<script>
import { dataHomePage } from "../../data/dataHomePage";
export default {
  name: "TransportSectionElements",
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
      <div class="d-flex">
        <div class="col-7 flex-grow-1 ms-5">
          <p class="sub-title">
            {{ dataHomePage.transport.sub_title }}
          </p>
          <h2 class="display-5 fw-bold">{{ dataHomePage.transport.title }}</h2>
          <div v-for="pharagraph in dataHomePage.transport.pharagraph">
            <div class="light-grey my-4">
              <div v-if="pharagraph.flag" class="bord">
                <p class="ms-3 pt-3 mt-4">
                  <em>{{ pharagraph.text }}</em>
                </p>
              </div>
              <div v-else>
                <p>{{ pharagraph.text }}</p>
              </div>
            </div>
          </div>

          <ul class="padding-left">
            <li
              v-for="list in dataHomePage.transport.list"
              class="light-grey py-2"
            >
              {{ list.text }}
            </li>
          </ul>
        </div>
        <div class="col-4 p-4 me-3 mt-5">
          <div class="bg-secondary-subtle rounded-4 mt-5">
            <div class="content pt-4 px-4">
              <div
                class="mb-2 d-flex font-size justify-content-between water-color"
              >
                <font-awesome-icon :icon="['fas', 'truck-ramp-box']" />
                <font-awesome-icon
                  :icon="['fas', 'arrow-right']"
                  class="small-font mb-3 pb-3"
                />
              </div>
              <div>
                <h4 class="mb-3">
                  <strong>{{ dataHomePage.transport.basicPlan.title }}</strong>
                </h4>
                <p class="light-grey">
                  {{ dataHomePage.transport.basicPlan.pharagraph }}
                </p>
                <div class="water-color">
                  <span
                    ><font-awesome-icon
                      :icon="['fas', 'dollar-sign']"
                      class="font-medium"
                  /></span>
                  <span class="font-price">
                    <strong>{{
                      dataHomePage.transport.basicPlan.price
                    }}</strong></span
                  >
                  <span class="font-period">{{
                    dataHomePage.transport.basicPlan.period
                  }}</span>
                </div>
                <ul class="py-2 ps-1 no-style">
                  <li
                    v-for="offer in dataHomePage.transport.basicPlan.offers"
                    class="my-3"
                  >
                    <div
                      v-if="offer.flag"
                      class="check d-flex justify-content-between"
                    >
                      <span class="light-grey">{{ offer.name }}</span>
                      <span
                        ><font-awesome-icon
                          :icon="['fas', 'check']"
                          class="water-color small-font"
                      /></span>
                    </div>
                    <div v-else class="cross d-flex justify-content-between">
                      <span class="light-grey">{{ offer.name }}</span>
                      <span
                        ><font-awesome-icon
                          :icon="['fas', 'xmark']"
                          class="water-color small-font"
                      /></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sub-title {
  color: #00a6a6;
  font-size: 15px;
  font-weight: bold;
  margin-top: 100px;
}
.water-color {
  color: #058283;
}

h2 {
  color: #21333e;
}
.light-grey {
  color: #606d8b;
}

.bord {
  border-left: 5px solid;
  height: 88px;
}

.padding-left {
  padding-left: 20px;
}

.font-size {
  font-size: 40px;
}
.small-font {
  font-size: 25px;
}

.no-style li {
  list-style-type: none;
}
.bg-secondary-subtle:hover {
  transform: translateY(-10px);
  transition: 0.8s;
}

.font-medium {
  font-size: 50px;
}
.font-period {
  font-size: 35px;
  vertical-align: super;
}
.font-price {
  font-size: 40px;
  vertical-align: super;
}
</style>
