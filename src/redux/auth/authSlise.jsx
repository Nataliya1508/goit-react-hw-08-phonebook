import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from 'redux/auth/authOperations';

const initialState = {
    user: { name: '', email: '' },
    token: null,
    isLogin: false,
    isFetchingCurrentUser: false,
};

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     extraReducers: {
//         [register.fulfilled](state, action) {
//             state.user = action.payload.user;
//             state.token = action.payload.token;
//             state.isLogin = true;
//         },
//         [logIn.fulfilled](state, action) {
//             state.user = action.payload.user;
//             state.token = action.payload.token;
//             state.isLogin = true;
//         },
//         [logOut.fulfilled](state) {
//             state.user = { name: '', email: '' };
//             state.token = null;
//             state.isLogin = false;
//         },
//         [fetchCurrentUser.pending](state) {
//             state.isFetchingCurrentUser  = true;
//         },

//         [fetchCurrentUser.fulfilled](state, action) {
//             state.user = action.payload;
//             state.isLogin = true;
//             state.isFetchingCurrentUser = false;
//         },
//         [fetchCurrentUser.rejected](state) {
//             state.isFetchingCurrentUser = false;
//         },
//     },
// });

// export default authSlice.reducer;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogin = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
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