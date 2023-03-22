import React, { useEffect, useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// icon
import SaveIcon from '@mui/icons-material/Save';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
// redux
import { useAppSelector, useAppDispatch } from '@/store';
import {
    LearningObjectSlice,
    updateCoreLearningObject,
    updateSubLearningObjects
} from '@/store/slices/learningObjectSlice';

const LearningObject = () => {
    const dispatch = useAppDispatch();
    const currentCoreLearningObject = useAppSelector(
        (state) => state.learningObject.coreLearningObject
    );
    const currentSubGoals = useAppSelector((state) => state.learningObject.subLearningObjects);
    const nextSubGoalId = useAppSelector((state) => state.learningObject.nextSubLearningObjectId);
    // 是否编辑核心目标
    const [isEditCoreLearningObject, setIsEditCoreLearningObject] = useState(false);
    // 核心目标内容
    const [coreLearningObject, setCoreLearningObject] = useState<string>('');
    // 子任务
    const [subGoals, setSubGoals] = useState<any>([]);

    useEffect(() => {
        setCoreLearningObject(currentCoreLearningObject);
        setIsEditCoreLearningObject(currentCoreLearningObject.length === 0);
        let list: any = [];
        currentSubGoals.map((goal) => {
            list.push({
                id: goal.id,
                text: goal.text,
                progress: goal.progress
            });
        });
        setSubGoals([...list]);
    }, []);

    // 修改目标文本内容
    const handleChangeGoalText = (id, value) => {
        let newSubGoals: any[] = [];
        subGoals.map((goal) => {
            newSubGoals.push({
                id: goal.id,
                text: goal.id === id ? value : goal.text,
                progress: goal.progress
            });
        });
        setSubGoals(newSubGoals);
        dispatch(updateSubLearningObjects(newSubGoals));
    };

    // 修改目标进度
    const handleChangeGoalNumber = (id, value) => {
        let newSubGoals: any[] = [];
        subGoals.map((goal) => {
            newSubGoals.push({
                id: goal.id,
                text: goal.text,
                progress: goal.id === id ? value : goal.progress
            });
        });
        setSubGoals(newSubGoals);
        dispatch(updateSubLearningObjects(newSubGoals));
    };

    // 删除目标
    const handleDeleteSubGoalByID = (id) => {
        let newSubGoals = [...subGoals];
        subGoals.map((goal, idx) => {
            if (goal.id === id) {
                newSubGoals.splice(idx, 1);
            }
        });
        setSubGoals(newSubGoals);
        dispatch(updateSubLearningObjects(newSubGoals));
    };

    // 添加子目标
    const handleAddNewGoal = () => {
        let newSubGoals = [...subGoals];
        newSubGoals.push({ id: nextSubGoalId + '', text: '', progress: 0 });
        setSubGoals(newSubGoals);
        dispatch(updateSubLearningObjects(newSubGoals));
        dispatch(LearningObjectSlice.actions.increaseNextId());
    };

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
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setCoreLearningObject(event.target.value);
                                dispatch(updateCoreLearningObject(event.target.value));
                            }}
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
                            onClick={handleAddNewGoal}
                        >
                            添加子目标
                        </Button>
                    </Box>
                </Box>
                <Box>
                    {subGoals.map((goal) => {
                        return (
                            <SubGoalPaper
                                key={goal.id}
                                data={goal}
                                handleChangeGoal={handleChangeGoalText}
                                handleChangeProgress={handleChangeGoalNumber}
                                handleDeleteSubGoalByID={handleDeleteSubGoalByID}
                            />
                        );
                    })}
                </Box>
            </Paper>
        </Box>
    );
};

const SubGoalPaper = ({
    data,
    handleChangeGoal,
    handleChangeProgress,
    handleDeleteSubGoalByID
}) => {
    const [goalText, setGoalText] = useState('');
    const [number, setNumber] = useState<number | number[]>(0);

    useEffect(() => {
        setGoalText(data.text);
        setNumber(data.progress);
    }, [data]);

    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGoalText(event.target.value);
        handleChangeGoal(data.id, event.target.value);
    };

    const handleChangeNumber = (event: Event, newValue: number | number[]) => {
        setNumber(newValue);
        handleChangeProgress(data.id, newValue);
    };

    return (
        <Paper variant="outlined" sx={{ p: '10px 15px', m: '10px 0' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box>
                    <Tooltip title="删除子任务" arrow>
                        <IconButton
                            size="small"
                            sx={{ borderRadius: '5px' }}
                            onClick={() => handleDeleteSubGoalByID(data.id)}
                        >
                            <IndeterminateCheckBoxIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
                <TextField
                    variant="standard"
                    value={goalText}
                    onChange={handleChangeText}
                    sx={{ width: '60%', ml: 1 }}
                    placeholder="请输入子目标内容"
                />
                <Box sx={{ ml: 'auto' }}>
                    完成进度：<b>{number}%</b>
                </Box>
            </Box>
            <Box sx={{ width: '100%', mt: 1 }}>
                <Slider
                    value={number}
                    onChange={handleChangeNumber}
                    step={5}
                    marks
                    min={0}
                    max={100}
                    size="small"
                />
            </Box>
        </Paper>
    );
};

export default LearningObject;
