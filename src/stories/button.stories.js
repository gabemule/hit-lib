/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { withInfo } from "storybook-addon-vue-info/lib/index";
import { withOptions } from '@storybook/addon-options';
import { withKnobs, text, select, boolean} from "@storybook/addon-knobs/vue";

import Components from "./../components/index";

const TextButton = "Button Text";
const TypeButton = "Variant";
const SizeButton = "Size";
const optionsVariant = {
  Primary: "primary",
  "Primary Inverse": "primary-inverse",
  Secondary: "secondary",
  "Secondary Inverse": "secondary-inverse",
  Back: "back"
};
const optionsSize = {
  Small: "sm",
  Medium: "md",
  Large: "lg"
};

storiesOf("Hit Button", module)
  .addDecorator(withKnobs)
  .addDecorator(withOptions)
  .addParameters({ options: { showAddonPanel: true, selectedAddonPanel: 'storybooks/storybook-addon-knobs' } })
  .add(
    "Customizable Button",
    withInfo({})(() => ({
      components: { ...Components },
      template: `
        <hit-button 
          @click="action"
          size="${select(SizeButton, optionsSize, "sm")}" 
          variant="${select(TypeButton, optionsVariant, "primary")}"
          :disabled="${boolean('Disabled', false)}"
        >
          ${text(TextButton, "Button Text")}
        </hit-button>
      `,
      methods: { action: action("clicked") },
      propsDescription: {
        size: "Options: 'sm', 'md', 'lg'",
        variant:
          "Options: 'primary', 'primary-inverse', 'secondary', 'secondary-inverse', 'back'"
      }
    }))
  )

  .addParameters({ options: { showAddonPanel: true, selectedAddonPanel: 'storybook/actions/actions-panel' } })
  .add("Button Sizes", () => ({
    components: { ...Components },
    template: `
      <div>
        <hit-button @click="action('Small Button')" size="sm">
          Small Button
        </hit-button>
        
        <hit-button @click="action('Medium Button')" size="md">
          Medium Button
        </hit-button>
        
        <hit-button @click="action('Large Button')" size="lg">
          Large Button
        </hit-button>
      </div>
    `,
    methods: { action: action("Clicked") }
  }))

  .addParameters({ options: { showAddonPanel: true, selectedAddonPanel: 'storybook/actions/actions-panel' } })
  .add("Button Variants", () => ({
      components: { ...Components },
      template: `
        <div>
          <hit-button @click="action" variant="primary">
            Primary Button
          </hit-button>
          
          <hit-button @click="action" variant="primary-inverse">
            Primary Inverse Button
          </hit-button>
          
          <hit-button @click="action" variant="secondary">
            Secondary Button
          </hit-button>
          
          <hit-button @click="action" variant="secondary-inverse">
            Secondary Inverse Button
          </hit-button>
          
          <hit-button @click="action" variant="back">
            Back Button
          </hit-button>
        </div>
      `,
      methods: { action: action("Clicked") }
  }));
