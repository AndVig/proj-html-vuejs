<script>
import { dataFooter } from "../data/dataFooter.js";
export default {
  name: "FooterApp",
  data(){
    return{
        dataFooter,
    }
  }
};
</script>

<template>
  
    <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        
            <div class="col mb-3"></div>
            <div class="col mb-3"></div>
            <div v-for="card in dataFooter.cards" class="card col mb-3">
                <h5>{{card.title}}</h5>
                <ul class="nav flex-column">
                  <li v-for="element in card.elements" class="nav-item mb-2">{{ element }}</li>
                </ul>
            
        </div>
        
        
    </footer>
  
</template>

<style lang="scss" scoped>
    footer{
        background-color: #111117;
    }
    h5{
        color: white;
    }
    li{
        color: #8f93a5
    }
    li :hover{
        color: #00A6A6;
    }
    .card{
        background-color: #343a40;
        width: 14rem;
        margin-left: 2rem;
        padding: 35px;
        border-radius: 10px;
        border: none;
        transition: all 0.4s ease-out 0s;
    }
</style>
