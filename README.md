# HIT Lib

## Install
```
npm install --save-dev hit-lib

or

yarn add -D hit-lib
```

### Usage in Vue Project
```
In main.js:

import hitLib from 'hit-lib';
Vue.use(hitLib);
```

## Components

### Storybook
```
$ yarn storybook

=> Open Storybook with Component Examples and Usages
```


## Plugins

### Alert
```
In App.vue:

<hit-alert></hit-alert>
```

#### Alert Trigger
```
Global Trigger Functions:

this.$Alert.success('Message');
this.$Alert.info('Message');
this.$Alert.warning('Message');
this.$Alert.error('Message');
```

#### Alert Params
```
Speed in ms:

let speed = 20000;
this.$Alert.success('Message', speed);
this.$Alert.warning('Message', speed);
this.$Alert.error('Message', speed);
```

### Theme
```
In main.js:

## Styles

    Vue.use(hitLib, {
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
    });
```

#### Programatically Theming
```
let theme = {
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
};

this.$Theme.updateStyle(theme);



* If darken or primaryLighten/primaryDarken and 
secondaryLighten/secondaryDarken colors are not 
specified as in example above, It will use the 
lighten/darken percentage. 
```