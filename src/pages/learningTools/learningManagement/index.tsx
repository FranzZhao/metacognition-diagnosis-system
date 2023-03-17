import React, { useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// icon
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
// custom components
import ManagementTools from './managementTools';
import { ViewButton } from '@/components/common';

const LearningManagement = () => {
    const [view, setView] = useState('反思日志');

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
                <Typography margin="10px" fontWeight="bold">
                    学习管理工具集
                </Typography>
                <Divider />
                <ViewButton
                    text="反思日志"
                    icon={<NoteAltIcon sx={{ mr: '10px' }} />}
                    isClick={view === '反思日志'}
                    onClick={() => {
                        setView('反思日志');
                    }}
                />
                <ViewButton
                    text="任务列表"
                    icon={<ListAltIcon sx={{ mr: '10px' }} />}
                    isClick={view === '任务列表'}
                    onClick={() => {
                        setView('任务列表');
                    }}
                />
                <ViewButton
                    text="进度管理"
                    icon={<AccountTreeIcon sx={{ mr: '10px' }} />}
                    isClick={view === '进度管理'}
                    onClick={() => {
                        setView('进度管理');
                    }}
                />
            </Card>
            {/* 右侧内容 */}
            <ManagementTools view={view} />
        </Box>
    );
};

export default LearningManagement;
