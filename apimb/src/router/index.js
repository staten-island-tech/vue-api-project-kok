import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ids from "../views/Ids.vue";
import { component } from "vue/types/umd";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/IdS",
    name: "IdS",
    component: Ids,
  },
  {
    path: "/1984",
    name: "1984",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/1984.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
