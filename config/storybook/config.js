/* eslint-disable import/no-extraneous-dependencies */
import { configure } from "@storybook/vue";
import { setOptions } from "@storybook/addon-options";

import './../../theme/default.scss';

import Vue from 'vue';
import hitLib from './../../src/bundle';
Vue.use(hitLib);

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
