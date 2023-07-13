<script setup lang="ts">
import { computed, useCssModule } from "vue";

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
  }>(),
  {
    modelValue: undefined,
  }
);

defineEmits<{
  (e: "update:modelValue", modelValue: string): void;
}>();

const $style = useCssModule();
const styles = computed(() => ({
  [$style.disabled]: props.disabled,
  [$style.error]: props.error,
}));
</script>

<template>
  <div :class="$style.container">
    <label :class="[$style.label, { [$style.disabled]: disabled }]">
      {{ label }}
      <span v-if="required" :class="$style.required_asterisk">*</span>
    </label>
    <input
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :class="[$style.input, styles]"
      :disabled="disabled"
    />
    <p v-if="error" :class="$style.error_msg">
      {{ errorMsg || "Invalid Input" }}
    </p>
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.container {
  min-height: 120px;
}
.label {
  text-transform: capitalize;
  display: inline-block;
  margin-bottom: 10px;
  .required_asterisk {
    color: colors.use("primary");
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
