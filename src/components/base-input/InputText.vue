<script setup lang="ts">
import ButtonLabel from "@/components/base-button/ButtonLabel.vue";
import { computed, useCssModule } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    modelValue?: string | number;
    required?: boolean;
    error?: boolean;
    errorMsg?: string;
    disabled?: boolean;
    placeholder?: string;
    showButton?: boolean;
  }>(),
  {
    modelValue: undefined,
  }
);

defineEmits<{
  (e: "update:modelValue", modelValue: string): void;
  (e: "input-removed"): void;
}>();

const $style = useCssModule();
const styles = computed(() => ({
  [$style.disabled]: props.disabled,
  [$style.error]: props.error,
}));
</script>

<template>
  <div :class="[$style.container]">
    <input
      :value="modelValue"
      @input="
        $emit(
          'update:modelValue',
          ($event.target as HTMLInputElement).value.trim()
        )
      "
      :class="[$style.input, styles, $attrs.class]"
      :disabled="disabled"
      :placeholder="placeholder"
      v-bind="$attrs"
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

  .minus_btn {
    margin-left: 10px;
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
  min-width: 250px;
  width: 100%;
  font-size: 1.1rem;

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

@media screen and (max-width: 400px) {
  .input {
    padding: 15px;
  }
}
</style>
