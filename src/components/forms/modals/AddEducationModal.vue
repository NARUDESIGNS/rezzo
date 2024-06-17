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
import { degrees } from "@/components/forms/data/degree";

const props = defineProps<{
  /** Toggle visibility */
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
