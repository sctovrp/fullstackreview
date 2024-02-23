import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MessageState {
    find: string,
}

const initialState: MessageState = {
    find: ''
}

export const querySlice = createSlice({
    name: "query",
    initialState,
    reducers: {
        setFind: (state, value: PayloadAction<string>) =>{
            const newValue = value.payload;
            state.find = newValue;
        },
    }
})

export const {setFind} = querySlice.actions;
export default querySlice.reducer;