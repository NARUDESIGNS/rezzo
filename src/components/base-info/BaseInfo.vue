<script setup lang="ts">
import InfoIcon from "@/assets/InfoIcon.vue";
import XIcon from "@/assets/XIcon.vue";
import { computed, ref, useCssModule } from "vue";

const props = defineProps<{
  enableClose?: boolean;
  primary?: boolean;
  danger?: boolean;
  warning?: boolean;
}>();

defineEmits<{
  (e: "close"): void;
}>();

const $style = useCssModule();
const styles = computed(() => ({
  [$style.primary]: props.primary,
  [$style.danger]: props.danger,
  [$style.warning]: props.warning,
}));

const visible = ref(false);
</script>

<template>
  <Transition name="fade">
    <div v-if="!visible" :class="[$style.wrap, styles]">
      <XIcon
        v-if="enableClose"
        :class="$style.close_icon"
        @click="$emit('close'), (visible = true)"
      />
      <div :class="$style.content">
        <header :class="$style.header">
          <InfoIcon :class="$style.info_icon" />
          <slot name="header" />
        </header>
        <slot />
      </div>
    </div>
  </Transition>
</template>

<style module lang="scss">
@use "@/scss/colors";

.wrap {
  position: relative;
  padding: 20px;
  padding-right: 40px;
  border: 1px solid colors.use("border-dark");
  border-radius: 7px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 20px;

  .header {
    margin-bottom: 10px;
    display: flex;
    gap: 10px;
  }

  .info_icon {
    min-width: 35px;
  }

  .close_icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;

    &:hover {
      color: darken($color: colors.use("border-dark"), $amount: 5);
      transition: 0.2s ease;
    }
  }

  &:global(.fade-leave-active) {
    transition: 0.3s ease;
    transform: translateY(0);
  }
  &:global(.fade-leave-to) {
    opacity: 0;
    transform: translateY(-10px);
  }
}

.primary {
  border-color: colors.use("primary");
  background-color: lighten($color: colors.use("primary"), $amount: 40);

  .info_icon,
  .header {
    color: colors.use("primary");
  }
}

.warning {
  border-color: colors.use("warning");
  background-color: lighten($color: colors.use("warning"), $amount: 30);

  .info_icon,
  .header {
    color: darken($color: colors.use("warning"), $amount: 20);
  }
}

.danger {
  border-color: colors.use("danger");
  background-color: lighten($color: colors.use("danger"), $amount: 30);

  .info_icon,
  .header {
    color: colors.use("danger");
  }
}
</style>
