import Vue from "vue";
import Router from "vue-router";
import Hello from "@/pages/index";
import SelectPage from "@/pages/select";
import MerchantPage from "@/pages/merchant";
import StudentPage from "@/pages/student";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello
    },
    {
      path: "/select",
      name: "select",
      component: SelectPage
    },
    {
      path: "/merchant",
      name: "merchant",
      component: MerchantPage
    },
    {
      path: "/student",
      name: "student",
      component: StudentPage
    }
  ]
});
