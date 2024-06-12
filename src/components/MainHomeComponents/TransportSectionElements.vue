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
  <div class="d-flex">
    <div class="col-7 ms-5">
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
        <li v-for="list in dataHomePage.transport.list" class="light-grey py-2">
          {{ list.text }}
        </li>
      </ul>
    </div>
    <div class="col-4">
      <div class="bg-secondary-subtle">
        <font-awesome-icon
          :icon="['fas', 'truck-ramp-box']"
          class="font-size"
        />
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
</style>
