<template>
    <div class="row"
         :class="[
            fixed && '-fixed',
            align && '-'+align,
            verticalAlign && '-v-'+verticalAlign+'-align',

            rowReverse && '-row-reverse',
            colReverse && '-col-reverse',

            border && '-full-border',
            borderTop && '-top-border',
            borderBottom && '-bottom-border',
            borderLeft && '-left-border',
            borderRight && '-right-border',

            distribution && '-'+distribution,
         ]"
         :style="styles"
    >
        <slot/>
    </div>
</template>

<script>
const Align = ["", "top", "middle", "bottom"];
const Distribution = [
  "",
  "center",
  "start",
  "end",
  "around",
  "between",
  "left",
  "right"
];

export default {
  props: {
    fixed: { type: Boolean, default: false },

    align: {
      type: String,
      default: "",
      validator(value) {
        return Align.indexOf(value) !== -1;
      }
    },
    verticalAlign: {
      type: String,
      default: "",
      validator(value) {
        return Align.indexOf(value) !== -1;
      }
    },

    rowReverse: { type: Boolean, default: false },
    colReverse: { type: Boolean, default: false },

    border: { type: Boolean, default: false },
    borderTop: { type: Boolean, default: false },
    borderBottom: { type: Boolean, default: false },
    borderLeft: { type: Boolean, default: false },
    borderRight: { type: Boolean, default: false },

    distribution: {
      type: String,
      default: "",
      validator(value) {
        return Distribution.indexOf(value) !== -1;
      }
    }
  },
  computed: {
    styles() {
      let style = { styled: true };

      if (this.border === true) {
        style.boxShadow = "inset 0 0 0 1px " + this.$Theme.styles.gridBorder;
      }

      if (this.borderTop === true) {
        style.boxShadow = "inset 0 1px 0 0 " + this.$Theme.styles.gridBorder;
      }

      if (this.borderBottom === true) {
        style.boxShadow = "inset 0 -1px 0 0 " + this.$Theme.styles.gridBorder;
      }

      if (this.borderLeft === true) {
        style.boxShadow = "inset 1px 0 0 " + this.$Theme.styles.gridBorder;
      }

      if (this.borderRight === true) {
        style.boxShadow = "inset -1px 0 0 " + this.$Theme.styles.gridBorder;
      }

      return style;
    }
  }
};
</script>
