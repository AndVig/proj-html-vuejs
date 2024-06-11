//DATA HOME
import { reactive } from "vue";
export const dataHomePage = reactive({
  cargo: {
    sub_title: "logistic services",
    title: "cargo transport",
    text: "Fractional or exclusive road cargo transportation to all regions, with small, medium and large vehicles.",
  },

  transport: {
    sub_title: "WHO WE ARE",
    title: "Excellence in Transport",
    //  TO DO CONTROLLARE COME FATTO PE ROFFERS PER I PARAGRAFI
    pharagraph1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit tortor, interdum sed cursus eu, sagittis ut nunc. Sed vitae tellus et arcu aliquet faucibus fermentum non lacus.",
    pharagraph2:
      "Praesent fringilla quis massa et placerat. Mauris eu dui eget urna pellentesque gravida vitae quis nibh. Ut at augue tortor. Pellentesque quis suscipit magna.",
    pharagraph3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam tortor, ultrices accumsan mauris eget, pulvinar tincidunt erat. Sed nisi nisi, rutrum sit amet elit.",
    //TO DO RICONTROLLARE LI IN HOMEPAGE, FARE ANCHE QUI COME OFFERS
  },

  basicPlan: {
    title: "Basic plan",
    pharagraph: "lorem ipsum dolor sit amet,consectur adipiscing elit",
    price: " $ 490 / mo",
    offers: [
      {
        name: "fraction load",
        flag: true,
      },
      {
        name: "Refrigerated cargo",
        flag: true,
      },
    ],
  },
});
