import { EducationType } from "@/types/EducationType";
import { ExperienceType } from "@/types/ExperienceType";
import { FieldType } from "@/types/FieldType";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

interface ResumeData {
  personalInfo: FieldType[];
  experience: ExperienceType[];
  skills: string[];
  education: EducationType[];
}

export const useResumeDataStore = defineStore("resumeDataStore", () => {
  const resumeData = ref<ResumeData>({
    personalInfo: [],
    experience: [],
    skills: [],
    education: [],
  });

  /** update personal info */
  function updatePersonalInfo(data: FieldType[]) {
    resumeData.value.personalInfo = data;
  }

  /** update experience */
  function updateExperience(data: ExperienceType[]) {
    if (resumeData.value) resumeData.value.experience = data;
  }

  /** update skills */
  function updateSkills(data: string[]) {
    if (resumeData.value) resumeData.value.skills = data;
  }

  /** update education */
  function updateEducation(data: EducationType[]) {
    if (resumeData.value) resumeData.value.education = data;
  }

  const _resumeData = computed(() => ({
    personalInfo: resumeData.value.personalInfo,
    experience: resumeData.value?.experience,
    skills: resumeData.value?.skills,
    education: resumeData.value?.education,
  }));

  const { personalInfo, experience, skills, education } = _resumeData.value;

  return {
    resumeData,
    personalInfo,
    experience,
    skills,
    education,
    updatePersonalInfo,
    updateExperience,
    updateSkills,
    updateEducation,
  };
});
