<script setup lang="ts">
import { ref } from "vue";
import InputText from "./InputText.vue";

const props = withDefaults(
  defineProps<{
    max?: number;
    min?: number;
  }>(),
  {
    max: 10,
    min: 1,
  }
);

const maxValue = ref();

function validateRange() {
  maxValue.value =
    maxValue.value > props.max
      ? props.max
      : maxValue.value <= 0
      ? props.min
      : maxValue;
  console.log(maxValue.value, props.max);
}
</script>

<template>
  <InputText
    v-model="maxValue"
    @change="validateRange()"
    type="number"
    :min="min"
    :max="max"
  />
</template>

<style module lang="scss">
// styles here...
</style>
