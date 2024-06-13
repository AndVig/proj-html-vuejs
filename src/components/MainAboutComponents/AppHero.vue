<script>
export default {
  name: "AppHero",
};
</script>
<template>
  <main>
    <div class="background">
      <div class="overlay">
        <div class="container d-flex justify-content-center inner">
          <div class="text-align-center text-white">
            <h2>About Us</h2>
            <p id="home" class="text-center">
              Home <span id="contactUs" class="text-center">/ About Us</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="divider">
      <div></div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.background {
  background-image: url(../../assets/img/bg-wide.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
}
.inner {
  padding-top: 100px;
  padding-bottom: 100px;
}
.divider {
  position: absolute;
  right: 0;
  left: calc(50% - 200px);
  top: 372px;
  background-repeat: no-repeat;
  width: 420px;
  height: 200px;
  text-align: center;
  opacity: 0.35;
  scale: 30%;
  background-image: url(../../assets/img/bullets_sm.png);
}
#home {
  font-size: 1rem;
  font-weight: 200;
  line-height: 1.5;
}
#home:hover {
  color: #00a6a6;
}
#contactUs {
  color: #00a6a6;
}
h2 {
  color: white;
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 1.2;
}
.overlay {
  background-color: rgba(28, 28, 28, 0.724); /* Colore scuro con opacità */
}
</style>
