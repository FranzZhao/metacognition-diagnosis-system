import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { mockDiaryList } from '@/utils/mock';

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

interface DiaryDetailProps {
    id: number;
    title: string;
    tags: string[];
    time: string;
    content: string;
}

interface DiaryProps {
    diaryList: DiaryDetailProps[];
    currentSelectDiary: DiaryDetailProps | null;
    nextDiaryId: number;
}

const initialDiaryState: DiaryProps = {
    // diaryList: mockDiaryList,
    diaryList: [],
    currentSelectDiary: null,
    nextDiaryId: 1
};

// 查看diary by id
export const getDiaryById = createAsyncThunk('diary/getDiary', (id: any) => {
    return id;
});

// 保存diary
export const saveDiary = createAsyncThunk('diary/saveDiary', (diaryInfo: any) => {
    return diaryInfo;
});

// 新建diary
export const newDiary = createAsyncThunk('diary/newDiary', (diaryTitle: string) => {
    return diaryTitle;
});

// 删除diary
export const deleteDiaryById = createAsyncThunk('diary/deleteDiary', (id: any) => {
    return id;
});

export const DiarySlice = createSlice({
    name: 'diary',
    initialState: initialDiaryState,
    reducers: {},
    extraReducers: {
        [getDiaryById.fulfilled.type]: (state, action) => {
            state.currentSelectDiary = state.diaryList.filter(
                (diary) => diary.id === action.payload
            )[0];
        },
        [saveDiary.fulfilled.type]: (state, action) => {
            let newDiaryInfo = action.payload;
            let newDiaryList: DiaryDetailProps[] = [];
            state.diaryList.map((diary) => {
                newDiaryList.push({
                    id: diary.id,
                    title: diary.id === newDiaryInfo.id ? newDiaryInfo.title : diary.title,
                    tags: diary.id === newDiaryInfo.id ? newDiaryInfo.tags : diary.tags,
                    time: getDate(),
                    content: diary.id === newDiaryInfo.id ? newDiaryInfo.content : diary.content
                });
            });
            state.diaryList = newDiaryList;
        },
        [newDiary.fulfilled.type]: (state, action) => {
            let newDiaryList = [...state.diaryList];
            newDiaryList.push({
                id: state.nextDiaryId,
                title: action.payload,
                tags: [],
                time: getDate(),
                content: ''
            });
            state.diaryList = [...newDiaryList];
            state.nextDiaryId += 1;
        },
        [deleteDiaryById.fulfilled.type]: (state, action) => {
            let newDiaryList: DiaryDetailProps[] = [];
            state.diaryList.map((diary) => {
                if (diary.id !== action.payload) {
                    newDiaryList.push(diary);
                }
            });
            state.diaryList = [...newDiaryList];
        }
    }
});
