import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Home2 from "../views/Home2.vue";
import Home3 from "../views/Home3.vue";
import Home4 from "../views/Home4.vue";
import Home5 from "../views/Home5.vue";
import Home6 from "../views/Home6.vue";
import Details from "../views/Details.vue";

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
  {
    path: "/home6",
    name: "Home6",
    component: Home6,
  },
  {
    // for each post following the path of the id
    path: "/posts/:id",
    name: "Details",
    component: Details,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
