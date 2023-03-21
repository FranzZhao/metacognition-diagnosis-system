import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AlertColor } from '@mui/material/Alert';
import { access } from 'fs';

interface ChapterInfoListProps {
    id: string;
    chapter: string;
    title: string;
    progress: string;
    isFinish: boolean;
    color: string;
    alertType: AlertColor | undefined;
}

interface KnowledgeLearningProps {
    chapterInfoList: ChapterInfoListProps[];
}

const initialKnowledgeLearning: KnowledgeLearningProps = {
    chapterInfoList: [
        {
            id: '1',
            chapter: '第一章 复杂性理论',
            title: '第一节 从还原论到系统论',
            progress: '0',
            isFinish: false,
            color: '#1e88e5',
            alertType: 'info'
        },
        {
            id: '2',
            chapter: '第一章 复杂性理论',
            title: '第二节 复杂系统及其内涵',
            progress: '0',
            isFinish: false,
            color: '#1e88e5',
            alertType: 'info'
        },
        {
            id: '3',
            chapter: '第一章 复杂性理论',
            title: '第三节 自组织与涌现',
            progress: '0',
            isFinish: false,
            color: '#1e88e5',
            alertType: 'info'
        },
        {
            id: '4',
            chapter: '第二章 认知动力主义',
            title: '第一节 认知科学的发展与局限',
            progress: '0',
            isFinish: false,
            color: '#349938',
            alertType: 'success'
        },
        {
            id: '5',
            chapter: '第二章 认知动力主义',
            title: '第二节 认知动力主义的本质',
            progress: '0',
            isFinish: false,
            color: '#349938',
            alertType: 'success'
        },
        {
            id: '6',
            chapter: '第二章 认知动力主义',
            title: '第三节 认知动力主义的认知取向',
            progress: '0',
            isFinish: false,
            color: '#349938',
            alertType: 'success'
        },
        {
            id: '7',
            chapter: '第三章 情境认知理论',
            title: '第一节 情境认知理论的内涵',
            progress: '0',
            isFinish: false,
            color: '#f44336',
            alertType: 'error'
        },
        {
            id: '8',
            chapter: '第三章 情境认知理论',
            title: '第二节 情境认知的过程',
            progress: '0',
            isFinish: false,
            color: '#f44336',
            alertType: 'error'
        },
        {
            id: '9',
            chapter: '第三章 情境认知理论',
            title: '第三节 情境认知的教学含义',
            progress: '0',
            isFinish: false,
            color: '#f44336',
            alertType: 'error'
        }
    ]
};

// 更新章节学习状态
export const updateChapterLearningProcess = createAsyncThunk(
    'knowledgeLearning/updateProcess',
    (params: { chapterId: string; process: string }) => {
        return {
            chapterId: params.chapterId,
            process: params.process,
            isFinish: params.process === '100' ? true : false
        };
    }
);

export const KnowledgeLearningSlice = createSlice({
    name: 'knowledgeLearning',
    initialState: initialKnowledgeLearning,
    reducers: {},
    extraReducers: {
        [updateChapterLearningProcess.fulfilled.type]: (state, action) => {
            let data = action.payload;
            let newChapterList = [...state.chapterInfoList];
            newChapterList.map((chapter, index) => {
                if (chapter.id === data.chapterId) {
                    newChapterList[index].progress = data.process;
                    newChapterList[index].isFinish = data.isFinish;
                }
            });
            state.chapterInfoList = [...newChapterList];
        }
    }
});
