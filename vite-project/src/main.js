import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import homeview from "./views/homeview.vue";
import graphview from "./views/graphview.vue";

const routes = [
  {
    path: "/",
    component: homeview,
  },
  {
    path: "/graph",
    component: graphview,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

createApp(App).use(router).mount("#app");
