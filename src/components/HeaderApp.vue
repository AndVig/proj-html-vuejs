<script>
import { dataHeader } from "../data/dataHeader.js";
export default {
  name: "HeaderApp",
  props: {
    telephoneNumber: String,
    mainMailAdress: String,
    openHours: String,
  },
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
              {{ openHours }}
            </a>
          </li>
        </ul>
        <div class="ml-auto"></div>
        <ul class="navbar-nav right">
          <li class="nav-item">
            <a href="#" class="nav-link m-0">
              <i class="fas fa-phone-alt text-after"></i>
              {{ telephoneNumber }}
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link m-0">
              <i class="fas fa-envelope text-after"></i>
              {{ mainMailAdress }}
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
                link
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#"
                    ><router-link :to="{ name: 'home' }">Home</router-link></a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><router-link :to="{ name: 'about' }">About</router-link></a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><router-link :to="{ name: 'contact' }"
                      >Contact Us</router-link
                    ></a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                href="#"
                class="nav-link"
                data-toggle="modal"
                data-target="#cart"
              >
                <i class="fa-solid fa-bag-shopping"></i>
              </a>
            </li>
            <span class="cart-counter">0</span>
            <li class="nav-item">
              <button
                type="button"
                class="btn btn-read px-4 rounded-pill fs-6 btn-lg text-white"
              >
                <span>BUY NEXGEN</span>
              </button>
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
      font-weight: 400;
    }
  }
  background-image: linear-gradient(-45deg, #1b4965 0%, #0d1b2a 100%);
  a {
    color: #bec1ce;
    text-decoration: none;
    font-weight: 750;
    img {
      width: 40%;
    }
    &:hover {
      color: #058283;
    }
    .btn {
      color: #fff;
    }
  }
}
.cart-counter {
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  font-size: 12px;
  border-radius: 100%;
  background-color: #d90a2c;
  color: #fff;
  transform: translate(-7.5px);
}
.btn-read {
  border: #ffffff 2px solid;
}
.btn-read span {
  color: rgba($color: #fdfbfb, $alpha: 0.7);
}
.btn-read span:hover {
  color: white;
}
</style>
