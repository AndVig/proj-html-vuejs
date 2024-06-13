<script>
import { dataHomePage } from "../../data/dataHomePage";

export default {
  name: "Feedback",
  data() {
    return {
      dataHomePage,
    };
  },
};
</script>
<template>
  <div class="pad">
    <div class="content">
      <div class="text-center">
        <span class="water-color fw-bold font-sz">
          {{ dataHomePage.feed.sub_title }}
        </span>
        <h2 class="text-white display-5 fw-bold py-3">
          {{ dataHomePage.feed.title }}
        </h2>
        <p class="text-white opacity-75 font-p center">
          {{ dataHomePage.feed.pharagraph }}
        </p>
      </div>
      <div class="overflow-x-hidden ps-relative">
        <div class="width">
          <div class="d-flex py-5 gap-5 overflow-x-aut">
            <div class="col-4" v-for="card in dataHomePage.feed.cards">
              <div class="card cursor bg-card rounded-4">
                <div class="card-body">
                  <h5 class="card-title text-white">{{ card.title }}</h5>
                  <span class="card-text text-white opacity-75">
                    {{ card.text }}
                  </span>
                  <font-awesome-icon
                    :icon="['fas', 'quote-right']"
                    class="icon water-color fs-4 opacity-50"
                  />
                </div>
              </div>
            </div>
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

.icon {
  margin-left: 60%;
}
.water-color {
  color: #00a6a6;
}

.font-sz {
  font-size: 13px;
  letter-spacing: 3px;
}

.font-p {
  font-size: 16px;
}

.center {
  width: 64%;
  margin-left: 17%;
}

.width {
  width: 100vw;
}

.ps-relative {
  position: relative;
  
}

.cursor:hover {
  cursor: w-resize;
}

.bg-card {
  background-image: linear-gradient(-45deg, #2a2d30 0%, #111117 100%);
  background-color: #111117;
}
</style>
