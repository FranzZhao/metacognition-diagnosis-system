import React from 'react';
// mui5
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Snackbar as Msg } from '@mui/material';
import Alert from '@mui/material/Alert';

interface SnackbarProps {
    /** 打开状态 */
    open: boolean;
    /** 关闭函数 */
    handleClose: () => void;
    /** 消息类型 */
    type: 'info' | 'success' | 'warning' | 'error';
    /** 消息内容 */
    info: React.ReactNode;
    /** 消失时间 */
    autoHideDuration?: number | null | undefined;
}

/**
 * create by Franz Zhao
 * @visibleName  Snackbar 消息条
 */
const Snackbar: React.FC<SnackbarProps> = ({
    open,
    handleClose,
    type,
    info,
    autoHideDuration = null
}) => {
    return (
        <Msg
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={autoHideDuration ? handleClose : () => {}}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} variant="filled" severity={type} sx={{ width: '100%' }}>
                {info}
            </Alert>
        </Msg>
    );
};

export default Snackbar;
