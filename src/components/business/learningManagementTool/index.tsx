import React from 'react';
// mui
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import EventIcon from '@mui/icons-material/Event';
// custom components
import ToolCard from '@/components/common/toolCard';

interface LearningManagementToolProps {
    /** 关闭工具卡片 */
    handleClose: () => void;
}

const LearningManagementTool: React.FC<LearningManagementToolProps> = ({ handleClose }) => {
    const theme = useTheme();

    return (
        <ToolCard
            title={
                <Typography fontSize={'14px'} color={'white'}>
                    学习管理小工具
                </Typography>
            }
            icon={
                <Avatar
                    sx={{
                        bgcolor: theme.palette.secondary.main,
                        width: '20px',
                        height: '20px'
                    }}
                >
                    <EventIcon sx={{ fontSize: '12px' }} />
                </Avatar>
            }
            action={handleClose}
            content={<Typography>学习管理小工具</Typography>}
        />
    );
};

export default LearningManagementTool;
