import React, { useState } from 'react';
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
import Fade from '@mui/material/Fade';
// custom components
import AgentCard from '@/components/business/agent';
import AgentMsg from '@/components/business/agentMsg';
// icon
import NightlightIcon from '@mui/icons-material/Nightlight';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PublicIcon from '@mui/icons-material/Public';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MenuBookIcon from '@mui/icons-material/MenuBook'; // 知识能力提示
import TrackChangesIcon from '@mui/icons-material/TrackChanges'; // 目标计划提示
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'; // 思维成果提示
import SquareFootIcon from '@mui/icons-material/SquareFoot'; // 评价调节提示
// img
import franz from '@/assets/img/Franz.png';
import bot1 from '@/assets/img/ai.png';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { changeCurrentTheme } from '@/store/slices';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
    const openMenu = Boolean(anchorEl);

    // agent card open
    const [openAgent, setOpenAgent] = useState(false);

    const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
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
                background: '#30384A',
                position: 'fixed',
                zIndex: '99'
            }}
        >
            {/* toolbar默认的背景颜色在theme.ts中设置 */}
            {/* dark or light mode */}
            {/* <Tooltip title="主题切换" placement="bottom" arrow>
                <BlueToolIconButton sx={{ ml: 'auto' }} onClick={changeTheme}>
                    {currentTheme === 'light' ? (
                        <Brightness7Icon sx={{ fontSize: '18px' }} />
                    ) : (
                        <NightlightIcon sx={{ fontSize: '18px' }} />
                    )}
                </BlueToolIconButton>
            </Tooltip>
            <Tooltip title="language" placement="bottom" arrow>
                <OrangeToolIconButton sx={{ ml: 2 }}>
                    <PublicIcon sx={{ fontSize: '18px' }} />
                </OrangeToolIconButton>
            </Tooltip> */}
            <Tooltip title="元认知Agent助手" placement="bottom" arrow>
                {/* <GreenToolIconButton sx={{ ml: 'auto' }}>
                    <QuestionAnswerIcon sx={{ fontSize: '18px' }} />
                </GreenToolIconButton> */}
                <AvatarToolIconButton sx={{ ml: 'auto' }} onClick={handleOpenMenu}>
                    <Avatar
                        src={bot1}
                        sx={{
                            width: '35px',
                            height: '35px',
                            bgcolor: theme.palette.secondary.main,
                            borderRadius: '10px',
                            '& img': {
                                width: '25px',
                                height: '25px'
                            }
                        }}
                    />
                </AvatarToolIconButton>
            </Tooltip>

            {openAgent && <AgentCard open={openAgent} handleClose={() => setOpenAgent(false)} />}

            {/* <Tooltip title="账户设置" placement="bottom" arrow>
                <AvatarToolIconButton sx={{ ml: 2 }} onClick={handleClick}>
                    <Avatar alt="username" src={franz} />
                </AvatarToolIconButton>
            </Tooltip> */}
            {/* 账户设置menu */}
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={openMenu}
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
                        },
                        height: '300px',
                        overflowY: 'overlay',
                        '&::-webkit-scrollbar': {
                            width: 3
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#a4b7c670',
                            borderRadius: '4px'
                        }
                    }
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Typography fontSize="0.9rem" marginLeft="15px" marginBottom="4px" color="gray">
                    元认知提示信息
                </Typography>
                <Divider sx={{ margin: '0px !important' }} />
                <AgentMsg
                    type="认知条件提示"
                    msg="请根据目标和内容，分析你所拥有的知识会如何运用到学习当中"
                    handleClickItem={() => setOpenAgent(true)}
                />
                <Divider sx={{ margin: '0px !important' }} />
                <AgentMsg
                    type="认知标准提示"
                    msg="请注意时刻回复自己顶下的目标哦"
                    handleClickItem={() => setOpenAgent(true)}
                />
                <Divider sx={{ margin: '0px !important' }} />
                <AgentMsg
                    type="认知制品提示"
                    msg="在制作知识地图的时候，你可以不断地修改完善你的知识结构"
                    handleClickItem={() => setOpenAgent(true)}
                />
                <Divider sx={{ margin: '0px !important' }} />
                <AgentMsg
                    type="认知评价提示"
                    msg="现在请根据你定下的目标，评价你的达成情况"
                    handleClickItem={() => setOpenAgent(true)}
                />
                <Divider sx={{ margin: '0px !important' }} />
                <AgentMsg
                    type="认知标准提示"
                    msg="请注意时刻回复自己顶下的目标哦"
                    handleClickItem={() => setOpenAgent(true)}
                />
                <Divider sx={{ margin: '0px !important' }} />
                <AgentMsg
                    type="认知制品提示"
                    msg="在制作知识地图的时候，你可以不断地修改完善你的知识结构"
                    handleClickItem={() => setOpenAgent(true)}
                />
                <Divider sx={{ margin: '0px !important' }} />
                <AgentMsg
                    type="认知评价提示"
                    msg="现在请根据你定下的目标，评价你的达成情况"
                    handleClickItem={() => setOpenAgent(true)}
                />
            </Menu>
        </Toolbar>
    );
};

export default TopToolBar;
