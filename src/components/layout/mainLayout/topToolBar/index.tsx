import React from 'react';
// mui5
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MuiButton from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
// icon
import NightlightIcon from '@mui/icons-material/Nightlight';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PublicIcon from '@mui/icons-material/Public';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
// img
import franz from '@/assets/img/Franz.png';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { changeCurrentTheme } from '@/store/slices';

const buttonSize = '32px';

const BlueToolIconButton = styled(MuiButton)(({ theme }) => ({
    minWidth: buttonSize,
    maxWidth: buttonSize,
    maxHeight: buttonSize,
    minHeight: buttonSize,
    borderRadius: '10px',
    backgroundColor: '#2d93ff69',
    color: '#b4d9ff',
    '&:hover': {
        backgroundColor: '#2d93ff55'
    }
}));

const OrangeToolIconButton = styled(MuiButton)(({ theme }) => ({
    minWidth: buttonSize,
    maxWidth: buttonSize,
    maxHeight: buttonSize,
    minHeight: buttonSize,
    borderRadius: '10px',
    backgroundColor: '#ff8e0ba8',
    color: '#ffc888',
    '&:hover': {
        backgroundColor: '#ff8e0b94'
    }
}));

const GreenToolIconButton = styled(MuiButton)(({ theme }) => ({
    minWidth: buttonSize,
    maxWidth: buttonSize,
    maxHeight: buttonSize,
    minHeight: buttonSize,
    borderRadius: '10px',
    backgroundColor: '#2cc14573',
    color: '#93d59e',
    '&:hover': {
        backgroundColor: '#2cc14563'
    }
}));

const AvatarToolIconButton = styled(MuiButton)(({ theme }) => ({
    minWidth: buttonSize,
    maxWidth: buttonSize,
    maxHeight: buttonSize,
    minHeight: buttonSize,
    borderRadius: '10px',
    // backgroundColor: '#2cc14573',
    // color: '#93d59e',
    '& div': {
        width: buttonSize,
        height: buttonSize,
        borderRadius: '10px'
    },
    '&:hover': {
        cursor: 'pointer',
        // 图片变灰+200ms的渐变效果
        filter: 'brightness(0.9)',
        transition: 'filter 200ms linear'
    }
}));

const TopToolBar = () => {
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const currentTheme = useAppSelector((state) => state.system.currentTheme);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // 主题切换
    const changeTheme = () => {
        dispatch(changeCurrentTheme(currentTheme));
    };

    return (
        <Toolbar
            sx={{
                background: '#30384A'
            }}
        >
            {/* toolbar默认的背景颜色在theme.ts中设置 */}
            {/* dark or light mode */}
            <Tooltip title="主题切换" placement="bottom" arrow>
                <BlueToolIconButton sx={{ ml: 'auto' }} onClick={changeTheme}>
                    {currentTheme === 'light' ? (
                        <Brightness7Icon sx={{ fontSize: '18px' }} />
                    ) : (
                        <NightlightIcon sx={{ fontSize: '18px' }} />
                    )}
                </BlueToolIconButton>
            </Tooltip>
            <Tooltip title="语言切换" placement="bottom" arrow>
                <OrangeToolIconButton sx={{ ml: 2 }}>
                    <PublicIcon sx={{ fontSize: '18px' }} />
                </OrangeToolIconButton>
            </Tooltip>
            <Tooltip title="助手消息" placement="bottom" arrow>
                <GreenToolIconButton sx={{ ml: 2 }}>
                    <QuestionAnswerIcon sx={{ fontSize: '18px' }} />
                </GreenToolIconButton>
            </Tooltip>
            <Tooltip title="账户设置" placement="bottom" arrow>
                <AvatarToolIconButton sx={{ ml: 2 }} onClick={handleClick}>
                    <Avatar alt="username" src={franz} />
                </AvatarToolIconButton>
            </Tooltip>
            {/* 账户设置menu */}
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0
                        }
                    }
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </Toolbar>
    );
};

export default TopToolBar;
