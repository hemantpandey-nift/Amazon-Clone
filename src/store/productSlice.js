import { createSlice } from "@reduxjs/toolkit";

const initialProductState = { products: [] };
const productSlice = createSlice({
  name: "products",
  initialState: initialProductState,
  reducers: {
    loadproducts(state, action) {
      state.products = [...action.payload];
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
