import { createApp } from "vue";
import "./assets/scss/main.scss";
import { router } from "./router";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret as secretAgent } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF as fb } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faTruckRampBox as cargo } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add([secretAgent, fb, cargo]);


createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
