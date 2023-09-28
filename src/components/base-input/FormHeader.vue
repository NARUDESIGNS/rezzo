<script setup lang="ts">
// code here...
</script>

<template>
  <h1 :class="$style.header">
    <slot />
  </h1>
</template>

<style module lang="scss">
.header {
  margin-bottom: 20px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.2;

  @media screen and (max-width: 560px) {
    font-size: 1.4rem;
  }
}
</style>
