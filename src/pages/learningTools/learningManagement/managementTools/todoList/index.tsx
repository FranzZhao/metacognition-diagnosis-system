import React, { useEffect, useState } from 'react';
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
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { updateTodoList, TodoListSlice } from '@/store/slices';
// agent help
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import { metacognitivePrompt, getAction } from '@/store/slices';

interface todoItemProps {
    id: string;
    content: string;
    isFinish: boolean;
}

const TodoList = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const currentActor = useAppSelector((state) => state.actionLog.actor);
    const currentMsgID = useAppSelector((state) => state.agent.currentId);
    const currentTodoList = useAppSelector((state) => state.todoList.todoList);
    const nextTodoListId = useAppSelector((state) => state.todoList.nextTodoListId);
    // 任务列表
    const [todoList, setTodoList] = useState<any[]>([]);
    // 新增任务
    const [newTodoItem, setNewTodoItem] = useState('');

    useEffect(() => {
        let newList: any[] = [];
        currentTodoList.map((item) => {
            newList.push({
                id: item.id,
                content: item.content,
                isFinish: item.isFinish
            });
        });
        setTodoList([...newList]);
    }, [currentTodoList]);

    // 新增任务button
    const handleAddNewTodoItem = () => {
        // TODO: 新输入的内容为空时, 用SnackBar提示不能为空, 要把SnackBar做成一个函数, 不需要引入组件, 直接使用函数就能调用
        if (newTodoItem.length !== 0) {
            let newTodoList: any[] = [...todoList];
            newTodoList.push({
                id: nextTodoListId,
                content: newTodoItem,
                isFinish: false
            });
            setTodoList([...newTodoList]);
            setNewTodoItem('');
            dispatch(updateTodoList(newTodoList));
            // next id 递增
            dispatch(TodoListSlice.actions.increaseNextId());
        }
    };

    // 点击todo item修改其状态
    const handleToggle = (value) => () => {
        let newTodoList = [...todoList];
        newTodoList.map((item, index) => {
            if (item.id === value.id) {
                newTodoList[index].isFinish = !value.isFinish;
                dispatch(
                    getAction({
                        actor: currentActor,
                        verb: '修改状态',
                        object: '修改待办事项完成情况',
                        result:
                            '待办事项 id:' +
                            value.id +
                            (!value.isFinish ? ', 设置为未完成' : ', 设置为完成'),
                        time: '',
                        context: {
                            cognitiveContext: '认知计划',
                            otherContext: '待办事项：' + value.content,
                            taskContext: '认知计划'
                        }
                    })
                );
            }
        });
        setTodoList([...newTodoList]);
        dispatch(updateTodoList(newTodoList));
    };

    // 删除任务
    const handleDeleteItem = (value) => {
        let newTodoList = [...todoList];
        newTodoList.map((item, index) => {
            if (item.id === value.id) {
                newTodoList.splice(index, 1);
                dispatch(
                    getAction({
                        actor: currentActor,
                        verb: '点击按钮',
                        object: '按钮：删除待办事项',
                        result: '删除待办事项 id:' + value.id,
                        time: '',
                        context: {
                            cognitiveContext: '认知计划',
                            otherContext: '待办事项：' + value.content,
                            taskContext: '认知计划'
                        }
                    })
                );
            }
        });
        setTodoList([...newTodoList]);
        dispatch(updateTodoList(newTodoList));
    };

    // 修改任务
    const handleUpdateItem = (value) => {
        let newTodoList = [...todoList];
        newTodoList.map((item, index) => {
            if (item.id === value.id) {
                newTodoList[index].content = value.content;
                dispatch(
                    getAction({
                        actor: currentActor,
                        verb: '输入文本',
                        object: '待办事项内容输入框',
                        result: '修改待办事项 id:' + value.id,
                        time: '',
                        context: {
                            cognitiveContext: '认知计划',
                            otherContext: '待办事项：' + value.content,
                            taskContext: '认知计划'
                        }
                    })
                );
            }
        });
        setTodoList([...newTodoList]);
        dispatch(updateTodoList(newTodoList));
    };

    return (
        <Box>
            <Box sx={{ display: 'flex' }}>
                <Typography fontWeight="bold" fontSize="1.2rem">
                    任务计划列表
                </Typography>
                <Tooltip title="认知计划-认知目标更新" arrow>
                    <IconButton
                        size="small"
                        sx={{ ml: 'auto' }}
                        onClick={() => {
                            dispatch(
                                metacognitivePrompt({
                                    promptType: '认知计划-认知目标更新',
                                    currentMsgID: currentMsgID
                                })
                            );
                            dispatch(
                                getAction({
                                    actor: currentActor,
                                    verb: '弹出提示框',
                                    object: '元认识提示 id: ' + currentMsgID,
                                    result: '弹出元认知提示：认知计划-认知目标更新',
                                    time: '',
                                    context: {
                                        cognitiveContext: '认知计划',
                                        otherContext: null,
                                        taskContext: '认知计划-认知目标更新'
                                    }
                                })
                            );
                        }}
                    >
                        <HelpIcon fontSize="inherit" />
                    </IconButton>
                </Tooltip>
            </Box>
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
                    onClick={() => {
                        handleAddNewTodoItem();
                        dispatch(
                            getAction({
                                actor: currentActor,
                                verb: '输入文本',
                                object: '新建待办事项文本框',
                                result: '新建代办事项:' + newTodoItem,
                                time: '',
                                context: {
                                    cognitiveContext: '认知计划',
                                    otherContext: null,
                                    taskContext: null
                                }
                            })
                        );
                    }}
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
