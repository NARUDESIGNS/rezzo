<!-- This component will likely be deleted, it is pending here for further reference -->

<script setup lang="ts">
import ButtonLabel from "@/components/base-button/ButtonLabel.vue";
import { computed, ref, useCssModule } from "vue";
import FieldLabel from "./FieldLabel.vue";

// defineOptions({
//   inheritAttrs: false,
// });

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    required?: boolean;
    error?: boolean;
    errorMsg?: string;
    label: string;
    disabled?: boolean;
    placeholder?: string;
    type?: string;
  }>(),
  {
    modelValue: undefined,
  }
);

defineEmits<{
  (e: "update:modelValue", modelValue: string): void;
  (e: "input-removed", inputLabel: string): void;
}>();

const $style = useCssModule();
const styles = computed(() => ({
  [$style.disabled]: props.disabled,
  [$style.error]: props.error,
}));

const hideInput = ref(false);
</script>

<template>
  <div v-if="!hideInput" :class="$style.container">
    <FieldLabel :required="required" :label="label" :disabled="disabled" />
    <div :class="$style.input_container">
      <input
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        :class="[$style.input, styles]"
        :disabled="disabled"
        :placeholder="placeholder"
        :type="type"
      />
      <ButtonLabel
        v-if="!required && !disabled"
        minus
        :class="$style.minus_btn"
        @click="(hideInput = true), $emit('input-removed', label)"
      />
      <ButtonLabel v-else :class="$style.hide_minus_btn" />
    </div>
    <p v-if="error" :class="$style.error_msg">
      {{ errorMsg || "Invalid Input" }}
    </p>
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

::placeholder {
  font-style: italic;
}
.container {
  min-height: 120px;
  width: 100%;
  &:hover .minus_btn {
    visibility: visible;
    animation: fade 0.2s linear forwards;

    @keyframes fade {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
}

.input_container {
  display: flex;

  .minus_btn {
    margin-left: 10px;
    visibility: hidden;
    opacity: 0;
  }

  .hide_minus_btn {
    margin-left: 10px;
    visibility: hidden;
    pointer-events: none;
  }
}
.input {
  padding: 15px 20px;
  border-radius: 8px;
  border: 1px solid colors.use("border-light");
  width: 100%;
  font-size: 1.1rem;
  min-width: 250px;

  &:focus {
    outline: none;
    border: 1px solid colors.use("border");
  }
}

.disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.error {
  border: 1px solid colors.use("danger");
}

.error_msg {
  color: colors.use("danger");
  margin-top: 5px;
}
</style>
