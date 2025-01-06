<script setup lang="ts">
import BaseButton from "@/components/base-button/BaseButton.vue";
import BaseDialog from "@/components/base-dialog/BaseDialog.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputCheckboxWithLabel from "@/components/base-input/InputCheckboxLabel.vue";
import InputDate from "@/components/base-input/InputDate.vue";
import InputText from "@/components/base-input/InputText.vue";
import { ExperienceType } from "@/types/ExperienceType";
import { computed, ref } from "vue";

const props = defineProps<{
  /** Toggle visibility */
  visible: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "add-experience", data: Omit<ExperienceType, "tasks">): void;
}>();

const showModal = computed({
  get: () => props.visible,
  set: () => emit("close"),
});

const data = ref<Omit<ExperienceType, "tasks">>({
  company: "",
  position: "",
  isCurrentCompany: false,
  startDate: "",
  endDate: "",
});

const addExperience = () => {
  emit("add-experience", data.value);
  emit("close");
};

type DataKey = keyof typeof data.value;
const someFieldsAreEmpty = computed(() => {
  return Object.keys(data.value).some((item) => {
    if (data.value.isCurrentCompany && item === "endDate") return false;
    return (
      data.value[item as DataKey] === "" ||
      data.value[item as DataKey] === undefined
    );
  });
});

// clear form
function clearForm() {
  data.value.company = "";
  data.value.position = "";
  data.value.isCurrentCompany = false;
  data.value.startDate = "";
  data.value.endDate = "";
}
</script>

<template>
  <div>
    <BaseDialog v-model="showModal" disable-close @close="clearForm">
      <template #header>
        <h3>Add New Experience</h3>
      </template>
      <form :class="$style.form">
        <FieldLabel label="Company" required />
        <InputText v-model="data.company" required />
        <FieldLabel label="Position" required />
        <InputText v-model="data.position" required />
        <div :class="$style.experience_date">
          <div :class="$style.dateFrom">
            <FieldLabel label="From" required />
            <InputDate v-model="data.startDate" required />
          </div>
          <div :class="$style.dateTo">
            <FieldLabel label="To" :required="!data.isCurrentCompany" />
            <InputDate
              v-model="data.endDate"
              :disabled="data.endDate === undefined || data.isCurrentCompany"
              :required="!data.isCurrentCompany"
            />
          </div>
        </div>
        <div :class="$style.checkbox_wrap">
          <InputCheckboxWithLabel
            v-model="data.isCurrentCompany"
            label="I currently work here"
            filled
          />
        </div>
      </form>
      <template #buttons>
        <BaseButton danger @click="$emit('close')"> Cancel </BaseButton>
        <BaseButton :disabled="someFieldsAreEmpty" @click="addExperience">
          Add Experience
        </BaseButton>
      </template>
    </BaseDialog>
  </div>
</template>

<style lang="scss" module>
// styles here...
</style>
