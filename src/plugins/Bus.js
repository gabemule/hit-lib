export default {
  /* eslint-disable no-unused-vars */
  install(Vue, options) {
    Vue.prototype.$Bus = new Vue();
  }
}