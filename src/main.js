import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Vue3Toasity from "vue3-toastify";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style.css";
import "vue3-toastify/dist/index.css";

const app = createApp(App);
app
  .use(router)
  .use(Vue3Toasity, {
    autoClose: 3000,
    theme: "colored",
  })
  .use(ElementPlus)
  .use(createPinia())
  .mount("#app");
