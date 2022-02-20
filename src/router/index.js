import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Home2 from "../views/Home2.vue";
import Home3 from "../views/Home3.vue";
import Home4 from "../views/Home4.vue";
import Home5 from "../views/Home5.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home2",
    name: "Home2",
    component: Home2,
  },
  {
    path: "/home3",
    name: "Home3",
    component: Home3,
  },
  {
    path: "/home4",
    name: "Home4",
    component: Home4,
  },
  {
    path: "/home5",
    name: "Home5",
    component: Home5,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
