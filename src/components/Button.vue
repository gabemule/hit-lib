<template>
  <button
    @click="$emit('click')"
    class="hit-button"
    :class="[
      size && '-'+size ,
      variant && '-'+variant,
      disabled && '-disabled'
    ]"
    :disabled="disabled"
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
