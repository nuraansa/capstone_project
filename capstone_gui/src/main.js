import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/style.css";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";
// import vueScrollTo from 'vue-scrollto'

createApp(App).use(store).use(router).use(AOS.init()).mount("#app");
