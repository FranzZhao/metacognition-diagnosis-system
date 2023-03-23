import React, { useEffect, useState, useCallback } from 'react';
// mui5
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// custom components
import ToolTree from './toolsTree';
import ManagementTools from './managementTools';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { metacognitivePrompt } from '@/store/slices';

const LearningManagement = () => {
    const dispatch = useAppDispatch();
    const currentMsgID = useAppSelector((state) => state.agent.currentId);
    const [view, setView] = useState('学习目标');

    useEffect(() => {
        // useMemo(
        //     () => (): void => {
        //         console.log('here2');
        //     },
        //     []
        // );
        // dispatch(
        //     metacognitivePrompt({
        //         promptType: '认知计划-学习目标设定',
        //         currentMsgID: currentMsgID
        //     })
        // );
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            {/* 左侧选项栏 */}
            <Card
                sx={{
                    boxShadow:
                        'rgb(50 50 93 / 2%) 0px 2px 5px -1px, rgb(0 0 0 / 5%) 0px 1px 3px -1px',
                    p: 1,
                    height: 'calc(100vh - 110px)',
                    minWidth: '250px'
                }}
            >
                <ToolTree
                    currentView={view}
                    handleGetCurrentView={(currentView) => {
                        setView(currentView);
                        console.log('here');
                    }}
                />
            </Card>
            {/* 右侧内容 */}
            <ManagementTools view={view} />
        </Box>
    );
};

export default LearningManagement;
