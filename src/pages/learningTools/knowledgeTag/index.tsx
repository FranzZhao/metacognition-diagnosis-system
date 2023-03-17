import React, { useState } from 'react';
// mui5
import { Box, Card } from '@mui/material';
import Button from '@mui/material/Button';
// custom components
import KnowledgeTagTree from './knowledgeTagTree';
import KnowledgeTagContent from './knowledgeTagContent';
// mock data
import { mockTagLists } from '@/utils/mock/mockTagTree';

const KnowledgeTag = () => {
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
                <KnowledgeTagTree tagList={mockTagLists} />
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
                <KnowledgeTagContent />
            </Card>
        </Box>
    );
};

export default KnowledgeTag;
