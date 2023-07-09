<script setup lang="ts">
import BaseButton from "@/components/base-button/BaseButton.vue";
import BaseLoader from "@/components/base-loader/BaseLoader.vue";
</script>

<template>
  <h1 :class="$style.header">Buttons</h1>
  <div :class="$style.content">
    <BaseButton> Primary Button </BaseButton>
    <BaseButton is-loading />

    <BaseButton danger> Danger Button </BaseButton>
    <BaseButton is-loading danger />

    <BaseButton normal> Normal Button </BaseButton>
    <BaseButton is-loading normal />

    <BaseButton danger disabled> Danger Button </BaseButton>
    <BaseButton disabled> Primary Button </BaseButton>
    <BaseButton normal disabled> Normal Button </BaseButton>
  </div>

  <h1 :class="$style.header">Loaders</h1>
  <div :class="$style.content">
    <BaseLoader :size="50" />
    <BaseLoader :size="40" />
    <BaseLoader :size="30" />
    <BaseLoader />
  </div>
</template>

<style module lang="scss">
.header {
  margin-bottom: 20px;
}
.content {
  margin-bottom: 40px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  align-items: center;
}
</style>
