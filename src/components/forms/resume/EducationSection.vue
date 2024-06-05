<script setup lang="ts">
import BaseButton from "@/components/base-button/BaseButton.vue";
import ButtonLabel from "@/components/base-button/ButtonLabel.vue";
import BaseDialog from "@/components/base-dialog/BaseDialog.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputCheckboxLabel from "@/components/base-input/InputCheckboxLabel.vue";
import InputDate from "@/components/base-input/InputDate.vue";
import InputSelect from "@/components/base-input/InputSelect.vue";
import InputText from "@/components/base-input/InputText.vue";
import { EducationType } from "@/types/EducationType";
import { ref } from "vue";
import AddEducation from "../new-fields/AddEducation.vue";

const educationData = ref<EducationType[]>([
  {
    school: "",
    course: "",
    degree: "",
    startDate: "",
    endDate: "",
  },
]);

const openNewEducationModal = ref(false);

const addNewField = (data: EducationType) => {
  const newEducationData = {
    school: data.school,
    course: data.course,
    degree: data.degree,
    startDate: data.startDate,
    endDate: data.endDate,
  };
  educationData.value.push(newEducationData);
};

const showRemovalModal = ref(false);
const allSchools = ref<{ [key: string]: boolean }>({});
educationData.value.map((item, index) => {
  if (index > 0) allSchools.value[item.school] = false;
});

const degrees = [
  "Associate of Arts (AA)",
  "Associate of Science (AS)",
  "Associate of Applied Science (AAS)",
  "Bachelor of Arts (BA)",
  "Bachelor of Science (BS)",
  "Bachelor of Fine Arts (BFA)",
  "Bachelor of Business Administration (BBA)",
  "Bachelor of Engineering (BEng)",
  "Bachelor of Architecture (BArch)",
  "Bachelor of Laws (LLB)",
  "Bachelor of Education (BEd)",
  "Master of Arts (MA)",
  "Master of Science (MS)",
  "Master of Business Administration (MBA)",
  "Master of Fine Arts (MFA)",
  "Master of Public Administration (MPA)",
  "Master of Social Work (MSW)",
  "Master of Education (MEd)",
  "Master of Engineering (MEng)",
  "Master of Architecture (MArch)",
  "Master of Public Health (MPH)",
  "Master of Information Technology (MIT)",
  "Master of Laws (LLM)",
  "Doctor of Philosophy (Ph.D.)",
  "Doctor of Education (Ed.D.)",
  "Doctor of Medicine (MD)",
  "Doctor of Dental Medicine (DMD)",
  "Doctor of Veterinary Medicine (DVM)",
  "Doctor of Psychology (Psy.D.)",
  "Doctor of Business Administration (DBA)",
  "Doctor of Juridical Science (SJD)",
  "Juris Doctor (JD)",
  "Doctor of Pharmacy (Pharm.D.)",
  "Bachelor of Nursing (BSN)",
  "Bachelor of Social Work (BSW)",
  "Bachelor of Computer Science (BCS)",
  "Bachelor of Information Technology (BIT)",
  "Bachelor of Environmental Science (BES)",
  "Bachelor of Music (BM)",
  "Bachelor of Fine Arts in Film (BFA)",
  "Graduate Certificate",
  "Postgraduate Diploma",
  "Professional Certificate",
  "Advanced Diploma",
  "Diploma",
  "Online Bachelor's Degrees",
  "Online Master's Degrees",
  "Online Doctoral Degrees",
  "Honorary Doctorate",
  "Joint Bachelor's-Master's Programs",
  "Joint Degrees in Law and Business",
];

function removeEducation() {
  educationData.value.forEach((item, index) => {
    if (item.school in allSchools.value && allSchools.value[item.school]) {
      educationData.value.splice(index, 1);
    }
  });
  showRemovalModal.value = false;
}
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
      <div :class="$style.divider" />
      <FieldLabel label="School" :required="index === 0" />
      <InputText v-model="education.school" :required="index === 0" />
      <FieldLabel label="Course" :required="index === 0" />
      <InputText v-model="education.course" :required="index === 0" />
      <FieldLabel label="Degree" :required="index === 0" />
      <InputSelect
        v-model="education.degree"
        :items="degrees"
        :required="index === 0"
      />
      <div :class="$style.date_wrap">
        <div :class="$style.startDate">
          <FieldLabel label="From" required />
          <InputDate v-model="education.startDate" required />
        </div>
        <div :class="$style.endDate">
          <FieldLabel label="To" required />
          <InputDate v-model="education.endDate" required />
        </div>
      </div>
    </div>

    <div :class="$style.btn_label_wrap">
      <ButtonLabel
        label="Add Education"
        plus
        @click="openNewEducationModal = true"
      />
      <ButtonLabel
        :disabled="!(educationData.length > 1)"
        label="Remove Education"
        minus
        @click="showRemovalModal = true"
      />
    </div>

    <AddEducation
      :visible="openNewEducationModal"
      @add-education="(data) => addNewField(data)"
      @close="openNewEducationModal = false"
    />

    <BaseDialog v-model="showRemovalModal">
      <template #header>
        <h3>Remove Education</h3>
      </template>
      Please select the school(s) you'd like to remove:
      <template v-for="(education, index) in educationData" :key="index">
        <InputCheckboxLabel
          v-if="index > 0"
          v-model="allSchools[education.school]"
          :label="education.school"
        />
      </template>
      <template #buttons>
        <BaseButton danger @click="removeEducation">
          Remove Education
        </BaseButton>
      </template>
    </BaseDialog>
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

    .startDate,
    .endDate {
      width: 100%;
    }
  }

  .education:not(:first-of-type) .divider {
    border: 1px dashed colors.use(light-gray);
    margin-top: 50px;
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
