import React from 'react';
// mui
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
// custom components
import ToolCard from '@/components/common/toolCard';

interface KnowledgeNoteToolProps {
    /** 关闭工具卡片 */
    handleClose: () => void;
}

const KnowledgeNoteTool: React.FC<KnowledgeNoteToolProps> = ({ handleClose }) => {
    const theme = useTheme();

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
                <Typography>
                    知识笔记小工具
                    {/* 知识笔记小工具知识笔记小工具知识笔记小工具知识笔记小工具知识笔记小工具知识笔记小工具知识笔记小工具知识笔记小工具知识笔记小工具知识笔记小工具知识笔记小工具知识笔记小工具知识笔记小工具知识笔记小工具知识笔记小工具知识笔记小工具知识笔记小工具知识笔记小工具知识笔记小工具知识笔记小工具 */}
                </Typography>
            }
            // cardWidth="400px"
        />
    );
};

export default KnowledgeNoteTool;
