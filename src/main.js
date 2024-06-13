import { createApp } from "vue";
import "./assets/scss/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { router } from "./router";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faFacebookF as fb } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import {
  faTruckRampBox as cargo,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowRight as arrow } from "@fortawesome/free-solid-svg-icons";
import { faCheck as check } from "@fortawesome/free-solid-svg-icons";
import { faXmark as cross } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign as dollar } from "@fortawesome/free-solid-svg-icons";
import { faPhone as phone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as mail } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot as map } from "@fortawesome/free-solid-svg-icons";
import { faBoxesStacked as box } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureHigh as temperature } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF as facebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter as twitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn as linkedin } from "@fortawesome/free-brands-svg-icons";
import { faQuoteRight as quotes } from "@fortawesome/free-solid-svg-icons/faQuoteRight";
import { faMicrophone as Microphone } from "@fortawesome/free-solid-svg-icons";
import { faClock as clock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as envelope } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass as MagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping as bagShopping } from "@fortawesome/free-solid-svg-icons";
import { faHourglassEnd as HourglassEnd } from "@fortawesome/free-solid-svg-icons";
import { faLock as lock } from "@fortawesome/free-solid-svg-icons";
import { faAppleWhole as apple } from "@fortawesome/free-solid-svg-icons";
import { faUserTie as userTie } from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add([
  fb,
  cargo,
  arrow,
  dollar,
  check,
  cross,
  phone,
  mail,
  map,
  box,
  temperature,
  facebook,
  twitter,
  linkedin,
  quotes,
  Microphone,
  clock,
  envelope,
  MagnifyingGlass,
  bagShopping,
  HourglassEnd,
  lock,
  apple,
  userTie,
]);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
