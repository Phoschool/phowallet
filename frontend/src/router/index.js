import Vue from "vue";
import Router from "vue-router";
import LoginPage from "@/pages/Login";
import ScanQrCodePage from "@/pages/ScanQrCode";
import RegistrationPage from "@/pages/Register";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginPage
    },
    {
      path: "/scan",
      name: "scanQrCode",
      component: ScanQrCodePage
    },
    {
      path: "/register",
      name: "register",
      component: RegistrationPage
    }
  ]
});
