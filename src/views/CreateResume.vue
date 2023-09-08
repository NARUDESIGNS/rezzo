<script setup lang="ts">
import PageCenter from "@/components/PageCenter.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputDate from "@/components/base-input/InputDate.vue";
import InputMultiText from "@/components/base-input/InputMultiText.vue";
import InputText from "@/components/base-input/InputText.vue";
import { parseISO } from "date-fns";
import { ref } from "vue";

type PersonalInfo = {
  fullName: string;
  email: string;
  phone: number;
  location: string;
  linkedIn: string;
  [key: string]: string | number;
};

type Skills = string[];

type Experience = {
  company: string;
  position: string;
  fromDate: Date | string;
  toDate?: Date | string;
  [key: string]: string | undefined | boolean | Date;
};

const personalInfo = ref<PersonalInfo>({
  fullName: "Paul Ibeabuchi",
  email: "ibeabuchi@gmail.com",
  phone: 2348160564736,
  location: "Lagos Nigeria",
  linkedIn: "https://www.linkedin.com/in/narudesigns",
});

const skills = ref<Skills>(["Vue", "React", "TypeScript"]);

const experience = ref<Experience>({
  company: "Worklio",
  position: "Frontend Engineer",
  fromDate: parseISO("05/03/2023"),
  toDate: undefined,
});
//   // education: {},

console.log(new Date("04-05-2024"));
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
        <div :class="$style.section">
          <h3 :class="$style.sub_header">Personal Information</h3>
          <p :class="$style.description">
            Add your personal details which will be used. This will be at the
            top of your resume and usually includes details with which potential
            recruiters can reach you.
          </p>
          <div :class="$style.personal_info_form">
            <FieldLabel label="Full Name" required />
            <InputText v-model="personalInfo.fullName" required />
            <FieldLabel label="Email" required />
            <InputText v-model="personalInfo.email" required />
            <FieldLabel label="Phone" required />
            <InputText v-model="personalInfo.phone" type="number" required />
            <FieldLabel label="Location" required />
            <InputText v-model="personalInfo.location" required />
            <FieldLabel label="LinkedIn" required />
            <InputText v-model="personalInfo.linkedIn" required />
          </div>

          <div :class="$style.section">
            <h3 :class="$style.sub_header">Skills</h3>
            <p :class="$style.description">
              Add your skills, separating them using commas.
            </p>
            <InputMultiText v-model:skills="skills" />
          </div>

          <div :class="$style.section">
            <h3 :class="$style.sub_header">Experience</h3>
            <p :class="$style.description">
              Include relevant details such as job titles, company names, dates,
              and concise descriptions of your experiences. Carefully include
              the tasks you worked on, the tools or technologies you used and
              how it impacted the organization.
            </p>
            <FieldLabel label="Company" required />
            <InputText v-model="experience.company" required />
            <FieldLabel label="Position" required />
            <InputText v-model="experience.position" required />
            <div :class="$style.experience_date">
              <FieldLabel label="From" required />
              <InputDate v-model="experience.fromDate" required />
              <FieldLabel label="To" required />
              <InputDate v-model="experience.toDate" required />
            </div>
          </div>
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

  .section {
    margin-top: 35px;

    .sub_header {
      color: colors.use("primary");
      margin: 50px 0 10px 0;
    }

    // .description {
    //   margin-bottom: 20px;
    // }
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
