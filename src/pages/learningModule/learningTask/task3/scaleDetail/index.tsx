import React, { useEffect, useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
// custom components
import ProjectEvaluatedScale from '@/components/business/scale';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { saveScaleById } from '@/store/slices';
// agent help
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import { metacognitivePrompt, getAction } from '@/store/slices';

const ScaleDetail = ({ handleOpenList }) => {
    const dispatch = useAppDispatch();
    const currentActor = useAppSelector((state) => state.actionLog.actor);
    const currentMsgID = useAppSelector((state) => state.agent.currentId);
    const currentScaleId = useAppSelector((state) => state.learningTask.selectScaleId);
    const currentScaleContent = useAppSelector((state) => state.learningTask.scaleList).filter(
        (scale) => scale.id === currentScaleId
    )[0];
    const [title, setTitle] = useState(currentScaleContent['title']);
    const [scaleData, setScaleData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let currentScaleData = [
            currentScaleContent.normative1,
            currentScaleContent.normative2,
            currentScaleContent.normative3,
            currentScaleContent.purpose1,
            currentScaleContent.purpose2,
            currentScaleContent.purpose3,
            currentScaleContent.science1,
            currentScaleContent.science2,
            currentScaleContent.science3,
            currentScaleContent.innovation1,
            currentScaleContent.innovation2
        ];
        setScaleData(currentScaleData);
        console.log('scale data =>', currentScaleData);
    }, [currentScaleId]);

    const handleSaveScaleContent = () => {
        dispatch(
            saveScaleById({
                scaleId: currentScaleId,
                title: title,
                score: total,
                normative1: scaleData[0],
                normative2: scaleData[1],
                normative3: scaleData[2],
                purpose1: scaleData[3],
                purpose2: scaleData[4],
                purpose3: scaleData[5],
                science1: scaleData[6],
                science2: scaleData[7],
                science3: scaleData[8],
                innovation1: scaleData[9],
                innovation2: scaleData[10]
            })
        );
        // action log
        dispatch(
            getAction({
                actor: currentActor,
                verb: '任务评价',
                object: '方案评价与迭代',
                result: '评价标题：' + title + ', 得分：' + total,
                time: '',
                context: {
                    cognitiveContext: '认知评价',
                    otherContext: null,
                    taskContext: '认知评价-任务迭代评价'
                }
            })
        );
    };

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    m: '10px 0',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Typography fontWeight="bold">
                    现在请你依据任务评价量表，对你所完成的方案进行自我评价吧！
                </Typography>
                <Tooltip title="认知评价-任务迭代评价" arrow>
                    <IconButton
                        size="small"
                        sx={{ ml: 'auto', mr: 1 }}
                        onClick={() => {
                            dispatch(
                                metacognitivePrompt({
                                    promptType: '认知评价-任务迭代评价',
                                    currentMsgID: currentMsgID
                                })
                            );
                            dispatch(
                                getAction({
                                    actor: currentActor,
                                    verb: '弹出提示框',
                                    object: '元认知提示 id：' + currentMsgID,
                                    result: '弹出元认知提示：' + '认知评价-任务迭代评价',
                                    time: '',
                                    context: {
                                        cognitiveContext: '认知评价',
                                        otherContext: null,
                                        taskContext: '认知评价-任务迭代评价'
                                    }
                                })
                            );
                        }}
                    >
                        <HelpIcon fontSize="inherit" />
                    </IconButton>
                </Tooltip>
                <Button
                    sx={{ mr: 1 }}
                    disableElevation
                    size="small"
                    onClick={() => {
                        handleOpenList();
                        dispatch(
                            getAction({
                                actor: currentActor,
                                verb: '点击按钮',
                                object: '按钮：返回评价列表',
                                result: '重新返回方案评价列表',
                                time: '',
                                context: {
                                    cognitiveContext: '认知评价',
                                    otherContext: null,
                                    taskContext: '认知评价-任务迭代评价'
                                }
                            })
                        );
                    }}
                >
                    返回评价列表
                </Button>
                <Button
                    variant="contained"
                    disableElevation
                    size="small"
                    onClick={handleSaveScaleContent}
                >
                    保存评价结果
                </Button>
            </Box>
            <TextField
                variant="standard"
                sx={{ width: '100%', mb: 1 }}
                value={title}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setTitle(event.target.value);
                }}
            />
            <ProjectEvaluatedScale
                isNotEditable={false}
                data={scaleData}
                handleChangeNumber={(data, total) => {
                    // console.log('res =>', data);
                    setScaleData(data);
                    setTotal(total);
                }}
            />
        </Box>
    );
};

export default ScaleDetail;
