import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// type
import { TagListProps } from '@/utils';
// icon
import BookmarkIcon from '@mui/icons-material/Bookmark';
// mock
import { mockTagLists } from '@/utils/mock';

interface KnowledgeTagProps {
    tagList: TagListProps[];
    currentSelectTag: TagListProps | null;
    nextTagId: number; //放到tagList时需转为字符串
}

const initialKnowledgeTag: KnowledgeTagProps = {
    tagList: mockTagLists,
    currentSelectTag: null,
    nextTagId: 12
};

// 选择tag
export const selectTagById = createAsyncThunk('knowledgeTag/selectTag', (tagId: string) => {
    return tagId;
});

// 新增tag
export const addNewTag = createAsyncThunk('knowledgeTag/addNewTag', (tagContent: any) => {
    // 如果是父标签需要将parentId=null
    let newTag = { ...tagContent };
    if (newTag.parentID === 'null') {
        newTag.parentID = null;
    }
    return newTag;
});

// 保存tag内容
export const saveTag = createAsyncThunk('knowledgeTag/saveTag', (tagContent: any) => {
    return tagContent;
});

export const KnowledgeTagSlice = createSlice({
    name: 'knowledgeTag',
    initialState: initialKnowledgeTag,
    reducers: {},
    extraReducers: {
        [selectTagById.fulfilled.type]: (state, action) => {
            state.tagList.map((tag) => {
                if (tag.id === action.payload) {
                    // console.log('select tag =>', tag);
                    state.currentSelectTag = tag;
                }
            });
        },
        [addNewTag.fulfilled.type]: (state, action) => {
            // console.log('new tag =>', action.payload);
            let newTagList: TagListProps[] = [...state.tagList];
            let newTag: TagListProps = {
                id: state.nextTagId + '',
                parentID: action.payload.parentID,
                labelText: action.payload.labelText,
                labelIcon: BookmarkIcon,
                labelInfo: '0',
                content: action.payload.content
            };
            newTagList.push(newTag);
            state.tagList = newTagList;
            state.currentSelectTag = newTag;
            state.nextTagId += 1;
        },
        [saveTag.fulfilled.type]: (state, action) => {
            let tagInfo = action.payload;
            let tagList = [...state.tagList];
            state.tagList.map((tag, index) => {
                if (tag.id === tagInfo.id) {
                    tagList[index].content = tagInfo.content;
                    tagList[index].labelText = tagInfo.labelText;
                    state.currentSelectTag = tagList[index];
                }
            });
            state.tagList = [...tagList];
        }
    }
});
