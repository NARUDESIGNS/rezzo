<script setup lang="ts">
import CalendarIcon from "@/assets/CalendarIcon.vue";
import { stringToDate } from "@/utils/stringToDate";
import DatePicker from "@vuepic/vue-datepicker";
import InputText from "./InputText.vue";

defineProps<{
  modelValue: string;
  disabled?: boolean;
  required?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", modelValue: string): void;
}>();

const handleEmit = (value: Date) => {
  emit("update:modelValue", value.toLocaleDateString());
  console.log(value.toISOString());
};
</script>

<template>
  <DatePicker
    :model-value="stringToDate(modelValue)"
    :enable-time-picker="false"
    format="dd/MM/yyyy"
    :disabled="disabled"
    :month-change-on-scroll="false"
    text-input
    auto-apply
    :clearable="false"
    @update:model-value="(value) => handleEmit(value)"
  >
    <template #dp-input="{ value, onInput, onEnter, onTab, onBlur }">
      <div :class="$style.container">
        <InputText
          autocomplete="off"
          :value="value"
          :disabled="disabled"
          placeholder="DD/MM/YY"
          :class="$style.input"
          :required="required"
          @input="onInput"
          @keydown.enter="onEnter"
          @keydown.tab="onTab"
          @blur="onBlur"
          @keyup.esc="DatePicker?.closeMenu()"
        />
        <CalendarIcon :class="$style.calendar_icon" />
      </div>
    </template>
  </DatePicker>
</template>

<style module lang="scss">
.container {
  position: relative;

  .calendar_icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
  }
}
</style>
