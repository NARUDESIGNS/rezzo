<script setup lang="ts">
import { computed, useCssModule } from "vue";
import BaseLoader from "../base-loader/BaseLoader.vue";

const props = withDefaults(
  defineProps<{
    /** Button Value */
    value?: string;
    /** Button Width */
    width?: string;
    /** Button Loading State */
    isLoading?: boolean;
    /** Disable Button */
    disabled?: boolean;
    /** Button Type */
    primary?: boolean;
    /** Button Type */
    danger?: boolean;
    /** Button Type */
    outline?: boolean;
  }>(),
  {
    disabled: false,
  }
);

const $style = useCssModule();
const style = computed(() => {
  return {
    [$style.primary]: props.primary,
    [$style.danger]: props.danger,
    [$style.outline]: props.outline,
    [$style.disabled]: props.disabled,
  };
});

const width = computed(() => (props.width ? `${props.width}px` : "250px"));
</script>

<template>
  <button :class="[$style.btn, style]" :disabled="disabled">
    <template v-if="isLoading">
      <BaseLoader :light="!outline" />
    </template>
    <template v-else>
      <slot>
        {{ value }}
      </slot>
    </template>
  </button>
</template>

<style module lang="scss">
@use "@/scss/colors";

@mixin focus-outline($state: "light-blue") {
  box-shadow: 0 0 0 3px colors.use($state);
  outline: none;
}

.btn {
  width: v-bind(width);
  padding: 0 10px;
  height: 50px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  color: white;
  background-color: colors.use("primary");
  text-transform: uppercase;

  &:focus {
    @include focus-outline();
  }

  &:hover {
    background-color: darken($color: colors.use("primary"), $amount: 7);
    transition: 0.2s ease;
  }
}

.danger {
  background-color: colors.use("danger");

  &:focus {
    @include focus-outline("light-red");
  }
  &:hover {
    background-color: darken($color: colors.use("danger"), $amount: 7);
    transition: 0.2s ease;
  }
}
.outline {
  background-color: transparent;
  color: colors.use("primary");
  border: 1px solid colors.use("border");

  &:focus {
    @include focus-outline();
  }
  &:hover {
    background-color: transparent;
    border-color: darken($color: colors.use("primary"), $amount: 10);
    color: darken($color: colors.use("primary"), $amount: 10);
    transition: 0.2s ease;
  }
}

.disabled {
  cursor: not-allowed;
  opacity: 0.3;
}

@media screen and (max-width: 550px) {
  .btn {
    width: 100%;
  }
}
</style>
