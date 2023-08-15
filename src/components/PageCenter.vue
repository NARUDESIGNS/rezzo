<script setup lang="ts">
import PageFooter from "@/components/PageFooter.vue";
import PageNav from "@/components/PageNav.vue";
</script>

<template>
  <div :class="$style.overall_container">
    <PageNav />
    <slot />
    <PageFooter />
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.overall_container {
  color: colors.use("text");
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
</style>
