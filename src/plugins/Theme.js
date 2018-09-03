export default {
  /* eslint-disable no-unused-vars */
  install(Vue, options) {
    Vue.prototype.$Theme = new Vue({
      data() {
        return {
          styles: {
            primary: '#4286f4',
            primaryHover: '#4f93ff',
            primaryActive: '#3579e7',

            secondary: '#ed40d8',
            secondaryHover: '#fa4de5',
            secondaryActive: '#e033cb',

            white: '#FFF',
            disabled: '#999999',

            black: '#313647',
            gray1: '#F2F2F2',
            gray2: '#DDDDDD',
            gray3: '#999999',
            gray4: '#666666',

            gridBorder: '#999999',

            error: '#E24242',
            warning: '#DAB400',
            success: '#1D9077',
            info: '#50C9F2',
          }
        }
      },
      methods: {
        checkStyles() {
          if (options.styles !== null) {
            Object.entries(options.styles).forEach((name) => {
              this.updateStyle(name[0], name[1]);
            });
          }
        },
        updateStyle(key, color) {
          this.styles[key] = color;
        }
      },
      created() {
        this.checkStyles();
      }
    });
  }
}