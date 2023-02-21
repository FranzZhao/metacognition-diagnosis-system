import React from 'react';
// mui
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// custom components
import ToolCard from '@/components/common/toolCard';

interface KnowledgeTagToolProps {
    /** 关闭工具卡片 */
    handleClose: () => void;
}

const KnowledgeTagTool: React.FC<KnowledgeTagToolProps> = ({ handleClose }) => {
    const theme = useTheme();

    return (
        <ToolCard
            title={
                <Typography fontSize={'14px'} color={'white'}>
                    知识标签小工具
                </Typography>
            }
            icon={
                <Avatar
                    sx={{
                        bgcolor: theme.palette.warning.light,
                        width: '20px',
                        height: '20px'
                    }}
                >
                    <LocalOfferIcon sx={{ fontSize: '12px' }} />
                </Avatar>
            }
            action={handleClose}
            content={<Typography>知识标签小工具</Typography>}
        />
    );
};

export default KnowledgeTagTool;
