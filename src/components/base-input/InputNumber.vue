<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import { watch } from "vue";
import InputText from "./InputText.vue";

const props = withDefaults(
  defineProps<{
    /** Model value */
    modelValue?: number;
    /** Minimum number */
    min?: number;
    /** Maximum number */
    max?: number;
  }>(),
  {
    modelValue: undefined,
    min: 0,
    max: 10,
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: number | string): void;
}>();

const num = useVModel(props, "modelValue", emit);

watch(num, () => {
  if (num.value && num.value > props.max) num.value = props.max;
  else if (num.value && num.value < props.min) num.value = props.min;
  else num.value = Number(num.value);
});

// TODO: Fix v-model type
// sterilize input
</script>

<template>
  <InputText v-model="num" type="number" :min="min" :max="max" />
</template>

<style module lang="scss">
// styles here...
</style>
