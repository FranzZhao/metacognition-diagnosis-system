import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AssessmentIcon from '@mui/icons-material/Assessment';
// custom components
import Task1 from './task1';
import Task2 from './task2';
import Task3 from './task3';
// img
import learningBG from '@/assets/img/learning-bg.jpg';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

export default function LearningTask() {
    const [step, setStep] = React.useState(0);
    // 选择的任务内容
    const [selectedTask, setSelectedTask] = useState('');

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setStep(newValue);
    };

    return (
        <Box>
            <Box sx={{ padding: '5px 0' }}>
                <img
                    alt=""
                    src={learningBG}
                    style={{ width: '100%', height: '90px', marginTop: '5px', objectFit: 'cover' }}
                />
                <Box sx={{ margin: '-55px 15px 30px 15px', display: 'flex' }}>
                    <Typography
                        variant="h5"
                        color="white"
                        fontWeight="bold"
                        style={{ userSelect: 'none' }}
                    >
                        学习任务：复杂系统在教育中的应用
                    </Typography>
                </Box>
            </Box>
            <Paper variant="outlined" sx={{ p: '10px 20px' }}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={step} onChange={handleChange} aria-label="basic tabs example">
                            <Tab
                                label={
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <TroubleshootIcon sx={{ mr: 1 }} />
                                        <Typography>任务分析与选择</Typography>
                                    </Box>
                                }
                                {...a11yProps(0)}
                            />
                            {/* DesignServicesIcon */}
                            <Tab
                                label={
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <DesignServicesIcon sx={{ mr: 1 }} />
                                        <Typography>任务解决方案撰写</Typography>
                                    </Box>
                                }
                                {...a11yProps(1)}
                            />
                            <Tab
                                label={
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <AssessmentIcon sx={{ mr: 1 }} />
                                        <Typography>方案评价与迭代</Typography>
                                    </Box>
                                }
                                {...a11yProps(2)}
                            />
                        </Tabs>
                    </Box>
                    <Box sx={{ padding: '15px 10px' }}>
                        {step === 0 && <Task1 />}
                        {step === 1 && <Task2 />}
                        {step === 2 && <Task3 />}
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}
