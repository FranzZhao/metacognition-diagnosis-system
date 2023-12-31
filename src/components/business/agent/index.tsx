import React, { useEffect, useState } from 'react';
// mui5
import { styled, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Fade from '@mui/material/Fade';
import bot1 from '../../../assets/img/ai.png';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
// xml
import { CELearningProcessMonitoringXML } from '@/utils/agentXML/cognitiveEvaluation/learningProcessMonitoring';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { savePromptAnswer, getAction } from '@/store/slices';

interface AgentMsgStep {
    step: string;
    promptTitle: string;
    promptContent: string;
    answer: string;
}

const AgentCard = ({ msg, open, handleClose }) => {
    const dispatch = useAppDispatch();
    const currentActor = useAppSelector((state) => state.actionLog.actor);
    const currentPromptId = useAppSelector((state) => state.agent.currentMsg)?.id;
    const theme = useTheme();
    // const [open, setOpen] = useState(false);
    const [step, setStep] = useState<AgentMsgStep[]>([]);
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        setStep([...msg.msgList]);
    }, [msg]);

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const stepBack = () => {
        setCurrentStep(currentStep - 1);
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                right: '10px',
                top: '60px',
                zIndex: '10'
            }}
        >
            <Fade in={open}>
                <Card
                    sx={{
                        width: '500px',
                        bgcolor: '#252a38e3',
                        color: '#fff',
                        boxShadow: '0px 0px 20px #181818',
                        filter: 'blur(18)'
                    }}
                >
                    <CardHeader
                        avatar={
                            <Avatar
                                src={bot1}
                                sx={{
                                    width: '35px',
                                    height: '35px',
                                    bgcolor: theme.palette.secondary.main,
                                    borderRadius: '10px',
                                    '& img': {
                                        width: '25px',
                                        height: '25px'
                                    }
                                }}
                            />
                        }
                        title={
                            <Typography
                                fontWeight="bold"
                                fontSize="1.1rem"
                                color={theme.palette.secondary.light}
                            >
                                Anduril
                            </Typography>
                        }
                        action={
                            <Tooltip title="最小化" arrow>
                                <IconButton
                                    size="small"
                                    sx={{
                                        maxWidth: '24px',
                                        maxHeight: '24px'
                                    }}
                                    onClick={() => {
                                        handleClose();
                                        dispatch(
                                            getAction({
                                                actor: currentActor,
                                                verb: '点击按钮',
                                                object: '按钮: 元认知提示最小化',
                                                result: '关闭元认知提示id:' + currentPromptId,
                                                time: '',
                                                context: {
                                                    cognitiveContext: '元认知活动',
                                                    otherContext: null,
                                                    taskContext: null
                                                }
                                            })
                                        );
                                    }}
                                >
                                    <RemoveCircleOutlineIcon
                                        sx={{
                                            color: theme.palette.grey[300],
                                            fontSize: '18px'
                                        }}
                                    />
                                </IconButton>
                            </Tooltip>
                        }
                        sx={{
                            mt: '5px',
                            height: '50px'
                        }}
                    />
                    <CardContent
                        sx={{
                            mb: '10px',
                            pt: '0px',
                            height: '115px',
                            overflowY: 'overlay',
                            '&::-webkit-scrollbar': {
                                width: 5
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: '#a4b7c670',
                                borderRadius: '4px'
                            }
                        }}
                    >
                        <Box>
                            {step.length > 0 ? (
                                step[currentStep - 1].promptTitle +
                                '：' +
                                step[currentStep - 1].promptContent
                            ) : (
                                <></>
                            )}
                        </Box>
                        <Box>
                            {step.length > 0 && (
                                <InputBase
                                    placeholder="请输入你的回复"
                                    multiline
                                    sx={{
                                        width: '100%',
                                        borderBottom: '1px solid white',
                                        color: 'white',
                                        mt: 1
                                    }}
                                    value={step[currentStep - 1].answer}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        let newStepContent: AgentMsgStep[] = [];
                                        step.map((item, index) => {
                                            let answer = '';
                                            if (item.step === step[currentStep - 1].step) {
                                                answer = event.target.value;
                                            } else {
                                                answer = item.answer;
                                            }
                                            newStepContent.push({
                                                ...item,
                                                answer: answer
                                            });
                                        });
                                        setStep(newStepContent);
                                    }}
                                />
                            )}
                        </Box>
                    </CardContent>
                    <CardActions>
                        {currentStep !== 1 && (
                            <Button
                                variant="text"
                                size="small"
                                color="secondary"
                                disableElevation
                                sx={{ ml: 'auto' }}
                                onClick={() => {
                                    dispatch(
                                        getAction({
                                            actor: currentActor,
                                            verb: '点击按钮',
                                            object: '按钮: 上一步',
                                            result: '返回元认知提示的上一步',
                                            time: '',
                                            context: {
                                                cognitiveContext: '元认知活动',
                                                otherContext:
                                                    '返回的信息：' +
                                                    step[currentStep - 2].promptTitle +
                                                    '-' +
                                                    step[currentStep - 2].promptContent,
                                                taskContext: null
                                            }
                                        })
                                    );
                                    stepBack();
                                }}
                            >
                                上一步
                            </Button>
                        )}
                        {currentStep === step.length ? (
                            <Button
                                variant="contained"
                                size="small"
                                color="secondary"
                                disableElevation
                                sx={{ ml: 'auto' }}
                                onClick={() => {
                                    handleClose();
                                    // console.log(step);
                                    // 保存到redux中
                                    dispatch(
                                        savePromptAnswer({
                                            id: currentPromptId,
                                            msgList: step
                                        })
                                    );
                                    dispatch(
                                        getAction({
                                            actor: currentActor,
                                            verb: '点击按钮',
                                            object: '按钮: 完成',
                                            result: '完成元认知提示id:' + currentPromptId,
                                            time: '',
                                            context: {
                                                cognitiveContext: '元认知活动',
                                                otherContext:
                                                    '回复内容：' + step[currentStep - 1].answer,
                                                taskContext: null
                                            }
                                        })
                                    );
                                }}
                            >
                                完成
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                size="small"
                                color="secondary"
                                disableElevation
                                sx={{ ml: 'auto' }}
                                onClick={() => {
                                    nextStep();
                                    dispatch(
                                        getAction({
                                            actor: currentActor,
                                            verb: '输入文本',
                                            object: '元认知提问',
                                            result: '完成第' + currentStep + '步的元认知提示回答',
                                            time: '',
                                            context: {
                                                cognitiveContext: '元认知活动',
                                                otherContext:
                                                    '回复内容：' + step[currentStep - 1].answer,
                                                taskContext:
                                                    '元认知提问：' +
                                                    step[currentStep - 1].promptContent
                                            }
                                        })
                                    );
                                }}
                            >
                                下一步
                            </Button>
                        )}
                    </CardActions>
                </Card>
            </Fade>
        </Box>
    );
};

export default AgentCard;
