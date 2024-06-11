import { reactive } from "vue";

export const dataHeader = reactive ({

    contacts: {
        telephoneNumber: '+1 (305) 1234-5678',
        mainMailAdress: 'hello@example.com',
        secondaryMailAdress: ' mail@example.com',
        mainAdress: 'Main Avenue, 987',
        secondaryAdress:  'Main Avenue, 123'
    },
    data: {
        certifications: 128,
        employees: 230,
        customers: 517,
        countriesServed: 94
    }
    

});