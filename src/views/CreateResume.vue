<script setup lang="ts">
import PageCenter from "@/components/PageCenter.vue";
import ButtonLabel from "@/components/base-button/ButtonLabel.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputCheckbox from "@/components/base-input/InputCheckbox.vue";
import InputDate from "@/components/base-input/InputDate.vue";
import InputMultiText from "@/components/base-input/InputMultiText.vue";
import InputText from "@/components/base-input/InputText.vue";
import InputTextArea from "@/components/base-input/InputTextArea.vue";
// import { parseISO } from "date-fns";
// import { stringToDate } from "@/utils/stringToDate";
import { ref } from "vue";

type PersonalInfo = {
  fullName: string;
  email: string;
  phone: number;
  location: string;
  linkedIn: string;
  // [key: string]: string | number;
};

type Skills = string[];

type Experience = {
  company: string;
  position: string;
  fromDate: string;
  toDate: string;
  // [key: string]: string | undefined | boolean | Date;
};

type Education = {
  school: string;
  degree: string;
  course: string;
  fromDate: string;
  toDate: string;
};

const personalInfo = ref<PersonalInfo>({
  fullName: "Paul Ibeabuchi",
  email: "ibeabuchi@gmail.com",
  phone: 2348160564736,
  location: "Lagos Nigeria",
  linkedIn: "https://www.linkedin.com/in/narudesigns",
});

const skills = ref<Skills>(["Vue", "React", "TypeScript", "Nodejs"]);

const experience = ref<Experience>({
  company: "Worklio",
  position: "Frontend Engineer",
  fromDate: "08/03/2023",
  toDate: "02/13/2024", //undefined,
});

const currentJob = ref(false);

const education = ref<Education>({
  school: "University of Port-Harcourt",
  degree: "Bsc", // TODO: make a dropdown for this
  course: "Computer Science",
  fromDate: "08/03/2023",
  toDate: "02/13/2024", //undefined,
});
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
            <div :class="$style.btn_label_wrap">
              <ButtonLabel label="Add New Field" plus />
              <ButtonLabel label="Remove Fields" minus />
            </div>
          </div>

          <div :class="$style.section">
            <h3 :class="$style.sub_header">Skills</h3>
            <p :class="$style.description">
              Add your skills, separate them using commas and hit the
              <span
                :style="{
                  backgroundColor: '#f0f0f0',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  margin: '0 5px',
                }"
                >Enter</span
              >
              key to add.
            </p>
            <InputMultiText v-model:data="skills" />
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
              <div :class="$style.dateFrom">
                <FieldLabel label="From" required />
                <InputDate v-model="experience.fromDate" required />
              </div>
              <div :class="$style.dateTo">
                <FieldLabel label="To" required />
                <InputDate
                  v-model="experience.toDate"
                  :disabled="experience.toDate === undefined"
                  required
                />
              </div>
            </div>
            <div :class="$style.checkbox_wrap">
              <InputCheckbox id="currentJob" v-model="currentJob" filled />
              <label :class="$style.checkbox_label" for="currentJob">
                I currently work here
              </label>
            </div>
            <FieldLabel label="List a task you worked on" required />
            <InputTextArea
              placeholder="In one sentence, state a task or an action you took at the company that benefited them"
            />
            <FieldLabel label="Skill(s), Tools or Technologies Used" required />
            <InputText
              placeholder="What skills, tools or technologies did you use for the above task?"
              required
            />
            <FieldLabel label="How would you rate the impact" required />
            <div :class="$style.impact_wrap">
              <InputText
                placeholder="Rate the impact on a scale of 1-10"
                type="number"
                min="1"
                max="10"
                required
              />
              <!-- <div :class="$style.btn_label_wrap"> -->
              <ButtonLabel label="Remove Task" minus />
              <ButtonLabel label="Add New Task" plus />
              <!-- </div> -->
            </div>
            <ButtonLabel label="Add New Experience" plus />
          </div>

          <div :class="$style.section">
            <h3 :class="$style.sub_header">Education</h3>
            <p :class="$style.description">
              Provide details of your educational background, including degrees,
              certifications, and relevant coursework.
            </p>
            <FieldLabel label="School" />
            <InputText v-model="education.school" />
            <FieldLabel label="Degree" />
            <InputText v-model="education.degree" />
            <div :class="$style.experience_date">
              <div :class="$style.dateFrom">
                <FieldLabel label="From" />
                <InputDate v-model="education.fromDate" />
              </div>
              <div :class="$style.dateTo">
                <FieldLabel label="To" />
                <InputDate v-model="education.toDate" />
              </div>
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
  margin-bottom: 50px;

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

    .btn_label_wrap {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 30px;
      margin-top: 30px;
    }

    .experience_date {
      display: flex;
      align-items: center;
      gap: 20px;

      .dateFrom,
      .dateTo {
        width: 100%;
      }
    }

    .checkbox_wrap {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-top: 30px;

      .checkbox_label {
        cursor: pointer;
        user-select: none;
      }
    }

    .impact_wrap {
      display: flex;
      gap: 20px;
      margin-bottom: 30px;
    }
  }
}

@media screen and (max-width: 1000px) {
  .resume {
    padding: 0;

    .header {
      font-size: 1.5rem;
    }
  }
}

@media screen and (max-width: 500px) {
  .section {
    .btn_label_wrap {
      justify-content: flex-start !important;
    }

    .experience_date {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 0 !important;
    }
  }

  .impact_wrap {
    display: flex;
    flex-direction: column;
  }
}
</style>
