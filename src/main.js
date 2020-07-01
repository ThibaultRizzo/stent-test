import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import ImageFallBack from "./directives/image-fallback";

Vue.config.productionTip = false;

Vue.directive("image-fall-back", ImageFallBack);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
