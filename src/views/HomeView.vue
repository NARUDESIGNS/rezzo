<script setup lang="ts">
import HomepageIllustration from "@/assets/illustrations/HomepageIllustration.vue";
import BaseAction from "@/components/base-action/BaseAction.vue";
import BaseButton from "@/components/base-button/BaseButton.vue";
import PageCenter from "@/components/PageCenter.vue";
</script>

<template>
  <PageCenter>
    <div :class="$style.home_view">
      <div :class="$style.main">
        <HomepageIllustration :class="$style.illustration" />
        <div :class="$style.description">
          <h1 :class="$style.header">
            CRAFT THE PERFECT
            <span :class="$style.highlight">RESUME</span> TO LAND YOUR DREAM JOB
          </h1>
          <HomepageIllustration :class="$style.mobile_illustration" />
          <p :class="$style.message">
            With the help of AI and the trusted
            <BaseAction
              href="https://careers.google.com/how-we-hire/#step-your-resume"
              new-page
            >
              Google’s XYZ formula
            </BaseAction>
            you can create a resume that stands out.<br /><br />
            This platform is solely aimed at helping you land your dream job by
            crafting a perfect resume and providing you with interview-ready
            resources.
          </p>
        </div>
      </div>
      <BaseButton
        :class="$style.btn"
        @click="$router.push({ name: 'create-resume' })"
        >Create my resume</BaseButton
      >
    </div>
  </PageCenter>
</template>

<style module lang="scss">
@use "@/scss/colors";

.home_view {
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 50px;
    margin-bottom: 20px;

    .illustration {
      width: 80%;
      max-width: 500px;
    }

    .mobile_illustration {
      display: none;
    }

    .description {
      width: 40%;

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
    margin-bottom: 50px;
    width: 350px;
  }
}

@media screen and (max-width: 1027px) {
  .home_view {
    .illustration {
      width: 50% !important;
    }
  }
}

@media screen and (max-width: 949px) {
  .home_view {
    .illustration {
      display: none;
    }

    .main {
      padding: 10px;

      .header,
      .description {
        width: 100%;
      }
      .header {
        text-align: center;
      }

      .mobile_illustration {
        width: 80%;
        display: block;
        margin: 40px auto;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .home_view {
    .btn {
      width: 100%;
    }
  }
}
</style>
