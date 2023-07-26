<script setup lang="ts">
// code here...
</script>

<template>
  <div :class="$style.not_found">
    <h1 :class="$style.not_found_text">
      404 <br />
      Not Found!
    </h1>
  </div>
</template>

<style module lang="scss">
.not_found {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .not_found_text {
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
  }
}
</style>
