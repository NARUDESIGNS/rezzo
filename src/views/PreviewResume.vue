<script setup lang="ts">
import { useResumeDataStore } from "@/store/useResumeDataStore";
import { storeToRefs } from "pinia";

const resumeStore = useResumeDataStore();
const { resumeData } = storeToRefs(resumeStore);
</script>

<template>
  <p>
    {{ resumeData }}
  </p>
</template>

<style module lang="scss">
// styles here...
</style>
