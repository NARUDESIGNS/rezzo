<script setup lang="ts">
import BaseButton from "@/components/base-button/BaseButton.vue";
import BaseDialog from "@/components/base-dialog/BaseDialog.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputMultiText from "@/components/base-input/InputMultiText.vue";
import InputText from "@/components/base-input/InputText.vue";
import InputTextArea from "@/components/base-input/InputTextArea.vue";
import { ExperienceType } from "@/types/ExperienceType";
import { computed, ref } from "vue";

const props = defineProps<{
  /** Toggle visibility */
  visible: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "addTask", data: ExperienceType["tasks"][0]): void;
}>();

const showModal = computed({
  get: () => props.visible,
  set: () => emit("close"),
});

const data = ref<ExperienceType["tasks"][0]>({
  summary: "",
  skills: [],
  impact: undefined,
});

const addTask = () => {
  emit("addTask", data.value);
  emit("close");
};

const someFieldsAreEmpty = computed(() => {
  return Object.values(data.value).some((item) => {
    if (Array.isArray(item)) return !item.length;
    return item === "" || item === undefined;
  });
});

// clear form
function clearForm() {
  data.value.summary = "";
  data.value.skills = [];
  data.value.impact = undefined;
}
</script>

<template>
  <div>
    <BaseDialog v-model="showModal" disable-close @close="clearForm">
      <template #header>
        <h3>Add New Task</h3>
      </template>
      <form :class="$style.form">
        <FieldLabel
          label="List a task you worked on"
          required
          no-margin="top"
        />
        <InputTextArea
          v-model="data.summary"
          placeholder="In one sentence, state a task or an action you took at the company that benefited them"
        />
        <FieldLabel label="Skill(s), Tools or Technologies Used" required />
        <InputMultiText
          v-model:data="data.skills"
          placeholder="Add skills using the Enter or Return key"
          required
        />
        <FieldLabel label="How would you describe the impact" required />
        <div :class="$style.impact_wrap">
          <InputText
            v-model="data.impact"
            placeholder="Describe or rate the impact on a scale of 1-10"
            required
          />
        </div>
      </form>
      <template #buttons>
        <BaseButton danger @click="$emit('close')"> Cancel </BaseButton>
        <BaseButton :disabled="someFieldsAreEmpty" @click="addTask">
          Add Task
        </BaseButton>
      </template>
    </BaseDialog>
  </div>
</template>

<style lang="scss" module>
// styles here...
</style>
