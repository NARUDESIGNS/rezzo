export type EducationType = {
  school: string;
  degree: string;
  course?: string;
  fromDate: string;
  toDate: string;
};

export type NewEducationType = {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
};
