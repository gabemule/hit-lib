<template>
    <div class="hit-alert-wrapper">
        <div
            v-for="(alert, $index) in $Alert.list"
            :key="$index"
            class="hit-alert"
            :class="[ '-'+alert.status ]"
            :style="styles(alert)"
        >
            <progress class="progress-main" :value="alert.progress" max="100">
                <div class="progress-bar " role="presentation">
                    <span class="progress-value"></span>
                </div>
            </progress>

            <span class="message"> {{ alert.message }} </span>

            <button @click="$Alert.remove(alert.id)"> Close</button>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    styles(alert) {
      let styles = { styled: true };

      if (alert.status === "success") {
        styles.backgroundColor = this.$Theme.styles.success;
      }

      if (alert.status === "warning") {
        styles.backgroundColor = this.$Theme.styles.warning;
      }

      if (alert.status === "info") {
        styles.backgroundColor = this.$Theme.styles.info;
      }

      if (alert.status === "error") {
        styles.backgroundColor = this.$Theme.styles.error;
      }

      styles.color = this.$Theme.styles.white;

      return styles;
    }
  }
};
</script>

<style lang="scss">
@import "./../assets/sass/variables/spacing.scss";
@import "./../assets/sass/variables/icons.scss";
@import "./../assets/sass/variables/typography.scss";

$progress-bar-colour: gray;
$progress-value-colour: white;

.hit-alert-wrapper {
  font-weight: $fontWeight-medium;
  line-height: $lineHeight-xs;
  font-size: $fontSize-xs;
  font-family: $font-family;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  .hit-alert {
    min-height: 70px;
    float: left;
    clear: both;
    margin: 10px;
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    min-width: 250px;
    text-align: center;
    border-radius: 2px;
    z-index: 1;

    .progress-main {
      background-color: gray;
      display: block;
      width: 100%;
      height: 6px;
      overflow: hidden;
      border-radius: 7px;
      position: absolute;
      top: 1px;

      &::-moz-progress-bar {
        background: $progress-value-colour;
        border-radius: 4px;
      }
      &::-webkit-progress-bar {
        background: $progress-bar-colour;
        border-radius: 4px;
      }
      &::-webkit-progress-value {
        background: $progress-value-colour;
        border-radius: 4px;
      }
      &::-ms-fill {
        background: $progress-value-colour;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2) inset;
        border-radius: 4px;
      }
      .progress-bar {
        margin-top: 0.95em;
        background-color: $progress-bar-colour;
        height: 0.3em;
        border-radius: 4px;
      }
      .progress-value {
        background-color: $progress-value-colour;
        display: block;
        height: 0.3em;
        border-radius: 4px;
      }
    }

    span.message {
      padding: $spacing-md-4;
    }

    button {
      @extend .icon-cross-close;
      mask-size: cover;
      text-indent: -99999em;
      width: 15px;
      height: 15px;
      border: none;
      margin: $spacing-md-4;
      cursor: pointer;
      background-color: white;
    }
  }
}
</style>
