<script setup lang="ts">
import InputMultiText from "@/components/base-input/InputMultiText.vue";
import { ref } from "vue";

type Skills = string[];
const skills = ref<Skills>([]);
</script>

<template>
  <div :class="$style.section">
    <h3 :class="$style.sub_header">Skills</h3>
    <p :class="$style.description">
      Add your skills, separate them using commas and hit the
      <span
        :style="{
          backgroundColor: '#f0f0f0',
          padding: '5px 10px',
          borderRadius: '5px',
          margin: '0 5px',
        }"
        >Enter</span
      >
      key to add.
    </p>
    <InputMultiText v-model:data="skills" label="Skills" required />
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.section {
  margin-top: 35px;

  .sub_header {
    color: colors.use("primary");
    margin: 50px 0 10px 0;
  }
}
</style>
