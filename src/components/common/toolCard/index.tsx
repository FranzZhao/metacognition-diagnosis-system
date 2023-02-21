import React from 'react';
// mui5
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HubIcon from '@mui/icons-material/Hub';

interface ToolCardProps {
    /** 标题 */
    title: React.ReactNode;
    /** 卡片图表 */
    icon: React.ReactNode;
    /** 卡片操作 */
    action: () => void;
    /** 卡片内容 */
    content: React.ReactNode;
    /** 卡片宽度 */
    cardWidth?: string;
    /** 卡片标题样式 */
    titleSX?: {};
    /** 卡片内容样式 */
    contentSX?: {};
}

/**
 * create by Franz Zhao
 * @visibleName  ToolCard 工具卡片
 */
const ToolCard: React.FC<ToolCardProps> = (props) => {
    const { title, icon, action, content, cardWidth = '275px', titleSX, contentSX } = props;
    const theme = useTheme();

    return (
        <Card sx={{ width: cardWidth }}>
            <CardHeader
                avatar={icon}
                title={title}
                action={
                    <IconButton
                        size="small"
                        sx={{
                            maxWidth: '24px',
                            maxHeight: '24px'
                        }}
                        onClick={action}
                    >
                        <MoreVertIcon
                            sx={{
                                color: theme.palette.grey[300],
                                fontSize: '18px'
                            }}
                        />
                    </IconButton>
                }
                sx={{
                    height: '35px',
                    bgcolor: 'steelblue',
                    userSelect: 'none',
                    ...titleSX
                }}
            />
            <CardContent sx={{ ...contentSX }}>{content}</CardContent>
        </Card>
    );
};

export default ToolCard;
