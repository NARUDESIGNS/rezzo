<script setup lang="ts">
import BlueLogo from "@/assets/BlueLogo.vue";
import PageFooter from "@/components/PageFooter.vue";
</script>

<template>
  <div :class="$style.home_view">
    <BlueLogo />
    <h1>Welcome to Rezzo, where we land you your dream role!</h1>
  </div>

  <PageFooter />
</template>

<style module lang="scss">
.home_view {
  padding: 20px;
}
</style>
