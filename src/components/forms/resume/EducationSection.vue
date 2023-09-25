<script setup lang="ts">
import ButtonLabel from "@/components/base-button/ButtonLabel.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputDate from "@/components/base-input/InputDate.vue";
import InputText from "@/components/base-input/InputText.vue";
import type { EducationType } from "@/types/EducationType";
import { ref } from "vue";

const education = ref<EducationType>({
  school: "University of Port-Harcourt",
  degree: "Bsc", // TODO: make a dropdown for this
  course: "Computer Science",
  fromDate: "08/03/2023",
  toDate: "02/13/2024", //undefined,
});
</script>

<template>
  <div :class="$style.section">
    <h3 :class="$style.sub_header">Education</h3>
    <p :class="$style.description">
      Provide details of your educational background, including degrees,
      certifications, and relevant coursework.
    </p>
    <FieldLabel label="School" />
    <InputText v-model="education.school" />
    <FieldLabel label="Degree" />
    <InputText v-model="education.degree" />
    <div :class="$style.date_wrap">
      <div :class="$style.dateFrom">
        <FieldLabel label="From" />
        <InputDate v-model="education.fromDate" />
      </div>
      <div :class="$style.dateTo">
        <FieldLabel label="To" />
        <InputDate v-model="education.toDate" />
      </div>
    </div>
    <div :class="$style.btn_label_wrap">
      <ButtonLabel label="Add Education" plus />
      <ButtonLabel label="Remove Education" minus />
    </div>
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.section {
  margin-top: 35px;

  .sub_header {
    color: colors.use("primary");
    margin: 50px 0 10px 0;
  }

  .date_wrap {
    display: flex;
    align-items: center;
    gap: 20px;

    .dateFrom,
    .dateTo {
      width: 100%;
    }
  }

  .btn_label_wrap {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
    margin-top: 30px;
  }
}

@media screen and (max-width: 500px) {
  .section {
    .date_wrap {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 0 !important;
    }

    .btn_label_wrap {
      justify-content: flex-start !important;
      flex-wrap: wrap;
    }
  }
}
</style>
