<script setup lang="ts">
import InputText from "./InputText.vue";
defineProps<{
  min?: number;
  max?: number;
}>();
</script>

<template>
  <InputText type="number" :min="min" :max="max" />
</template>

<style module lang="scss">
// styles here...
</style>
