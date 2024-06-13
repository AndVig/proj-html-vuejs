
<script>
    import { dataContact } from '../../data/dataContact';
    export default {
        name:"ContactsSection",
        data(){
            return {
                dataContact
            };
        }
    }
</script>

<template>
    
    <div class="background">
        <div class="overlay">
        <div class="container d-flex justify-content-center inner ">
            <div class="text-align-center text-white inner">
            <h2>{{ dataContact.area.start.title }}</h2>
            <p id="home" class="text-center">Home <span id="green" class="text-center">/ Contact Us</span></p>
            </div>
        </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.background{
background-image: url(../assets/img/download.jpg);
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 100%;
}
#home{
font-size: 1rem;
font-weight: 200;
line-height: 1.5;
}
#home:hover{
color:#00A6A6;
}
#green{
color:#00A6A6;
}
.overlay {
background-color: rgba(28, 28, 28, 0.724); /* Colore scuro con opacità */
}
.inner{
padding-top: 100px;
padding-bottom: 100px;
font-size: 20px;
}
</style>