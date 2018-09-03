/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Alert from './plugins/Alert';
import Bus from './plugins/Bus';
import Theme from './plugins/Theme';
import Components from './components/index';

const HitLibrary = {
  /* eslint-disable no-unused-vars */
  install(Vue, options) {
    const themeOptions = (options !== undefined && options.styles !== undefined) ? { styles: options.styles } : { styles: null };

    // Use lib plugins
    Vue.use(Alert);
    Vue.use(Bus);
    Vue.use(Theme, themeOptions);

    // Auto-register lib components
    Object.entries(Components).forEach((name) => { Vue.component(name[0], name[1]) });

  }
};

export default HitLibrary;
