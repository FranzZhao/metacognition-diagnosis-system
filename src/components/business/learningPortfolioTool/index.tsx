import React from 'react';
// mui
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import MoodIcon from '@mui/icons-material/Mood';
// custom components
import ToolCard from '@/components/common/toolCard';

interface LearningPortfolioToolProps {
    /** 关闭工具卡片 */
    handleClose: () => void;
}

const LearningPortfolioTool: React.FC<LearningPortfolioToolProps> = ({ handleClose }) => {
    const theme = useTheme();

    return (
        <ToolCard
            title={
                <Typography fontSize={'14px'} color={'white'}>
                    学习画像小工具
                </Typography>
            }
            icon={
                <Avatar
                    sx={{
                        bgcolor: theme.palette.primary.main,
                        width: '20px',
                        height: '20px'
                    }}
                >
                    <MoodIcon sx={{ fontSize: '12px' }} />
                </Avatar>
            }
            action={handleClose}
            content={<Typography>学习画像小工具</Typography>}
        />
    );
};

export default LearningPortfolioTool;
