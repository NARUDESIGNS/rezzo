import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const route = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginSignupView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/views/LoginSignupView.vue"),
    },
    {
      path: "/blogs",
      name: "blogs",
      component: () => import("@/views/BlogsView.vue"),
    },
    {
      path: "/resources",
      name: "resources",
      component: () => import("@/views/ResourcesView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/create-resume",
      name: "create-resume",
      component: () => import("@/views/CreateResume.vue"),
    },
    {
      path: "/resume-preview",
      name: "resume-preview",
      component: () => import("@/views/PreviewResume.vue"),
    },
    {
      path: "/preview",
      name: "preview",
      component: () => import("@/views/ComponentsPreview.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

export default route;
