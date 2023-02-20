import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// router
import { BrowserRouter } from 'react-router-dom';
// mui5 theme
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getSystemTheme } from './theme';
// redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import rootStore from '@/store';
import { useAppSelector } from '@/store';

const Index: React.FC = () => {
    const currentTheme = useAppSelector((state) => state.system.currentTheme);
    const theme = createTheme(getSystemTheme(currentTheme));

    return (
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        {/* redux */}
        <Provider store={rootStore.store}>
            {/* redux 持久化 */}
            <PersistGate loading={null} persistor={rootStore.persistor}>
                {/* router */}
                <BrowserRouter>
                    <Index />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
