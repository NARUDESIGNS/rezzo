<script setup lang="ts">
import PageCenter from "@/components/PageCenter.vue";
import { useResumeDataStore } from "@/store/useResumeDataStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const resumeStore = useResumeDataStore();
// temporary resume data
const { _resumeData } = storeToRefs(resumeStore);

const resumeData = {
  personalInfo: [
    {
      title: "Full Name",
      value: "Paul Ibeabuchi",
      required: true,
    },
    {
      title: "Email",
      value: "ibeabuchipaul@gmail.com",
      required: true,
    },
    {
      title: "Phone",
      value: "08160564736",
      required: false,
    },
    {
      title: "Location",
      value: "Lagos, Nigeria",
      required: true,
    },
    {
      title: "LinkedIn",
      value: "https://linkedin.com/in/narudesigns",
      required: false,
    },
  ],
  experience: [
    {
      company: "OPay",
      position: "Technical Support Engineer",
      isCurrentPosition: false,
      endDate: "01/08/2024",
      startDate: "31/08/2024",
      tasks: [
        {
          summary:
            "Created demo and workshop materials for production merchants",
          skills: ["Microsft Word", "Power Point", "Microsoft Teams"],
          impact: "This was used by over 300 merchants",
        },
        {
          summary: "Provided integration and production support to merchants",
          skills: ["Microsoft Teams", "Communication", "APIs", "Documentation"],
          impact: "This increased revenue by 25%",
        },
      ],
    },
    {
      company: "Worklio",
      position: "Senior Frontend Engineer",
      isCurrentPosition: true,
      endDate: "24/05/2022",
      startDate: "31/07/2024",
      tasks: [
        {
          summary: "Built reusable components for UI application",
          skills: [
            "Vuejs",
            "TypeScript",
            "Git",
            "SCSS",
            "CSS3",
            "JavaScript",
            "VsCode IDE",
          ],
          impact: "20",
        },
      ],
    },
  ],
  skills: [
    "MongoDB",
    "React",
    "Vuejs",
    "Nodejs",
    "Git",
    "SCSS",
    "CSS3",
    "HTML5",
    "MySQL",
    "Bootstrap",
    "Firebase",
    "Jest",
    "Vitest",
  ],
  education: [
    {
      school: "University of Port Harcourt",
      course: "Computer Science",
      degree: "Bachelor of Science (BS)",
      startDate: "01/07/2024",
      endDate: "31/08/2024",
    },
    {
      school: "University of Florida",
      course: "AI and Machine Learning",
      degree: "Bachelor of Science (BS)",
      startDate: "31/07/2024",
      endDate: "20/08/2024",
    },
  ],
};

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

const name = computed(
  () =>
    resumeData.personalInfo.find(({ title }) => title === "Full Name")?.value
);
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
      <div :class="$style.previewWrap">
        <h3>{{ name || "Name here..." }}</h3>
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
          <span>
            {{ education.startDate }} - {{ `${education.endDate}` }}
          </span>
          <br />
        </div>
      </div>
    </div>
  </PageCenter>
</template>

<style module lang="scss">
@use "@/scss/colors";

.pageHeader {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.previewWrap {
  padding: 15px;
  margin: 20px 0;
  border: 1px solid lightgray;
}
</style>
