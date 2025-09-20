import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {  BasketProductType } from "../../types/Types";


export interface ProductState{
    basket: BasketProductType[],
    drawer: boolean,
 
}

const initialState: ProductState = {
    basket: [],
    drawer: false,
  
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        setBasket: (state, action: PayloadAction<BasketProductType>) => {
            if (state.basket.length === 0) {
                state.basket = [action.payload];
            } else {
                const wantedProduct = state.basket.find(
                    (product) => product.id === action.payload.id
                );
                if (wantedProduct) {
                    const noActionArr = state.basket.filter(
                        (product: BasketProductType) =>
                            action.payload.id !== product.id
                    );
                    wantedProduct.count += action.payload.count;
                    state.basket = [...noActionArr, wantedProduct];
                    return;
                }
                state.basket = [...state.basket, action.payload];
            }
        },
        setDrawer: (state, action: PayloadAction<boolean>) => {
            state.drawer = action.payload;
        },
        deleteBasket: (state, action: PayloadAction<BasketProductType>) => {
           
                state.basket = state.basket.filter(
                    (product: BasketProductType) =>
                        action.payload.id !== product.id
                );
              
            },
            
      
    },
});

export const { setBasket, setDrawer, deleteBasket} = basketSlice.actions;

export default basketSlice.reducer;


