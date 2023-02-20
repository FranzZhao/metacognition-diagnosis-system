import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PublicIcon from '@mui/icons-material/Public';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link, Outlet, useLocation, useMatch, useResolvedPath } from 'react-router-dom';
import { routes } from '../../../utils/routers';
import { Avatar, Button, Tooltip } from '@mui/material';
import { orange, green, blue } from '@mui/material/colors';
import userBg from '@/assets/img/userBg.jpg';
import logo from '@/assets/img/logo.png';
import franz from '@/assets/img/Franz.png';

const drawerWidth = 220;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden'
});

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
    background: theme.palette.primary.dark,
    userSelect: 'none',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
    // zIndex: theme.zIndex.drawer + 1,
    background: theme.palette.primary.dark,
    '& .css-hyum1k-MuiToolbar-root': {
        minHeight: '50px'
    }
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
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

const MainLayout = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleChangeDrawerOpenState = (currentState: boolean) => {
        setOpen(!currentState);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* 左侧导航栏 */}
            <Drawer variant="permanent" open={open}>
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
                <List
                    sx={{
                        pt: '0px !important'
                    }}
                >
                    {/* 导航栏-二级路由 */}
                    {routes[0].children.map((route, index) => {
                        if (route.path === '/') {
                            return (
                                <Tooltip title={open ? '' : route.name} placement="right" arrow>
                                    <ListItem
                                        key={route.path}
                                        disablePadding
                                        sx={{ display: 'block' }}
                                    >
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
            </Drawer>
            {/* 页面右侧：工具栏+核心内容 */}
            <Box sx={{ flexGrow: 1 }}>
                {/* 页面顶部 */}
                <Box
                    sx={{
                        width: '100%',
                        background: theme.palette.primary.dark,
                        color: theme.palette.common.white
                    }}
                >
                    <Toolbar>
                        <Avatar
                            sx={{
                                bgcolor: blue[800],
                                width: '35px',
                                height: '35px',
                                borderRadius: '10px',
                                ml: 'auto'
                            }}
                            variant="rounded"
                        >
                            <Brightness7Icon fontSize="small" />
                        </Avatar>
                        <Avatar
                            sx={{
                                bgcolor: orange[600],
                                width: '35px',
                                height: '35px',
                                borderRadius: '10px',
                                ml: 1
                            }}
                            variant="rounded"
                        >
                            <PublicIcon fontSize="small" />
                        </Avatar>
                        <Button>
                            <Avatar
                                sx={{
                                    bgcolor: green[700],
                                    width: '35px',
                                    height: '35px',
                                    borderRadius: '10px',
                                    ml: 1
                                }}
                                variant="rounded"
                            >
                                <QuestionAnswerIcon fontSize="small" />
                            </Avatar>
                        </Button>
                        <Avatar
                            alt="username"
                            src={franz}
                            sx={{ width: '35px', height: '35px', borderRadius: '10px', ml: 1 }}
                        />
                    </Toolbar>
                </Box>
                {/* 右侧主体内容：各页面的内容 */}
                <Box component="main">
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default MainLayout;
