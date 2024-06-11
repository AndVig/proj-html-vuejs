<script>
import { dataHeader } from "../data/dataHeader.js";
export default {
  name: "HeaderApp",
  data() {
    return {
      dataHeader,
      menu: [
        {
          title: "Home",
          routeName: "home",
        },
        {
          title: "About",
          routeName: "about",
        },
      ],
    };
  },
};
</script>
<template>
  <header class="has-navbar-top has-navbar-bottom">
    <nav class="navbar navbar-expand top">
      <div class="container top-part header">
        <ul class="navbar-nav left">
          <li class="nav-item">
            <a href="#" class="nav-link m-0">
              <i class="fas fa-clock text-after"></i>
              Open Hours: Mon - Sat - 9:00 - 18:00
            </a>
          </li>
        </ul>
        <div class="ml-auto"></div>
        <ul class="navbar-nav right">
          <li class="nav-item">
            <a href="#" class="nav-link m-0">
              <i class="fas fa-phone-alt text-after"></i>
              +1 (305) 1234-5678
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link m-0">
              <i class="fas fa-envelope text-after"></i>
              hello@example.com
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link m-0">
              <i class="fab fa-facebook-f m-0"></i>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link m-0">
              <i class="fab fa-twitter m-0"></i>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link m-0">
              <i class="fab fa-linkedin-in m-0"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <nav
      class="navbar navbar-expand-lg navbar-relative visible navbar-sticky bg-body-tertiary"
    >
      <div class="container-fluid px-5">
        <a class="navbar-brand" href="#"
          ><router-link :to="{ name: 'home' }"
            ><img src="../assets/img/logo.svg" alt="" /></router-link
        ></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                ><router-link :to="{ name: 'home' }">Home</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link :to="{ name: 'about' }">About</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link :to="{ name: 'contact' }"
                  >Contact Us</router-link
                ></a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.navbar {
  .top-part {
    width: 100%;
    a {
      color: #606d75;
    }
  }
  background-image: linear-gradient(-45deg, #1b4965 0%, #0d1b2a 100%);
  a {
    color: #bec1ce;
    text-decoration: none;
    img {
      width: 40%;
    }
    &:hover {
      color: #058283;
    }
  }
}
</style>
