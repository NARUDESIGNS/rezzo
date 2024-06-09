<script setup lang="ts">
import PageFooter from "@/components/PageFooter.vue";
import PageNav from "@/components/PageNav.vue";

defineProps<{
  /** Hide Navigation */
  hideNav?: boolean;
}>();
</script>

<template>
  <div :class="$style.overall_container">
    <PageNav v-if="!hideNav" />
    <slot />
    <PageFooter />
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.overall_container {
  color: colors.use("text");
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
