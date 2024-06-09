<script setup lang="ts">
import InputText from "./InputText.vue";
defineProps<{
  /** Minimum number */
  min?: number;
  /** Maximum number */
  max?: number;
}>();
</script>

<template>
  <InputText type="number" :min="min" :max="max" />
</template>

<style module lang="scss">
// styles here...
</style>
