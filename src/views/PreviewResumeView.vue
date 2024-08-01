<script setup lang="ts">
import PageCenter from "@/components/PageCenter.vue";
import { useResumeDataStore } from "@/store/useResumeDataStore";
import { storeToRefs } from "pinia";

const resumeStore = useResumeDataStore();
const { resumeData } = storeToRefs(resumeStore);
</script>

<template>
  <PageCenter>
    <h1>Preview Resume Data</h1>
    <h3>Personal Information</h3>
    <div v-for="(personal, index) in resumeData.personalInfo" :key="index">
      <p>{{ personal.value }}</p>
    </div>
    <br />
    <h3>Skills</h3>
    <!-- <template v-for="skill in resumeData.skills" :key="skill"> -->
    <div>
      {{ resumeData.skills.join(" | ") }}
    </div>
    <!-- </template> -->
    <p>
      {{ resumeData }}
    </p>
  </PageCenter>
</template>

<style module lang="scss">
// styles here...
</style>
