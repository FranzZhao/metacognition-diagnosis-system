import React from 'react';
// mui5
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// custom component
import CustomTable from '@/components/common/table';
// mock
import { mockNoteList } from '@/utils/mock';

interface KnowledgeNoteListProps {
    handleOpenDetail: () => void;
}

const KnowledgeNoteList: React.FC<KnowledgeNoteListProps> = ({ handleOpenDetail }) => {
    return (
        <Box>
            <Typography fontWeight="bold" fontSize="1.2rem" marginBottom="15px">
                所有笔记列表
            </Typography>

            <CustomTable
                columns={[
                    { id: 'id', label: '#', minWidth: 50 },
                    { id: 'title', label: '标题', minWidth: 200 },
                    { id: 'tags', label: '标签', minWidth: 200 },
                    { id: 'time', label: '更新时间', minWidth: 150 }
                ]}
                rows={mockNoteList}
                hasActions={
                    <Button size="small" variant="outlined" onClick={handleOpenDetail}>
                        详情
                    </Button>
                }
                renderTags={'tags'}
                sx={{
                    height: 'calc(100vh - 234px)',
                    overflow: 'overlay',
                    '&::-webkit-scrollbar': {
                        width: 5
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#a4b7c670',
                        borderRadius: '4px'
                    }
                }}
            />
        </Box>
    );
};

export default KnowledgeNoteList;
