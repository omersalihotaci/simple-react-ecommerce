import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ProductType } from "../../types/Types";


export interface ProductState{
    products:ProductType[]
}

const initialState: ProductState = {
    products:[]
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state,action:PayloadAction<ProductType[]>) => {
            state.products = action.payload;
        },
        filterProduct: (state, action: PayloadAction<string>) => {
          const filteredProducts=  state.products.filter((product) => {
          return      product.title.toLowerCase().includes(action.payload.toLowerCase())
          })
            state.products = filteredProducts;
        }
    }
})

export const { setProducts, filterProduct } = productSlice.actions;

export default productSlice.reducer;