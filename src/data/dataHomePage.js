//DATA HOME
import { reactive } from "vue";
export const dataHomePage = reactive({
  //STRUTTURA DATI PRIMA PARTE (CARGO)
  cargo: [
    {
      sub_title: "logistic services",
      title: "cargo transport",
      text: "Fractional or exclusive road cargo transportation to all regions, with small, medium and large vehicles.",
    },
  ],
  //STRUTTURA DATI SECONDA PARTE (TRANSPORT)
  transport: {
    sub_title: "WHO WE ARE",
    title: "Excellence in Transport",

    pharagraph: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit tortor, interdum sed cursus eu, sagittis ut nunc. Sed vitae tellus et arcu aliquet faucibus fermentum non lacus.",
        flag: false,
      },
      {
        text: "Praesent fringilla quis massa et placerat. Mauris eu dui eget urna pellentesque gravida vitae quis nibh. Ut at augue tortor. Pellentesque quis suscipit magna.",
        flag: false,
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam tortor, ultrices accumsan mauris eget, pulvinar tincidunt erat. Sed nisi nisi, rutrum sit amet elit.",
        flag: true,
      },
    ],
    list: [
      {
        text: "Lorem ipsum dolor sit amet",
      },
      {
        text: "Consectetur adipiscing elit",
      },
      {
        text: "Integer molestie lorem at massa",
      },
      {
        text: "Facilisis in pretium nisl aliquet",
      },
    ],
    basicPlan: {
      title: "Basic plan",
      pharagraph: "Lorem ipsum dolor sit amet,consectur adipiscing elit",
      price: " 490",
      period: " / mo",
      offers: [
        {
          name: "Fraction load",
          flag: true,
        },
        {
          name: "Refrigerated cargo",
          flag: true,
        },
        {
          name: "Regional delivery",
          flag: true,
        },
        {
          name: "Hazardous cargo",
          flag: false,
        },
        {
          name: "Mobile Tracking",
          flag: false,
        },
      ],
    },
  },
  //STRUTTURA DATI TERZA PARTE (MAIN SERVICES)
  service: {
    sub_title: "Road Transport",
    title: "Main Services",
    pharagraph:
      "With all of this expertise and capability comes an unrivalled commitment to customer service. We will work hard to understand your needs in order to develop a productive, long-term partnership.",
    card: [
      {
        title: "Technology",
        text: "We are continually focused on developing technology solutions adapted to our client's/ needs.",
        name: "truck-ramp-box",
      },
      {
        title: "Refeer Cargo",
        text: "Regular and frequent monitoring from the receipt of the loaded cpntainer to final destination.",
        name: "temperature-high",
      },
      {
        title: "Dry Cargo",
        text: "We work with most types of dry cargo, from valuable cargo to the most dangerous requiring care.",
        name: "boxes-stacked",
      },
    ],
  },
  staffNumbers: {
    sub_title: "WHAT ARE WE DOING",
    title: "Results in Numbers",
    pharagraph:
      "Our goal is to exceed expectations by delivering the best job possible.",
  },
  numbers: [
    {
      num: 128,
      type: "Certifications",
    },
    {
      num: 230,
      type: "230",
    },
    {
      num: 517,
      type: "Customers",
    },
    {
      num: 94,
      type: "Countries Served",
    },
  ],
});
