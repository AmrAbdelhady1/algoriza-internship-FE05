import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import Home from "../views/Home/Home.vue"
import Signup from "../views/Signup/Signup.vue"
import Signin from "../views/Signin/Signin.vue"

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
    ],
  },
  {
    path: "/reg",
    name: "signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "signin",
    component: Signin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
