<script setup lang="ts">
import PageCenter from "@/components/PageCenter.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputMultiText from "@/components/base-input/InputMultiText.vue";
import InputText from "@/components/base-input/InputText.vue";
import { ref } from "vue";

// TODO: create proper types for each section — personal info, skills, experience, education. The type below should be used for custom section
interface ResumeType {
  [key: string]: PersonalInfo | Skills; //boolean | number | string | (string | number)[] | ResumeType;
}

type PersonalInfo = {
  [key: string]: string | number;
};

type Skills = string[];

// // const details: ResumeType = reactive({
// const details = reactive({
//   personalInfo: {
//     fullName: "Paul Ibeabuchi",
//     email: "ibeabuchi@gmail.com",
//     phone: 2348160564736,
//     location: "Lagos Nigeria",
//     linkedIn: "https://www.linkedin.com/in/narudesigns",
//   },
//   skills: ["Vue", "React"],
//   // experience: {},
//   // education: {},
// });

const resumeData = ref([
  {
    key: "personalInfo",
    data: {
      fullName: "Paul Ibeabuchi",
      email: "ibeabuchi@gmail.com",
      phone: 2348160564736,
      location: "Lagos Nigeria",
      linkedIn: "https://www.linkedin.com/in/narudesigns",
    },
  },
  {
    key: "skills",
    data: ["Vue", "React", "TypeScript"],
  },
]);
</script>

<template>
  <PageCenter>
    <div :class="$style.resume">
      <h1 :class="$style.header">CREATE RESUME</h1>
      <p :class="$style.description">
        Creating your perfect resume requires attention and detailed
        information. On this page, we require you to provide us with detailed
        info as indicated by the various sections. Those details will be fine
        tuned by the AI to craft your perfect resume.
      </p>
      <main :class="$style.details">
        <div
          v-for="(details, index) in resumeData"
          :key="index"
          :class="$style.personal_info"
        >
          <template
            v-if="details.key === 'personalInfo' && 'fullName' in details.data"
          >
            <h3 :class="$style.sub_header">Personal Information</h3>
            <p :class="$style.description">
              Add your personal details which will be used. This will be at the
              top of your resume and usually includes details with which
              potential recruiters can reach you.
            </p>
            <div :class="$style.personal_info_form">
              <FieldLabel label="Full Name" required />
              <InputText v-model="details.data.fullName" required />
              <FieldLabel label="Email" required />
              <InputText v-model="details.data.email" required />
              <FieldLabel label="Phone" required />
              <InputText v-model="details.data.phone" type="number" required />
              <FieldLabel label="Location" required />
              <InputText v-model="details.data.location" required />
              <FieldLabel label="LinkedIn" required />
              <InputText v-model="details.data.linkedIn" required />
            </div>
          </template>

          <template
            v-else-if="
              details.key === 'skills' && typeof details.data === 'object'
            "
          >
            <h3 :class="$style.sub_header">Skills</h3>
            <p :class="$style.description">
              Add your skills, separating them using commas.
            </p>
            <InputMultiText v-model:skills="data" />
          </template>
        </div>
      </main>
    </div>
  </PageCenter>
</template>

<style module lang="scss">
@use "@/scss/colors";

.resume {
  padding: 20px 50px;

  .header {
    text-align: center;
    font-weight: 900;
    margin: 20px 0;
  }

  .description {
    line-height: 2;
  }

  .personal_info {
    margin-top: 35px;

    .sub_header {
      color: colors.use("primary");
      margin: 50px 0 10px 0;
    }

    .description {
      margin-bottom: 20px;
    }
  }
}

@media screen and (max-width: 1000px) {
  .resume {
    padding: 10px;

    .header {
      font-size: 1.5rem;
    }
  }
}
</style>
