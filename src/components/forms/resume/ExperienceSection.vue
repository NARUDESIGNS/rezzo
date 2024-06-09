<script setup lang="ts">
import ButtonLabel from "@/components/base-button/ButtonLabel.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputCheckbox from "@/components/base-input/InputCheckbox.vue";
import InputDate from "@/components/base-input/InputDate.vue";
import InputText from "@/components/base-input/InputText.vue";
import InputTextArea from "@/components/base-input/InputTextArea.vue";
import type { ExperienceType } from "@/types/ExperienceType";
import { ref } from "vue";

const experience = ref<ExperienceType>({
  company: "Worklio",
  position: "Frontend Engineer",
  fromDate: "08/03/2023",
  toDate: "02/13/2024", //undefined,
});

const currentJob = ref(false);
</script>

<template>
  <div :class="$style.section">
    <h3 :class="$style.header">Experience</h3>
    <p :class="$style.description">
      Include relevant details such as job titles, company names, dates, and
      concise descriptions of your experiences. Carefully include the tasks you
      worked on, the tools or technologies you used and how it impacted the
      organization.
    </p>
    <FieldLabel label="Company" required />
    <InputText v-model="experience.company" required />
    <FieldLabel label="Position" required />
    <InputText v-model="experience.position" required />
    <div :class="$style.experience_date">
      <div :class="$style.dateFrom">
        <FieldLabel label="From" required />
        <InputDate v-model="experience.fromDate" required />
      </div>
      <div :class="$style.dateTo">
        <FieldLabel label="To" required />
        <InputDate
          v-model="experience.toDate"
          :disabled="experience.toDate === undefined"
          required
        />
      </div>
    </div>
    <div :class="$style.checkbox_wrap">
      <InputCheckbox id="currentJob" v-model="currentJob" filled />
      <label :class="$style.checkbox_label" for="currentJob">
        I currently work here
      </label>
    </div>
    <h4 :class="$style.subHeader">Tasks</h4>
    <FieldLabel label="List a task you worked on" required no-margin="top" />
    <InputTextArea
      placeholder="In one sentence, state a task or an action you took at the company that benefited them"
    />
    <FieldLabel label="Skill(s), Tools or Technologies Used" required />
    <InputText
      placeholder="What skills, tools or technologies did you use for the above task?"
      required
    />
    <FieldLabel label="How would you rate the impact" required />
    <div :class="$style.impact_wrap">
      <InputText
        placeholder="Rate the impact on a scale of 1-10"
        type="number"
        min="1"
        max="10"
        required
      />
      <div :class="$style.taskAction">
        <ButtonLabel label="Remove Tasks" minus />
        <ButtonLabel label="Add New Task" plus />
      </div>
    </div>
    <div :class="$style.experienceAction">
      <ButtonLabel label="Add New Experience" plus />
      <ButtonLabel label="Remove Experience" minus />
    </div>
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.section {
  margin-top: 35px;

  .header {
    color: colors.use("primary");
    margin: 50px 0 10px 0;
  }
  .subHeader {
    color: colors.use("primary");
    margin: 50px 0 10px 0;
  }
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
.checkbox_wrap {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 30px;

  .checkbox_label {
    cursor: pointer;
    user-select: none;
  }
}
.impact_wrap {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;

  .taskAction {
    display: flex;
    gap: 20px;
    width: 100%;
  }
}

.experienceAction {
  display: flex;
  gap: 20px;
}

@media screen and (max-width: 715px) {
  .impact_wrap {
    display: flex;
    flex-direction: column;

    .taskAction {
      flex-wrap: wrap;
    }
  }
}

@media screen and (max-width: 560px) {
  .section {
    .experience_date,
    .experienceAction {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 0 !important;
    }

    .experienceAction {
      gap: 10px !important;
      align-items: flex-start;
    }
  }
}
</style>
