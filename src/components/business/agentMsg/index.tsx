import React from 'react';
// mui5
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
// icon
import MenuBookIcon from '@mui/icons-material/MenuBook'; // 认知条件提示
import TrackChangesIcon from '@mui/icons-material/TrackChanges'; // 认知标准提示
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'; // 认知制品提示
import SquareFootIcon from '@mui/icons-material/SquareFoot'; // 认知评价提示

interface AgentMsgProps {
    msg: any;
    handleClickItem: () => void;
}

const AgentMsg: React.FC<AgentMsgProps> = ({ msg, handleClickItem }) => {
    const theme = useTheme();

    return (
        <MenuItem onClick={handleClickItem}>
            <ListItemIcon>
                {msg.id % 4 === 0 && (
                    <Avatar sx={{ background: theme.palette.error.main }}>
                        <SquareFootIcon fontSize="small" />
                    </Avatar>
                )}
                {msg.id % 4 === 1 && (
                    <Avatar sx={{ background: theme.palette.primary.main }}>
                        <MenuBookIcon fontSize="small" />
                    </Avatar>
                )}
                {msg.id % 4 === 2 && (
                    <Avatar sx={{ background: theme.palette.secondary.main }}>
                        <TrackChangesIcon fontSize="small" />
                    </Avatar>
                )}
                {msg.id % 4 === 3 && (
                    <Avatar sx={{ background: theme.palette.success.main }}>
                        <EmojiObjectsIcon fontSize="small" />
                    </Avatar>
                )}
            </ListItemIcon>
            <Box>
                <Typography variant="caption" fontWeight="bold">
                    {msg.msgTitle}
                </Typography>
                <br />
                <Typography variant="caption">
                    {msg.msgList[0].promptContent.length <= 10
                        ? msg.msgList[0].promptContent
                        : msg.msgList[0].promptContent.slice(0, 10) + '...'}
                </Typography>
            </Box>
        </MenuItem>
    );
};

export default AgentMsg;
