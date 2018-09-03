/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withOptions } from "@storybook/addon-options";

import alertView from "./../views/Alert.vue";

storiesOf("Hit Plugins", module)
  .addDecorator(withOptions)
  .addParameters({ options: { showAddonPanel: false } })
  .add("Alert Plugin", () => ({
    components: { alertView },
    template: `
        <alert-view></alert-view>
      `
  }));
