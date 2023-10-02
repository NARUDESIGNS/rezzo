<script setup lang="ts">
import XIcon from "@/assets/XIcon.vue";
import BaseBackdrop from "../base-backdrop/BaseBackdrop.vue";

defineProps<{
  modelValue: boolean;
}>();

defineEmits<{
  (e: "update:modelValue"): void;
  (e: "close"): void;
}>();
</script>

<template>
  <div v-if="modelValue">
    <BaseBackdrop visible />
    <div :class="$style.content_wrap">
      <span :class="$style.close_icon" @click="$emit('close')">
        <XIcon />
      </span>
      <slot />
      <div :class="$style.btns">
        <slot name="buttons" />
      </div>
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
  position: absolute;
  top: 0;
  left: 0;

  .close_icon {
    padding: 5px;
    cursor: pointer;

    &:hover {
      color: colors.use("primary");
    }
  }

  .btns {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
