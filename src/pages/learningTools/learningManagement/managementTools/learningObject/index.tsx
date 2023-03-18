import React, { useEffect, useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// icon
import SaveIcon from '@mui/icons-material/Save';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import AddBoxIcon from '@mui/icons-material/AddBox';
// custom components
import { Modal } from '@/components/common';
import LearningObjectFlow from '@/components/business/learningObjectFlow';

const LearningObject = () => {
    // 是否编辑核心目标
    const [isEditCoreLearningObject, setIsEditCoreLearningObject] = useState(false);
    // 核心目标内容
    const [coreLearningObject, setCoreLearningObject] =
        useState<string>('运用复杂系统理论构想未来教育评价样态');
    // 添加新的子目标
    const [isAddNewSubGoal, setIsAddNewSubGoal] = useState(false);
    const [newSubGoal, setNewSubGoal] = useState('');
    // 将新建的子目标传送到reactflow中
    const [addNewNode, setAddNewNode] = useState('');

    useEffect(() => {
        setIsEditCoreLearningObject(coreLearningObject.length === 0);
    }, []);

    return (
        <Box>
            <Typography fontWeight="bold" fontSize="1.2rem">
                学习目标设定
            </Typography>
            <Typography margin="10px 0">
                请依据知识学习内容以及你所选择的任务情境，制定下你的学习目标吧！其中包括
                <b>一个核心学习目标</b>，和为了完成这个核心学习目标而需要完成的<b>多个小目标</b>
                。请你先制定你最终希望达成的核心学习目标后（尽量精简地描述），对进行<b>目标分解</b>
                ，分解成一个个小目标，并使用下面的<b>结构图</b>进行表示吧！
            </Typography>
            <Paper variant="outlined" sx={{ m: '10px 0', p: 2 }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'steelblue'
                    }}
                >
                    <ModeStandbyIcon sx={{ mr: 1 }} />
                    <Typography fontWeight="bold">核心学习目标</Typography>
                    <Box sx={{ ml: 'auto' }}>
                        {isEditCoreLearningObject ? (
                            <Button
                                variant="contained"
                                size="small"
                                disableElevation
                                startIcon={<SaveIcon />}
                                onClick={() => setIsEditCoreLearningObject(false)}
                            >
                                保存
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                size="small"
                                disableElevation
                                startIcon={<DriveFileRenameOutlineIcon />}
                                onClick={() => setIsEditCoreLearningObject(true)}
                            >
                                修改
                            </Button>
                        )}
                    </Box>
                </Box>
                <Box>
                    {isEditCoreLearningObject ? (
                        <TextField
                            variant="standard"
                            sx={{ width: '100%' }}
                            value={coreLearningObject}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setCoreLearningObject(event.target.value)
                            }
                        />
                    ) : (
                        <Typography margin="9px 0">{coreLearningObject}</Typography>
                    )}
                </Box>
            </Paper>
            <Paper variant="outlined" sx={{ m: '10px 0', p: 2 }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'steelblue'
                    }}
                >
                    <AccountTreeIcon sx={{ mr: 1 }} />
                    <Typography fontWeight="bold">子目标分解</Typography>
                    <Box sx={{ ml: 'auto' }}>
                        <Button
                            variant="contained"
                            size="small"
                            disableElevation
                            startIcon={<AddBoxIcon />}
                            onClick={() => setIsAddNewSubGoal(true)}
                        >
                            添加子目标
                        </Button>
                        <Modal
                            maxWidth="xs"
                            open={isAddNewSubGoal}
                            onClose={() => setIsAddNewSubGoal(false)}
                            title={'添加子目标'}
                            content={
                                <>
                                    <TextField
                                        variant="standard"
                                        label="子目标内容"
                                        placeholder="请输入子目标的内容描述"
                                        sx={{ width: '100%' }}
                                        value={newSubGoal}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                            setNewSubGoal(event.target.value)
                                        }
                                    />
                                </>
                            }
                            actions={
                                <>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        disableElevation
                                        onClick={() => {
                                            setAddNewNode(newSubGoal);
                                            setIsAddNewSubGoal(false);
                                        }}
                                    >
                                        确认
                                    </Button>
                                    <Button
                                        size="small"
                                        color="secondary"
                                        onClick={() => setIsAddNewSubGoal(false)}
                                    >
                                        取消
                                    </Button>
                                </>
                            }
                        />
                    </Box>
                </Box>
                {/* react flow */}
                <Box sx={{ height: 'calc(100vh - 300px)', m: '10px 0' }}>
                    <LearningObjectFlow
                        coreLearningObject={coreLearningObject}
                        newNodeLabel={addNewNode}
                    />
                </Box>
            </Paper>
        </Box>
    );
};

export default LearningObject;
