<script>
export default {
  name: "MainContactApp",
  data() {
    return {};
  },
};
</script>
<template>
  <main>
    <div class="background">
      <div class="overlay">
        <div class="container d-flex justify-content-center inner ">
          <div class="text-align-center text-white">
            <h2>Contact Us</h2>
            <p id="home" class="text-center">Home <span id="green" class="text-center">/ Contact Us</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="container text-start py-5">
      <div class="row align-items-start py-5">
        <div class="col px-5">
          <div class="py-5">
            <p id="green">NEWSLETTER</p>
            <h3>Know First</h3>
            <p>Follow closely and receive content about our company
              and the news of the current market.</p>
          </div>
        </div>
        <div class="col py-5">
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
    <div class=" bg-black ">
      <div class="container text-start py-3">
        <div class="row justify-content-around py-3">
          <div class="col-3 py-5 px-2 text-white">
            <p id="green">TALK TO AN EXPERT</p>
            <h3>Our Business Units</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.​</p>
          </div>
          <div class="col py-5 px-5 text-white">
            <ul class="navbar-nav">
              <li class="navbar-item">
                <a class="nav-link text-left switch" href="tel:+1 (305) 1234-5678">
                  <div class="icon-wrapper rounded-circle"><font-awesome-icon class="icon" :icon="['fas', 'phone']" /></div>
                  <div class="list-text">+1 (305) 1234-5678</div>
                </a>
              </li>
              <li class="navbar-item">
                <a class="nav-link text-left switch" href="mailto:mail@example.com">
                  <div class="icon-wrapper rounded-circle"><font-awesome-icon class="icon" :icon="['fas', 'envelope']" /></div>
                  <div class="list-text">mail@example.com</div>
                </a>
              </li>
              <li class="navbar-item">
                <a class="nav-link text-left switch" href="#">
                  <div class="icon-wrapper rounded-circle"><font-awesome-icon class="icon" :icon="['fas', 'location-dot']" /></div>
                  <div class="list-text">Main Avenue, 987 </div>
                </a>
              </li>
            </ul>
            <button type="submit" class="btn my-3 map-dark btn-primary">View Map</button>
          </div>
          <div class="col py-5 px-5 text-white">
            <ul class="navbar-nav">
              <li class="navbar-item">
                <a class="nav-link text-left switch" href="tel:+1 (305) 1234-5678">
                  <div class="icon-wrapper rounded-circle"><font-awesome-icon class="icon" :icon="['fas', 'phone']" /></div>
                  <div class="list-text">+1 (305) 1234-5678</div>
                </a>
              </li>
              <li class="navbar-item">
                <a class="nav-link text-left switch" href="mailto:mail@example.com">
                  <div class="icon-wrapper rounded-circle"><font-awesome-icon class="icon" :icon="['fas', 'envelope']" /></div>
                  <div class="list-text">mail@example.com</div>
                </a>
              </li>
              <li class="navbar-item">
                <a class="nav-link text-left switch" href="#">
                  <div class="icon-wrapper rounded-circle"><font-awesome-icon class="icon" :icon="['fas', 'location-dot']" /></div>
                  <div class="list-text">Main Avenue, 987 </div>
                </a>
              </li>
            </ul>
            <button type="submit" class="btn my-3 map-dark btn-primary">View Map</button>
          </div>
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
  top: 326px;
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
