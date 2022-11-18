import { createSlice } from '@reduxjs/toolkit';
import { registration, logIn, logOut, fetchCurrentUser } from 'redux/auth/authOperations';

const initialState = {
    user: { name: '', email: '' },
    token: null,
    isLogin: false,
    isFetchingCurrentUser: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [registration.fulfielled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogin = true;
        },
        [logIn.fulfielled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogin = true;
        },
        [logOut.fulfielled](state) {
            state.user = { name: '', email: '' };
            state.token = null;
            state.isLogin = false;
        },
        [fetchCurrentUser.pending](state) {
            state.fetchCurrentUser = true;
        },

        [fetchCurrentUser.fulfielled](state, action) {
            state.user = action.payload;
            state.isLogin = true;
            state.isFetchingCurrentUser = false;
        },
        [fetchCurrentUser.rejected](state) {
            state.isFetchingCurrentUser = false;
        },
    },
});

export default authSlice.reducer;