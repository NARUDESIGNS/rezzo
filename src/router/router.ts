// imports up here...
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const route = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login-signup",
      name: "login-signup",
      component: () => import("../views/LoginSignupView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/BlogsView.vue"),
    },
    {
      path: "/resources",
      name: "resources",
      component: () => import("../views/ResourcesView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default route;
