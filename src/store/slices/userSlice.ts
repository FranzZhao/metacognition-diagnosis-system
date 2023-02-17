import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface UserProps {}

const initialUserState: UserProps = {};

// slice
export const UserSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {},
    extraReducers: {}
});
