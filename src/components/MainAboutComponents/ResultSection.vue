<script>
import { dataAbout } from "../../data/dataAbout";
export default {
  name: "ResultSection",
  data() {
    return {
      dataAbout,
    };
  },
};
</script>
<template>
  <div class="col pad">
    <div class="content">
      <div class="text-center">
        <span class="water-color font-size fw-bold">{{
          dataAbout.staffNumbers.sub_title
        }}</span>
        <h1 class="text-white display-5 fw-bold py-3">
          {{ dataAbout.staffNumbers.title }}
        </h1>
        <p class="text-white opacity-75">
          {{ dataAbout.staffNumbers.pharagraph }}
        </p>
        <div class="d-flex justify-content-around">
          <div
            class="col-3 my-5"
            v-for="(num, index) in dataAbout.staffNumbers.numbers"
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
