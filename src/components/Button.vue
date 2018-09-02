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
          ["primary", "primary-ghost", "secondary", "secondary-ghost"].indexOf(
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
.hit-button {
  &.-sm {
    padding: 5px;
  }
  &.-md {
    padding: 7.5px;
  }
  &.-lg {
    padding: 10px;
  }
}
</style>
