import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserType } from "../../types/Types";

export interface UserState {
    currentUser:UserType|null,
    loading: boolean,
    limit: number,
    log:boolean
}

const initialState: UserState = {
    currentUser:null,
    loading: false,
    limit: 1000,
    log:false
    
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUser: (state, actions: PayloadAction<UserType>) => {
            state.currentUser = actions.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setLog: (state, action: PayloadAction<boolean>) => {
            state.log = action.payload;
          
        },
    },
});


export const { setCurrentUser, setLoading, setLog } = userSlice.actions;

export default userSlice.reducer;
