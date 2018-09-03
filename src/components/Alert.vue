<template>
    <div class="hit-alert-wrapper">
        <div
            v-for="(alert, $index) in $Alert.list"
            :key="$index"
            class="hit-alert"
            :class="[ '-'+alert.status ]"
            :style="styles(alert)"
        >
            <progress :value="alert.progress" max="100"></progress>

            <span> {{ alert.message }} </span>

            <button @click="$Alert.remove(alert.id)"> Close</button>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    styles(alert) {
      let styles = { styled: true };

      if (alert.status === 'success') {
        styles.backgroundColor = this.$Theme.styles.success;
      }

      if (alert.status === 'warning') {
        styles.backgroundColor = this.$Theme.styles.warning;
      }

      if (alert.status === 'info') {
        styles.backgroundColor = this.$Theme.styles.info;
      }

      if (alert.status === 'error') {
        styles.backgroundColor = this.$Theme.styles.error;
      }

      return styles;
    }
  }
}
</script>

<style lang="scss">
.hit-alert-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  .hit-alert {
    height: 70px;

    progress {
      width: 100%;
    }
  }
}
</style>
