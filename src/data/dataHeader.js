import { reactive } from "vue";

export const dataHeader = reactive({
  contacts: {
    telephoneNumber: "+1 (305) 1234-5678",
    mainMailAdress: "hello@example.com",
    openHours: "Open Hours: Mon - Sat - 9:00 - 18:00",
  },
  data: {
    certifications: 128,
    employees: 230,
    customers: 517,
    countriesServed: 94,
  },
});
