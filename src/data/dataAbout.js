import { reactive } from "vue";
export const dataAbout = reactive({
  results: {
    certifications: 128,
    employees: 230,
    customers: 517,
    countries: 94,
  },
  staffNumbers: {
    sub_title: "WHAT ARE WE DOING",
    title: "Results in Numbers",
    pharagraph:
      "Our goal is to exceed expectations by delivering the best job possible.",
    numbers: [
      {
        num: 128,
        type: "Certifications",
      },
      {
        num: 230,
        type: "Employees",
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
  },
});
