<script setup lang="ts">
import BaseAction from "@/components/base-action/BaseAction.vue";
import BaseBackdrop from "@/components/base-backdrop/BaseBackdrop.vue";
import BaseButton from "@/components/base-button/BaseButton.vue";
import ButtonLabel from "@/components/base-button/ButtonLabel.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputCheckbox from "@/components/base-input/InputCheckbox.vue";
import InputDate from "@/components/base-input/InputDate.vue";
import InputNumber from "@/components/base-input/InputNumber.vue";
import InputPassword from "@/components/base-input/InputPassword.vue";
import InputText from "@/components/base-input/InputText.vue";
import InputTextArea from "@/components/base-input/InputTextArea.vue";
import BaseLoader from "@/components/base-loader/BaseLoader.vue";
import BaseSearch from "@/components/base-search/BaseSearch.vue";
import PageFooter from "@/components/PageFooter.vue";
import { ref } from "vue";

const checkbox = ref(true);
const checkboxFilled = ref(true);

const email = ref("narudesigns@mail");
const firstName = ref("Paul");
const lastName = ref("Ibeabuchi");
const middleName = ref("Naru");
const numbr = ref(10);
const password = ref("Narudesigns!");
const textarea = ref("Testing notes...");
const date = ref(new Date());
const searchQuery = ref();

const showBackdrop = ref(false);

const logDetails = (info?: string) =>
  alert(info ?? "input filed will be removed when this button is clicked");
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

    <BaseAction
      href="/"
      :action="() => logDetails('Test Action')"
      label="Go Home"
    />

    <BaseAction
      :action="() => logDetails('Test Danger Action')"
      label="Danger Action"
      danger
    />

    <BaseAction :action="() => {}" label="Disabled Action" disabled />
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
    <InputCheckbox id="checkBox" filled />
    <label for="checkBox">Remember Me</label>
  </div>

  <h2 :class="$style.header">Input Fields</h2>
  <div :class="[$style.content, $style.input_fields]">
    <BaseSearch v-model="searchQuery" placeholder="search..." />

    <FieldLabel label="First Name" required />
    <InputText v-model="firstName" required />

    <FieldLabel label="lastName" />
    <InputText v-model="lastName" @input-removed="() => logDetails()" />

    <FieldLabel label="email" required />
    <InputText
      v-model="email"
      error-msg="Invalid Email Address!"
      required
      error
    />

    <FieldLabel label="Middle Name" disabled />
    <InputText v-model="middleName" type="text" disabled />

    <FieldLabel label="Placeholder" />
    <InputText
      type="text"
      placeholder="Tell me a secret here..."
      @input-removed="() => logDetails()"
    />

    <FieldLabel label="Password" required />
    <InputPassword
      v-model="password"
      @input-removed="() => logDetails()"
      required
    />

    <FieldLabel label="Number" />
    <InputNumber
      v-model="numbr"
      @input-removed="() => logDetails()"
      :min="1"
      :max="10"
    />

    <FieldLabel label="Text Area" required />
    <InputTextArea
      v-model="textarea"
      required
      @input-removed="() => logDetails()"
    />

    <FieldLabel label="Date" required />
    <InputDate v-model="date" />
  </div>

  <h2 :class="$style.header">Actions</h2>
  <div :class="$style.content">
    <BaseButton @click="showBackdrop = true"> Show Backdrop</BaseButton>
    <BaseBackdrop :visible="showBackdrop" @click.self="showBackdrop = false" />
  </div>

  <PageFooter />
</template>

<style module lang="scss">
@use "@/scss/colors";
.test {
  width: 500px;
}
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
  flex-direction: column;
  gap: 0;
}

@media screen and (max-width: 400px) {
  .content {
    // justify-content: center;
    padding: 30px 20px;
  }
}
</style>
