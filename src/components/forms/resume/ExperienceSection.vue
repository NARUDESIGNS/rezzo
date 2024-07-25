<script setup lang="ts">
import BaseButton from "@/components/base-button/BaseButton.vue";
import ButtonLabel from "@/components/base-button/ButtonLabel.vue";
import BaseDialog from "@/components/base-dialog/BaseDialog.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import {
  default as InputCheckboxLabel,
  default as InputCheckboxWithLabel,
} from "@/components/base-input/InputCheckboxLabel.vue";
import InputDate from "@/components/base-input/InputDate.vue";
import InputMultiText from "@/components/base-input/InputMultiText.vue";
import InputText from "@/components/base-input/InputText.vue";
import InputTextArea from "@/components/base-input/InputTextArea.vue";
import AddExperienceTaskModal from "@/components/forms/modals/AddExperienceTaskModal.vue";
import type { ExperienceType } from "@/types/ExperienceType";
import { onUnmounted, ref, watch } from "vue";
import AddExperienceModal from "../modals/AddExperienceModal.vue";

const props = defineProps<{
  experienceData: ExperienceType[];
}>();

const emit = defineEmits<{
  updated: [experienceData: ExperienceType[]];
}>();

const experienceData = ref<ExperienceType[]>([
  {
    company: "",
    position: "",
    isCurrentPosition: false,
    fromDate: "",
    toDate: "",
    tasks: [
      {
        summary: "",
        skills: [],
        impact: undefined,
      },
    ],
  },
]);

const isVisibleAddExperienceModal = ref(false);

const taskIndexToBeRemoved = ref(-1);
const currentModifyingTaskIndex = ref(-1);
const isVisibleNewTask = ref(false);
function addTask(data: ExperienceType["tasks"][0]) {
  experienceData.value[currentModifyingTaskIndex.value].tasks.push({
    summary: data.summary,
    skills: data.skills,
    impact: data.impact,
  });
}

function removeAchievement(removeIndex: number) {
  experienceData.value[currentModifyingTaskIndex.value].tasks.splice(
    removeIndex,
    1
  );
  showConfirmModal.value = false;
}

function addExperience(data: Omit<ExperienceType, "tasks">) {
  experienceData.value.push({
    ...data,
    tasks: [
      {
        summary: "",
        skills: [],
        impact: undefined,
      },
    ],
  });
}

const showRemovalModal = ref(false);
// all schools for v-model for checking schools to remove. E.g { "University of Florida": false }
const allCompanies = ref<{ [key: string]: boolean }>({});
experienceData.value.map((item, index) => {
  if (index > 0) allCompanies.value[item.company] = false;
});

function removeEducation() {
  experienceData.value.forEach((item, index) => {
    if (
      item.company in allCompanies.value &&
      allCompanies.value[item.company]
    ) {
      experienceData.value.splice(index, 1);
    }
  });
  showRemovalModal.value = false;
}

function clearRemovalSelections() {
  for (let selection in allCompanies.value) {
    if (Object.hasOwn(allCompanies.value, selection)) {
      allCompanies.value[selection] = false;
    }
  }
}

watch(
  () => props.experienceData,
  () => {
    if (props.experienceData.length)
      experienceData.value = props.experienceData;
  },
  { immediate: true }
);

onUnmounted(() => {
  emit("updated", experienceData.value);
});

const showConfirmModal = ref(false);
</script>

