import React, { useEffect, useState } from 'react';
// mui5
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MuiButton from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
// custom components
import AgentCard from '@/components/business/agent';
import AgentMsg from '@/components/business/agentMsg';
import Typography from '@mui/material/Typography';
// img
import franz from '@/assets/img/Franz.png';
import bot1 from '@/assets/img/ai.png';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { changeCurrentTheme } from '@/store/slices';
import { setCurrentOpenAgentMsg } from '@/store/slices';

const buttonSize = '32px';

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
    const agentMsgList = useAppSelector((state) => state.agent.msgList);
    const currentAgentMsg = useAppSelector((state) => state.agent.currentMsg);
    const [currentOpenAgentId, setCurrentOpenAgentId] = useState(0);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);

    // agent card open
    const metacognitivePromptOpen = useAppSelector((state) => state.agent.openAgent);
    const [openAgent, setOpenAgent] = useState(false);

    useEffect(() => {
        setOpenAgent(metacognitivePromptOpen);
    }, [metacognitivePromptOpen]);

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

            {openAgent && (
                <AgentCard
                    msg={currentAgentMsg}
                    open={openAgent}
                    handleClose={() => setOpenAgent(false)}
                />
            )}

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
                        maxHeight: '300px',
                        width: '200px',
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
                {agentMsgList.map((msg) => {
                    return (
                        <Box key={msg.id}>
                            <Divider sx={{ margin: '0px !important' }} />
                            <AgentMsg
                                msg={msg}
                                handleClickItem={() => {
                                    setOpenAgent(true);
                                    // setCurrentOpenAgentId(msg.id);
                                    dispatch(setCurrentOpenAgentMsg(msg));
                                }}
                            />
                        </Box>
                    );
                })}
            </Menu>
        </Toolbar>
    );
};

export default TopToolBar;
