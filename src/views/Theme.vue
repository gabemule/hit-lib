<template>
    <div class="sb-show-main">
        <hit-container>
            <hit-row>
                <hit-col>
                    <div class="info-header" style="border-bottom: 1.5px solid #eee;">
                        <h1 class="title">
                            Hit Plugins
                        </h1>
                        <h2 class="story-title" style="	color: #555; margin-top: 0.5em; font-weight: normal; font-size: 1.2em;">
                            Theme Plugin
                        </h2>
                    </div>
                </hit-col>
            </hit-row>
            <hit-row>
                <hit-col>
                    <hit-button variant="primary" @click="themeCUSTOM"> CUSTOM Theme </hit-button>
                    <hit-button variant="secondary" @click="themeLASA"> LASA Like Theme </hit-button>
                    <hit-button variant="primary-inverse" @click="themeSUBMARINO"> SUBMARINO Like Theme </hit-button>
                    <hit-button variant="secondary-inverse" @click="themeDefault"> Default Theme </hit-button>
                </hit-col>
            </hit-row>

            <hit-row>
                <hit-col>
                    <div>
                        <h2 class="section-title">Story Source</h2>
                        <span style="display: block; overflow-x: auto; padding: 0.5em; color: #333; background: #f8f8f8;">
                            <h3> Theme Update </h3>
                            <pre>
                            let theme = {
                              styles: {
                                primary: '#4286f4',
                                primaryLighten: '#4286f4',
                                primaryDarken: '#4286f4',

                                secondary: '#ed40d8',
                                secondaryLighten: '#4286f4',
                                secondaryDarken: '#4286f4',

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

                            this.$Theme.updateStyles(theme);
                            </pre>

                            <i> * If darken or primaryLighten/primaryDarken and primaryLighten/primaryDarken colors are not specified as in example above, It will use the lighten/darken % set.  </i>
                        </span>
                    </div>
                </hit-col>
            </hit-row>
        </hit-container>

        <hit-alert></hit-alert>
    </div>
</template>

<script>
  export default {
    methods: {
      themeLASA() {
        let theme = {
          styles: {
            primary: '#dc3545',
            secondary: '#ffc107',
          }
        };

        this.$Theme.updateStyles(theme);
      },
      themeSUBMARINO() {
        let theme = {
          styles: {
            primary: '#00adef',
            secondary: '#ffc107',
          }
        };

        this.$Theme.updateStyles(theme);
      },
      themeCUSTOM() {
        let theme = {
          styles: {
            primary: '#dc3545',
            secondary: '#170085',
            error: 'magenta',
            warning: 'magenta',
            success: 'magenta',
            info: 'magenta'
          }
        };

        this.$Theme.updateStyles(theme);
      },
      themeDefault() {
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

        this.$Theme.updateStyles(theme);
      }
    }
  };
</script>
