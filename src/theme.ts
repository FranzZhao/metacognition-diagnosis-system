import { ThemeOptions } from '@mui/material/styles';

export const getDesignTokens = (themeMode: 'light' | 'dark'): ThemeOptions => ({
    palette: {
        mode: themeMode,
        ...(themeMode === 'dark'
            ? {
                  // Dark
              }
            : {
                  // Light
                  primary: {
                      light: '#4b9fea',
                      main: '#1e88e5',
                      dark: '#233044'
                  },
                  text: {
                      primary: '#1D2129',
                      secondary: '#4E5969',
                      disabled: '#C9CDD4'
                  },
                  background: {
                      default: '#F7F8FC'
                  }
              })
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    overflow: 'visible'
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        // 覆盖disable的textfield的borderBottom样式
                        '&:before': {
                            borderBottomStyle: 'solid !important',
                            borderBottom: '2px solid #ECECEC ',
                            color: 'red'
                        }
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    // 修改按钮默认的高度
                    minWidth: 60,
                    minHeight: 32,
                    fontSize: 14,
                    padding: '3px 10px',
                    borderRadius: '3px'
                }
            }
        }
    }
});
