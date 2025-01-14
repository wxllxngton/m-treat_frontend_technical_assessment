import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state
interface UserState {
    refreshToken: string;
    accessToken: string;
    userId: string;
}

// Define the initial state using that type
const initialState: UserState = {
    refreshToken: '',
    accessToken: '',
    userId: '',
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
        setUserId: (state, action: PayloadAction<string>) => {
            state.userId = action.payload;
        },
    },
});

export const { setRefreshToken, setAccessToken, setUserId } = userSlice.actions;

// Selectors to get the tokens from the state
export const selectRefreshToken = (state: RootState) => state.user.refreshToken;
export const selectAccessToken = (state: RootState) => state.user.accessToken;

// Selectors to get the userid from the state
export const selectUserId = (state: RootState) => state.user.userId;

export default userSlice.reducer;
