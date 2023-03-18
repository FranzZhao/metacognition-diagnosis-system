import React, { useState } from 'react';
// mui5
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
// custom components
import TodoListItems from './todoListItem';
// mock data
import { mockTodoList } from '@/utils/mock';

const TodoList = () => {
    const theme = useTheme();
    // 任务列表
    const [todoList, setTodoList] = useState(mockTodoList);
    // 新增任务
    const [newTodoItem, setNewTodoItem] = useState('');

    // 新增任务button
    const handleAddNewTodoItem = () => {
        // TODO: 新输入的内容为空时, 用SnackBar提示不能为空, 要把SnackBar做成一个函数, 不需要引入组件, 直接使用函数就能调用
        if (newTodoItem.length !== 0) {
            let newTodoList = [...todoList];
            newTodoList.push({
                id: newTodoItem,
                content: newTodoItem,
                isFinish: false
            });
            setTodoList([...newTodoList]);
            setNewTodoItem('');
        }
    };

    // 点击todo item修改其状态
    const handleToggle = (value) => () => {
        let newTodoList = [...todoList];
        newTodoList.map((item, index) => {
            if (item.id === value.id) {
                newTodoList[index].isFinish = !value.isFinish;
            }
        });
        setTodoList([...newTodoList]);
    };

    // 删除任务
    const handleDeleteItem = (value) => {
        let newTodoList = [...todoList];
        newTodoList.map((item, index) => {
            if (item.id === value.id) {
                newTodoList.splice(index, 1);
            }
        });
        setTodoList([...newTodoList]);
    };

    // 修改任务
    const handleUpdateItem = (value) => {
        let newTodoList = [...todoList];
        newTodoList.map((item, index) => {
            if (item.id === value.id) {
                newTodoList[index].content = value.content;
            }
        });
        setTodoList([...newTodoList]);
    };

    return (
        <Box>
            <Typography fontWeight="bold" fontSize="1.1rem">
                任务计划列表
            </Typography>
            {/* 新建事项 */}
            <Paper
                variant="outlined"
                sx={{
                    m: '10px 0',
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%'
                }}
            >
                <AddBoxIcon color="primary" sx={{ m: '0 5px 0 10px' }} />
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="输入新增任务计划的基本内容"
                    value={newTodoItem}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setNewTodoItem(event.target.value)
                    }
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Button
                    variant="contained"
                    size="small"
                    disableElevation
                    onClick={handleAddNewTodoItem}
                >
                    新增任务事项
                </Button>
            </Paper>
            {/* 待办事项 */}
            <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
                <Typography fontWeight="bold" color={theme.palette.primary.main}>
                    待完成事项
                </Typography>
                <TodoListItems
                    todoList={todoList.filter((item) => !item.isFinish)}
                    handleToggle={handleToggle}
                    handleDeleteItem={handleDeleteItem}
                    handleUpdateItem={handleUpdateItem}
                />
            </Paper>
            {/* 已完成事项 */}
            <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
                <Typography fontWeight="bold" color={theme.palette.success.main}>
                    已完成事项
                </Typography>
                <TodoListItems
                    todoList={todoList.filter((item) => item.isFinish)}
                    handleToggle={handleToggle}
                    handleDeleteItem={handleDeleteItem}
                    handleUpdateItem={handleUpdateItem}
                />
            </Paper>
        </Box>
    );
};

export default TodoList;
