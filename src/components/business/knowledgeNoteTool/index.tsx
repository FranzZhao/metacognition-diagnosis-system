import React, { useState } from 'react';
// mui
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// custom components
import ToolCard from '@/components/common/toolCard';
import KnowledgeNoteList from '@/pages/learningTools/knowledgeNote/knowledgeNoteList';
import KnowledgeNoteDetail from '@/pages/learningTools/knowledgeNote/knowledgeNoteDetail';

interface KnowledgeNoteToolProps {
    /** 关闭工具卡片 */
    handleClose: () => void;
}

const KnowledgeNoteTool: React.FC<KnowledgeNoteToolProps> = ({ handleClose }) => {
    const theme = useTheme();
    // 笔记详情：编辑笔记 & 新建笔记
    const [isNoteDetail, setIsNoteDetail] = useState(false);

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
                        <KnowledgeNoteList handleOpenDetail={() => setIsNoteDetail(true)} />
                    )}
                </Box>
            }
            contentSX={{ height: '400px' }}
            cardWidth="500px"
        />
    );
};

export default KnowledgeNoteTool;
