import React from 'react';
import { Button, ButtonProps, Tooltip, IconButton, IconButtonProps, Fab } from '@mui/material';
// import { MenuIcon, CardIcon } from '../svgIcon';
import AddIcon from '@mui/icons-material/Add';

// 一些可以复用的按钮，保证样式一致。

/**
 * create by 赵梓宏
 * @visibleName  Button 按钮
 */
export const TextButton = ({ sx = {}, ...props }) => {
    return (
        <Button
            sx={{
                minWidth: 50,
                color: '#2C68FF',
                ...sx
            }}
            size="small"
            {...props}
        />
    );
};

// 切换视图按钮
interface ViewSwitchProps extends IconButtonProps {
    /** 悬浮描述文字 */
    tip?: string;
    /** 是否选中 */
    isSelected: boolean;
}

// export const ListSwitch = ({ isSelected, tip = '切换列表视图', ...props }: ViewSwitchProps) => {
//     return (
//         <Tooltip title={tip} arrow>
//             <IconButton {...props}>
//                 <MenuIcon sx={{ color: isSelected ? '#165dff' : '#4e5969' }} />
//             </IconButton>
//         </Tooltip>
//     );
// };

// export const CardSwitch = ({ isSelected, tip = '切换卡片视图', ...props }: ViewSwitchProps) => {
//     return (
//         <Tooltip title={tip} arrow>
//             <IconButton {...props}>
//                 <CardIcon sx={{ color: isSelected ? '#165dff' : '#4e5969' }} />
//             </IconButton>
//         </Tooltip>
//     );
// };

// 主要、次要按钮，默认文字分别是确定与取消
export const PrimaryBtn = ({ sx, children = '确定', ...props }: ButtonProps) => {
    return (
        <Button
            variant="contained"
            sx={{
                background: '#165DFF',
                color: '#FFFFFFE6',
                ...sx
            }}
            {...props}
        >
            {children}
        </Button>
    );
};
export const SecondaryBtn = ({ sx, children = '取消', ...props }: ButtonProps) => {
    return (
        <Button
            sx={{
                background: '#F2F3F5',
                border: '1px solid #F2F3F5',
                color: '#000000E6',
                ...sx
            }}
            {...props}
        >
            {children}
        </Button>
    );
};
// 三级按钮没有默认文字
export const TertiaryBtn = ({ sx, ...props }: ButtonProps) => {
    return (
        <Button
            sx={{
                color: (t) => t.palette.text.primary,
                border: '1px solid #C9CDD4',
                ...sx
            }}
            {...props}
        />
    );
};

// 添加浮动按钮
export const AddFab = ({ sx = {}, tip = '', ...props }) => {
    return (
        <Tooltip title={tip} placement="top" arrow>
            <Fab
                sx={{ position: 'absolute', bottom: 64, right: 64, ...sx }}
                color="primary"
                aria-label="add"
                {...props}
            >
                <AddIcon />
            </Fab>
        </Tooltip>
    );
};
