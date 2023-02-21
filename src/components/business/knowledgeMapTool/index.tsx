import React from 'react';
// mui
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import HubIcon from '@mui/icons-material/Hub';
// custom components
import ToolCard from '@/components/common/toolCard';

interface KnowledgeMaoToolProps {
    /** 关闭工具卡片 */
    handleClose: () => void;
}

const KnowledgeMapTool: React.FC<KnowledgeMaoToolProps> = ({ handleClose }) => {
    const theme = useTheme();

    return (
        <ToolCard
            title={
                <Typography fontSize={'14px'} color={'white'}>
                    知识地图小工具
                </Typography>
            }
            icon={
                <Avatar
                    sx={{
                        bgcolor: theme.palette.success.light,
                        width: '20px',
                        height: '20px'
                    }}
                >
                    <HubIcon sx={{ fontSize: '12px' }} />
                </Avatar>
            }
            action={handleClose}
            content={<Typography>知识地图小工具</Typography>}
        />
    );
};

export default KnowledgeMapTool;
