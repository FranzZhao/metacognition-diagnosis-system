import React, { useState } from 'react';
// mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import EventIcon from '@mui/icons-material/Event';
import Button from '@mui/material/Button';
// custom components
import ToolCard from '@/components/common/toolCard';
// management tools
import ToolTree from '@/pages/learningTools/learningManagement/toolsTree';
import ManagementTools from '@/pages/learningTools/learningManagement/managementTools';
import { Divider } from '@mui/material';

interface LearningManagementToolProps {
    /** 关闭工具卡片 */
    handleClose: () => void;
}

const LearningManagementTool: React.FC<LearningManagementToolProps> = ({ handleClose }) => {
    const theme = useTheme();
    const [view, setView] = useState('');

    return (
        <ToolCard
            cardWidth="500px"
            title={
                <Typography fontSize={'14px'} color={'white'}>
                    学习管理小工具
                </Typography>
            }
            icon={
                <Avatar
                    sx={{
                        bgcolor: theme.palette.secondary.main,
                        width: '20px',
                        height: '20px'
                    }}
                >
                    <EventIcon sx={{ fontSize: '12px' }} />
                </Avatar>
            }
            action={handleClose}
            content={
                <Box>
                    {view !== '' ? (
                        <Box
                            sx={{
                                '& *': { overflow: 'hidden' },
                                '&>div': { p: '10px', ml: 0, height: '100%' }
                            }}
                        >
                            <Box sx={{ p: '5px 10px' }}>
                                <Button
                                    size="small"
                                    variant="contained"
                                    disableElevation
                                    onClick={() => setView('')}
                                    sx={{ width: '100%' }}
                                >
                                    返回管理工具列表
                                </Button>
                            </Box>
                            <Divider />
                            <ManagementTools view={view} />
                        </Box>
                    ) : (
                        <Box sx={{ p: '5px 10px' }}>
                            <ToolTree
                                currentView={view}
                                handleGetCurrentView={(currentView) => setView(currentView)}
                            />
                        </Box>
                    )}
                </Box>
            }
            contentSX={{ p: '0px', height: '350px' }}
        />
    );
};

export default LearningManagementTool;
