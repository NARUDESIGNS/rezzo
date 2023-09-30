<script setup lang="ts">
import XIcon from "@/assets/XIcon.vue";
import BaseBackdrop from "../base-backdrop/BaseBackdrop.vue";

// defineProps<{
//   modelValue: boolean;
// }>();
</script>

<template>
  <BaseBackdrop />
  <div :class="$style.wrap">
    <XIcon />
    <slot />
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.wrap {
  border-radius: 10px;
  background-color: colors.use("background-light");
  width: 300px;
  height: 300px;
  padding: 20px;
}
</style>
