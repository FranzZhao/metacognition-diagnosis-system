import React from 'react';
// mui5
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
// routes
import { Link } from 'react-router-dom';
import { routes } from '@/utils/routers';
// img
import userBg from '@/assets/img/userBg.jpg';
import logo from '@/assets/img/logo.png';
import franz from '@/assets/img/Franz.png';

const drawerWidth = 220;

// 打开左侧导航栏的CSS样式+动画
const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden'
});

// 关闭左侧导航栏的CSS样式+动画
const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`
    }
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // background: theme.palette.primary.dark,
    background: '#30384A',
    userSelect: 'none',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}));

// MuiDrawer的背景颜色在theme.ts中设置
const DrawerBox = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme)
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme)
        })
    })
);

// 自定义Router的Link
// TODO: 添加进入对应项目时显示选中状态
const CustomLink = ({ to, open, icon, text, ...props }) => {
    const theme = useTheme();
    // 检测是否已经点击链接
    // let resolved = useResolvedPath(to);
    // let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link style={{ textDecoration: 'none', color: theme.palette.grey[50] }} to={to} {...props}>
            <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5
                }}
                // selected={selected}
                // onClick={handleIsSelected}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: theme.palette.grey[50]
                    }}
                >
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
        </Link>
    );
};

const Drawer = ({ open, handleChangeDrawerOpenState }) => {
    const theme = useTheme();

    return (
        <DrawerBox variant="permanent" open={open}>
            {/* 系统标题 */}
            <DrawerHeader>
                <Avatar
                    alt="logo"
                    src={logo}
                    sx={{
                        width: theme.spacing(4),
                        height: theme.spacing(4),
                        mr: open ? 1 : 0,
                        ml: open ? '-10px' : 0
                    }}
                />
                {open && (
                    <Typography
                        color={theme.palette.common.white}
                        fontSize="18px"
                        fontWeight="bold"
                        letterSpacing="3px"
                    >
                        ANDURIL
                    </Typography>
                )}
            </DrawerHeader>
            {/* 用户卡片 */}
            <Box
                sx={{
                    minHeight: '120px',
                    backgroundImage: `url(${userBg})`,
                    backgroundSize: '240px',
                    color: '#e8e8e8'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-end',
                        p: theme.spacing(0, 1)
                    }}
                >
                    <Avatar
                        alt={'username'}
                        src={franz}
                        sx={{
                            width: theme.spacing(6),
                            height: theme.spacing(6),
                            mr: '85px',
                            mt: '25px',
                            boxShadow: '0px 0px 20px #294761',
                            backgroundColor: theme.palette.secondary.main,
                            filter: 'blur(18)'
                        }}
                    />
                    <Box>
                        <IconButton
                            color="inherit"
                            key={'open-drawer'}
                            onClick={() => handleChangeDrawerOpenState(open)}
                            sx={{
                                mt: '5px',
                                mr: '5px'
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Typography
                    mt="15px"
                    fontSize="15px"
                    p="8px 20px"
                    bgcolor="#0000008f"
                    height="32px"
                >
                    {open && 'Franz Zhao'}
                </Typography>
            </Box>
            {/* 左侧导航栏 */}
            <List
                sx={{
                    pt: '0px !important'
                }}
            >
                {/* 导航栏-二级路由 */}
                {routes[0].children.map((route, index) => {
                    if (route.path === '/') {
                        return (
                            <Tooltip
                                key={route.path}
                                title={open ? '' : route.name}
                                placement="right"
                                arrow
                            >
                                <ListItem disablePadding sx={{ display: 'block' }}>
                                    <CustomLink
                                        to={route.path}
                                        open={open}
                                        icon={route.icon}
                                        text={route.name}
                                    />
                                </ListItem>
                            </Tooltip>
                        );
                    } else if (route.path !== '*') {
                        let isNewModule = false;
                        if (route.module !== routes[0].children[index - 1].module) {
                            isNewModule = true;
                        }
                        return (
                            <Box key={route.path}>
                                {isNewModule && (
                                    <Box>
                                        {open ? (
                                            <Typography
                                                display="block"
                                                gutterBottom
                                                fontSize={'12px'}
                                                p={'10px 20px 0px'}
                                                color={theme.palette.grey[400]}
                                            >
                                                {route.module}
                                            </Typography>
                                        ) : (
                                            <Divider
                                                sx={{
                                                    borderColor: theme.palette.grey[700]
                                                }}
                                            />
                                        )}
                                    </Box>
                                )}
                                <Tooltip title={open ? '' : route.name} placement="right" arrow>
                                    <ListItem disablePadding sx={{ display: 'block' }}>
                                        <CustomLink
                                            to={route.path}
                                            open={open}
                                            icon={route.icon}
                                            text={route.name}
                                        />
                                    </ListItem>
                                </Tooltip>
                            </Box>
                        );
                    }
                })}
            </List>
        </DrawerBox>
    );
};

export default Drawer;
