<script setup lang="ts">
import XIcon from "@/assets/XIcon.vue";
import { ref } from "vue";
import BaseBackdrop from "../base-backdrop/BaseBackdrop.vue";

withDefaults(
  defineProps<{
    /** Show or hide modal */
    modelValue?: boolean;
    /** Permit or prevent close */
    enableClose?: boolean;
    /** Slide-in animation for modal */
    slideFrom?: "right" | "left" | "bottom";
    /** Close modal when user click on page */
    clickAnywhere?: boolean;
  }>(),
  {
    modelValue: false,
    slideFrom: "right",
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const modalElement = ref<HTMLElement>();
const slideOut = () => {
  if (modalElement.value) {
    modalElement.value.classList.add("slide-out");
    setTimeout(() => {
      modalElement.value && modalElement.value.classList.remove("slide-out"),
        emit("update:modelValue", false);
    }, 200);
  }
};
</script>

<template>
  <div v-if="modelValue" :class="$style.modal_wrap">
    <BaseBackdrop @click="clickAnywhere && slideOut()" visible />
    <div :class="[$style.modal, 'slide-in']" ref="modalElement">
      <div :class="[$style.header, { [$style.divider]: !!$slots.header }]">
        <button
          v-show="enableClose"
          :class="$style.close_btn"
          @click="slideOut"
        >
          <XIcon :class="$style.close_icon" />
        </button>
        <slot name="header" />
      </div>

      <div :class="$style.main">
        <slot />
      </div>
    </div>
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
      border-radius: 10px 10px 0 0;

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
    .divider {
      box-shadow: 5px 0 30px rgba(0, 0, 0, 0.116);
    }

    .main {
      padding: 20px;
    }
  }
}

@media screen and (max-width: 450px) {
  .modal_wrap .modal {
    width: unset;
    left: 20px;
  }
}
</style>
