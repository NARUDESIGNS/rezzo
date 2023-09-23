<script setup lang="ts">
import PageCenter from "@/components/PageCenter.vue";
import EducationSection from "@/components/forms/resume/EducationSection.vue";
import ExperienceSection from "@/components/forms/resume/ExperienceSection.vue";
import PersonalInfoSection from "@/components/forms/resume/PersonalInfoSection.vue";
import SkillsSection from "@/components/forms/resume/SkillsSection.vue";
</script>

<template>
  <PageCenter>
    <div :class="$style.resume">
      <h1 :class="$style.header">CREATE RESUME</h1>
      <p :class="$style.description">
        Creating your perfect resume requires attention and detailed
        information. On this page, we require you to provide us with detailed
        info as indicated by the various sections. Those details will be fine
        tuned by the AI to craft your perfect resume.
      </p>
      <main :class="$style.details">
        <div :class="$style.section">
          <PersonalInfoSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
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

  .header {
    text-align: center;
    font-weight: 900;
    margin: 20px 0;
  }

  .description {
    line-height: 2;
  }

  .section {
    margin-top: 35px;

    .sub_header {
      color: colors.use("primary");
      margin: 50px 0 10px 0;
    }

    .experience_date {
      display: flex;
      align-items: center;
      gap: 20px;

      .dateFrom,
      .dateTo {
        width: 100%;
      }
    }
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

@media screen and (max-width: 715px) {
  .impact_wrap {
    display: flex;
    flex-direction: column;

    .task_action {
      flex-wrap: wrap;
    }
  }
  .btn_label_wrap {
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 500px) {
  .section {
    .btn_label_wrap {
      justify-content: flex-start !important;
    }

    .experience_date {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 0 !important;
    }
  }
}
</style>
