<script setup lang="ts">
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputPassword from "@/components/base-input/InputPassword.vue";
import InputText from "@/components/base-input/InputText.vue";
import { reactive } from "vue";
import BaseAction from "../base-action/BaseAction.vue";
import BaseButton from "../base-button/BaseButton.vue";
import FormHeader from "../base-input/FormHeader.vue";

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  stayLoggedIn: boolean;
}

const form: IForm = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  stayLoggedIn: false,
});
</script>

<template>
  <form :class="$style.wrap">
    <FormHeader>Create Account</FormHeader>
    <FieldLabel label="First Name" required />
    <InputText v-model="form.firstName" required />
    <FieldLabel label="Last Name" required />
    <InputText v-model="form.lastName" required />
    <FieldLabel label="Email" required />
    <InputText v-model="form.email" required />
    <FieldLabel label="Password" required />
    <InputPassword v-model="form.password" required />
    <FieldLabel label="Confirm Password" required />
    <InputPassword required />
    <BaseButton :class="$style.btn">Login</BaseButton>
    <p>
      Already have an account?
      <BaseAction>Login</BaseAction>
    </p>
  </form>
</template>

<style module lang="scss">
@use "@/scss/colors";

.wrap {
  width: 100%;

  .btn {
    width: 100%;
    margin: 25px 0;
  }
}
</style>
