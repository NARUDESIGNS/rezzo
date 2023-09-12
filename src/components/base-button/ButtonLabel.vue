<script setup lang="ts">
import MinusCircleIcon from "@/assets/MinusCircleIcon.vue";
import PlusCircleIcon from "@/assets/PlusCircleIcon.vue";
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
    <MinusCircleIcon :class="$style.icon_minus" v-if="minus" />
    <PlusCircleIcon :class="$style.icon_plus" v-else />

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
  min-width: fit-content;

  svg {
    width: v-bind(size);
    height: v-bind(size);

    * {
      stroke-width: 1px;
    }
  }
  .label {
    position: relative;
    line-height: 1.5;
    font-size: 1rem;
    text-transform: capitalize;
    margin-left: 7px;
    font-weight: bold;
  }

  &:focus {
    outline: none;
  }

  &:focus .icon_plus {
    box-shadow: inset 0 0 0 3px colors.use("light-blue");
    border-radius: 50%;
    border: none;
  }
  &:focus .icon_minus {
    box-shadow: inset 0 0 0 3px colors.use("light-red");
    border-radius: 50%;
    border: none;
  }
}

.label::after {
  display: block;
  position: absolute;
  left: 0;
  bottom: -2px;
  content: "";
  width: 100%;
  height: 3px;
  background-color: colors.use("primary");
  transform: scaleX(0);
  transform-origin: left;
  transition-duration: 0.2s;
  opacity: 0;
}

.btn:focus .label::after,
.btn:hover .label::after {
  transform: scaleX(1);
  opacity: 1;
}

.minus_icon_label {
  color: colors.use("danger");
}
.minus_icon_label .label::after {
  background-color: colors.use("danger") !important;
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
