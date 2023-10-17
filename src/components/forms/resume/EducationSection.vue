<script setup lang="ts">
import ButtonLabel from "@/components/base-button/ButtonLabel.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputDate from "@/components/base-input/InputDate.vue";
import InputText from "@/components/base-input/InputText.vue";
import { NewEducationType } from "@/types/EducationType";
import type { FieldType } from "@/types/FieldType";
import { ref } from "vue";
import AddEducation from "../new-fields/AddEducation.vue";

const educationData = ref<FieldType[][]>([
  [
    { title: "School", value: "University of Port-Harcourt", required: true },
    { title: "Degree", value: "Bsc Computer Science", required: true }, // TODO: make a dropdown for this
    { title: "From", value: "08/03/2023", required: true },
    { title: "To", value: "02/13/2024", required: true },
  ],
  [
    { title: "School", value: "University of Benin", required: false },
    { title: "Degree", value: "Law", required: false }, // TODO: make a dropdown for this
    { title: "From", value: "04/06/2023", required: true },
    { title: "To", value: "02/23/2025", required: true },
  ],
]);

const openNewEducationModal = ref(false);

const addNewField = (data: NewEducationType) => {
  // educationData.value.push()
  console.log(data);
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
      <div v-for="(data, _index) in education" :key="_index">
        <template v-if="data.title !== 'From' && data.title !== 'To'">
          <FieldLabel :label="data.title" :required="data.required" />
          <InputText v-model="data.value" :required="data.required" />
        </template>
        <div :class="$style.date_wrap">
          <div v-if="data.title === 'From'" :class="$style.dateFrom">
            <FieldLabel :label="data.title" :required="data.required" />
            <InputDate v-model="data.value" :required="data.required" />
          </div>
          <div v-else-if="data.title === 'To'" :class="$style.dateTo">
            <FieldLabel :label="data.title" :required="data.required" />
            <InputDate v-model="data.value" :required="data.required" />
          </div>
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
