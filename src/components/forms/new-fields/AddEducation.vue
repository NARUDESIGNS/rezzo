<script setup lang="ts">
import BaseButton from "@/components/base-button/BaseButton.vue";
import BaseDialog from "@/components/base-dialog/BaseDialog.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputDate from "@/components/base-input/InputDate.vue";
import InputText from "@/components/base-input/InputText.vue";
import { EducationType } from "@/types/EducationType";
import { computed, ref } from "vue";

const props = defineProps<{
  visible: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "addField", data: EducationType): void;
}>();

const showModal = computed({
  get: () => props.visible,
  set: () => emit("close"),
});

const data = ref<EducationType>({
  school: "",
  degree: "",
  startDate: "",
  endDate: "",
});

const addField = () => {
  emit("addField", data.value);
  data.value.school = "";
  data.value.degree = "";
  data.value.startDate = "";
  data.value.endDate = "";
  emit("close");
};

const someFieldsAreEmpty = computed(() => {
  return Object.values(data.value).some((item) => item === "");
});
</script>

<template>
  <div @keyup.enter="addField">
    <BaseDialog v-model="showModal" disable-close>
      <template #header>
        <h3>Add New Education</h3>
      </template>
      <div :class="$style.form">
        <FieldLabel label="School" required />
        <InputText v-model="data.school" required />
        <FieldLabel label="Degree" required />
        <InputText v-model="data.degree" required />
        <FieldLabel label="From" required />
        <InputDate v-model="data.startDate" required />
        <FieldLabel label="To" required />
        <InputDate v-model="data.endDate" required />
      </div>
      <template #buttons>
        <BaseButton danger @click="$emit('close')"> Cancel </BaseButton>
        <BaseButton @click="addField" :disabled="someFieldsAreEmpty">
          Add Field
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
