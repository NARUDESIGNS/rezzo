<script setup lang="ts">
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputPassword from "@/components/base-input/InputPassword.vue";
import InputText from "@/components/base-input/InputText.vue";
import { validateForm } from "@/utils/validateForm";
import { computed, reactive, ref } from "vue";
import BaseAction from "../base-action/BaseAction.vue";
import BaseButton from "../base-button/BaseButton.vue";
import FormHeader from "../base-input/FormHeader.vue";

interface SignupForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  stayLoggedIn: boolean;
}

const form: SignupForm = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  stayLoggedIn: false,
});

const confirmPassword = ref("");
const requiredFields = ["firstName", "lastName", "email", "password"];

const hasErrorField = ref(false);
const isValidForm = computed(() =>
  validateForm<SignupForm>(form, requiredFields, hasErrorField.value)
);

const validateConfirmPassword = () => {
  hasErrorField.value = form.password !== confirmPassword.value;
};

let error: { status: boolean; message: string } = reactive({
  status: false,
  message: "",
});
const showInputError = () => {
  if (form.password !== confirmPassword.value) {
    error.status = true;
    error.message = "Passwords doesn't match!";
  } else {
    error.status = false;
    error.message = "";
  }
};
</script>

<template>
  <form :class="$style.wrap" @submit.prevent>
    <FormHeader>Create Account</FormHeader>
    <FieldLabel label="First Name" required />
    <InputText v-model="form.firstName" required />
    <FieldLabel label="Last Name" required />
    <InputText v-model="form.lastName" required />
    <FieldLabel label="Email" required />
    <InputText v-model="form.email" required />
    <FieldLabel label="Password" required />
    <InputPassword
      v-model="form.password"
      required
      @input="validateConfirmPassword"
    />
    <FieldLabel label="Confirm Password" required />
    <InputPassword
      v-model="confirmPassword"
      required
      @input="validateConfirmPassword"
      :error="error.status"
      :error-msg="error.message"
      @change="showInputError"
    />
    <BaseButton :class="$style.btn" :disabled="!isValidForm"
      >Create Account</BaseButton
    >
    <p :class="$style.link">
      Already have an account?
      <RouterLink :to="{ name: 'login' }">
        <BaseAction>Login</BaseAction>
      </RouterLink>
    </p>
  </form>
</template>

<style module lang="scss">
@use "@/scss/colors";

.wrap {
  width: 100%;

  .btn {
    width: 100%;
    margin: 30px 0 25px 0;
  }

  .link {
    text-align: center;
  }
}
</style>
