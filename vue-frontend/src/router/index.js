import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TopPage from "../components/TopPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/top",
      name: "top",
      component: TopPage,
    },
  ],
});

export default router;
