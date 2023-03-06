import React, { useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import StarIcon from '@mui/icons-material/Star';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import ShareIcon from '@mui/icons-material/Share';
// custom components
import { ViewButton } from '@/components/common';
import KnowledgeMapList from './knowledgeMapList';
import KnowledgeMapDetail from './knowledgeMapDetail';

const KnowledgeMap = () => {
    // 切换视图: 所有知识地图 & 重要知识地图 & 所有知识节点 & 所有知识关联
    const [view, setView] = useState('所有知识地图');
    // 知识地图详情：编辑知识地图 & 新建知识地图
    const [isKnowledgeMapDetail, setIsKnowledgeMapDetail] = useState(false);

    return (
        <Box sx={{ display: 'flex' }}>
            {/* 左侧tag标签数 */}
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
                    知识地图
                </Typography>
                <Divider />
                <Box
                    sx={{
                        height: 'calc(100vh - 230px)',
                        '& div': { mb: 1 }
                    }}
                >
                    <ViewButton
                        text="所有知识地图"
                        icon={<AllInboxIcon sx={{ mr: '10px' }} />}
                        isClick={view === '所有知识地图'}
                        onClick={() => setView('所有知识地图')}
                    />
                    <ViewButton
                        text="重要知识地图"
                        icon={<StarIcon sx={{ mr: '10px' }} />}
                        isClick={view === '重要知识地图'}
                        onClick={() => setView('重要知识地图')}
                    />
                    <ViewButton
                        text="所有知识节点"
                        icon={<ScatterPlotIcon sx={{ mr: '10px' }} />}
                        isClick={view === '所有知识节点'}
                        onClick={() => setView('所有知识节点')}
                    />
                    <ViewButton
                        text="所有知识关联"
                        icon={<ShareIcon sx={{ mr: '10px' }} />}
                        isClick={view === '所有知识关联'}
                        onClick={() => setView('所有知识关联')}
                    />
                </Box>
                <Button
                    variant="contained"
                    sx={{ width: '100%', m: '10px 0' }}
                    disableElevation
                    startIcon={<AddBoxIcon />}
                    onClick={() => setIsKnowledgeMapDetail(!isKnowledgeMapDetail)}
                >
                    新建笔记
                </Button>
                <ViewButton
                    text="所有知识节点"
                    icon={<AllInboxIcon sx={{ mr: '10px' }} />}
                    isClick={view === '所有知识节点'}
                    onClick={() => setView('所有知识节点')}
                />
            </Card>
            <Card
                sx={{
                    boxShadow:
                        'rgb(50 50 93 / 2%) 0px 2px 5px -1px, rgb(0 0 0 / 5%) 0px 1px 3px -1px',
                    p: '15px 20px',
                    ml: 2,
                    width: 'calc(100vw)',
                    height: 'calc(100vh - 110px)',
                    overflow: 'overlay',
                    '&::-webkit-scrollbar': {
                        width: 5,
                        height: 5
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#a4b7c670',
                        borderRadius: '4px'
                    }
                }}
            >
                {isKnowledgeMapDetail ? (
                    <KnowledgeMapDetail handleOpenList={() => setIsKnowledgeMapDetail(false)} />
                ) : (
                    <KnowledgeMapList handleOpenDetail={() => setIsKnowledgeMapDetail(true)} />
                )}
            </Card>
        </Box>
    );
};

export default KnowledgeMap;
