<script setup lang="ts">
defineProps<{
  /** Visibility */
  visible?: boolean;
}>();
</script>

<template>
  <div v-if="visible" :class="$style.backdrop" />
</template>

<style module lang="scss">
.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: black;
  opacity: 0.6;
  z-index: 1;
}
</style>
