<script setup lang="ts">
import { computed, useCssModule } from "vue";

const props = withDefaults(
  defineProps<{
    size?: number;
    primary?: boolean;
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
  <span :class="[$style.loader, style]"></span>
</template>

<style module lang="scss">
@use "@/scss/colors";

@mixin border-colors($color: "primary") {
  border-top-color: colors.use($color);
  border-right-color: colors.use($color);
  border-left-color: colors.use($color);
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
