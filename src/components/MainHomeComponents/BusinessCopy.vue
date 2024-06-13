<script>
import { dataFooter } from "../../data/dataFooter";

export default {
  name: "BusinessCopy",
  data() {
    return {
      dataFooter,
    };
  },
};
</script>

<template>
  <div class="bg">
    <div class="text-start py-3">
      <div class="row justify-content-center py-3">
        <div class="col-3 py-5 px-2 text-dark me-5">
          <p class="fs-6 fw-bold water-color">TALK TO AN EXPERT</p>
          <h3 class="display-4 fw-bold">Our Business Units</h3>
          <p class="opacity-75 mt-4 width">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.​
          </p>
        </div>
        <div class="col-3 py-5 water-color mt-5">
          <ul class="navbar-nav">
            <li class="navbar-item">
              <a
                class="nav-link text-left switch dim"
                href="tel:+1 (305) 1234-5678"
              >
                <div class="icon-wrapper rounded-circle">
                  <font-awesome-icon class="icon" :icon="['fas', 'phone']" />
                </div>
                <div class="list-text">+1 (305) 1234-5678</div>
              </a>
            </li>
            <li class="navbar-item">
              <a
                class="nav-link text-left switch"
                href="mailto:mail@example.com"
              >
                <div class="icon-wrapper rounded-circle">
                  <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
                </div>
                <div class="list-text">mail@example.com</div>
              </a>
            </li>
            <li class="navbar-item">
              <a class="nav-link text-left switch" href="#">
                <div class="icon-wrapper rounded-circle">
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'location-dot']"
                  />
                </div>
                <div class="list-text">Main Avenue, 987</div>
              </a>
            </li>
          </ul>
          <button type="submit" class="btn my-3 map-dark btn-primary">
            View Map
          </button>
        </div>
        <div class="col-3 mt-5 py-5 water-color">
          <ul class="navbar-nav">
            <li class="navbar-item">
              <a
                class="nav-link text-left switch"
                href="tel:+1 (305) 1234-5678"
              >
                <div class="icon-wrapper rounded-circle">
                  <font-awesome-icon class="icon" :icon="['fas', 'phone']" />
                </div>
                <div class="list-text">+1 (305) 1234-5678</div>
              </a>
            </li>
            <li class="navbar-item">
              <a
                class="nav-link text-left switch"
                href="mailto:mail@example.com"
              >
                <div class="icon-wrapper rounded-circle">
                  <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
                </div>
                <div class="list-text">mail@example.com</div>
              </a>
            </li>
            <li class="navbar-item">
              <a class="nav-link text-left switch" href="#">
                <div class="icon-wrapper rounded-circle">
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'location-dot']"
                  />
                </div>
                <div class="list-text">Main Avenue, 987</div>
              </a>
            </li>
          </ul>
          <button type="submit" class="btn my-3 map-dark btn-primary">
            View Map
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg{
    background-color: #EDEDED;
}
.water-color {
  color: #00a6a6;
}
.width {
  width: 100%;
  font-size: 15px;
}

ul li{
    padding: 5% 0;
}
.switch:hover {
  .icon-wrapper {
    background-color: #058283;
  }
  .icon {
    color: #ffffff;
  }
}

.icon {
  padding-left: 4px;
  padding-top: 4px;
  color: #058283;
}

.icon-wrapper {
  background-color: #00a6a626;
  width: 30px;
  padding: 3px;
  margin-right: 5px;
  display: inline-block;
}
.list-text {
  color: #afb6ba;
  display: inline;
}
.map-dark {
  background-color: #00a6a626;
  color: #058283;
  font-family: Montserrat, sans-serif;
  font-style: default;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  padding: 10px 25px;
  border-radius: 100px;
  border: none;
  text-transform: uppercase;
}
.map-dark:hover {
  background-color: #058283;
  color: #ffffff;
}
</style>
