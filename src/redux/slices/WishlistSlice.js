import { createSlice, current } from "@reduxjs/toolkit";

export const WishList = createSlice({
  name: "wishlist",
  initialState: {
    wishList: [],
    isOpen: false,
  },
  reducers: {
    AddWish: (state, action) => {
      const product = action.payload;
      const exist = state.wishList.find((item) => item.id === product.id);
      if (!exist) {
        state.wishList.push({
          id: product.id,
          name: product.name,
          image: product.img,
          price: product.price,
        });
      } else {
        state.wishList = state.wishList.filter((item) => item.id !== exist.id);
      }
    },
    Dislike: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload
      );
    },
    IsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { AddWish, IsOpen, Dislike } = WishList.actions;

export const WishReducer = WishList.reducer;
