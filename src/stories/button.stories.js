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
  .add("Button Gallery", () => ({
    components: { ...Components },
    template: `
      <div>
      
        Primary: <br>
        
        <hit-button @click="action('Small Button Primary')" size="sm">
          Small Button
        </hit-button>
        
        <hit-button @click="action('Medium Button Primary')" size="md">
          Medium Button
        </hit-button>
        
        <hit-button @click="action('Large Button Primary')" size="lg">
          Large Button
        </hit-button>
        
        <br><br>
        
        Primary Inverse: <br>
        
        <hit-button @click="action('Small Button Primary Inverse')" size="sm" variant="primary-inverse">
          Small Button
        </hit-button>
        
        <hit-button @click="action('Medium Button Primary Inverse')" size="md" variant="primary-inverse">
          Medium Button
        </hit-button>
        
        <hit-button @click="action('Large Button Primary Inverse')" size="lg" variant="primary-inverse">
          Large Button
        </hit-button>
        
        <br><br>
        
        Secondary: <br>
        
        <hit-button @click="action('Small Button Secondary')" size="sm" variant="secondary">
          Small Button
        </hit-button>
        
        <hit-button @click="action('Medium Button Secondary')" size="md" variant="secondary">
          Medium Button
        </hit-button>
        
        <hit-button @click="action('Large Button Secondary')" size="lg" variant="secondary">
          Large Button
        </hit-button>
        
        <br><br>
        
        Secondary Inverse: <br>
        
        <hit-button @click="action('Small Button Secondary Inverse')" size="sm" variant="secondary-inverse">
          Small Button
        </hit-button>
        
        <hit-button @click="action('Medium Button Secondary Inverse')" size="md" variant="secondary-inverse">
          Medium Button
        </hit-button>
        
        <hit-button @click="action('Large Button Secondary Inverse')" size="lg" variant="secondary-inverse">
          Large Button
        </hit-button>
        
        <br><br><br><br>
        
        Small Back Button: <br>
        <hit-button @click="action('Small Back Button')" size="sm" variant="back"></hit-button>
        
        <br><br>
        
        Medium Back Button: <br>
        <hit-button @click="action('Medium Back Button')" size="md" variant="back"></hit-button>
        
        <br><br>
        
        Large Back Button: <br>
        <hit-button @click="action('Large Back Button')" size="lg" variant="back"></hit-button>
      </div>
    `,
    methods: { action: action("Clicked") }
  }));
