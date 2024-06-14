<script>
import { dataContact } from '../data/dataContact.js';
import ContactsSection from './MainContactComponents/ContactsSection.vue';


  export default {
    name: "MainContactApp",
    components:{
      ContactsSection,
    },
    data() {
      return {
        dataContact,

      };
    },
  };
</script>
<template>
  <main>
    <!-- Contact Us -->
    <div class="background">
      <div class="overlay">
        <div class="container d-flex justify-content-center inner ">
          <div class="text-align-center text-white">
            <h2>{{ dataContact.area.start.title }}</h2>
            <p id="home" class="text-center">Home <span id="green" class="text-center">/ Contact Us</span></p>
          </div>
        </div>
      </div>
    </div>
    <!-- <ContactsSection /> -->
    <!-- Divider -->
    <div class="divider"></div>
    <!-- Know First + Form -->
    <div class="container text-start py-5">
      <div class="row justify-content-center align-items-center py-5">
        <div class="col-5 px-5">
          <div class="py-5">
            <p id="green">{{dataContact.area.know.up }}</p>
            <h3>{{dataContact.area.know.title }}</h3>
            <p>{{dataContact.area.know.desc }}</p>
          </div>
        </div>
        <!-- Form 1 -->
        <div class="col-5 px-5 py-5">
          <form>
            <div class="mb-3">
              <input type="name" placeholder="Name" class="form-control form" id="name" >
            </div>
            <div class="mb-3">
              <input type="name" placeholder="Email" class="form-control form" id="email">
            </div>
            <button type="submit" class="btn subscribe btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
    <!-- Contacts -->
    <div class=" bg-black ">
      <div class="container text-start py-3">
        <div class="row justify-content-center py-3">
          <div class="col-3 py-5 px-2 text-white">
            <p id="green">{{dataContact.area.contacts[0].up }}</p>
            <h3>{{dataContact.area.contacts[0].title }}</h3>
            <p>{{dataContact.area.contacts[0].desc }}​</p>

          </div>
          <div class="col-3 py-5  text-white">
            <ul class="navbar-nav">
              <li class="navbar-item">
                <a class="nav-link text-left switch dim" href="tel:+1 (305) 1234-5678">
                  <div class="icon-wrapper rounded-circle"><font-awesome-icon class="icon" :icon="['fas', 'phone']" /></div>
                  <div class="list-text">{{dataContact.area.contacts[1].tel }}</div>
                </a>
              </li>
              <li class="navbar-item">
                <a class="nav-link text-left switch" href="mailto:mail@example.com">
                  <div class="icon-wrapper rounded-circle"><font-awesome-icon class="icon" :icon="['fas', 'envelope']" /></div>
                  <div class="list-text">{{dataContact.area.contacts[1].mail }}</div>
                </a>
              </li>
              <li class="navbar-item">
                <a class="nav-link text-left switch" href="#">
                  <div class="icon-wrapper rounded-circle"><font-awesome-icon class="icon" :icon="['fas', 'location-dot']" /></div>
                  <div class="list-text">{{dataContact.area.contacts[1].address }} </div>
                </a>
              </li>
            </ul>
            <button type="submit" class="btn my-3 map-dark btn-primary">View Map</button>
          </div>
          <div class="col-3 py-5 text-white">
            <ul class="navbar-nav">
              <li class="navbar-item">
                <a class="nav-link text-left switch" href="tel:+1 (305) 1234-5678">
                  <div class="icon-wrapper rounded-circle"><font-awesome-icon class="icon" :icon="['fas', 'phone']" /></div>
                  <div class="list-text">{{dataContact.area.contacts[1].tel }}</div>
                </a>
              </li>
              <li class="navbar-item">
                <a class="nav-link text-left switch" href="mailto:mail@example.com">
                  <div class="icon-wrapper rounded-circle"><font-awesome-icon class="icon" :icon="['fas', 'envelope']" /></div>
                  <div class="list-text">{{dataContact.area.contacts[1].mail }}</div>
                </a>
              </li>
              <li class="navbar-item">
                <a class="nav-link text-left switch" href="#">
                  <div class="icon-wrapper rounded-circle"><font-awesome-icon class="icon" :icon="['fas', 'location-dot']" /></div>
                  <div class="list-text">{{dataContact.area.contacts[1].address }} </div>
                </a>
              </li>
            </ul>
            <button type="submit" class="btn my-3 map-dark btn-primary">View Map</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Get in touch -->
     <div class="container text-start">
      <div class="row justify-content-center py-3">
        <!--Form 2-->
        <div class="col-7 py-5 px-5 text-black">
          <p id="green">{{dataContact.area.touch[0].up}}</p>
            <h3>{{dataContact.area.touch[0].title}}</h3>
            <p> {{dataContact.area.touch[0].desc}}​</p>
            <div class="col row">
              <div class="col">
                <input type="name" placeholder="Name" class="form-control form" id="name" >
              </div>
              <div class="col">
                <input type="name" placeholder="Email" class="form-control form" id="email">
              </div>
            </div>
            <div class="col row my-3">
              <div class="col">
                <input type="name" placeholder="Second Name" class="form-control form" id="name" >
              </div>
              <div class="col">
                <div class="input-group mb-3">
                  <button class="form-control dropdown-toggle form" type="button" data-bs-toggle="dropdown" aria-expanded="false">—Please choose an option—</button>
                  <ul class="dropdown-menu form">
                    <li><a class="dropdown-item" href="#">Sales and Purchasing</a></li>
                    <li><a class="dropdown-item" href="#">Financial and Accounts</a></li>
                    <li><a class="dropdown-item" href="#">Human Resources</a></li>
                    <li><a class="dropdown-item" href="#">Another subjects  </a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="input-group">
                <textarea class="form-control form" aria-label="With textarea"></textarea>
              </div>
            </div>
        </div>
        <!--Other stuff-->
        <div class="col-3 py-5 px-5 text-white">
          <div class="text-black">
            <h3>{{dataContact.area.touch[1].title}}</h3>
            <p>{{dataContact.area.touch[1].desc}}.</p>
          </div>
          <ul class="navbar-nav">
            <li class="navbar-item">
              <a class="nav-link text-left switch" href="tel:+1 (305) 1234-5678">
                <div class="icon-wrapper rounded-circle"><font-awesome-icon class="icon" :icon="['fas', 'phone']" /></div>
                <div class="list-text">{{dataContact.area.contacts[1].tel }}</div>
              </a>
            </li>
            <li class="navbar-item">
              <a class="nav-link text-left switch" href="mailto:mail@example.com">
                <div class="icon-wrapper rounded-circle"><font-awesome-icon class="icon" :icon="['fas', 'envelope']" /></div>
                <div class="list-text">{{dataContact.area.contacts[1].mail }}</div>
              </a>
            </li>
            <li class="navbar-item">
              <a class="nav-link text-left switch" href="#">
                <div class="icon-wrapper rounded-circle"><font-awesome-icon class="icon" :icon="['fas', 'location-dot']" /></div>
                <div class="list-text">{{dataContact.area.contacts[1].address}} </div>
              </a>
            </li>
            <li class="navbar-item">
              <a class="nav-link text-left switch" href="#">
                <div class="icon-wrapper rounded-circle"><font-awesome-icon class="icon" :icon="['fas', 'location-dot']" /></div>
                <div class="list-text">{{dataContact.area.contacts[1].address}} </div>
              </a>
            </li>
          </ul>
          <button type="submit" class="btn my-3 map-dark btn-primary">View Map</button>
        </div>
        
      </div>
     </div>
  </main>
