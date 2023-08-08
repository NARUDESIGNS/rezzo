<script setup lang="ts">
import BaseAction from "./base-action/BaseAction.vue";

defineProps<{
  darkMode?: boolean;
}>();
</script>

<template>
  <div :class="[$style.footer, { [$style.darkMode]: darkMode }]">
    <p :class="$style.content">MADE WITH 🖤 BY</p>
    <BaseAction
      :class="{ [$style.dark_mode]: darkMode }"
      href="https://github.com/narudesigns"
      :dark-mode="darkMode"
    >
      @narudesigns
    </BaseAction>
    <p>© {{ new Date().getUTCFullYear() }}</p>
  </div>
</template>

<style module lang="scss">
.content {
  width: fit-content;
}
.darkMode {
  color: white !important;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.dark_mode,
.dark_mode:hover {
  color: white;
  font-weight: bold;
}
.dark_mode:after {
  background-color: white;
}
</style>
