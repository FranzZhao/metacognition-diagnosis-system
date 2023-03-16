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
    type: '认知条件提示' | '认知标准提示' | '认知制品提示' | '认知评价提示';
    msg: string;
    handleClickItem: () => void;
}

const AgentMsg: React.FC<AgentMsgProps> = ({ type, msg, handleClickItem }) => {
    const theme = useTheme();

    return (
        <MenuItem onClick={handleClickItem}>
            <ListItemIcon>
                {type === '认知条件提示' && (
                    <Avatar sx={{ background: theme.palette.primary.main }}>
                        <MenuBookIcon fontSize="small" />
                    </Avatar>
                )}
                {type === '认知标准提示' && (
                    <Avatar sx={{ background: theme.palette.secondary.main }}>
                        <TrackChangesIcon fontSize="small" />
                    </Avatar>
                )}
                {type === '认知制品提示' && (
                    <Avatar sx={{ background: theme.palette.success.main }}>
                        <EmojiObjectsIcon fontSize="small" />
                    </Avatar>
                )}
                {type === '认知评价提示' && (
                    <Avatar sx={{ background: theme.palette.error.main }}>
                        <SquareFootIcon fontSize="small" />
                    </Avatar>
                )}
            </ListItemIcon>
            <Box>
                {type === '认知条件提示' && (
                    <Typography variant="caption" fontWeight="bold">
                        认知条件提示
                    </Typography>
                )}
                {type === '认知标准提示' && (
                    <Typography variant="caption" fontWeight="bold">
                        认知标准提示
                    </Typography>
                )}
                {type === '认知制品提示' && (
                    <Typography variant="caption" fontWeight="bold">
                        认知制品提示
                    </Typography>
                )}
                {type === '认知评价提示' && (
                    <Typography variant="caption" fontWeight="bold">
                        认知评价提示
                    </Typography>
                )}
                <br />
                <Typography variant="caption">
                    {msg.length <= 10 ? msg : msg.slice(0, 10) + '...'}
                </Typography>
            </Box>
        </MenuItem>
    );
};

export default AgentMsg;
