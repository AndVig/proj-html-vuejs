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
        <div class="container text-center front">
        <h2>Contact Us</h2>
        
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
.overlay {
  background-color: rgba(28, 28, 28, 0.724); /* Colore scuro con opacità */
}
</style>
