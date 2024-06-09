<script setup lang="ts">
import { computed, useCssModule } from "vue";

const props = defineProps<{
  /** Required field */
  required?: boolean;
  /** Field label */
  label: string;
  /** Disabled */
  disabled?: boolean;
  /** Hide margin */
  noMargin?: "top" | "bottom" | "both";
}>();

const $style = useCssModule();
const marginStyles = computed(() => ({
  [$style.noMarginTop]: props?.noMargin === "top",
  [$style.noMarginBottom]: props?.noMargin === "bottom",
  [$style.noMargin]: props?.noMargin === "both",
}));
</script>

<template>
  <label :class="[$style.label, { [$style.disabled]: disabled }, marginStyles]">
    {{ label }}
    <span v-if="required" :class="$style.required_asterisk">*</span>
  </label>
</template>

<style module lang="scss">
@use "@/scss/colors";

.label {
  text-transform: capitalize;
  display: inline-block;
  margin-top: 30px;
  margin-bottom: 10px;
  .required_asterisk {
    color: colors.use("primary");
  }
}

.disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.noMarginTop {
  margin-top: 0;
}
.noMarginBottom {
  margin-bottom: 0;
}
.noMargin {
  margin: 0;
}
</style>
