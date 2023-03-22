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

interface TagProps {
    label: string;
    color: 'success' | 'warning' | 'info' | 'error';
}

interface NoteDetailProps {
    id: number;
    title: string;
    time: string;
    tags: string[];
    intro: string;
    content: string;
}

interface KnowledgeNoteProps {
    noteList: NoteDetailProps[];
    currentOpenNote: NoteDetailProps | null;
    nextNoteId: number;
}

const initialKnowledgeNote: KnowledgeNoteProps = {
    noteList: [
        {
            id: 1,
            title: '元认知知识',
            tags: ['元认知', '元认知知识'],
            time: '2021/12/30 18:23:42',
            intro: '元认知知识笔记简介',
            content: ''
        },
        {
            id: 2,
            title: '元认知',
            tags: ['元认知', '自指'],
            time: '2021/12/30 18:23:42',
            intro: '元认知笔记简介',
            content: ''
        }
    ],
    currentOpenNote: null,
    nextNoteId: 3
};

// 打开对应id的note
export const openNoteById = createAsyncThunk('knowledgeNote/openNote', (noteId: number) => {
    return noteId;
});

// 保存笔记
export const saveNoteById = createAsyncThunk('knowledgeNote/saveNote', (noteContent: any) => {
    // console.log(noteContent);
    return noteContent;
});

// 新增笔记
export const addNewNote = createAsyncThunk('knowledgeNote/addNote', (noteTitle: string) => {
    return noteTitle;
});

// 删除笔记
export const deleteNoteById = createAsyncThunk('knowledgeNote/deleteNote', (noteId: number) => {
    return noteId;
});

export const KnowledgeNoteSlice = createSlice({
    name: 'knowledgeNote',
    initialState: initialKnowledgeNote,
    reducers: {},
    extraReducers: {
        [openNoteById.fulfilled.type]: (state, action) => {
            state.currentOpenNote = state.noteList.filter((note) => note.id === action.payload)[0];
        },
        [saveNoteById.fulfilled.type]: (state, action) => {
            let newNoteInfo = action.payload;
            let newNoteList = [...state.noteList];
            // console.log(newNoteInfo);
            state.noteList.map((note, index) => {
                if (note.id === newNoteInfo.id) {
                    newNoteList[index].title = newNoteInfo.title;
                    newNoteList[index].tags = newNoteInfo.tags;
                    newNoteList[index].intro = newNoteInfo.intro;
                    newNoteList[index].content = newNoteInfo.content;
                    newNoteList[index].time = getDate();
                }
            });
            state.noteList = [...newNoteList];
            state.currentOpenNote = state.noteList.filter((note) => note.id === action.payload)[0];
        },
        [addNewNote.fulfilled.type]: (state, action) => {
            let newNoteList = [...state.noteList];
            newNoteList.push({
                id: state.nextNoteId,
                title: action.payload,
                tags: [],
                time: getDate(),
                intro: '',
                content: ''
            });
            state.noteList = [...newNoteList];
            state.nextNoteId += 1;
        },
        [deleteNoteById.fulfilled.type]: (state, action) => {
            let newNoteList = [...state.noteList];
            state.noteList.map((note, index) => {
                if (note.id === action.payload) {
                    newNoteList.splice(index, 1);
                }
            });
            state.noteList = [...newNoteList];
            state.currentOpenNote = null;
        }
    }
});
