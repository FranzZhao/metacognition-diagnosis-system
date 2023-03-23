import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getDate = () => {
    let date = new Date();
    let y = date.getFullYear();
    let m = (date.getMonth() + 1 + '').padStart(2, '0');
    let d = date.getDate().toString().padStart(2, '0');
    let h = date.getHours().toString().padStart(2, '0');
    let min = date.getMinutes().toString().padStart(2, '0');
    let s = date.getSeconds().toString().padStart(2, '0');
    return `${y}/${m}/${d} ${h}:${min}:${s}`;
};

interface ContextProps {
    cognitiveContext: string | null;
    taskContext: string | null;
    otherContext: string | null;
}

interface ActionProps {
    actor: string;
    verb: string;
    object: string;
    result: string | null;
    time: string;
    context: ContextProps;
}

interface ActionLogProps {
    actor: string;
    actions: ActionProps[];
}

const initialActionLog: ActionLogProps = {
    actor: 'stu1',
    actions: []
};

export const getAction = createAsyncThunk('actionLog/getAction', (actionInfo: ActionProps) => {
    return actionInfo;
});

export const ActionLogSlice = createSlice({
    name: 'actionLog',
    initialState: initialActionLog,
    reducers: {},
    extraReducers: {
        [getAction.fulfilled.type]: (state, action) => {
            let totalActions = state.actions;
            totalActions.push({ ...action.payload, time: getDate() });
        }
    }
});
