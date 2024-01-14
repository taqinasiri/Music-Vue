import "./assets/main.css";

import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import VeeValidatePlugin from "./includes/validation";
import router from "./router";
import { auth } from "./includes/firebase";
import Icon from "./directives/icon";
import i18n from "./includes/i18n";
import { registerSW } from "virtual:pwa-register";

registerSW({ immediate: true });

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(createPinia());
    app.use(router);
    app.use(VeeValidatePlugin);
    app.use(i18n);
    app.directive("icon", Icon);
  }
  app.mount("#app");
});
