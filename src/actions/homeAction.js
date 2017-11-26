import {
  SEARCH_AND_SET_EXAMS,
  SET_COURSE,
  SET_PROGRAM,
  SET_RATING,
  SET_SEMESTER
} from './types';

export const setCourse = (field) => ({
  type: SET_COURSE,
  payload: field
});

export const setProgram = (field) => ({
  type: SET_PROGRAM,
  payload: field
});

export const setRating = (field) => ({
  type: SET_RATING,
  payload: field
});

export const setSemester = (field) => ({
  type: SET_SEMESTER,
  payload: field
});

export const searchAndSetExams = () => ({
  // TODO
});