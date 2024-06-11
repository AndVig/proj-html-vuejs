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
  
    <footer class="d-flex">
        
            <div class="p-2 flex-grow-1"></div>
            <div v-for="card in dataFooter.cards" class="card ">
                <h5>{{card.title}}</h5>
                <ul class="nav flex-column">
                  <li v-for="element in card.elements" class="nav-item mb-2">{{ element }}</li>
                </ul>
            
        </div>
        
        
    </footer>
  
</template>

<style lang="scss" scoped>
    footer{
        background-image: linear-gradient(-45deg, #2a2d30 0%, #111117 100%);
        background-color: #111117;
    }
    h5{
        color: white;
    }
    li{
        color: #8f93a5
    }
    li:hover{
        color: #00A6A6;
    }
    .card{
        background-color: #343a40;
        width: 15rem;
        height: 18rem;
        margin-left: 2rem;
        margin-right: 2rem;
        margin-top: 10rem;
        margin-bottom: 10rem;
        padding: 35px;
        border-radius: 10px;
        border: none;
        
    }
    card:hover{
       
    }
</style>
