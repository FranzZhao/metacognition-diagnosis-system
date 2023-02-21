import React from 'react';
// mui5
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import MuiButton from '@mui/material/Button';
import MoodIcon from '@mui/icons-material/Mood';
import EventIcon from '@mui/icons-material/Event';
import HubIcon from '@mui/icons-material/Hub';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import Tooltip from '@mui/material/Tooltip';

const buttonSize = '24px';
const buttonRadius = '12px';

const BlueCircleToolIconButton = styled(MuiButton)(({ theme }) => ({
    minWidth: buttonSize,
    maxWidth: buttonSize,
    maxHeight: buttonSize,
    minHeight: buttonSize,
    borderRadius: buttonRadius,
    backgroundColor: '#2d93ff69',
    color: '#b4d9ff',
    '&:hover': {
        backgroundColor: '#2d93ff55'
    }
}));

const OrangeCircleToolIconButton = styled(MuiButton)(({ theme }) => ({
    minWidth: buttonSize,
    maxWidth: buttonSize,
    maxHeight: buttonSize,
    minHeight: buttonSize,
    borderRadius: buttonRadius,
    backgroundColor: '#ff8e0ba8',
    color: '#ffc888',
    '&:hover': {
        backgroundColor: '#ff8e0b94'
    }
}));

const GreenCircleToolIconButton = styled(MuiButton)(({ theme }) => ({
    minWidth: buttonSize,
    maxWidth: buttonSize,
    maxHeight: buttonSize,
    minHeight: buttonSize,
    borderRadius: buttonRadius,
    backgroundColor: '#2cc14573',
    color: '#93d59e',
    '&:hover': {
        backgroundColor: '#2cc14563'
    }
}));

const YellowCircleToolIconButton = styled(MuiButton)(({ theme }) => ({
    minWidth: buttonSize,
    maxWidth: buttonSize,
    maxHeight: buttonSize,
    minHeight: buttonSize,
    borderRadius: buttonRadius,
    backgroundColor: '#f1d6436e',
    color: '#f1df7b',
    '&:hover': {
        backgroundColor: '#f1d64359'
    }
}));

const RedCircleToolIconButton = styled(MuiButton)(({ theme }) => ({
    minWidth: buttonSize,
    maxWidth: buttonSize,
    maxHeight: buttonSize,
    minHeight: buttonSize,
    borderRadius: buttonRadius,
    backgroundColor: '#ff52528f',
    color: '#ffb4b4',
    '&:hover': {
        backgroundColor: '#ff52526e'
    }
}));

interface BottomToolBarProps {
    /** 按钮点击事件 */
    handleOpenToolCared: (
        target:
            | 'learningPortfolioTool'
            | 'learningManagementTool'
            | 'knowledgeMapTool'
            | 'knowledgeTagTool'
            | 'knowledgeNoteTool'
    ) => void;
}

const BottomToolBar: React.FC<BottomToolBarProps> = ({ handleOpenToolCared }) => {
    return (
        <Toolbar
            sx={{
                position: 'fixed',
                bottom: 0,
                background: '#30384A',
                color: 'white',
                minHeight: '40px !important'
                // alignItems: 'center'
            }}
        >
            <Tooltip title="学习画像小工具" placement="top" arrow>
                <BlueCircleToolIconButton
                    sx={{ ml: 'auto' }}
                    onClick={() => handleOpenToolCared('learningPortfolioTool')}
                >
                    <MoodIcon sx={{ fontSize: '16px' }} />
                </BlueCircleToolIconButton>
            </Tooltip>
            <Tooltip title="学习管理小工具" placement="top" arrow>
                <OrangeCircleToolIconButton
                    sx={{ ml: 3 }}
                    onClick={() => handleOpenToolCared('learningManagementTool')}
                >
                    <EventIcon sx={{ fontSize: '16px' }} />
                </OrangeCircleToolIconButton>
            </Tooltip>
            <Tooltip title="知识地图小工具" placement="top" arrow>
                <GreenCircleToolIconButton
                    sx={{ ml: 3 }}
                    onClick={() => handleOpenToolCared('knowledgeMapTool')}
                >
                    <HubIcon sx={{ fontSize: '16px' }} />
                </GreenCircleToolIconButton>
            </Tooltip>
            <Tooltip title="知识标签小工具" placement="top" arrow>
                <YellowCircleToolIconButton
                    sx={{ ml: 3 }}
                    onClick={() => handleOpenToolCared('knowledgeTagTool')}
                >
                    <LocalOfferIcon sx={{ fontSize: '16px' }} />
                </YellowCircleToolIconButton>
            </Tooltip>
            <Tooltip title="知识笔记小工具" placement="top" arrow>
                <RedCircleToolIconButton
                    sx={{ ml: 3 }}
                    onClick={() => handleOpenToolCared('knowledgeNoteTool')}
                >
                    <NoteAltIcon sx={{ fontSize: '16px' }} />
                </RedCircleToolIconButton>
            </Tooltip>
        </Toolbar>
    );
};

export default BottomToolBar;
