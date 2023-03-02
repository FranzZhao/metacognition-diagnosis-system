import React from 'react';
// mui5
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// custom component
import CustomTable from '@/components/common/table';

const KnowledgeNoteList = () => {
    return (
        <Box>
            <Typography fontWeight="bold" fontSize="1.2rem" marginBottom="10px">
                所有笔记列表
            </Typography>

            <CustomTable
                columns={[
                    { id: 'id', label: '#', minWidth: 50 },
                    { id: 'title', label: '标题', minWidth: 200 },
                    { id: 'tags', label: '标签', minWidth: 200 },
                    { id: 'time', label: '更新时间', minWidth: 150 }
                ]}
                rows={[
                    {
                        id: '1',
                        title: '元认知知识',
                        tags: '元认知, 元认知知识',
                        time: '2021/12/30 18:23:42'
                    },
                    {
                        id: '2',
                        title: '元认知',
                        tags: '元认知',
                        time: '2021/12/30 18:23:42'
                    },
                    {
                        id: '3',
                        title: '元认知调控',
                        tags: '元认知, 元认知调控',
                        time: '2021/12/30 18:23:42'
                    }
                ]}
            />
        </Box>
    );
};

export default KnowledgeNoteList;
