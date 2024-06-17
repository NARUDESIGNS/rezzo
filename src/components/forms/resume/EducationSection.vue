<script setup lang="ts">
import BaseButton from "@/components/base-button/BaseButton.vue";
import ButtonLabel from "@/components/base-button/ButtonLabel.vue";
import BaseDialog from "@/components/base-dialog/BaseDialog.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputCheckboxLabel from "@/components/base-input/InputCheckboxLabel.vue";
import InputDate from "@/components/base-input/InputDate.vue";
import InputSelect from "@/components/base-input/InputSelect.vue";
import InputText from "@/components/base-input/InputText.vue";
import { degrees } from "@/components/forms/data/degree";
import AddEducationModal from "@/components/forms/modals/AddEducationModal.vue";
import { EducationType } from "@/types/EducationType";
import { parse } from "date-fns";
import { ref } from "vue";

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

function removeEducation() {
  educationData.value.forEach((item, index) => {
    if (item.school in allSchools.value && allSchools.value[item.school]) {
      educationData.value.splice(index, 1);
    }
  });
  showRemovalModal.value = false;
}

function clearRemovalSelections() {
  for (let selection in allSchools.value) {
    if (Object.hasOwn(allSchools.value, selection)) {
      allSchools.value[selection] = false;
    }
  }
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
      <FieldLabel label="School" />
      <InputText v-model="education.school" />
      <FieldLabel label="Course" :required="!!education.school" />
      <InputText v-model="education.course" :required="!!education.school" />
      <FieldLabel label="Degree" :required="!!education.school" />
      <InputSelect
        v-model="education.degree"
        :items="degrees"
        :required="!!education.school"
      />
      <div :class="$style.date_wrap">
        <div :class="$style.startDate">
          <FieldLabel label="From" :required="!!education.school" />
          <InputDate
            v-model="education.startDate"
            :max="new Date()"
            :required="!!education.school"
          />
        </div>
        <div :class="$style.endDate">
          <FieldLabel label="To" :required="!!education.school" />
          <InputDate
            v-model="education.endDate"
            :min="parse(education.startDate, 'dd/MM/yyyy', new Date())"
            :disabled="!education.startDate"
            :required="!!education.school"
          />
        </div>
      </div>
    </div>

    <div :class="$style.btn_label_wrap">
      <ButtonLabel
        :disabled="!educationData[educationData.length - 1].school"
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

    <AddEducationModal
      :visible="openNewEducationModal"
      @add-education="(data) => addNewField(data)"
      @close="openNewEducationModal = false"
    />

    <BaseDialog v-model="showRemovalModal" @close="clearRemovalSelections">
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
    margin: 50px 0;
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
