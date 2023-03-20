import React, { useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// icon
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
// custom components
import { ViewButton } from '@/components/common';

const ToolTree = ({ currentView, handleGetCurrentView }) => {
    const [view, setView] = useState(currentView);

    return (
        <Box>
            <Typography margin="10px" fontWeight="bold">
                学习管理工具集
            </Typography>
            <Divider />
            <ViewButton
                text="学习目标"
                icon={<CrisisAlertIcon sx={{ mr: '10px' }} />}
                isClick={view === '学习目标'}
                onClick={() => {
                    setView('学习目标');
                    handleGetCurrentView('学习目标');
                }}
            />
            <ViewButton
                text="反思日志"
                icon={<NoteAltIcon sx={{ mr: '10px' }} />}
                isClick={view === '反思日志'}
                onClick={() => {
                    setView('反思日志');
                    handleGetCurrentView('反思日志');
                }}
            />
            <ViewButton
                text="任务列表"
                icon={<ListAltIcon sx={{ mr: '10px' }} />}
                isClick={view === '任务列表'}
                onClick={() => {
                    setView('任务列表');
                    handleGetCurrentView('任务列表');
                }}
            />
        </Box>
    );
};

export default ToolTree;
