import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import hitLib from './bundle';
Vue.use(hitLib);

new Vue({
  render: h => h(App)
}).$mount("#app");
