import React, { useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// custom components
import ToolTree from './toolsTree';
import ManagementTools from './managementTools';

const LearningManagement = () => {
    const [view, setView] = useState('学习目标');

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
                    handleGetCurrentView={(currentView) => setView(currentView)}
                />
            </Card>
            {/* 右侧内容 */}
            <ManagementTools view={view} />
        </Box>
    );
};

export default LearningManagement;
