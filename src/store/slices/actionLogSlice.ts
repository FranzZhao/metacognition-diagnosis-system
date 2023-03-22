import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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
            totalActions.push(action.payload);
        }
    }
});
