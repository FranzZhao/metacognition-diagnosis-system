import React, { useState } from 'react';
// mui5
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert, { AlertColor } from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// redux
// agent help
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import { useAppDispatch, useAppSelector } from '@/store';
import { metacognitivePrompt } from '@/store/slices';

const ItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    '&:hover': { background: '#ebebeb', cursor: 'pointer', borderRadius: '5px' }
};

const ChapterList = ({ handleOpenChapterDetail, handleOpenSession }) => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const currentMsgID = useAppSelector((state) => state.agent.currentId);
    const ChapterInfoList = useAppSelector((state) => state.knowledgeLearning.chapterInfoList);
    let currentChapter = '';

    return (
        <Box>
            {ChapterInfoList.map((item) => {
                if (currentChapter === '' || currentChapter !== item.chapter) {
                    currentChapter = item.chapter;
                    return (
                        <Box key={item.id}>
                            <Alert
                                icon={false}
                                variant="filled"
                                severity={item.alertType}
                                sx={{ mt: 1, fontSize: '1.1rem' }}
                            >
                                {item.chapter}
                                <Tooltip title="认知目标回顾与更新" arrow>
                                    <IconButton
                                        size="small"
                                        sx={{ ml: 1 }}
                                        onClick={() => {
                                            dispatch(
                                                metacognitivePrompt({
                                                    promptType: '认知计划-认知目标更新',
                                                    currentMsgID: currentMsgID
                                                })
                                            );
                                        }}
                                    >
                                        <HelpIcon sx={{ color: 'white' }} />
                                    </IconButton>
                                </Tooltip>
                            </Alert>
                            <Box
                                sx={{ ...ItemStyle }}
                                onClick={() => {
                                    handleOpenChapterDetail();
                                    handleOpenSession(item);
                                }}
                            >
                                {item.isFinish ? (
                                    <CheckCircleIcon
                                        sx={{ fontSize: '32px', mr: 1, color: item.color }}
                                    />
                                ) : (
                                    <RadioButtonUncheckedIcon sx={{ fontSize: '32px', mr: 1 }} />
                                )}
                                <Typography>{item.title}</Typography>
                                <Typography marginLeft="auto">
                                    完成进度：{item.progress}%
                                </Typography>
                            </Box>
                        </Box>
                    );
                } else {
                    return (
                        <Box
                            key={item.id}
                            sx={{ ...ItemStyle }}
                            onClick={() => {
                                handleOpenChapterDetail();
                                handleOpenSession(item);
                            }}
                        >
                            {item.isFinish ? (
                                <CheckCircleIcon
                                    sx={{ fontSize: '32px', mr: 1, color: item.color }}
                                />
                            ) : (
                                <RadioButtonUncheckedIcon sx={{ fontSize: '32px', mr: 1 }} />
                            )}
                            <Typography>{item.title}</Typography>
                            <Typography marginLeft="auto">完成进度：{item.progress}%</Typography>
                        </Box>
                    );
                }
            })}
        </Box>
    );
};

export default ChapterList;
