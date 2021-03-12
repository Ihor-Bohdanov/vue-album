import Vue from "vue";
import "ant-design-vue/dist/antd.css";
import "@/assets/scss/main.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
