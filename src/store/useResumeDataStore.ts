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

  return {
    resumeData,
    personalInfo: computed(() => resumeData.value.personalInfo),
    experience: computed(() => resumeData.value?.experience),
    skills: computed(() => resumeData.value?.skills),
    education: computed(() => resumeData.value?.education),
    updatePersonalInfo,
    updateExperience,
    updateSkills,
    updateEducation,
  };
});
