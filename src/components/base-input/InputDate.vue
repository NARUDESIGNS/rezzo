<script setup lang="ts">
import CalendarIcon from "@/assets/CalendarIcon.vue";
import { stringToDate } from "@/utils/stringToDate";
import DatePicker from "@vuepic/vue-datepicker";
import { useVModel } from "@vueuse/core";
import { computed } from "vue";
import InputText from "./InputText.vue";

const props = defineProps<{
  /** Model value */
  modelValue: string;
  /** Disabled */
  disabled?: boolean;
  /** Required */
  required?: boolean;
  /** Minimum date */
  min?: Date | string;
  /** Maximum date */
  max?: Date | string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", modelValue: string): void;
}>();

const handleEmit = (value: Date) => {
  emit("update:modelValue", value.toLocaleDateString());
};

const modelDate = useVModel(props, "modelValue", emit);

const date = computed({
  get: () => stringToDate(modelDate.value),
  set: (value) => (modelDate.value = value ? value.toLocaleDateString() : ""),
});
</script>

<template>
  <DatePicker
    v-model="date"
    :enable-time-picker="false"
    format="dd/MM/yyyy"
    :disabled="disabled"
    :month-change-on-scroll="false"
    :min-date="min"
    :max-date="max"
    text-input
    auto-apply
    month-name-format="long"
    :clearable="false"
    @update:model-value="(value) => value && handleEmit(value)"
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
