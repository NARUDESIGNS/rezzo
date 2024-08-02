<script setup lang="ts">
import PageCenter from "@/components/PageCenter.vue";
import { useResumeDataStore } from "@/store/useResumeDataStore";
import { storeToRefs } from "pinia";

const resumeStore = useResumeDataStore();
const { resumeData } = storeToRefs(resumeStore);

function generateAchievmentPoint(
  summary: string,
  skills: string[],
  impact?: string
) {
  return `${summary} using ${skills.join(", ")}. Impact: ${impact ?? "None."}`;
}

function degreeShortName(degree: string) {
  return degree.split("(")[1].replace(")", "");
}
</script>

<template>
  <PageCenter>
    <div :class="$style.wrap">
      <div :class="$style.pageHeader">
        <h1>PREVIEW RESUME DATA</h1>
        <p>
          This page shows a preview of your resume data without the impact of
          AI. This is to give you a final look of your details, so please feel
          free to edit it at this stage should you consider correcting or
          updating any information on your resume
        </p>
      </div>
      <h3>Personal Information</h3>
      <div
        v-for="({ title, value }, index) in resumeData.personalInfo"
        :key="index"
      >
        <p>{{ title }} - {{ value }}</p>
      </div>
      <br />
      <h3>Skills</h3>
      <div>
        {{ resumeData.skills.join(", ") }}
      </div>
      <br />
      <h3>Experience</h3>
      <div v-for="(experience, index) in resumeData.experience" :key="index">
        <h4>{{ experience.company }} - {{ experience.position }}</h4>
        {{ experience }}
        <span>
          {{ experience.startDate }}
          {{
            `- ${experience.isCurrentPosition ? "Present" : experience.endDate}`
          }}
        </span>
        <ul v-for="(item, i) in experience.tasks" :key="i">
          <li>
            {{
              generateAchievmentPoint(item.summary, item.skills, item.impact)
            }}
          </li>
        </ul>
        <br />
      </div>
      <br />
      <h3>Education</h3>
      <div v-for="(education, i) in resumeData.education" :key="i">
        <h4>
          {{ education.school }} - {{ degreeShortName(education.degree) }}.
          {{ education.course }}
        </h4>
        <span> {{ education.startDate }} - {{ `${education.endDate}` }} </span>
        <br />
      </div>
    </div>
  </PageCenter>
</template>

<style module lang="scss">
.pageHeader {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
