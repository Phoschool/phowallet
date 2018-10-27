import Vue from "vue";
import Router from "vue-router";
import LoginPage from "@/pages/Login";
import ScanQrCodePage from "@/pages/ScanQrCode";
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
    }
  ]
});
