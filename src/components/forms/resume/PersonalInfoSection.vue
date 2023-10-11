<script setup lang="ts">
import BaseButton from "@/components/base-button/BaseButton.vue";
import ButtonLabel from "@/components/base-button/ButtonLabel.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputText from "@/components/base-input/InputText.vue";
import type { PersonalInfoType } from "@/types/PersonalInfoType";
import { NewPersonalInfoType } from "@/types/PersonalInfoType";
import { ref } from "vue";
import AddPersonalInfo from "../new-fields/AddPersonalInfo.vue";

const personalInfoData = ref<PersonalInfoType[]>([
  { title: "Full Name", value: "Paul Ibeabuchi", required: true },
  { title: "Email", value: "ibeabuchi@gmail.com", required: true },
  { title: "Phone", value: 2348160564736, required: false },
  { title: "Location", value: "Lagos Nigeria", required: true },
  {
    title: "LinkedIn",
    value: "https://www.linkedin.com/in/narudesigns",
    required: false,
  },
]);

const canRemoveFields = ref(false);

const openNewInfoModal = ref(false);
const addNewField = (data: NewPersonalInfoType) => {
  personalInfoData.value.push({
    title: data.title,
    value: data.value,
    required: false,
  });
};

const removeField = (index: number) => {
  personalInfoData.value.splice(index, 1);
};
</script>

<template>
  <div :class="$style.section">
    <h3 :class="$style.sub_header">Personal Information</h3>
    <p :class="$style.description">
      Add your personal details which will be used. This will be at the top of
      your resume and usually includes details with which potential recruiters
      can reach you.
    </p>
    <div :class="$style.personal_info_form">
      <template v-for="(data, index) in personalInfoData">
        <FieldLabel :label="data.title" :required="data.required" />
        <InputText
          v-model="data.value"
          :required="data.required"
          :show-button="canRemoveFields"
          @input-removed="removeField(index)"
        />
      </template>
      <div :class="$style.btn_label_wrap">
        <template v-if="!canRemoveFields">
          <ButtonLabel
            label="Add New Field"
            plus
            @click="openNewInfoModal = true"
          />
          <ButtonLabel
            @click="canRemoveFields = true"
            label="Remove Fields"
            minus
          />
        </template>
        <template v-else>
          <BaseButton @click="canRemoveFields = false" outline>
            Done
          </BaseButton>
        </template>
      </div>
    </div>

    <AddPersonalInfo
      :visible="openNewInfoModal"
      @add-field="(data) => addNewField(data)"
      @close="openNewInfoModal = false"
    />
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.sub_header {
  color: colors.use("primary");
  margin: 50px 0 10px 0;
}

.btn_label_wrap {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  margin-top: 30px;
}

@media screen and (max-width: 715px) {
  .btn_label_wrap {
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 560px) {
  .btn_label_wrap {
    justify-content: flex-start !important;
    flex-wrap: wrap;
  }
}
</style>
