<script setup lang="ts">
import BaseButton from "@/components/base-button/BaseButton.vue";
import BaseDialog from "@/components/base-dialog/BaseDialog.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputDate from "@/components/base-input/InputDate.vue";
import InputSelect from "@/components/base-input/InputSelect.vue";
import InputText from "@/components/base-input/InputText.vue";
import { EducationType } from "@/types/EducationType";
import { parse } from "date-fns";
import { computed, ref } from "vue";

const props = defineProps<{
  visible: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "addEducation", data: EducationType): void;
}>();

const showModal = computed({
  get: () => props.visible,
  set: () => emit("close"),
});

const data = ref<EducationType>({
  school: "",
  course: "",
  degree: "",
  startDate: "",
  endDate: "",
});

const addEducation = () => {
  emit("addEducation", data.value);
  emit("close");
};

const someFieldsAreEmpty = computed(() => {
  return Object.values(data.value).some((item) => item === "");
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

// clear form
function clearForm() {
  data.value.school = "";
  data.value.course = "";
  data.value.degree = "";
  data.value.startDate = "";
  data.value.endDate = "";
}
</script>

<template>
  <div @keyup.enter="addEducation">
    <BaseDialog v-model="showModal" disable-close @close="clearForm">
      <template #header>
        <h3>Add New Education</h3>
      </template>
      <div :class="$style.form">
        <FieldLabel label="School" required />
        <InputText v-model="data.school" required />
        <FieldLabel label="Course" required />
        <InputText v-model="data.course" required />
        <FieldLabel label="Degree" required />
        <InputSelect v-model="data.degree" :items="degrees" />
        <FieldLabel label="From" required />
        <InputDate v-model="data.startDate" :max="new Date()" required />
        <FieldLabel label="To" required />
        <InputDate
          v-model="data.endDate"
          :min="parse(data.startDate, 'dd/MM/yyyy', new Date())"
          :disabled="!data.startDate"
          required
        />
      </div>
      <template #buttons>
        <BaseButton danger @click="$emit('close')"> Cancel </BaseButton>
        <BaseButton :disabled="someFieldsAreEmpty" @click="addEducation">
          Add Education
        </BaseButton>
      </template>
    </BaseDialog>
  </div>
</template>

<style lang="scss" module>
.form :first-child {
  margin-top: 0;
}
</style>
