<script setup lang="ts">
import BaseAction from "@/components/base-action/BaseAction.vue";
import BaseButton from "@/components/base-button/BaseButton.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import FormHeader from "@/components/base-input/FormHeader.vue";
import InputCheckbox from "@/components/base-input/InputCheckbox.vue";
import InputPassword from "@/components/base-input/InputPassword.vue";
import InputText from "@/components/base-input/InputText.vue";
import { validateForm } from "@/utils/validateForm";
import { computed, reactive, ref } from "vue";

interface LoginForm {
  email: string;
  password: string;
  stayLoggedIn: boolean;
}

const form: LoginForm = reactive({
  email: "",
  password: "",
  stayLoggedIn: false,
});

const requiredFields = ["email", "password"];

const hasErrorField = ref(false);
const isValidForm = computed(() =>
  validateForm<LoginForm>(form, requiredFields, hasErrorField.value)
);
</script>

<template>
  <form :class="$style.wrap" @submit.prevent>
    <FormHeader>Login</FormHeader>
    <FieldLabel label="Email" required />
    <InputText v-model="form.email" type="email" required />
    <FieldLabel label="Password" required />
    <InputPassword v-model="form.password" required />
    <div :class="$style.checkbox_wrap">
      <InputCheckbox id="stayLoggedIn" v-model="form.stayLoggedIn" filled />
      <label :class="$style.checkbox_label" for="stayLoggedIn">
        Keep me logged in
      </label>
    </div>
    <BaseAction>Forgot Password</BaseAction>
    <BaseButton :class="$style.btn" :disabled="!isValidForm">Login</BaseButton>
    <p :class="$style.link">
      Don't have an account?
      <RouterLink :to="{ name: 'signup' }">
        <BaseAction>Create Account</BaseAction>
      </RouterLink>
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
      user-select: none;
    }
  }

  .btn {
    width: 100%;
    margin: 15px 0 25px 0;
  }

  .link {
    text-align: center;
  }
}
</style>
