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
  
    <footer class="footer main offers">
        <div class="container-fluid px-5">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top ">
                <div class="col-12 col-md-6 col-lg-3 info">
                    <img class="img" src="../assets/img/logo.svg" alt="">
                    <div class="content-block">
                        <p class="my-3">"Built to the smallest detail with"<br>" a focus on feature availability"</p>
                    </div>
                    <ul class="navbar-nav content-block">
                        <li class="nav-item my-2">
                            <a href="tel:+1 (305) 1234-5678" class="">+1 (305) 1234-5678</a><br>                        
                        </li>
                    </ul>
                    <ul class="navbar-nav content-block">
                        <li class="nav-item my-2">
                            <a href="mailto:hello@example.com" class="">hello@example.com</a><br>
                        </li>
                    </ul>
                    <ul class="navbar-nav content-block">
                        <li class="nav-item my-2">
                            <a href="#" class="">Main Avenue, 987</a><br>
                        </li>
                    </ul>
                    <ul class="navbar-nav content-block">
                        <li class="nav-item my-2">
                            <button class="button">BUY NEXGEN</button> 
                        </li>
                    </ul>
                    
                </div>
                <div class="d-flex flex-fill ">
                    <div v-for="card in dataFooter.cards" class="card col-12 col-md-6 col-lg-3 ">
                    <h5 >{{card.title}}</h5>
                    <ul class="nav flex-column">
                        <li v-for="element in card.elements" class="nav- mb-2">{{ element }}</li>
                    </ul>
                </div>
                </div>

            </div>
        </div>
            
    </footer>
    <!-- <footer class="d-flex">
        
        <div class="p-2 flex-grow-1">
            <img class="img" src="../assets/img/logo.svg" alt="">
        </div>
        <div v-for="card in dataFooter.cards" class="card ">
            <h5>{{card.title}}</h5>
            <ul class="nav flex-column">
              <li v-for="element in card.elements" class="nav-item mb-2">{{ element }}</li>
            </ul>
        </div>
</footer> -->
</template>

<style lang="scss" scoped>
    footer{
        background-image: linear-gradient(-45deg, #2a2d30 0%, #111117 100%);
        background-color: #111117;
        color: #8f93a5;
        width:100%;
    }
    h5{
        color: white;
        margin-bottom: 2rem;
    }
    li{
        color: #8f93a5
    }
    li:hover{
        color: #00A6A6;
    }
    .img{
        height: 45px;
    }
    .info{
        width: 20rem;
        height: 18rem;
        margin-left: 2rem;
        margin-right: 2rem;
        margin-top: 10rem;
        margin-bottom: 10rem;
    }
    a{
        text-decoration: none;
        color: #8f93a5;
        
    }
    .button{
        color: #bec1ce;
        border-color: #05828380;
        padding: 10px 25px;
        background-color: transparent;
        border-radius: 100px;
        border: 2px solid;
        transition: all .4s ease-out 0s;
    }
    .button:hover{
        border-color: white;
        
    }
    .card{
        box-sizing: border-box;
        background-color: #343a40;
        
        min-width: 15rem;
        height: 18rem;
        margin-left: 2rem;
        margin-right: 2rem;
        margin-top: 10rem;
        margin-bottom: 10rem;
        padding: 35px;
        border-radius: 10px;
        border: none;
        
    }
    .card:hover{
        transform: translateY(-10px);
        transition: 0.5s;
    }
</style>
