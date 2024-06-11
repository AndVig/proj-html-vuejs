<script>
import { dataHomePage } from '../../data/dataHomePage';
export default {
  name: "TransportSectionElements",
  data(){
    return{
      dataHomePage,
    }
  }
};
</script>
<template>
 <ul >
  <li v-for="offer in dataHomePage.basicPlan.offers">
{{ offer.name }}
  </li>
 </ul>
</template>

<style lang="scss" scoped></style>
