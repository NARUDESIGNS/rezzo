<script setup lang="ts">
import DatePicker from "@vuepic/vue-datepicker";
import InputText from "./InputText.vue";

defineProps<{
  modelValue?: Date;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", modelValue: string): void;
}>();

// TODO: v-model not working... Figure it out!
const handleEmit = () => {
  emit("update:modelValue", "");
};
</script>

<template>
  <DatePicker
    :model-value="modelValue"
    :enable-time-picker="false"
    format="dd/MM/yyyy"
    :disabled="disabled"
    :month-change-on-scroll="false"
    text-input
    auto-apply
    :clearable="false"
    @update:model-value="handleEmit"
  >
    <template #dp-input="{ value, onInput, onEnter, onTab, onBlur }">
      {{ value }}
      <div :class="$style.container">
        <InputText
          autocomplete="off"
          :value="value"
          :disabled="false"
          placeholder="DD/MM/YY"
          :class="$style.input"
          :required="true"
          @input="onInput"
          @keydown.enter="onEnter"
          @keydown.tab="onTab"
          @blur="onBlur"
          @keyup.esc="DatePicker?.closeMenu()"
        />
      </div>
    </template>
  </DatePicker>
</template>

<style module lang="scss">
// styles here...
</style>
