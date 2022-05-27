import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./styles/site.scss";

const app = createApp(App);

app.directive('focus', {
    mounted(el) {
        el.focus();
    },
});

app.use(store).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
