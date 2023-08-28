<script setup lang="ts">
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputPassword from "@/components/base-input/InputPassword.vue";
import InputText from "@/components/base-input/InputText.vue";
import { reactive } from "vue";
import BaseAction from "../base-action/BaseAction.vue";
import BaseButton from "../base-button/BaseButton.vue";
import FormHeader from "../base-input/FormHeader.vue";
import InputCheckbox from "../base-input/InputCheckbox.vue";

interface IForm {
  email: string;
  password: string;
  stayLoggedIn: boolean;
}

const form: IForm = reactive({
  email: "",
  password: "",
  stayLoggedIn: false,
});
</script>

<template>
  <form :class="$style.wrap">
    <FormHeader>Login</FormHeader>
    <FieldLabel label="Email" required />
    <InputText v-model="form.email" required />
    <FieldLabel label="Password" required />
    <InputPassword v-model="form.password" required />
    <div :class="$style.checkbox_wrap">
      <InputCheckbox id="stayLoggedIn" v-model="form.stayLoggedIn" filled />
      <label :class="$style.checkbox_label" for="stayLoggedIn">
        Keep me logged in
      </label>
    </div>
    <BaseAction>Forgot Password</BaseAction>
    <BaseButton :class="$style.btn">Login</BaseButton>
    <p>
      Don't have an account?
      <BaseAction>Create Account</BaseAction>
    </p>
  </form>
</template>

<style module lang="scss">
@use "@/scss/colors";

.wrap {
  width: 100%;

  .checkbox_wrap {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 30px 0;

    .checkbox_label {
      cursor: pointer;
    }
  }

  .btn {
    width: 100%;
    margin: 10px 0 25px 0;
  }
}
</style>
