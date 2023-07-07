<script setup lang="ts">
import { computed, useCssModule } from "vue";

const props = withDefaults(
  defineProps<{
    /** Button Value */
    value?: string;
    /** Button Width */
    width?: string;
    /** Button Loading State */
    isLoading?: string;
    /** Disable Button */
    disabled?: boolean;
    /** Button Type */
    primary?: boolean;
    /** Button Type */
    danger?: boolean;
    /** Button Type */
    normal?: boolean;
  }>(),
  {
    width: "100%",
    disabled: false,
  }
);

const $style = useCssModule();
const style = computed(() => {
  return {
    [$style.primary]: props.primary,
    [$style.danger]: props.danger,
    [$style.normal]: props.normal,
    [$style.disabled]: props.disabled,
  };
});
</script>

<template>
  <button :class="[$style.btn, style]" :disabled="disabled">
    <slot>
      {{ value }}
    </slot>
  </button>
</template>

<style module lang="scss">
@use "@/scss/colors";

.btn {
  width: v-bind(width);
  padding: 15px;
  min-height: 36px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  color: white;
  background-color: colors.use("primary");
  text-transform: uppercase;
}

.primary {
  background-color: colors.use("primary");

  &:focus {
    box-shadow: 0 0 0 3px colors.use("light-blue");
    outline: none;
  }
}
.danger {
  background-color: colors.use("danger");

  &:focus {
    box-shadow: 0 0 0 3px colors.use("light-red");
    outline: none;
  }
}
.normal {
  background-color: transparent;
  color: colors.use("primary");
  border: 1px solid colors.use("border");

  &:focus {
    box-shadow: 0 0 0 3px colors.use("light-blue");
    outline: none;
  }
}

.disabled {
  cursor: not-allowed;
  opacity: 0.3;
}
</style>
