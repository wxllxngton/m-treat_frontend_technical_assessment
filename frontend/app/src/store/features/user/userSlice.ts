import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state
interface UserState {
    refreshToken: string;
    accessToken: string;
}

// Define the initial state using that type
const initialState: UserState = {
    refreshToken: '',
    accessToken: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setRefreshToken: (state, action: PayloadAction<string>) => {
            state.refreshToken = action.payload;
        },
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
        },
    },
});

export const { setRefreshToken, setAccessToken } = userSlice.actions;

// Selectors to get the tokens from the state
export const selectRefreshToken = (state: RootState) => state.user.refreshToken;
export const selectAccessToken = (state: RootState) => state.user.accessToken;

export default userSlice.reducer;
