// Redux Toolkit을 쓰면 reducer + action 생성이 간편해짐
import { createSlice } from '@reduxjs/toolkit';

// createSlice() reducer + action 생성, slice : 
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});
// 액션 타입 정의
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;