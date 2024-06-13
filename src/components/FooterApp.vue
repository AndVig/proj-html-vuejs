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
  
    <footer >
        <div class="container ">
            <div class="row ">
                <div class="col-3 info">
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
                <div class="d-flex col row cards-container ">
                    <div v-for="card in dataFooter.cards" class="card col-1">
                        <h5 >{{card.title}}</h5>
                        <ul class="nav flex-column">
                            <li v-for="element in card.elements" class="mb-2">{{ element }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
        <nav class="navbar navbar-expand top">
            <div class="container top-part header">
                <ul class="navbar-nav left">
                <li class="nav-item">
                    <a href="#" class="nav-link m-0">
                    <span>© 2024 - All rights reserved. Nexgen is maintained by Codings Group.</span>
                    </a>
                </li>
                </ul>
                <div class="ml-auto"></div>
                <ul class="navbar-nav right">
                    <li class="nav-item">
                        <a href="#" class="nav-link m-0">
                            <font-awesome-icon :icon="['fab', 'facebook-f']" />
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link m-0">
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link m-0">
                            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>        
    </footer>
   
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
        
        min-width: 11rem;
        height: 18rem;
        margin-left: 2rem;
        margin-top: 10rem;
        margin-bottom: 10rem;
        padding-left: 16px;
        padding-top: 30px;
        border-radius: 10px;
        border: none;
        
    }
    .card:hover{
        transform: translateY(-10px);
        transition: 0.5s;
    }
</style>
