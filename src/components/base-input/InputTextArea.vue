<script setup lang="ts">
import ButtonLabel from "@/components/base-button/ButtonLabel.vue";
import { computed, useCssModule } from "vue";

const props = withDefaults(
  defineProps<{
    /** Model value */
    modelValue?: string | number;
    /** Required field */
    required?: boolean;
    /** Error */
    error?: boolean;
    /** Error message */
    errorMsg?: string;
    /** Disabled */
    disabled?: boolean;
    /** Placeholder */
    placeholder?: string;
    /** Show remove button */
    showButton?: boolean;
  }>(),
  {
    modelValue: undefined,
    errorMsg: undefined,
    placeholder: undefined,
  }
);

defineEmits<{
  (e: "update:modelValue", modelValue: string): void;
  (e: "input-removed"): void;
}>();

defineOptions({
  inheritAttrs: false,
});

const $style = useCssModule();
const styles = computed(() => ({
  [$style.disabled]: props.disabled,
  [$style.error]: props.error,
}));
</script>

<template>
  <div :class="[$style.container]">
    <textarea
      :value="modelValue"
      rows="4"
      :class="[$style.input, styles, $attrs.class]"
      :disabled="disabled"
      :placeholder="placeholder"
      v-bind="$attrs"
      @input="
        $emit(
          'update:modelValue',
          ($event.target as HTMLInputElement).value.trim()
        )
      "
    />
    <template v-if="showButton">
      <ButtonLabel
        v-if="!required && !disabled"
        minus
        :class="$style.minus_btn"
        @click="$emit('input-removed')"
      />
      <ButtonLabel v-else :class="$style.hide_minus_btn" />
    </template>
  </div>
  <p v-if="error" :class="$style.error_msg">
    {{ errorMsg || "Invalid Input" }}
  </p>
</template>

<style module lang="scss">
@use "@/scss/colors";

::placeholder {
  font-style: italic;
}

.container {
  display: flex;
  width: 100%;
  min-width: fit-content;

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
  font-family: inherit;
  font-size: 1.1rem;
  width: 100% !important;
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
