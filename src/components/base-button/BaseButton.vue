<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Button Value */
    value: string;
    /** Button Width */
    width: string;
    /** Disable Button */
    disabled: boolean;
  }>(),
  {
    width: "100%",
    disabled: false,
  }
);
</script>

<template>
  <button :class="$style.btn" :disabled="disabled">{{ value }}</button>
</template>

<style module lang="scss">
.btn {
  width: v-bind(width);
}
</style>
