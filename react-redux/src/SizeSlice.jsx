import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fontSize: 30,
};

const sizeSlice = createSlice({
  name: "sizer",
  initialState,
  reducers: {
    bigger: (state) => {state.fontSize += 10;},
    smaller: (state) => {state.fontSize -= 10;}
  }
})

export const{bigger, smaller} = sizeSlice.actions;
export default sizeSlice.reducer;