import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/system/Box';

export interface ModalState {
    /**
     * 开关参数
     */
    open: boolean;
    /**
     * 中间内容
     */
    content?: JSX.Element | JSX.Element[];
    /**
     * 底部按钮
     */
    actions?: JSX.Element;
    /**
     * 模态框大小设置
     */
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    /**
     * 模态框关闭参数
     */
    onClose: () => void;
    /**
     * 模态框头部的显示信息
     */
    title: string | JSX.Element;
}

/**
 * create by 赵梓宏
 * @visibleName  Modal 模态框
 */
export const Modal: React.FC<ModalState> = (props) => {
    const { open, content, onClose, actions, maxWidth = 'md', title } = props;
    return (
        <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth={true}
            maxWidth={maxWidth}
        >
            <DialogTitle
                sx={{ m: 0, p: 2, height: 62, display: 'flex', justifyContent: 'space-between' }}
            >
                <Box
                    sx={{
                        color: 'rgb(0 0 0 / 90%)',
                        fontSize: '16px'
                    }}
                >
                    {title}
                </Box>
                <Box>
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            color: (theme) => theme.palette.grey[500]
                        }}
                        size="small"
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent
                sx={{
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    '&::-webkit-scrollbar': {
                        width: 5
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: 'orange',
                        borderRadius: '4px'
                    }
                }}
            >
                {content}
            </DialogContent>
            <DialogActions>{actions}</DialogActions>
        </Dialog>
    );
};
