<script setup lang="ts">
import { computed, useCssModule } from "vue";

const props = withDefaults(
  defineProps<{
    /** Loader size in pixels (default: 24px) */
    size?: number;
    /** Primary */
    primary?: boolean;
    /** Loader with light colored border */
    light?: boolean;
  }>(),
  {
    size: 24,
  }
);

const $style = useCssModule();
const size = computed(() => `${props.size}px`);
const style = computed(() => ({
  [$style.primary]: props.primary,
  [$style.light]: props.light,
}));
</script>

<template>
  <span :class="[$style.loader, style]" />
</template>

<style module lang="scss">
@use "@/scss/colors";

@mixin border-colors($color: "primary") {
  border-color: colors.use($color);
  border-bottom-color: transparent;
}

.loader {
  display: inline-block;
  width: v-bind(size);
  height: v-bind(size);
  border-radius: 50%;
  border: 3px solid transparent;
  @include border-colors();
  animation: loading 1.2s linear infinite;

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}

.primary {
  @include border-colors();
}

.light {
  @include border-colors("loader-light");
}
</style>
