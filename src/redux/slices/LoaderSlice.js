import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloading: false,
};

export const LoaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
  },
});

export const { setLoader  } = LoaderSlice.actions;

export const LoaderReducer = LoaderSlice.reducer;
