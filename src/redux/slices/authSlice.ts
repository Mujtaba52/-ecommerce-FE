import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//TODO: Remove any keyword
interface AuthState {
    token : string | null;
    isAuthenticated : boolean;
    isLoading : boolean;
    error : string | null;
    user : any | null;
};

const initialState : AuthState = {
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    user: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest: (state)=>{
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess: (state, action: PayloadAction <{user: any, token: string }>)=>{
            state.isLoading = false;
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
        }
    }
});

export const { loginRequest, loginSuccess} = authSlice.actions;
export default authSlice.reducer;