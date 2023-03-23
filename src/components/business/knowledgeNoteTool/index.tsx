import React, { useState } from 'react';
// mui
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { TextField } from '@mui/material';
// custom components
import ToolCard from '@/components/common/toolCard';
import KnowledgeNoteList from '@/pages/learningTools/knowledgeNote/knowledgeNoteList';
import KnowledgeNoteDetail from '@/pages/learningTools/knowledgeNote/knowledgeNoteDetail';
import { Modal } from '@/components/common';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { addNewNote, getAction } from '@/store/slices';

interface KnowledgeNoteToolProps {
    /** 关闭工具卡片 */
    handleClose: () => void;
}

const KnowledgeNoteTool: React.FC<KnowledgeNoteToolProps> = ({ handleClose }) => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const currentActor = useAppSelector((state) => state.actionLog.actor);
    // 笔记详情：编辑笔记
    const [isNoteDetail, setIsNoteDetail] = useState(false);
    // 新建笔记modal
    const [openNewNoteModal, setOpenNewNoteModal] = useState(false);
    // 新建笔记标题
    const [newNoteTitle, setNewNoteTitle] = useState('');
    
    return (
        <ToolCard
            title={
                <Typography fontSize={'14px'} color={'white'}>
                    知识笔记小工具
                </Typography>
            }
            icon={
                <Avatar
                    sx={{
                        bgcolor: theme.palette.error.light,
                        width: '20px',
                        height: '20px'
                    }}
                >
                    <NoteAltIcon sx={{ fontSize: '12px' }} />
                </Avatar>
            }
            action={handleClose}
            content={
                <Box>
                    {isNoteDetail ? (
                        <KnowledgeNoteDetail handleOpenNoteList={() => setIsNoteDetail(false)} />
                    ) : (
                        <Box>
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
                            <KnowledgeNoteList handleOpenDetail={() => setIsNoteDetail(true)} />
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
                                            onChange={(
                                                event: React.ChangeEvent<HTMLInputElement>
                                            ) => {
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
                        </Box>
                    )}
                </Box>
            }
            contentSX={{ height: '380px' }}
            cardWidth="600px"
        />
    );
};

export default KnowledgeNoteTool;
