<script setup lang="ts">
import BaseButton from "@/components/base-button/BaseButton.vue";
import ButtonLabel from "@/components/base-button/ButtonLabel.vue";
import InputCheckbox from "@/components/base-input/InputCheckbox.vue";
import InputText from "@/components/base-input/InputText.vue";
import BaseLoader from "@/components/base-loader/BaseLoader.vue";
import { ref } from "vue";

const checkbox = ref(true);
const checkboxFilled = ref(true);

const email = ref("narudesigns@mail");
const firstName = ref("Paul");
const lastName = ref("Ibeabuchi");
const middleName = ref("Naru");
</script>

<template>
  <h2 :class="$style.header">Buttons</h2>
  <div :class="$style.content">
    <BaseButton> Primary Button </BaseButton>
    <BaseButton is-loading />

    <BaseButton danger> Danger Button </BaseButton>
    <BaseButton is-loading danger />

    <BaseButton normal> Normal Button </BaseButton>
    <BaseButton is-loading normal />

    <BaseButton danger disabled> Danger Button </BaseButton>
    <BaseButton disabled> Primary Button </BaseButton>
    <BaseButton normal disabled> Normal Button </BaseButton>

    <ButtonLabel plus>Add Button Label</ButtonLabel>
    <ButtonLabel minus>Minus Button Label</ButtonLabel>
    <ButtonLabel plus disabled>Add Button Label</ButtonLabel>
    <ButtonLabel minus disabled>Minus Button Label</ButtonLabel>
    <ButtonLabel plus :size="40" />
    <ButtonLabel minus :size="40" />
  </div>

  <h2 :class="$style.header">Loaders</h2>
  <div :class="$style.content">
    <BaseLoader :size="50" />
    <BaseLoader :size="40" />
    <BaseLoader :size="30" />
    <BaseLoader />
  </div>

  <h2 :class="$style.header">Checkboxes</h2>
  <div :class="$style.content">
    <InputCheckbox v-model="checkbox" />
    <InputCheckbox v-model="checkboxFilled" filled />
    <InputCheckbox :size="20" />
    <InputCheckbox :size="20" filled />
    <InputCheckbox checked disabled />
  </div>

  <h2 :class="$style.header">Input Fields</h2>
  <div :class="[$style.content, $style.input_fields]">
    <InputText v-model="firstName" label="First Name" required />
    <InputText v-model="lastName" label="Last Name" />
    <InputText
      v-model="email"
      label="Email"
      error-msg="Invalid Email Address!"
      required
      error
      :class="$style.input"
    />
    <InputText v-model="middleName" label="Middle Name" disabled />
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.header {
  margin-bottom: 20px;
}
.content {
  margin-bottom: 40px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid colors.use("border-light");
  border-radius: 7px;
  padding: 40px;
}

.input_fields {
  align-items: flex-start;
}
</style>