<template>
  <div :class="$style.section">
    <h3 :class="$style.header">Experience</h3>
    <p :class="$style.description">
      Include relevant details such as job titles, company names, dates, and
      concise descriptions of your experiences. Carefully include the tasks you
      worked on, the tools or technologies you used and how it impacted the
      organization.
    </p>
    <div v-for="(experience, index) in experienceData" :key="index">
      <FieldLabel label="Company" required />
      <InputText v-model="experience.company" required />
      <FieldLabel label="Position" required />
      <InputText v-model="experience.position" required />
      <div :class="$style.experience_date">
        <div :class="$style.dateFrom">
          <FieldLabel label="From" required />
          <InputDate v-model="experience.fromDate" required />
        </div>
        <div :class="$style.dateTo">
          <FieldLabel label="To" :required="!experience.isCurrentPosition" />
          <InputDate
            v-model="experience.toDate"
            :disabled="
              experience.toDate === undefined || experience.isCurrentPosition
            "
            :required="!experience.isCurrentPosition"
          />
        </div>
      </div>
      <div :class="$style.checkbox_wrap">
        <InputCheckboxWithLabel
          v-model="experience.isCurrentPosition"
          label="I currently work here"
          filled
        />
      </div>
      <h4 :class="$style.subHeader">Achievements</h4>
      <div
        v-for="(task, taskIndex) in experience.tasks"
        :key="taskIndex"
        :class="{ [$style.taskSection]: experience.tasks.length > 1 }"
      >
        <FieldLabel
          label="List a task you worked on"
          required
          no-margin="top"
        />
        <InputTextArea
          v-model="task.summary"
          placeholder="In one sentence, state a task or an action you took at the company that benefited them"
        />
        <FieldLabel
          label="Skill(s), Tools or Technologies Used"
          required
          no-margin="bottom"
        />
        <InputMultiText
          v-model:data="task.skills"
          placeholder="Add skills using the Enter or Return key"
          required
        />
        <FieldLabel label="How would you describe the impact" required />
        <div :class="$style.impact_wrap">
          <InputText
            v-model="task.impact"
            placeholder="Describe or rate the impact on a scale of 1-10"
            required
          />

          <ButtonLabel
            v-if="experience.tasks.length > 1"
            :class="$style.removeTaskBtn"
            label="Remove Achievement"
            minus
            @click="
              () => {
                currentModifyingTaskIndex = index;
                taskIndexToBeRemoved = taskIndex;
                showConfirmModal = true;
              }
            "
          />
        </div>
      </div>
      <ButtonLabel
        :class="$style.addTaskBtn"
        label="Add New Achievement"
        plus
        @click="
          () => ((isVisibleNewTask = true), (currentModifyingTaskIndex = index))
        "
      />
    </div>

    <AddExperienceTaskModal
      :visible="isVisibleNewTask"
      @add-task="(data) => addTask(data)"
      @close="isVisibleNewTask = false"
    />

    <div :class="$style.experienceAction">
      <ButtonLabel
        label="Add New Experience"
        plus
        @click="isVisibleAddExperienceModal = true"
      />
      <ButtonLabel
        :disabled="!(experienceData.length > 1)"
        label="Remove Experience"
        minus
        @click="showRemovalModal = true"
      />

      <AddExperienceModal
        :visible="isVisibleAddExperienceModal"
        @add-experience="(data) => addExperience(data)"
        @close="isVisibleAddExperienceModal = false"
      />
    </div>

    <BaseDialog
      v-model="showConfirmModal"
      disable-close
      @close="showConfirmModal = false"
    >
      <template #header>
        <h3>Remove Achievement</h3>
      </template>
      <p :class="$style.dialogueText">
        Are you sure you want remove this achievement?
      </p>
      <template #buttons>
        <BaseButton outline @click="showConfirmModal = false">
          Cancel
        </BaseButton>
        <BaseButton danger @click="removeAchievement(taskIndexToBeRemoved)">
          Remove Achievement
        </BaseButton>
      </template>
    </BaseDialog>

    <BaseDialog v-model="showRemovalModal" @close="clearRemovalSelections">
      <template #header>
        <h3>Remove Experience</h3>
      </template>
      Please select the experience(s) you'd like to remove:
      <template v-for="(experience, index) in experienceData" :key="index">
        <InputCheckboxLabel
          v-if="index > 0"
          v-model="allCompanies[experience.company]"
          :label="experience.company"
        />
      </template>
      <template #buttons>
        <BaseButton danger @click="removeEducation">
          Remove Experience
        </BaseButton>
      </template>
    </BaseDialog>
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.section {
  margin-top: 35px;
  width: 100%;

  .header {
    color: colors.use("primary");
    margin: 50px 0 10px 0;
  }
  .subHeader {
    color: colors.use(primary);
    margin: 30px 0 10px 0;
  }

  .taskSection {
    border: 1px solid colors.use(light-gray);
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 30px;
  }
}
.experience_date {
  display: flex;
  align-items: center;
  gap: 20px;

  .dateFrom,
  .dateTo {
    width: 100%;
  }
}
.checkbox_wrap {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 30px;

  .checkbox_label {
    cursor: pointer;
    user-select: none;
  }
}
.impact_wrap {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;

  .removeTaskBtn {
    display: flex;
    width: 100%;
    justify-content: flex-start;
  }
}
.dialogueText {
  text-align: center;
}
.addTaskBtn {
  margin-bottom: 35px;
}

.experienceAction {
  display: flex;
  gap: 20px;
}

@media screen and (max-width: 715px) {
  .impact_wrap {
    display: flex;
    flex-direction: column;

    .removeTaskBtn {
      display: flex;
      width: 100%;
      justify-content: flex-start;
    }
  }
}

@media screen and (max-width: 560px) {
  .section {
    .experience_date,
    .experienceAction {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 0 !important;
    }

    .taskSection {
      padding: 10px;
      border-radius: 7px;
    }

    .experienceAction {
      gap: 10px !important;
      align-items: flex-start;
    }
  }
}
</style>
