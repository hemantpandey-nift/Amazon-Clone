import { createSlice } from "@reduxjs/toolkit";

// const products = [{ image: "image", link: "link", text: "text" }];

const initialProductState = { products: [] };

const productSlice = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {
    replaceProducts(state, action) {
      state.products = action.payload.products;
    },
  },
});

export default productSlice.reducer;
export const productActions = productSlice.actions;
