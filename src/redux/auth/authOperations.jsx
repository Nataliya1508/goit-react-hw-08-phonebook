import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const registration = createAsyncThunk('auth/registration', async credentials => {
    try {
        const { data } = await axios.post('/users/singup', credentials);
        token.set(data.token);
        Notiflix.Notify.info('The account was created');
        return data;
    } catch (error) {
        Notiflix.Notify.failure('Registration error');
    }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        Notiflix.Notify.info('Login succesfully');
        return data;
    } catch (error) {
        Notiflix.Notify.failure('Registration error');
    }
});

export const logOut = createAsyncThunk('auth/logout', async thunkAPI => {
    try {
        await axios.post('/users/logout');
        token.unset();
    
    } catch (error) {
        return thunkAPI.rejectWithValue('Something went wrong. Try again.')
    }
});

export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();

        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }
        token.set(persistedToken);
        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            return error.response.status;
        }
    });