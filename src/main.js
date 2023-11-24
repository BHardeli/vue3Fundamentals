import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router/index";
import App from "./App.vue";
import pinDriective from "@/shared/pin-directive";

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .directive("pin", pinDriective)
  .mount("#app");
