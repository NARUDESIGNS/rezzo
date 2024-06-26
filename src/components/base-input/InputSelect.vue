<script setup lang="ts">
import ChevronDown from "@/assets/ChevronDown.vue";
import { computed, ref, useCssModule } from "vue";

const props = defineProps<{
  /** Select items */
  items: string[];
  /** Name */
  name?: string;
  /** Placeholder */
  placeholder?: string;
  /** Disabled */
  disabled?: boolean;
  /** Error */
  error?: boolean;
  /** Error message */
  errorMsg?: string;
  /** Model value */
  modelValue?: string;
}>();

defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const $style = useCssModule();
const styles = computed(() => ({
  [$style.disabled]: props.disabled,
  [$style.error]: props.error,
}));

const selectInput = ref(null);
</script>

<template>
  <div :class="$style.el">
    <select
      ref="selectInput"
      :name="name"
      :class="[
        $style.select,
        styles,
        { [$style.defaultSelection]: !modelValue },
      ]"
      :disabled="disabled"
      @change="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    >
      <option
        disabled
        :selected="!modelValue"
        value=""
        :label="placeholder || 'Select one option'"
        :class="$style.defaultSelection"
      />
      <option
        v-for="item in items"
        :key="item"
        :value="item"
        :selected="modelValue === item"
      >
        {{ item }}
      </option>
    </select>
    <ChevronDown :class="$style.select_icon" />
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.el {
  position: relative;
}

.select {
  padding: 15px 20px;
  border-radius: 8px;
  border: 1px solid colors.use("border-light");
  min-width: 250px;
  width: 100%;
  font-size: 1.1rem;
  appearance: none;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 1px solid colors.use("border");
  }
}

.defaultSelection {
  font-style: italic;
  color: colors.use("gray");
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

.select_icon {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: colors.use(dark-gray);
}
</style>
