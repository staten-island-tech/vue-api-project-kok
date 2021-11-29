import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import IDSR from "../views/IDSR.vue";
import IDSR2 from "../views/IDSR2.vue";
import L984 from "../views/L984.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/IDSR",
    name: "IDSR",
    component: IDSR,
  },
  {
    path: "/IDSR2",
    name: "IDSR2",
    component: IDSR2,
  },
  {
    path: "/L984",
    name: "L984",
    component: L984,
  },
  // {
  //   path: "/L984",
  //   name: "L984",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/L984.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
