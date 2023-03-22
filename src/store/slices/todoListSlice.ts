import { mockTodoList } from '@/utils/mock';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface todoItemProps {
    id: string;
    content: string;
    isFinish: boolean;
}

interface TodoListProps {
    todoList: todoItemProps[];
    nextTodoListId: number;
}

const initialTodoList: TodoListProps = {
    todoList: mockTodoList,
    nextTodoListId: 8
};

// 修改任务列表
export const updateTodoList = createAsyncThunk('todoList/update', (newTodoList: any[]) => {
    return newTodoList;
});

export const TodoListSlice = createSlice({
    name: 'todoList',
    initialState: initialTodoList,
    reducers: {
        increaseNextId: (state) => {
            state.nextTodoListId += 1;
        }
    },
    extraReducers: {
        [updateTodoList.fulfilled.type]: (state, action) => {
            state.todoList = [...action.payload];
        }
    }
});
