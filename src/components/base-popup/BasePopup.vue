<script setup lang="ts">
import XIcon from "@/assets/XIcon.vue";
import BaseBackdrop from "../base-backdrop/BaseBackdrop.vue";

defineProps<{
  modelValue: boolean;
}>();

defineEmits<{
  (e: "update:modelValue"): void;
}>();
</script>

<template>
  <div v-if="modelValue">
    <BaseBackdrop visible />
    <div :class="$style.content_wrap">
      <XIcon />
      <slot />
    </div>
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.content_wrap {
  border-radius: 10px;
  border: 1px solid blue;
  background-color: colors.use("background-light");
  width: 600px;
  height: 300px;
  padding: 20px;
  z-index: 10;
  position: relative;
}
</style>
