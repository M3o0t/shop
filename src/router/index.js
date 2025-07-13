import { createRouter ,createWebHistory } from "vue-router";
import home from "../components/home.vue";
import cart from "../components/cart.vue";
import contact from "../components/contact.vue";

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : "/" , component:  home , name : "home"},
        {path : "/cart" , component : cart , name : "cart"},
        {path : "/contact" , component : contact , name : "contact"}
    ]
})
export default router;