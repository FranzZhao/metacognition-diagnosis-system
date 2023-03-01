import { ThemeOptions } from '@mui/material/styles';

export const getSystemTheme = (themeMode: 'light' | 'dark'): ThemeOptions => ({
    palette: {
        mode: themeMode,
        primary: {
            light: '#4b9fea',
            main: '#1e88e5',
            dark: '#1a5678',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ffc570',
            main: '#ffb74d',
            dark: '#b28035',
            contrastText: '#000'
        },
        warning: {
            light: '#ffcf33',
            main: '#ffc400',
            dark: '#b28900'
        },
        error: {
            light: '#ff7171',
            main: '#f44336',
            dark: '#d32f2f'
        },
        action: {
            hover: 'rgb(0 0 0 / 4%)', //4
            selected: 'rgb(0 0 0 / 12%)' //8
        },
        background: {
            paper: themeMode === 'light' ? '#ffffff' : '#2e3642',
            default: themeMode === 'light' ? '#f7f7f7' : '#1f2733'
        }
    },
    mixins: {
        toolbar: {
            '@media (min-width:600px)': {
                minHeight: 50
            }
        }
    },
    components: {
        // 左侧导航栏默认样式
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: '#242a37',
                    overflowY: 'overlay',
                    overflowX: 'hidden',
                    marginBottom: 55,
                    '&::-webkit-scrollbar': {
                        width: 4,
                        backgroundColor: '#ffffff00'
                        // backgroundColor: themeMode === 'light' ? '#ffffff' : '#233044'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#666d7b8f',
                        borderRadius: '6px'
                    }
                }
            }
        },
        // 顶部+底部工具栏默认样式
        MuiToolbar: {
            styleOverrides: {
                root: {
                    background: '#1a5678',
                    width: '100%'
                }
            }
        },
        // 工具卡片标题默认样式
        MuiCardHeader: {
            styleOverrides: {
                action: {
                    marginTop: '-12px',
                    marginBottom: '0px',
                    marginRight: '-5px'
                }
            }
        },
        MuiSnackbar: {
            styleOverrides: {
                root: {
                    top: '65px !important',
                    right: '15px !important'
                }
            }
        }
    }
    // components: {
    //     MuiCard: {
    //         styleOverrides: {
    //             root: {
    //                 boxShadow: 'none',
    //                 overflow: 'visible'
    //             }
    //         }
    //     },
    //     MuiInputBase: {
    //         styleOverrides: {
    //             root: {
    //                 '&.Mui-disabled': {
    //                     // 覆盖disable的textfield的borderBottom样式
    //                     '&:before': {
    //                         borderBottomStyle: 'solid !important',
    //                         borderBottom: '2px solid #ECECEC ',
    //                         color: 'red'
    //                     }
    //                 }
    //             }
    //         }
    //     },
    //     MuiButton: {
    //         styleOverrides: {
    //             root: {
    //                 // 修改按钮默认的高度
    //                 minWidth: 60,
    //                 minHeight: 32,
    //                 fontSize: 14,
    //                 padding: '3px 10px',
    //                 borderRadius: '3px'
    //             }
    //         }
    //     }
    // }
});
