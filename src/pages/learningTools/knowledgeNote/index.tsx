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
import { TextField } from '@mui/material';
// custom component
import KnowledgeNoteList from './knowledgeNoteList';
import KnowledgeNoteDetail from './knowledgeNoteDetail';
import { ViewButton, Modal } from '@/components/common';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { addNewNote, getAction } from '@/store/slices';

const KnowledgeNote = () => {
    const dispatch = useAppDispatch();
    const currentActor = useAppSelector((state) => state.actionLog.actor);
    // 切换视图: 所有笔记 & 重要笔记 & 新建笔记 & 笔记内容
    const [view, setView] = useState('所有笔记');
    // 笔记详情：编辑笔记
    const [isNoteDetail, setIsNoteDetail] = useState(false);
    // 新建笔记modal
    const [openNewNoteModal, setOpenNewNoteModal] = useState(false);
    // 新建笔记标题
    const [newNoteTitle, setNewNoteTitle] = useState('');

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
                    知识笔记
                </Typography>
                <Divider />
                <Box
                    sx={{
                        height: 'calc(100vh - 230px)'
                    }}
                >
                    <ViewButton
                        text="所有笔记"
                        icon={<AllInboxIcon sx={{ mr: '10px' }} />}
                        isClick={view === '所有笔记'}
                        onClick={() => {
                            setView('所有笔记');
                            setIsNoteDetail(false);
                        }}
                    />
                    <ViewButton
                        text="重要笔记"
                        icon={<StarIcon sx={{ mr: '10px' }} />}
                        isClick={view === '重要笔记'}
                        onClick={() => {
                            setView('重要笔记');
                            setIsNoteDetail(false);
                        }}
                    />
                </Box>
                <Button
                    variant="contained"
                    sx={{ width: '100%', m: '10px 0' }}
                    disableElevation
                    startIcon={<AddBoxIcon />}
                    onClick={() => {
                        // setIsNoteDetail(true);
                        setOpenNewNoteModal(true);
                    }}
                >
                    新建笔记
                </Button>
                <Modal
                    maxWidth="sm"
                    open={openNewNoteModal}
                    onClose={() => setOpenNewNoteModal(false)}
                    title={'新建笔记'}
                    content={
                        <Box>
                            <TextField
                                variant="standard"
                                label="新建笔记标题"
                                value={newNoteTitle}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setNewNoteTitle(event.target.value);
                                }}
                                sx={{ width: '100%' }}
                            />
                        </Box>
                    }
                    actions={
                        <Box>
                            <Button
                                size="small"
                                onClick={() => {
                                    setOpenNewNoteModal(false);
                                }}
                            >
                                取消
                            </Button>
                            <Button
                                variant="contained"
                                disableElevation
                                size="small"
                                onClick={() => {
                                    dispatch(
                                        getAction({
                                            actor: currentActor,
                                            verb: '新建笔记',
                                            object: '按钮：新建笔记',
                                            result: '新建笔记：' + newNoteTitle,
                                            time: '',
                                            context: {
                                                cognitiveContext: '认知知识梳理',
                                                otherContext: null,
                                                taskContext: '撰写笔记'
                                            }
                                        })
                                    );
                                    dispatch(addNewNote(newNoteTitle)).then(() => {
                                        setOpenNewNoteModal(false);
                                        setNewNoteTitle('');
                                    });
                                }}
                            >
                                确认
                            </Button>
                        </Box>
                    }
                />
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
                {isNoteDetail ? (
                    <KnowledgeNoteDetail handleOpenNoteList={() => setIsNoteDetail(false)} />
                ) : (
                    <KnowledgeNoteList handleOpenDetail={() => setIsNoteDetail(true)} />
                )}
            </Card>
        </Box>
    );
};

export default KnowledgeNote;
