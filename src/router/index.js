import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import Home from "../views/Home/Home.vue";
import Signup from "../views/Signup/Signup.vue";
import Signin from "../views/Signin/Signin.vue";
import MyTrips from "../views/MyTrips/MyTrips.vue";

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
      {
        path: "/trips",
        name: "myTrips",
        component: MyTrips,
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
