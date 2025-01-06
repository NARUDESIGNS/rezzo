export interface ExperienceType {
  /** Company */
  company: string;
  /** Job position */
  position: string;
  /** Employee still works at this company  */
  isCurrentCompany: boolean;
  /** Start date */
  startDate: string;
  /** End Date */
  endDate: string;
  /** Achievements */
  tasks: Array<{
    /** Achievement summary */
    summary: string;
    /** Skills associated with achievement */
    skills: string[];
    /** Impact of achievement */
    impact?: string;
  }>;
}
