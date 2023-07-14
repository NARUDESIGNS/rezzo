<script setup lang="ts">
import MinusCircle from "@/assets/MinusCircle.vue";
import PlusCircle from "@/assets/PlusCircle.vue";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    minus?: boolean;
    plus?: boolean;
    label?: string;
    size?: number;
    disabled?: boolean;
  }>(),
  {
    size: 32,
  }
);

const size = computed(() => `${props.size}px`);
</script>

<template>
  <button
    :class="[
      $style.btn,
      minus ? $style.minus_icon_label : $style.plus_icon_label,
      { [$style.disabled]: disabled },
    ]"
    :disabled="disabled"
  >
    <MinusCircle :class="$style.icon_minus" v-if="minus" />
    <PlusCircle :class="$style.icon_plus" v-else />

    <p :class="$style.label">
      <slot>
        {{ label }}
      </slot>
    </p>
  </button>
</template>

<style module lang="scss">
@use "@/scss/colors";

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  color: colors.use("danger");
  cursor: pointer;

  svg {
    width: v-bind(size);
    height: v-bind(size);

    * {
      stroke-width: 1px;
    }
  }
  .label {
    line-height: 1.5;
    font-size: 1rem;
    text-transform: capitalize;
    margin-left: 7px;
    font-weight: bold;
  }
  &:hover .label {
    text-decoration: underline;
  }
}
.minus_icon_label {
  color: colors.use("danger");
}

.plus_icon_label {
  color: colors.use("primary");
}

.disabled {
  opacity: 0.3;
  cursor: not-allowed;

  &:hover .label {
    text-decoration: none;
  }
}
</style>
