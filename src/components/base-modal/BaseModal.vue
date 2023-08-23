<script setup lang="ts">
import XIcon from "@/assets/XIcon.vue";
import BaseBackdrop from "../base-backdrop/BaseBackdrop.vue";

withDefaults(
  defineProps<{
    /** Show or hide modal */
    visible?: boolean;
    /** Permit or prevent close */
    enableClose?: boolean;
    /** Slide-in animation for modal */
    slideFrom?: "right" | "left" | "bottom";
    /** Close modal when user click on page */
    clickAnywhere?: boolean;
  }>(),
  {
    visible: false,
    slideFrom: "right",
  }
);

defineEmits<{
  (e: "close"): void;
}>();
</script>

<template>
  <div v-if="visible" :class="$style.modal_wrap">
    <BaseBackdrop @click="clickAnywhere && $emit('close')" visible />
    <Transition name="modal">
      <div :class="$style.modal">
        <div :class="$style.header">
          <button
            v-show="enableClose"
            :class="$style.close_btn"
            @click="$emit('close')"
          >
            <XIcon :class="$style.close_icon" />
          </button>
          <slot name="header" />
        </div>

        <div :class="$style.main">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.modal_wrap {
  z-index: 10;
  .modal {
    background-color: colors.use("background-light");
    width: 100%;
    max-width: 400px;
    position: fixed;
    top: 20px;
    right: 20px;
    bottom: 20px;
    border-radius: 10px;
    overflow-y: scroll;

    .header {
      background-color: colors.use("background-light");
      padding: 20px;
      position: sticky;
      top: 0;
      // box-shadow: 5px 0 30px rgba(0, 0, 0, 0.116);

      .close_btn {
        padding: 10px;
        background-color: lighten(
          $color: colors.use("light-gray"),
          $amount: 35
        );
        border: 1px solid transparent;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        margin-left: auto;
        transition: 0.2s ease;
        cursor: pointer;

        &:hover {
          background-color: lighten(
            $color: colors.use("light-gray"),
            $amount: 30
          );
        }

        &:focus {
          outline: none;
          border-color: colors.use("primary");
        }

        .close_icon {
          width: 30px;
          display: inline-block;
          margin: auto 0;
        }
      }
    }

    .main {
      padding: 20px;
    }

    &:global(.tray-enter),
    &:global(.tray-leave-to) {
      opacity: 0;
    }

    &:global(.tray-leave),
    &:global(.tray-enter-to) {
      opacity: 1;
    }

    &:global(.tray-enter-active),
    &:global(.tray-leave-active) {
      transition: opacity 5s;
    }
  }
}
</style>
