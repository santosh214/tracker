import "bootstrap-css-only/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.filter("filtered", function(val) {
  return val.this.name;
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
