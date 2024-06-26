<script setup lang="ts">
import XIcon from "@/assets/XIcon.vue";
import BaseBackdrop from "@/components/base-backdrop/BaseBackdrop.vue";
import { watch } from "vue";

const props = defineProps<{
  /** Model value */
  modelValue: boolean;
  /** Disable close button */
  disableClose?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "close"): void;
}>();

watch(
  () => props.modelValue,
  () => {
    if (!props.modelValue) emit("close");
  }
);
</script>

<template>
  <div v-if="modelValue" :class="$style.wrap">
    <BaseBackdrop visible />
    <div :class="$style.modal_wrap">
      <div :class="$style.content_wrap">
        <span
          v-if="!disableClose"
          :class="$style.close_icon"
          tabIndex="0"
          @click="$emit('update:modelValue', false)"
        >
          <XIcon @click="$emit('close')" />
        </span>
        <div :class="$style.header">
          <slot name="header" />
        </div>
        <slot />
        <div :class="$style.btns">
          <slot name="buttons" />
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.content_wrap {
  border-radius: 10px;
  background-color: colors.use("background-light");
  max-width: 650px;
  width: 90%;
  min-height: 200px;
  padding: 30px;
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  animation: pop 0.15s ease;
  transform: translate(-50%, -50%);

  @keyframes pop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .close_icon {
    padding: 10px;
    background-color: lighten($color: colors.use("light-gray"), $amount: 35);
    border: 1px solid transparent;
    border-radius: 6px;
    transition: 0.15s ease;
    display: inline-flex;
    justify-self: flex-end;
    position: absolute;
    top: 15px;
    right: 20px;
    cursor: pointer;

    &:hover {
      background-color: lighten($color: colors.use("light-gray"), $amount: 30);
    }

    &:focus {
      outline: none;
      border-color: colors.use("primary");
    }
  }

  .header {
    text-align: center;
    margin: 15px 0;
    padding: 0 30px;
  }

  .btns {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 30px;
  }
}

@media screen and (max-width: 560px) {
  .content_wrap {
    padding: 20px;
    max-height: 95dvh;
    overflow-y: scroll;
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  .content_wrap::-webkit-scrollbar {
    display: none;
  }
}
</style>
