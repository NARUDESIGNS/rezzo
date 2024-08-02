export interface ExperienceType {
  company: string;
  position: string;
  isCurrentPosition: boolean;
  startDate: string;
  endDate: string;
  tasks: Array<{
    summary: string;
    skills: string[];
    impact?: string;
  }>;
}
