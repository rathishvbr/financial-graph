import { createSlice } from "@reduxjs/toolkit";

interface User {
    theme: string;
}

const initialState: User = {
    theme: 'dark',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setTheme: (state, action: { payload: string }) => {
            state.theme = action.payload;
        },
    },
});

export const { setTheme } = userSlice.actions;
export default userSlice.reducer;
