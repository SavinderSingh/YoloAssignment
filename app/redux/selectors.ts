export const getStudentsListSelectors = (state: {home: {studentsList: any}}) =>
  state?.home?.studentsList;

export const getCurrentTabSelector = (state: {home: {currentTab: string}}) =>
  state?.home?.currentTab;
