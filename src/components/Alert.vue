<template>
    <div class="hit-alert-wrapper">
        <div
            v-for="(alert, $index) in $Alert.list"
            :key="$index"
            class="hit-alert"
            :class="[ '-'+alert.status ]"
        >
            <progress :value="alert.progress" max="100"></progress>

            <span> {{ alert.message }} </span>

            <button @click="$Alert.remove(alert.id)"> Close</button>
        </div>
    </div>
</template>

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

    &.-success {
      background-color: blue;
    }

    &.-warning {
      background-color: orange;
    }

    &.-error {
      background-color: magenta;
    }
  }
}
</style>
