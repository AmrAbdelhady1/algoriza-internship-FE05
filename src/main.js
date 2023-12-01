import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Vue3Toasity from "vue3-toastify";
import "./style.css";
import "vue3-toastify/dist/index.css";

const app = createApp(App);
app
  .use(router)
  .use(Vue3Toasity, {
    autoClose: 3000,
    theme: "colored",
  })
  .use(createPinia())
  .mount("#app");
