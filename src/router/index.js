import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import Home from "../views/Home/Home.vue";
import Signup from "../views/Signup/Signup.vue";
import Signin from "../views/Signin/Signin.vue";
import MyTrips from "../views/MyTrips/MyTrips.vue";
import Checkout from "../views/Checkout/Checkout.vue";
import HotelDetails from "../views/HotelDetails/HotelDetails.vue";
import SearchResults from "../views/SearchResults/SearchResults.vue";

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
        path: "/search-results",
        name: "searchResults",
        component: SearchResults,
      },
      {
        path: "/hotel-details/:id",
        name: "hotelDetails",
        component: HotelDetails,
      },
      {
        path: "/trips",
        name: "myTrips",
        component: MyTrips,
      },
      {
        path: "/checkout",
        name: "checkout",
        component: Checkout,
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
