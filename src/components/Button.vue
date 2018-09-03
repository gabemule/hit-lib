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
          ["primary", "primary-inverse", "secondary", "secondary-inverse", "back"].indexOf(
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
    },
    lightenDarken(color, percent) {
      var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
      return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
    }
  },
  computed: {
    styles() {
      let style = { styled: true };

      if (this.variant === 'primary') {
        if (this.activeState === true) {
          let active = (this.$Theme.styles.primaryDarken === '' ? this.lightenDarken(this.$Theme.styles.primary, this.$Theme.styles.darken) : this.$Theme.styles.primaryDarken);
          style.backgroundColor = active;
        } else if (this.hoverState === true) {
          let hover = (this.$Theme.styles.primaryLighten === '' ? this.lightenDarken(this.$Theme.styles.primary, this.$Theme.styles.lighten) : this.$Theme.styles.primaryLighten);
          style.backgroundColor = hover;
        } else {
          style.backgroundColor = this.$Theme.styles.primary;
        }
        style.color = this.$Theme.styles.white;
      }

      if (this.variant === 'secondary') {
        if (this.activeState === true) {
          let active = (this.$Theme.styles.secondaryDarken === '' ? this.lightenDarken(this.$Theme.styles.secondary, this.$Theme.styles.darken) : this.$Theme.styles.secondaryDarken);
          style.backgroundColor = active;
        } else if (this.hoverState === true) {
          let hover = (this.$Theme.styles.secondaryLighten === '' ? this.lightenDarken(this.$Theme.styles.secondary, this.$Theme.styles.lighten) : this.$Theme.styles.secondaryLighten);
          style.backgroundColor = hover;
        } else {
          style.backgroundColor = this.$Theme.styles.secondary;
        }
        style.color = this.$Theme.styles.white;
      }

      if (this.variant === 'primary-inverse') {
        if (this.activeState === true) {
          let active = (this.$Theme.styles.primaryDarken === '' ? this.lightenDarken(this.$Theme.styles.primary, this.$Theme.styles.darken) : this.$Theme.styles.primaryDarken);
          style.backgroundColor = active;
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
          let active = (this.$Theme.styles.secondaryDarken === '' ? this.lightenDarken(this.$Theme.styles.secondary, this.$Theme.styles.darken) : this.$Theme.styles.secondaryDarken);
          style.backgroundColor = active;
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
