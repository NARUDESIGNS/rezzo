<script setup lang="ts">
import FemalesIllustration from "@/assets/illustrations/FemalesIllustration.vue";
import PageFooter from "@/components/PageFooter.vue";
import PageNav from "@/components/PageNav.vue";
import BaseAction from "@/components/base-action/BaseAction.vue";
import BaseButton from "@/components/base-button/BaseButton.vue";
</script>

<template>
  <div :class="$style.home_view">
    <PageNav />
    <div :class="$style.main">
      <FemalesIllustration :class="$style.illustration" />
      <div :class="$style.description">
        <h1 :class="$style.header">
          CRAFT THE PERFECT <br />
          <span :class="$style.highlight">RESUME</span> TO LAND <br />
          YOUR DREAM JOB
        </h1>
        <p :class="$style.message">
          With the help of AI and the trusted
          <BaseAction href="https://careers.google.com/how-we-hire/"
            >Google’s XYZ formula</BaseAction
          >
          you can create a resume that stands out.<br /><br />
          This platform is solely aimed at helping you land your dream job by
          crafting a perfect resume and providing you with interview-ready
          resources.
        </p>
      </div>
    </div>
    <BaseButton :class="$style.btn">Create my resume</BaseButton>
  </div>

  <PageFooter />
</template>

<style module lang="scss">
@use "@/scss/colors";

.home_view {
  padding: 20px;

  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 50px;
    margin-bottom: 5%;

    .illustration {
      width: 70%;
    }

    .description {
      width: 50%;

      .header {
        font-weight: 900;
        line-height: 1.1;
        margin-bottom: 30px;

        .highlight {
          color: colors.use("primary");
        }
      }

      .message {
        line-height: 2;
      }
    }
  }

  .btn {
    display: block;
    margin: 0 auto;
    width: 350px;
  }
}
</style>
