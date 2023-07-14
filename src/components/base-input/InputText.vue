<script setup lang="ts">
import ButtonLabel from "@/components/base-button/ButtonLabel.vue";
import { computed, ref, useCssModule } from "vue";

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
    <label :class="[$style.label, { [$style.disabled]: disabled }]">
      {{ label }}
      <span v-if="required" :class="$style.required_asterisk">*</span>
    </label>
    <div :class="$style.input_container">
      <input
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        :class="[$style.input, styles]"
        :disabled="disabled"
        :placeholder="placeholder"
      />
      <ButtonLabel
        v-if="!disabled && !required"
        minus
        :class="$style.minus_btn"
        @click="(hideInput = true), $emit('input-removed', label)"
      />
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
  &:hover .minus_btn {
    //TODO: use visibility: visible;
    animation: fade 0.25s linear forwards;

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
.label {
  text-transform: capitalize;
  display: inline-block;
  margin-bottom: 10px;
  .required_asterisk {
    color: colors.use("primary");
  }
}

.input_container {
  display: flex;

  .minus_btn {
    margin-left: 10px;
    //TODO: use visibility: hidden;
    opacity: 0;
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
