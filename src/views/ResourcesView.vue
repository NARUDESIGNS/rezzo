<script setup lang="ts">
import ResourcesIllustration from "@/assets/illustrations/ResourcesIllustration.vue";
import PageCenter from "@/components/PageCenter.vue";
</script>

<template>
  <PageCenter>
    <div :class="$style.wrap">
      <h1 :class="$style.header">RESOURCES</h1>
      <p :class="$style.message">COMING SOON!</p>
      <ResourcesIllustration :class="$style.illustration" />
    </div>
  </PageCenter>
</template>

<style module lang="scss">
@use "@/scss/colors";

.wrap {
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .header {
    color: lighten($color: colors.use("light-gray"), $amount: 30);
    font-weight: 900;
  }

  .message {
    font-size: 2rem;
    font-weight: 900;
  }

  .illustration {
    width: 80%;
    max-width: 350px;
  }
}
</style>
