<script setup lang="ts">
import { computed, useCssModule } from "vue";

const props = defineProps<{
  label?: string;
  action: () => void;
  href?: string;
  disabled?: boolean;
  danger?: boolean;
}>();

const $style = useCssModule();
const styles = computed(() => ({
  [$style.disabled]: props.disabled,
  [$style.danger]: props.danger,
}));
</script>

<template>
  <a :href="href" @click="action" :class="[$style.action, styles]">
    <slot>
      {{ label }}
    </slot>
  </a>
</template>

<style module lang="scss">
@use "@/scss/colors";

.action {
  color: colors.use("primary");
  text-decoration: none;
  cursor: pointer;
}

.action::after {
  display: block;
  content: "";
  width: 100%;
  height: 3px;
  background-color: colors.use("primary");
  transform: scaleX(0);
  transform-origin: left;
  transition-duration: 0.2s;
  opacity: 0;
}

.action:hover::after {
  transform: scaleX(1);
  opacity: 1;
}

.danger {
  color: colors.use("danger") !important;

  &::after {
    background-color: colors.use("danger") !important;
  }
}

.disabled {
  opacity: 0.4;
  pointer-events: none;

  &::after {
    opacity: 0.4;
    transform: scaleX(1);
  }
}
</style>
