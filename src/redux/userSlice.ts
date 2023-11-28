import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from '../firebase/firebaseConfig'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

interface User {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
}

export const loginWithGoogle = createAsyncThunk(
    'user/loginWithGoogle',
    async (_, { rejectWithValue }) => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            
            const userData: User = {
                uid: result.user.uid,
                email: result.user.email,
                displayName: result.user.displayName,
                photoURL: result.user.photoURL,
            }

            return userData;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            } else {
                rejectWithValue('My Error message');
            }
        }
    }
)

interface State {
    loading: boolean,
    error: string | null,
    profile: User | null,
}

const initialState: State = {
    loading: false,
    error: null,
    profile: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [loginWithGoogle.pending as any]: (state) => {
            state.loading = true;
        },
        [loginWithGoogle.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.profile = action.payload;
        },
        [loginWithGoogle.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    }
})

export default userSlice.reducer;