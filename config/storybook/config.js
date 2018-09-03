/* eslint-disable import/no-extraneous-dependencies */
import { configure } from "@storybook/vue";
import { setOptions } from "@storybook/addon-options";

import Vue from 'vue';
import hitLib from './../../src/bundle';
Vue.use(hitLib);

// Example 1
// Vue.use(hitLib, {
//   styles: {
//     primary: '#FF4E63',
//     secondary: '#170085',
//     error: '#ed40d8',
//     warning: '#ed40d8',
//     success: '#ed40d8',
//     info: '#ed40d8',
//   }
// });


// DCM
// Vue.use(hitLib, {
//   styles: {
//     primary: '#429ece',
//     secondary: '#f6a623',
//   }
// });


// Americanas
// Vue.use(hitLib, {
//   styles: {
//     primary: '#e60014',
//     secondary: '#ffc107',
//   }
// });

// Submarino
// Vue.use(hitLib, {
//   styles: {
//     primary: '#00adef',
//     secondary: '#ffc107',
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
