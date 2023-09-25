<script setup lang="ts">
import ButtonLabel from "@/components/base-button/ButtonLabel.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputText from "@/components/base-input/InputText.vue";
import type { PersonalInfoType } from "@/types/PersonalInfoType";
import { ref } from "vue";

const personalInfo = ref<PersonalInfoType>({
  fullName: "Paul Ibeabuchi",
  email: "ibeabuchi@gmail.com",
  phone: 2348160564736,
  location: "Lagos Nigeria",
  linkedIn: "https://www.linkedin.com/in/narudesigns",
});
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
      <FieldLabel label="Full Name" required />
      <InputText v-model="personalInfo.fullName" required />
      <FieldLabel label="Email" required />
      <InputText v-model="personalInfo.email" required />
      <FieldLabel label="Phone" required />
      <InputText v-model="personalInfo.phone" type="number" required />
      <FieldLabel label="Location" required />
      <InputText v-model="personalInfo.location" required />
      <FieldLabel label="LinkedIn" required />
      <InputText v-model="personalInfo.linkedIn" required />
      <div :class="$style.btn_label_wrap">
        <ButtonLabel label="Add New Field" plus />
        <ButtonLabel label="Remove Fields" minus />
      </div>
    </div>
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

  .btn_label_wrap {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
    margin-top: 30px;
  }
}

@media screen and (max-width: 715px) {
  .btn_label_wrap {
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 500px) {
  .section {
    .btn_label_wrap {
      justify-content: flex-start !important;
      flex-wrap: wrap;
    }
  }
}
</style>
