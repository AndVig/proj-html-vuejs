//DATA CONTACT
import { reactive } from "vue";
export const dataContact= reactive({
    area:
        {
            start:
                {
                    title:"Contact Us",
                }
            ,
            know:
                {
                    title:"Know First",
                    desc:"Follow closely and receive content about our company and the news of the current market.",
                    up:"NEWSLETTER",
                }
            ,
            contacts:[
                {
                    title:"Our Business Units",
                    desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit.​",
                    up:"TALK TO AN EXPERT",
                },
                {
                    tel:"+1 (305) 1234-5678",
                    mail:"mail@example.com",
                    address:"Main Avenue, 987 ",
                }
            ],
            touch:[
                {
                    title:"GET IN TOUCH",
                    desc:" We will respond to your message as soon as possible.​",
                    up:"SEND A MESSAGE"
                },
                {
                    title:"Exemple Inc.",
                    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                }
            ]
        }
    
})