<script setup lang="ts">
import ButtonLabel from "@/components/base-button/ButtonLabel.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputDate from "@/components/base-input/InputDate.vue";
import InputText from "@/components/base-input/InputText.vue";
import { EducationType } from "@/types/EducationType";
import { ref } from "vue";
import AddEducation from "../new-fields/AddEducation.vue";

const educationData = ref<EducationType[]>([
  {
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  },
]);

const openNewEducationModal = ref(false);

const addNewField = (data: EducationType) => {
  const newEducationData = {
    school: data.school,
    degree: data.degree,
    startDate: data.startDate,
    endDate: data.endDate,
  };
  educationData.value.push(newEducationData);
};
</script>

<template>
  <div :class="$style.section">
    <h3 :class="$style.sub_header">Education</h3>
    <p :class="$style.description">
      Provide details of your educational background, including degrees,
      certifications, and relevant coursework.
    </p>
    <div
      v-for="(education, index) in educationData"
      :key="index"
      :class="$style.education"
    >
      <FieldLabel label="School" />
      <InputText v-model="education.school" />
      <FieldLabel label="Degree" />
      <InputText v-model="education.degree" />
      <div :class="$style.date_wrap">
        <div :class="$style.startDate">
          <FieldLabel label="From" :required="!!education.school" />
          <InputDate
            v-model="education.startDate"
            :required="!!education.school"
          />
        </div>
        <div :class="$style.endDate">
          <FieldLabel label="To" :required="!!education.school" />
          <InputDate
            v-model="education.endDate"
            :required="!!education.school"
          />
        </div>
      </div>
    </div>

    <div :class="$style.btn_label_wrap">
      <ButtonLabel
        label="Add Education"
        @click="openNewEducationModal = true"
        plus
      />
      <ButtonLabel label="Remove Education" minus />
    </div>

    <AddEducation
      :visible="openNewEducationModal"
      @add-field="(data) => addNewField(data)"
      @close="openNewEducationModal = false"
    />
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

  .education:not(:last-of-type) {
    margin-bottom: 50px;
  }

  .date_wrap {
    display: flex;
    align-items: center;
    gap: 20px;

    .startDate,
    .endDate {
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

@media screen and (max-width: 560px) {
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
