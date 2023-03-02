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
// custom component
import KnowledgeNoteList from './knowledgeNoteList';
import KnowledgeNoteDetail from './knowledgeNoteDetail';

const notebookViewButtonStyle = {
    display: 'flex',
    width: '100%',
    borderRadius: '5px',
    padding: '5px 10px',
    marginTop: '5px',
    '&:hover': {
        background: '#ebebeb',
        cursor: 'pointer'
    }
};

const notebookViewButtonClickStyle = {
    color: '#ef1d1d',
    fontWeight: 'bold',
    display: 'flex',
    width: '100%',
    borderRadius: '5px',
    padding: '5px 10px',
    marginTop: '5px',
    '&:hover': {
        background: '#ebebeb',
        cursor: 'pointer'
    }
};

const KnowledgeNote = () => {
    // 切换视图: 所有笔记 & 重要笔记 & 新建笔记 & 笔记内容
    const [view, setView] = useState('所有笔记');
    // 笔记详情：编辑笔记 & 新建笔记
    const [isNoteDetail, setIsNoteDetail] = useState(false);

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
                    知识标签列表
                </Typography>
                <Divider />
                <Box
                    sx={{
                        height: 'calc(100vh - 230px)'
                    }}
                >
                    <Box
                        sx={
                            view === '所有笔记'
                                ? notebookViewButtonClickStyle
                                : notebookViewButtonStyle
                        }
                        onClick={() => setView('所有笔记')}
                    >
                        <AllInboxIcon sx={{ mr: '10px' }} />
                        所有笔记
                    </Box>
                    <Box
                        sx={
                            view === '重要笔记'
                                ? notebookViewButtonClickStyle
                                : notebookViewButtonStyle
                        }
                        onClick={() => setView('重要笔记')}
                    >
                        <StarIcon sx={{ mr: '10px' }} />
                        重要笔记
                    </Box>
                </Box>
                <Button
                    variant="contained"
                    sx={{ width: '100%', m: '10px 0' }}
                    disableElevation
                    startIcon={<AddBoxIcon />}
                    onClick={() => setIsNoteDetail(!isNoteDetail)}
                >
                    新建笔记
                </Button>
            </Card>
            {/* 右侧tag标签内容 */}
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
                        width: 5
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#a4b7c670',
                        borderRadius: '4px'
                    }
                }}
            >
                {isNoteDetail ? <KnowledgeNoteDetail /> : <KnowledgeNoteList />}
            </Card>
        </Box>
    );
};

export default KnowledgeNote;
