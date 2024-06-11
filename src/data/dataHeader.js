import { reactive } from "vue";
export const dataHeader = reactive({
    menu: [
        {
            title: "Home",
            routeName: "home",
        },
        {
            title: "About",
            routeName: "about",
        }
    ]
});