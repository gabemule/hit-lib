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
                            Alert Plugin
                        </h2>
                    </div>
                </hit-col>
            </hit-row>
            <hit-row>
                <hit-col>
                    <hit-button @click="success"> Success Message </hit-button>
                    <hit-button variant="secondary" @click="warning"> Warning Message </hit-button>
                    <hit-button variant="primary-inverse" @click="error"> Error Message </hit-button>
                </hit-col>
            </hit-row>

            <hit-row>
                <hit-col>
                    <div>
                        <h2 class="section-title">Story Source</h2>
                        <span style="display: block; overflow-x: auto; padding: 0.5em; color: #333; background: #f8f8f8;">
                            <h3> Sucess Alert Method </h3>
                            <p style="font-style: italic;"> {{ ("this.$Alert.success('Success Message Triggered!');").toString() }} </p>

                            <br>

                            <h3> Warning Alert Method </h3>
                            <p style="font-style: italic;"> {{ ("this.$Alert.warning('Warning Message Triggered!');").toString() }} </p>

                            <br>

                            <h3> Error Alert Method </h3>
                            <p style="font-style: italic;"> {{ ("this.$Alert.error('Error Message Triggered!');").toString() }} </p>

                            <br><br><br>

                            <h3> Params </h3>
                            <h4> Speed </h4>
                            <p> Second param can used for speed in ms </p>
                            <p style="font-style: italic;"> <b>10s:</b> {{ ("this.$Alert.success('Message', 10000);").toString() }} </p>
                            <p style="font-style: italic;"> <b>60s:</b> {{ ("this.$Alert.warning('Message', 60000);").toString() }} </p>
                            <p style="font-style: italic;"> <b>120s:</b> {{ ("this.$Alert.error('Message', 120000);").toString() }} </p>
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
    success() {
      this.$Alert.success("This is a Success Message Example!", 15000);
    },
    warning() {
      this.$Alert.warning("A Warning Message Example!");
    },
    error() {
      this.$Alert.error("Error Message Example Triggered!");
    }
  }
};
</script>
