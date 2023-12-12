import {createSlice} from '@reduxjs/toolkit';
import {Screens} from '../../navigator/Screens';

const initialState = {
  studentsList: [],
  loader: false,
  currentTab: Screens.TabHome,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setStudentsList: (state, {payload}) => {
      state.studentsList = payload;
    },
    setLoader: (state, {payload}) => {
      state.loader = payload;
    },
    setCurrentTab: (state, {payload}) => {
      state.currentTab = payload;
    },
    updateStudentScore: (state, {payload}) => {
      const list = state.studentsList;
      const index = list.findIndex(it => it?.id === payload?.id);
      list[index].marks = payload.marks;
      console.log('[HomeSlice] marks: ', list);
      state.studentsList = list;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setStudentsList, setLoader, updateStudentScore, setCurrentTab} =
  homeSlice.actions;
export default homeSlice.reducer;
