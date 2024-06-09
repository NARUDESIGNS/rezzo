<script setup lang="ts">
import { computed, useCssModule } from "vue";

const props = defineProps<{
  /** Label */
  label?: string;
  /** Action */
  action?: () => void;
  /** Href link */
  href?: string;
  /** Disable action */
  disabled?: boolean;
  /** Danger */
  danger?: boolean;
  /** Warning */
  warning?: boolean;
  /** Open new page */
  newPage?: boolean;
}>();

const $style = useCssModule();
const styles = computed(() => ({
  [$style.disabled]: props.disabled,
  [$style.danger]: props.danger,
  [$style.warning]: props.warning,
}));
</script>

<template>
  <a
    :href="href"
    :target="newPage ? '_blank' : ''"
    :class="[$style.action, styles]"
    @click="action"
  >
    <slot>
      {{ label }}
    </slot>
  </a>
</template>

<style module lang="scss">
@use "@/scss/colors";

.action {
  color: colors.use("primary");
  cursor: pointer;
  display: inline-block;
  outline: none;
  text-decoration: none;
}

.action:hover {
  color: colors.use("primary");
}

.action::after {
  display: block;
  content: "";
  width: inherit;
  height: 3px;
  margin-top: -2px;
  background-color: colors.use("primary");
  transform: scaleX(0);
  transform-origin: left;
  transition-duration: 0.2s;
  opacity: 0;
}

.action:hover::after,
.action:focus::after {
  transform: scaleX(1);
  opacity: 1;
}

.danger {
  color: colors.use("danger") !important;

  &::after {
    background-color: colors.use("danger") !important;
  }
}

.warning {
  color: darken($color: colors.use("warning"), $amount: 20) !important;

  &::after {
    background-color: darken(
      $color: colors.use("warning"),
      $amount: 20
    ) !important;
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
