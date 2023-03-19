import React from 'react';
// mui5
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert, { AlertColor } from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    '&:hover': { background: '#ebebeb', cursor: 'pointer', borderRadius: '5px' }
};

const ChapterList = ({ handleOpenChapterDetail }) => {
    const theme = useTheme();
    let currentChapter = '';
    interface ChapterInfoListProps {
        id: string;
        chapter: string;
        title: string;
        progress: string;
        isFinish: boolean;
        color: string;
        alertType: AlertColor | undefined;
    }
    const ChapterInfoList: ChapterInfoListProps[] = [
        {
            id: '1',
            chapter: '第一章 复杂性理论',
            title: '第一节 从还原论到系统论',
            progress: '0',
            isFinish: true,
            color: theme.palette.primary.main,
            alertType: 'info'
        },
        {
            id: '2',
            chapter: '第一章 复杂性理论',
            title: '第二节 复杂自适应系统',
            progress: '0',
            isFinish: false,
            color: theme.palette.primary.main,
            alertType: 'info'
        },
        {
            id: '3',
            chapter: '第一章 复杂性理论',
            title: '第三节 自组织与涌现',
            progress: '0',
            isFinish: false,
            color: theme.palette.primary.main,
            alertType: 'info'
        },
        {
            id: '4',
            chapter: '第二章 认知动力主义',
            title: '第一节 认知科学的发展与局限',
            progress: '0',
            isFinish: false,
            color: theme.palette.success.main,
            alertType: 'success'
        },
        {
            id: '5',
            chapter: '第二章 认知动力主义',
            title: '第二节 认知动力主义的行程',
            progress: '0',
            isFinish: true,
            color: theme.palette.success.main,
            alertType: 'success'
        },
        {
            id: '6',
            chapter: '第二章 认知动力主义',
            title: '第三节 认知动力主义的认知取向',
            progress: '0',
            isFinish: false,
            color: theme.palette.success.main,
            alertType: 'success'
        },
        {
            id: '7',
            chapter: '第三章 情境认知理论',
            title: '第一节 情境认知理论的提出与内涵',
            progress: '0',
            isFinish: false,
            color: theme.palette.error.main,
            alertType: 'error'
        },
        {
            id: '8',
            chapter: '第三章 情境认知理论',
            title: '第二节 情境认知的过程',
            progress: '0',
            isFinish: true,
            color: theme.palette.error.main,
            alertType: 'error'
        },
        {
            id: '9',
            chapter: '第三章 情境认知理论',
            title: '第三节 情境认知的教学含义',
            progress: '0',
            isFinish: false,
            color: theme.palette.error.main,
            alertType: 'error'
        }
    ];

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
                            </Alert>
                            <Box sx={{ ...ItemStyle }} onClick={handleOpenChapterDetail}>
                                <CheckCircleIcon
                                    sx={{
                                        fontSize: '32px',
                                        mr: 1,
                                        color: item.color
                                    }}
                                />
                                <Typography>{item.title}</Typography>
                                <Typography marginLeft="auto">
                                    完成进度：{item.progress}%
                                </Typography>
                            </Box>
                        </Box>
                    );
                } else {
                    return (
                        <Box key={item.id} sx={{ ...ItemStyle }} onClick={handleOpenChapterDetail}>
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
