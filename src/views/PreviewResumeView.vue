<script setup lang="ts">
import PageCenter from "@/components/PageCenter.vue";
import { useResumeDataStore } from "@/store/useResumeDataStore";
import { storeToRefs } from "pinia";

const resumeStore = useResumeDataStore();
const { resumeData } = storeToRefs(resumeStore);
</script>

<template>
  <PageCenter>
    <p>
      {{ resumeData }}
    </p>
  </PageCenter>
</template>

<style module lang="scss">
// styles here...
</style>
