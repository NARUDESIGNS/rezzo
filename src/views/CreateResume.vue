<script setup lang="ts">
import PageCenter from "@/components/PageCenter.vue";
import BaseButton from "@/components/base-button/BaseButton.vue";
import BaseSteps from "@/components/base-steps/BaseSteps.vue";
import EducationSection from "@/components/forms/resume/EducationSection.vue";
import ExperienceSection from "@/components/forms/resume/ExperienceSection.vue";
import PersonalInfoSection from "@/components/forms/resume/PersonalInfoSection.vue";
import SkillsSection from "@/components/forms/resume/SkillsSection.vue";
import { useResumeDataStore } from "@/store/useResumeDataStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

enum CurrentStep {
  Personal = 1,
  Experience,
  Skills,
  Education,
}

const resumeStore = useResumeDataStore();
const { personalInfo, experience, skills, education } =
  storeToRefs(resumeStore);
const { updatePersonalInfo, updateExperience, updateSkills, updateEducation } =
  resumeStore;

const currentStep = ref(CurrentStep.Personal);
const steps = ref(["personal", "experience", "skills", "education"]);

const router = useRouter();
function showPreview() {
  router.push({ name: "resume-preview" });
}
</script>

<template>
  <PageCenter>
    <div :class="$style.resume">
      <h1 :class="$style.header">CREATE RESUME</h1>
      <p :class="$style.description">
        Creating your perfect resume requires attention and detailed
        information. On this page, we require you to provide us with detailed
        info as indicated by the various sections. These details will be fine
        tuned by the AI to craft your perfect resume.
      </p>
      <main :class="$style.details">
        <BaseSteps
          :steps="steps.length"
          :current-step="currentStep"
          :class="$style.steps"
        />
        <div :class="$style.sections">
          <PersonalInfoSection
            v-if="currentStep === CurrentStep.Personal"
            :personal-data="personalInfo"
            @updated="(personalInfo) => updatePersonalInfo(personalInfo)"
          />
          <ExperienceSection
            v-else-if="currentStep === CurrentStep.Experience"
            :experience-data="experience"
            @updated="(experienceData) => updateExperience(experienceData)"
          />
          <SkillsSection
            v-else-if="currentStep === CurrentStep.Skills"
            :skills-data="skills"
            @updated="(skillsData) => updateSkills(skillsData)"
          />
          <EducationSection
            v-else-if="currentStep === CurrentStep.Education"
            :education-data="education"
            @updated="
              (educationData) => {
                updateEducation(educationData);
              }
            "
          />
        </div>
        <div :class="$style.actionBtnsWrap">
          <BaseButton
            v-if="currentStep > CurrentStep.Personal"
            :class="$style.actionBtn"
            outline
            @click="currentStep--"
            >Back</BaseButton
          >
          <BaseButton
            :class="$style.actionBtn"
            @click="
              () => {
                currentStep === CurrentStep.Education && showPreview();
                currentStep < CurrentStep.Education && currentStep++;
              }
            "
          >
            {{ currentStep < CurrentStep.Education ? "Next" : "Preview" }}
          </BaseButton>
        </div>
      </main>
    </div>
  </PageCenter>
</template>

<style module lang="scss">
@use "@/scss/colors";

.resume {
  padding: 20px 50px;
  margin-bottom: 50px;
  line-height: 2;

  .header {
    text-align: center;
    font-weight: 900;
    margin: 20px 0;
  }
}

.details {
  display: flex;
  flex-direction: column;
  align-items: center;

  .steps {
    width: 100%;
    max-width: 500px;
    margin-top: 50px;
    flex: none;
  }

  .sections {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
  }

  .actionBtnsWrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }

  .actionBtn {
    margin-top: 50px;
  }
}

@media screen and (max-width: 1000px) {
  .resume {
    padding: 0;

    .header {
      font-size: 1.5rem;
    }
  }
}
</style>
