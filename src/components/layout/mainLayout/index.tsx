import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// router
import { Outlet } from 'react-router-dom';
// custom components
import Drawer from './drawer';
import TopToolBar from './topToolBar';
import BottomToolBar from './bottomToolBar';

const MainLayout = () => {
    const [open, setOpen] = React.useState(true);

    const handleChangeDrawerOpenState = (currentState: boolean) => {
        setOpen(!currentState);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* 左侧导航栏 */}
            <Drawer open={open} handleChangeDrawerOpenState={handleChangeDrawerOpenState} />
            {/* 页面右侧：工具栏+核心内容 */}
            <Box sx={{ flexGrow: 1 }}>
                {/* 页面顶部工具栏 */}
                <TopToolBar />
                {/* 右侧主体内容：各页面的内容 */}
                <Box component="main">
                    <Outlet />
                </Box>
            </Box>
            {/* TODO-今晚完成: 工具窗口 */}
            <Box>知识地图工具小窗口</Box>
            {/* 底部工具栏 */}
            <BottomToolBar />
        </Box>
    );
};

export default MainLayout;
