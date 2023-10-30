<script setup lang="ts">
import InputCheckbox from "./InputCheckbox.vue";
defineProps<{
  modelValue?: boolean;
  label?: string;
}>();

const uniqueID = Date.now().toString();
</script>

<template>
  <div :class="$style.checkbox_wrap">
    <InputCheckbox :id="uniqueID" :checked="modelValue" />
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
