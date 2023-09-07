<script setup lang="ts">
defineProps<{
  required?: boolean;
  label: string;
  disabled?: boolean;
}>();
</script>

<template>
  <label :class="[$style.label, { [$style.disabled]: disabled }]">
    {{ label }}
    <span v-if="required" :class="$style.required_asterisk">*</span>
  </label>
</template>

<style module lang="scss">
@use "@/scss/colors";

.label {
  text-transform: capitalize;
  display: inline-block;
  margin-top: 30px;
  margin-bottom: 10px;
  .required_asterisk {
    color: colors.use("primary");
  }
}

.disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>
