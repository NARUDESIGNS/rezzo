<script setup lang="ts">
import NotFoundIllustration from "@/assets/illustrations/NotFoundIllustration.vue";
</script>

<template>
  <div :class="$style.not_found">
    <NotFoundIllustration :class="$style.illustration" />
    <h1 :class="$style.not_found_text">
      404 <br />
      Not Found!
    </h1>
    <!-- // TODO: replace with <BaseAction /> -->
    <RouterLink :to="{ name: 'home' }" :class="$style.link">Go Home</RouterLink>
  </div>
</template>

<style module lang="scss">
.not_found {
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .not_found_text {
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
    margin-top: 10px;
  }

  .illustration {
    transform: translateX(-20px);
  }

  .link:hover {
    text-decoration: underline;
  }
}
</style>
