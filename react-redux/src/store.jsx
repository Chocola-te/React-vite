import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import sizeReducer from './SizeSlice';

// store에 등록
// slice별로 state가 분리되어 있지만 하나의 store에서 관리됨
const store = configureStore({
  reducer: {
    counter: counterReducer, // state.counter
    sizer: sizeReducer, // state.sizer
  },
});

export default store;