<script setup lang="ts">
// code here...
</script>

<template>
  <div :class="$style.overall_container">
    <RouterView />
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.overall_container {
  color: colors.use("text");
}
</style>
