import React from 'react';
import { Provider } from 'react-redux';
import rootStore from '@/store';

// import { SnackbarProvider } from 'notistack';
// import { SnackbarUtilsConfigurator } from '@components/common/toast';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getDesignTokens } from '@/theme';

const Wrapper = ({ children }) => {
    const theme = createTheme(getDesignTokens('light'));

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
