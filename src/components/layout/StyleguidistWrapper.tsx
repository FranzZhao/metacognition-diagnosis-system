import React from 'react';
import { Provider } from 'react-redux';
import rootStore from '@/store';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getSystemTheme } from '@/theme';

const Wrapper = ({ children }) => {
    const theme = createTheme(getSystemTheme('light'));

    return (
        <Provider store={rootStore.store}>
            <ThemeProvider theme={theme}>
                {/* <SnackbarProvider> */}
                {/* <SnackbarUtilsConfigurator /> */}
                {children}
                {/* </SnackbarProvider> */}
            </ThemeProvider>
        </Provider>
    );
};

export default Wrapper;
