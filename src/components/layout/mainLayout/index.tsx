import * as React from 'react';
// mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, Typography } from '@mui/material';
// router
import { Outlet } from 'react-router-dom';
// custom layouts
import Drawer from './drawer';
import TopToolBar from './topToolBar';
import BottomToolBar from './bottomToolBar';
import LearningPortfolioTool from '@/components/business/learningPortfolioTool';
import LearningManagementTool from '@/components/business/learningManagementTool';
import KnowledgeMapTool from '@/components/business/knowledgeMapTool';
import KnowledgeTagTool from '@/components/business/knowledgeTagTool';
import KnowledgeNoteTool from '@/components/business/knowledgeNoteTool';
import AgentCard from '@/components/business/agent';

const MainLayout = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [openTools, setOpenTools] = React.useState({
        learningPortfolioTool: false,
        learningManagementTool: false,
        knowledgeMapTool: false,
        knowledgeTagTool: false,
        knowledgeNoteTool: false
    });

    /** 打开左侧导航栏 */
    const handleChangeDrawerOpenState = (currentState: boolean) => {
        setOpen(!currentState);
    };

    /** 关闭所有工具小卡片: 清空 */
    const handleCloseAllToolCard = () => {
        setOpenTools({
            learningPortfolioTool: false,
            learningManagementTool: false,
            knowledgeMapTool: false,
            knowledgeTagTool: false,
            knowledgeNoteTool: false
        });
    };

    /** 打开工具小卡片 */
    const handleOpenToolCard = (
        target:
            | 'learningPortfolioTool'
            | 'learningManagementTool'
            | 'knowledgeMapTool'
            | 'knowledgeTagTool'
            | 'knowledgeNoteTool'
    ) => {
        const targetCurrentState = openTools[target];
        const defaultState = {
            learningPortfolioTool: false,
            learningManagementTool: false,
            knowledgeMapTool: false,
            knowledgeTagTool: false,
            knowledgeNoteTool: false
        };
        setOpenTools({
            ...defaultState,
            [target]: !targetCurrentState
        });
    };

    const ToolCardBoxStyle = (
        target:
            | 'learningPortfolioTool'
            | 'learningManagementTool'
            | 'knowledgeMapTool'
            | 'knowledgeTagTool'
            | 'knowledgeNoteTool'
    ) => {
        return {
            position: 'fixed',
            bottom: '50px',
            right: openTools[target] ? '10px' : '-400px',
            transition: 'right 200ms linear'
        };
    };

    const [openMsg, setOpenMsg] = React.useState(false);

    return (
        <Box sx={{ display: 'flex', bgcolor: '#f2f5f9' }}>
            <CssBaseline />
            {/* 左侧导航栏 */}
            <Drawer open={open} handleChangeDrawerOpenState={handleChangeDrawerOpenState} />
            {/* 页面右侧：工具栏+核心内容 */}
            {/* 页面顶部工具栏 */}
            <TopToolBar />
            {/* 右侧主体内容：各页面的内容 */}
            <Box
                component="main"
                sx={{
                    p: '10px 20px 50px',
                    mt: '50px',
                    height: 'calc(100vh - 50px)',
                    overflow: 'hidden',
                    overflowY: 'overlay',
                    '&::-webkit-scrollbar': {
                        width: '4px',
                        height: '6px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: theme.palette.secondary.main,
                        borderRadius: '4px'
                    }
                }}
            >
                <AgentCard />

                <Outlet />
            </Box>
            {/* 底部工具栏 */}
            <BottomToolBar handleOpenToolCared={handleOpenToolCard} />
            {/* 工具窗口 */}
            <Box>
                <Box sx={{ ...ToolCardBoxStyle('learningPortfolioTool') }}>
                    <LearningPortfolioTool handleClose={handleCloseAllToolCard} />
                </Box>
                <Box sx={{ ...ToolCardBoxStyle('learningManagementTool') }}>
                    <LearningManagementTool handleClose={handleCloseAllToolCard} />
                </Box>
                <Box sx={{ ...ToolCardBoxStyle('knowledgeMapTool') }}>
                    <KnowledgeMapTool handleClose={handleCloseAllToolCard} />
                </Box>
                <Box sx={{ ...ToolCardBoxStyle('knowledgeTagTool') }}>
                    <KnowledgeTagTool handleClose={handleCloseAllToolCard} />
                </Box>
                <Box sx={{ ...ToolCardBoxStyle('knowledgeNoteTool') }}>
                    <KnowledgeNoteTool handleClose={handleCloseAllToolCard} />
                </Box>
            </Box>
        </Box>
    );
};

export default MainLayout;
