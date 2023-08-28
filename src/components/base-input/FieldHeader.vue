<script setup lang="ts">
// code here...
</script>

<template>
  <h3 :class="$style.header">
    <slot />
  </h3>
</template>

<style module lang="scss">
.header {
  margin-bottom: 15px;
  font-weight: 900;
}
</style>
