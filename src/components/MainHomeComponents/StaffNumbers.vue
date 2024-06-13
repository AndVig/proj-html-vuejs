<script>
import { dataHomePage } from "../../data/dataHomePage";

export default {
  name: "StaffNumbers",
  data() {
    return {
      dataHomePage,
    };
  },
};
</script>
<template>
  <div class="col pad">
    <div class="content">
      <div class="text-center">
        <span class="water-color font-size fw-bold">{{
          dataHomePage.staffNumbers.sub_title
        }}</span>
        <h2 class="text-white display-5 fw-bold py-3">
          {{ dataHomePage.staffNumbers.title }}
        </h2>
        <p class="text-white opacity-75">
          {{ dataHomePage.staffNumbers.pharagraph }}
        </p>
        <div class="d-flex justify-content-around">
          <div
            class="col-3 my-5"
            v-for="(num, index) in dataHomePage.staffNumbers.numbers"
          >
            <span class="water-color fs-1 fw-bold">{{ num.num }}</span>
            <p class="text-white opacity-75">{{ num.type }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pad {
  padding: 10% 0;
}
.water-color {
  color: #00a6a6;
}

.font-size {
  font-size: 13px;
  letter-spacing: 3px;
}
</style>
