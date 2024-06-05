<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import { ref } from "vue";
import InputCheckbox from "./InputCheckbox.vue";

const props = defineProps<{
  modelValue?: boolean;
  label?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const value = useVModel(props, "modelValue", emit);
const generateID = () => new Date().getTime().toString() + Math.random();
const uniqueID = ref(generateID());
</script>

<template>
  <div :class="$style.checkbox_wrap">
    <InputCheckbox :id="uniqueID" v-model="value" />
    <label :class="$style.checkbox_label" :for="uniqueID">
      <slot> {{ label }} </slot>
    </label>
  </div>
</template>

<style module lang="scss">
.checkbox_wrap {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 30px 0;

  .checkbox_label {
    cursor: pointer;
    user-select: none;
  }
}
</style>
