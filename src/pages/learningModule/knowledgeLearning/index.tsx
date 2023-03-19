import React, { useState } from 'react';
// mui5
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
// img
import learningBG from '@/assets/img/learning-bg.jpg';
// custom components
import ChapterList from './chapterList';
import ChapterDetail from './chapterDetail';

const KnowledgeLearning = () => {
    const [isChapterDetail, setIsChapterDetail] = useState(false);

    return (
        <Box
            sx={{
                '& *': {
                    padding: '5px 0'
                }
            }}
        >
            <Box>
                <img
                    alt=""
                    src={learningBG}
                    style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                />
                <Box sx={{ margin: '-70px 15px 0 15px', display: 'flex' }}>
                    <Typography
                        variant="h5"
                        color="white"
                        fontWeight="bold"
                        style={{ userSelect: 'none' }}
                    >
                        复杂科学与学习理论
                    </Typography>
                    {isChapterDetail && (
                        <Box sx={{ ml: 'auto' }}>
                            <Button
                                variant="contained"
                                size="small"
                                disableElevation
                                onClick={() => setIsChapterDetail(false)}
                            >
                                返回列表
                            </Button>
                        </Box>
                    )}
                </Box>
            </Box>
            {isChapterDetail ? (
                // 知识章节详细内容
                <ChapterDetail />
            ) : (
                // 知识章节列表
                <ChapterList handleOpenChapterDetail={() => setIsChapterDetail(true)} />
            )}
        </Box>
    );
};

export default KnowledgeLearning;