</template>

<style lang="scss" scoped>

.background{
  background-image: url(../assets/img/download.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
}
.inner{
  padding-top: 100px;
  padding-bottom: 100px;
}
.divider{
  position: absolute;
  right: 0;
  left: calc(50% - 200px) ;
  top: 373px;
  background-repeat: no-repeat;
  width: 420px;
  height: 200px;
  text-align: center;
  opacity: 0.35;
  scale: 30%;
  background-image: url(../assets/img/bullets_sm.png);
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
.bg-black{
  background-color: #111117;
}
h2{
  color: white;
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 1.2;
}
h3{
  font-weight: 800;
  font-size: 3rem;
  line-height: 1.2;

}

.form{
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #606D75;
  background-color: #ECECEC;
  opacity:#ECECEC ;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  text-align: start;
}

.icon{ 
  padding-left: 4px;
  padding-top: 4px;
  color: #058283;
  
}
.icon-wrapper{
  background-color: #00A6A626;
  width: 30px;
  padding: 3px;
  margin-right: 5px;
  display: inline-block;
}

.switch:hover{
  .icon-wrapper{
    background-color: #058283;
  }
  .icon{
    color: #ffffff;
  }
}
.list-text{
  color: #AFB6BA;
  display: inline;
}
.subscribe{
  background-color: #058283;

  color: #ffffff;
  font-family: Montserrat,sans-serif;
  font-style: default;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  padding: 10px 25px;
  border-radius: 100px;
  border: none; 
  text-transform: uppercase;
}
.subscribe:hover{
  background-color:#00A6A6;
}
.map-dark{
  background-color: #00A6A626;
  color: #058283;
  font-family: Montserrat,sans-serif;
  font-style: default;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  padding: 10px 25px;
  border-radius: 100px;
  border: none; 
  text-transform: uppercase;
}
.map-dark:hover{
  background-color: #058283;
  color: #ffffff;
}
.overlay {
  background-color: rgba(28, 28, 28, 0.724); /* Colore scuro con opacità */
}
</style>
