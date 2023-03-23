import React from 'react';
// mui5
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// icon
import ExtensionIcon from '@mui/icons-material/Extension';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import TaskIcon from '@mui/icons-material/Task';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
// react-router
import { Link } from 'react-router-dom';
// img
import learningBG from '@/assets/img/learning-bg.jpg';
import introduction from '@/assets/img/introduction.jpg';
// agent help
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import { useAppDispatch, useAppSelector } from '@/store';
import { metacognitivePrompt, getAction } from '@/store/slices';

const LearningIntroduction = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const currentActor = useAppSelector((state) => state.actionLog.actor);
    const currentMsgID = useAppSelector((state) => state.agent.currentId);

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
                        学习概览：复杂系统与学习理论前沿探究
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: '70%', mr: 2 }}>
                    {/* 左侧学习内容简介 */}
                    <Paper variant="outlined" sx={{ p: '10px', width: '100%', mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', m: '10px 0' }}>
                            <ChromeReaderModeIcon sx={{ m: '0 10px' }} />
                            <Typography fontWeight="bold">学习内容简介</Typography>
                            {/* Agent */}
                            <Tooltip title="学习目标设定" arrow>
                                <IconButton
                                    size="small"
                                    sx={{ ml: 'auto' }}
                                    onClick={() => {
                                        dispatch(
                                            metacognitivePrompt({
                                                promptType: '认知计划-学习目标设定',
                                                currentMsgID: currentMsgID
                                            })
                                        );
                                        dispatch(
                                            getAction({
                                                actor: currentActor,
                                                verb: '弹出提示框',
                                                object: '元认知提示 id：' + currentMsgID,
                                                result: '弹出元认知提示：认知计划-学习目标设定',
                                                time: '',
                                                context: {
                                                    cognitiveContext: '认知计划',
                                                    otherContext: null,
                                                    taskContext: '学习内容概览+学习目标设定'
                                                }
                                            })
                                        );
                                    }}
                                >
                                    <HelpIcon fontSize="inherit" />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Box sx={{ p: '0 10px', lineHeight: '27px' }}>
                            20世纪末以来，随着学习环境愈加复杂、介入教育系统内的主体愈加多样，传统线性、单维、静态的思路与方法已经难以解决复杂学习问题。而同样在20世纪中后期崛起的复杂系统科学则为研究复杂现象、人类复杂活动等提供了有效的理论方向与技术工具。因此，在本次学习中，我们将概览复杂系统科学的全貌，并尝试探究学习科学领域中的复杂系统研究，一起挑战学习科学领域的最前沿吧！
                        </Box>
                    </Paper>
                    {/* 左侧学习任务简介 */}
                    <Paper variant="outlined" sx={{ p: '10px', width: '100%', mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', m: '10px 0' }}>
                            <TaskIcon sx={{ m: '0 10px' }} />
                            <Typography fontWeight="bold">学习任务简介</Typography>
                        </Box>
                        <Box sx={{ p: '0 10px', lineHeight: '27px' }}>
                            在本次学习中，你将通过学习《复杂系统与学习理论》的知识，并在特定任务情境中运用你所学习到的知识解决问题，我们希望你能够运用好复杂系统理论的知识与方法，创新性地解决教育管理、教学与学习过程中的复杂性问题。我们会为你提供两个任务情境，一是语言课堂学习的问题，二是教育测评与考试的问题。你可以根据自己的兴趣、知识掌握程度等选择一个任务情境后，充分运用复杂性理论提供解决问题的方案。
                        </Box>
                    </Paper>
                    {/* 左侧学习目标设定提示 */}
                    <Paper variant="outlined" sx={{ p: '10px', width: '100%' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                m: '10px 0',
                                color: theme.palette.error.main
                            }}
                        >
                            <CrisisAlertIcon sx={{ m: '0 10px' }} />
                            <Typography fontWeight="bold">学习目标设定</Typography>
                        </Box>
                        <Box sx={{ p: '0 10px', lineHeight: '27px' }}>
                            在了解基本的知识学习内容与任务之后，请你到
                            <Link
                                to="/learningManagement"
                                style={{ fontWeight: 'bold', color: theme.palette.error.main }}
                                onClick={() => {
                                    dispatch(
                                        getAction({
                                            actor: currentActor,
                                            verb: '点击链接',
                                            object: '跳转链接：学习管理页面',
                                            result: '从学习概览页面到学习管理页面',
                                            time: '',
                                            context: {
                                                cognitiveContext: '认知计划',
                                                otherContext: null,
                                                taskContext: '学习目标设定-初步设定'
                                            }
                                        })
                                    );
                                }}
                            >
                                “学习管理&rarr;学习目标”
                            </Link>
                            中填写自己的学习计划吧！在其中你还可以规划待办事项或撰写反思日志。
                            <b style={{ color: theme.palette.primary.main }}>
                                请在学习与任务完成过程中充分运用学习工具哦！
                            </b>
                        </Box>
                    </Paper>
                </Box>
                {/* 右侧任务要求介绍 */}
                <Paper variant="outlined" sx={{ p: '10px', width: '30%' }}>
                    <Box>
                        <img
                            alt=""
                            src={introduction}
                            style={{
                                width: '100%',
                                height: '160px',
                                // marginTop: '5px',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontWeight: 'bold',
                                p: '10px 0'
                            }}
                        >
                            <ExtensionIcon sx={{ mr: 1 }} />
                            预备知识
                        </Box>
                        <Typography>学习科学、教育心理学、教育研究方法基础；</Typography>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontWeight: 'bold',
                                p: '10px 0'
                            }}
                        >
                            <EmojiObjectsIcon sx={{ mr: 1 }} />
                            学习收获
                        </Box>
                        <Typography>
                            复杂系统理论入门、学习科学前沿研究视角、理论与教育实践融合、复杂教育研究思维
                        </Typography>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontWeight: 'bold',
                                p: '10px 0'
                            }}
                        >
                            <MenuBookIcon sx={{ mr: 1 }} />
                            拓展资料
                        </Box>
                        <Typography>
                            Complex Systems and Applied Linguistics, Psychology of Learning for
                            Instruction, Embodiment and Embodied Design
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
};

export default LearningIntroduction;
