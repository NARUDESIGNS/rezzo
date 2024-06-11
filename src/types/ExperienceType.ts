export interface ExperienceType {
  company: string;
  position: string;
  isCurrentPosition: boolean;
  fromDate: string;
  toDate: string;
  tasks: Array<{
    summary: string;
    skills: string[];
    impact?: number;
  }>;
}
