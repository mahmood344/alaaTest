import { stateManegment } from "../store/index.js";
export default defineNuxtRouteMiddleware((to , from)=>{
    const store = stateManegment();
    if(!store.cookie){
        return navigateTo('/login');
    }
})