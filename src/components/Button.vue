<template>
  <button
    @mousedown="updateActiveState(true)"
    @mouseup="updateActiveState(false)"

    @mouseenter="updateHoverState(true)"
    @mouseleave="updateHoverState(false)"

    @click="$emit('click')"
    class="hit-button"
    :class="[
      size && '-'+size ,
      variant && '-'+variant,
      disabled && '-disabled'
    ]"
    :disabled="disabled"
    :style="styles"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "md",
      validator(value) {
        return ["sm", "md", "lg"].indexOf(value) !== -1;
      }
    },
    variant: {
      type: String,
      default: "primary",
      validator(value) {
        return (
          ["primary", "primary-ghost", "secondary", "secondary-ghost", "back"].indexOf(
            value
          ) !== -1
        );
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hoverState: false,
      activeState:false
    }
  },
  methods: {
    updateHoverState(bool) {
      this.hoverState = bool;
    },
    updateActiveState(bool) {
      this.activeState = bool;
    }
  },
  computed: {
    styles() {
      let style = { styled: true };

      if (this.variant === 'primary') {
        if (this.activeState === true) {
          style.backgroundColor = this.$Theme.styles.primaryActive;
        } else if (this.hoverState === true) {
          style.backgroundColor = this.$Theme.styles.primaryHover;
        } else {
          style.backgroundColor = this.$Theme.styles.primary;
        }
        style.color = this.$Theme.styles.white;
      }

      if (this.variant === 'secondary') {
        if (this.activeState === true) {
          style.backgroundColor = this.$Theme.styles.secondaryActive;
        } else if (this.hoverState === true) {
          style.backgroundColor = this.$Theme.styles.secondaryHover;
        } else {
          style.backgroundColor = this.$Theme.styles.secondary;
        }
        style.color = this.$Theme.styles.white;
      }

      if (this.variant === 'primary-inverse') {
        if (this.activeState === true) {
          style.backgroundColor = this.$Theme.styles.primaryActive;
          style.color = this.$Theme.styles.white;
        } else if (this.hoverState === true) {
          style.backgroundColor = this.$Theme.styles.primary;
          style.color = this.$Theme.styles.white;
        } else {
          style.color = this.$Theme.styles.primary;
        }
      }

      if (this.variant === 'secondary-inverse') {
        if (this.activeState === true) {
          style.backgroundColor = this.$Theme.styles.secondaryActive;
          style.color = this.$Theme.styles.white;
        } else if (this.hoverState === true) {
          style.backgroundColor = this.$Theme.styles.secondary;
          style.color = this.$Theme.styles.white;
        } else {
          style.color = this.$Theme.styles.secondary;
        }
      }

      if (this.disabled === 'true') {
        style.backgroundColor = this.$Theme.styles.disabled;
      }

      return style;
    }
  }
};
</script>

<style lang="scss">
@import './../assets/sass/variables/border.scss';
@import './../assets/sass/variables/icons.scss';
@import './../assets/sass/variables/spacing.scss';
@import './../assets/sass/variables/typography.scss';

.hit-button {
  padding: $spacing-sm $spacing-md-4;
  border: 0;
  border-radius: $radius-xl;
  font-weight: $fontWeight-medium;
  line-height: $lineHeight-md;
  margin-left: $spacing-md-2;
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;

  &.-back {
    @extend .icon-arrow-back;
    text-indent: -9999em;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0;
    vertical-align: super;
  }

  //btn-primary
  &.-primary-inverse{
    background: transparent;
    box-shadow: $border-inside;
    &:hover{
      box-shadow: $border-inside;
    }
    &:disabled, &.disabled{
      box-shadow: $border-inside;
    }
  }
  //btn-secondary
  &.-secondary-inverse {
    box-shadow: $border-inside;
    &:disabled, &.disabled {
      box-shadow: $border-inside;
    }
  }

  //btn sm
  &.-sm {
    padding: $spacing-sm $spacing-md-1;
    border-radius: $radius-lg;
    line-height: $lineHeight-xs;
    font-size: $fontSize-xxs;
  }
  //btn lg
  &.-lg {
    padding: $spacing-md-2 $spacing-lg-1;
    border-radius: $radius-xl;
    line-height: $lineHeight-xs;
    font-size: $fontSize-sm;
  }
}
</style>
