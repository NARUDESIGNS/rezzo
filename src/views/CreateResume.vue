<script setup lang="ts">
import PageCenter from "@/components/PageCenter.vue";
import BaseButton from "@/components/base-button/BaseButton.vue";
import BaseSteps from "@/components/base-steps/BaseSteps.vue";
import EducationSection from "@/components/forms/resume/EducationSection.vue";
import ExperienceSection from "@/components/forms/resume/ExperienceSection.vue";
import PersonalInfoSection from "@/components/forms/resume/PersonalInfoSection.vue";
import SkillsSection from "@/components/forms/resume/SkillsSection.vue";
import { ref } from "vue";

enum CurrentStep {
  Personal,
  Experience,
  Skills,
  Education,
}

const currentStep = ref(0);
const steps = ref(["personal", "experience", "skills", "education"]);
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
          <PersonalInfoSection v-if="currentStep === CurrentStep.Personal" />
          <ExperienceSection
            v-else-if="currentStep === CurrentStep.Experience"
          />
          <SkillsSection v-else-if="currentStep === CurrentStep.Skills" />
          <EducationSection v-else-if="currentStep === CurrentStep.Education" />
        </div>
        <div :class="$style.actionBtnsWrap">
          <BaseButton
            v-if="currentStep > 0"
            :class="$style.actionBtn"
            outline
            @click="currentStep--"
            >Back</BaseButton
          >
          <BaseButton
            v-if="currentStep < steps.length"
            :class="$style.actionBtn"
            @click="currentStep < steps.length - 1 && currentStep++"
            >{{
              currentStep + 1 < steps.length ? "Next" : "Preview"
            }}</BaseButton
          >
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
