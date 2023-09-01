<script setup lang="ts">
import WhiteLogo from "@/assets/WhiteLogo.vue";
import LoginForm from "@/components/forms/LoginForm.vue";
import SignupForm from "@/components/forms/SignupForm.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isLoginPage = computed(() => route.path.includes("login"));
</script>

<template>
  <div :class="$style.wrap">
    <div :class="$style.form_wrap">
      <RouterLink to="/" :class="$style.logo">
        <WhiteLogo />
      </RouterLink>
      <div :class="$style.form">
        <LoginForm v-if="isLoginPage" />
        <SignupForm v-else />
      </div>
    </div>
    <div :class="$style.illustration_wrap">
      <img
        :class="$style.illustration"
        src="@/assets/images/team-bonding.svg"
        atl="illustration of people bonding"
      />
      <p :class="$style.msg">
        We can’t wait to have you and give the experience you deserve!
      </p>
    </div>
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.wrap {
  display: flex;
  align-items: center;

  .form_wrap {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: colors.use("primary");
    padding: 70px 30px;

    .logo {
      position: absolute;
      top: 30px;
      left: 30px;
    }

    .form {
      width: 100%;
      max-width: 500px;
      background-color: colors.use("background-light");
      padding: 30px 20px;
    }
  }

  .illustration_wrap {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    bottom: 0;

    .illustration {
      object-fit: cover;
      width: 500px;
      display: block;
    }
  }
}

@media only screen and (max-width: 1125px) {
  .wrap {
    .form_wrap {
      padding: 50px 20px;
      padding-top: 70px;
    }
    .illustration_wrap {
      display: none;
    }
  }
}
</style>
