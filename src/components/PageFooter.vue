<script setup lang="ts">
import BaseAction from "./base-action/BaseAction.vue";

defineProps<{
  /** Dark Mode */
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
      new-page
    >
      @narudesigns
    </BaseAction>
    <p>© {{ new Date().getUTCFullYear() }}</p>
  </div>
</template>

<style module lang="scss">
.footer {
  margin-top: auto; // push footer to bottom of page
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.content {
  width: fit-content;
}
.darkMode {
  color: white !important;
}

.dark_mode,
.dark_mode:hover {
  color: white;
  font-weight: bold;
}
.dark_mode:after {
  background-color: white;
}

@media screen and (max-width: 560px) {
  .footer {
    flex-wrap: wrap;
    text-align: center;
  }
}
</style>
