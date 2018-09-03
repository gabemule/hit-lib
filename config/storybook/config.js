/* eslint-disable import/no-extraneous-dependencies */
import { configure } from "@storybook/vue";
import { setOptions } from "@storybook/addon-options";

import Vue from 'vue';
import hitLib from './../../src/bundle';
Vue.use(hitLib);

// Vue.use(hitLib, {
//   styles: {
//     primary: '#E24242',
//     primaryHover: '#E24299',
//     primaryActive: '#E29992',
//     secondary: '#DAB400',
//     secondaryHover: '#d3d23e',
//     secondaryActive: '#98a323',
//     white: '#FFF',
//     disabled: '#1D9077',
//     black: '#313647',
//     gray1: '#F2F2F2',
//     gray2: '#DDDDDD',
//     gray3: '#999999',
//     gray4: '#666666',
//     gridBorder: '#999999',
//     error: '#ed40d8',
//     warning: '#ed40d8',
//     success: '#ed40d8',
//     info: '#ed40d8',
//   }
// });

setOptions({
  showAddonPanel: true,
  addonPanelInRight: true,
  selectedAddonPanel: 'storybooks/storybook-addon-knobs'
});

const req = require.context("../../src/stories", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
