import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Test.vue";
import Secondtest from "../views/Secondtest.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  {
    path: "/secondtest",
    name: "Secondtest",
    component: Secondtest,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
