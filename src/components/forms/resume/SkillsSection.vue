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
      <span :class="$style.enterMarkdown"> Enter </span>
      key to add.
    </p>
    <InputMultiText
      v-model:data="skills"
      label="Skills"
      placeholder="e.g Nodejs, Kubernetes, React"
      required
    />
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.section {
  margin-top: 35px;
  width: 100%;

  .description {
    margin-bottom: 10px;
  }

  .sub_header {
    color: colors.use(primary);
    margin: 50px 0 10px 0;
  }
}

.enterMarkdown {
  background-color: colors.use(light-gray);
  padding: 5px 5px 5px 10px;
  border-radius: 5px;
  margin: 0 7px 5px 5px;
}
</style>
