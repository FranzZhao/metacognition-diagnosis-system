import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface SystemProps {
    currentTheme: 'light' | 'dark';
    i18next: 'en' | 'zh';
}

const initialSystemState: SystemProps = {
    currentTheme: 'light',
    i18next: 'zh'
};

// action: 改变颜色主题
export const changeCurrentTheme = createAsyncThunk(
    'theme/changeCurrentTheme',
    (currentTheme: 'light' | 'dark') => {
        return currentTheme === 'light' ? 'dark' : 'light';
    }
);

// slice: 系统主题设置
export const SystemSlice = createSlice({
    name: 'theme',
    initialState: initialSystemState,
    reducers: {},
    extraReducers: {
        [changeCurrentTheme.fulfilled.type]: (state, action) => {
            state.currentTheme = action.payload;
        }
    }
});
