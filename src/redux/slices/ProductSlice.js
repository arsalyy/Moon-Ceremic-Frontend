import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};



export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
    filterProduct: (state, action) => {
      try {
        const filter = data.filter((product) => {
          return product.category.name === action.payload;
        });
        state.products = filter;
      } catch (error) {
        console.log(error)
      }
    },
  },
});

export const { addProducts } = productSlice.actions;

export const productReducer = productSlice.reducer;
