<script setup lang="ts">
import PageCenter from "@/components/PageCenter.vue";
</script>

<template>
  <PageCenter>
    <div :class="$style.wrap">
      <h1 :class="$style.header">CREATE RESUME</h1>
      <p :class="$style.message">
        Creating your perfect resume requires attention and detailed
        information. On this page, we require you to provide us with detailed
        info as indicated by the various sections. Those details will be fine
        tuned by the AI to craft your perfect resume.
      </p>
    </div>
  </PageCenter>
</template>

<style module lang="scss">
@use "@/scss/colors";

.wrap {
  padding: 20px 50px;

  .header {
    text-align: center;
    font-weight: 900;
    margin: 20px 0;
  }

  .message {
    line-height: 2;
    // styles here...
  }
}

@media screen and (max-width: 1000px) {
  .wrap {
    padding: 10px;

    .header {
      font-size: 1.5rem;
    }
  }
}
</style>
