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
            paper: themeMode === 'light' ? '#fafafa' : '#2e3642',
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
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: '#30384A'
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
