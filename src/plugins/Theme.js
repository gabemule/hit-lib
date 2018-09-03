export default {
  /* eslint-disable no-unused-vars */
  install(Vue, options) {
    Vue.prototype.$Theme = new Vue({
      data() {
        return {
          styles: {
            primary: '#4286f4',
            primaryLighten: '',
            primaryDarken: '',

            secondary: '#ed40d8',
            secondaryLighten: '',
            secondaryDarken: '',

            lighten: 0.15,
            darken: -0.15,

            white: '#FFF',
            disabled: '#999999',

            black: '#313647',
            gray1: '#F2F2F2',
            gray2: '#DDDDDD',
            gray3: '#999999',
            gray4: '#666666',

            gridBorder: '#999999',

            error: '#dc3545',
            warning: '#ffc107',
            success: '#28a745',
            info: '#17a2b8',
          }
        }
      },
      methods: {
        updateStyles(opt) {
          if (opt.styles !== null) {
            Object.entries(opt.styles).forEach((name) => {
              this.updateStyle(name[0], name[1]);
            });
          }
        },
        updateStyle(key, color) {
          this.styles[key] = color;
        }
      },
      created() {
        this.updateStyles(options);
      }
    });
  }
}