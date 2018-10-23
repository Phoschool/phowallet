import Vue from "vue";
import Router from "vue-router";
import LoginPage from "@/pages/Login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginPage
    }
  ]
});
