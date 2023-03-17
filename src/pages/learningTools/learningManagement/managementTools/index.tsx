import React from 'react';
// mui5
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// custom components
import Diary from './diary';
import TodoList from './todoList';
import LearningObject from './learningObject';

const ManagementTools = ({ view }) => {
    return (
        <Card
            sx={{
                boxShadow: 'rgb(50 50 93 / 2%) 0px 2px 5px -1px, rgb(0 0 0 / 5%) 0px 1px 3px -1px',
                p: '15px 20px',
                ml: 2,
                width: 'calc(100vw)',
                height: 'calc(100vh - 110px)',
                overflow: 'overlay',
                '&::-webkit-scrollbar': {
                    width: 5
                },
                '&::-webkit-scrollbar-thumb': {
                    background: '#a4b7c670',
                    borderRadius: '4px'
                }
            }}
        >
            {view === '学习目标' && <LearningObject />}
            {view === '反思日志' && <Diary />}
            {view === '任务列表' && <TodoList />}
        </Card>
    );
};

export default ManagementTools;
