<script setup lang="ts">
// code here...
</script>

<template>
  <RouterView :class="$style.overall_container" />
</template>

<style module lang="scss">
@use "@/scss/colors";

.overall_container {
  color: colors.use("text");
}
</style>
