import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface SubLearningObjectProps {
    id: string;
    text: string;
    progress: number;
}

interface LearningObjectProps {
    coreLearningObject: string;
    subLearningObjects: SubLearningObjectProps[];
    nextSubLearningObjectId: number;
}

const initialLearningObject: LearningObjectProps = {
    coreLearningObject: '运用复杂系统理论构想未来教育评价样态-redux',
    subLearningObjects: [
        { id: '1', text: '子目标1', progress: 50 },
        { id: '2', text: '子目标2', progress: 20 },
        { id: '3', text: '子目标3', progress: 60 }
    ],
    nextSubLearningObjectId: 4
};

// 更新核心目标
export const updateCoreLearningObject = createAsyncThunk(
    'learningObject/updateCoreLearningObject',
    (text: string) => {
        return text;
    }
);

// 更新子目标列表
export const updateSubLearningObjects = createAsyncThunk(
    'learningObject/updateSubLearningObjects',
    (list: any) => {
        return list;
    }
);

export const LearningObjectSlice = createSlice({
    name: 'learningObject',
    initialState: initialLearningObject,
    reducers: {
        increaseNextId: (state) => {
            state.nextSubLearningObjectId += 1;
        }
    },
    extraReducers: {
        [updateCoreLearningObject.fulfilled.type]: (state, action) => {
            state.coreLearningObject = action.payload;
        },
        [updateSubLearningObjects.fulfilled.type]: (state, action) => {
            // console.log('res', action.payload);
            state.subLearningObjects = [...action.payload];
        }
    }
});
