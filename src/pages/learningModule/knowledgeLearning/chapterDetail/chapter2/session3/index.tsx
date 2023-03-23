import React, { useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { updateChapterLearningProcess } from '@/store/slices';
// agent help
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import { metacognitivePrompt, getAction } from '@/store/slices';
import Button from '@mui/material/Button';

const Chapter2Session3 = () => {
    const dispatch = useAppDispatch();
    const currentActor = useAppSelector((state) => state.actionLog.actor);
    const currentMsgID = useAppSelector((state) => state.agent.currentId);
    const ChapterInfoList = useAppSelector((state) => state.knowledgeLearning.chapterInfoList);
    const [number, setNumber] = useState<number | number[]>(parseInt(ChapterInfoList[5].progress));

    const handleChangeNumber = (event: Event, newValue: number | number[]) => {
        setNumber(newValue);
        dispatch(
            updateChapterLearningProcess({
                chapterId: '6',
                process: newValue + ''
            })
        );
    };

    return (
        <Box>
            <Box
                sx={{
                    position: 'absolute',
                    right: '30px',
                    top: '180px',
                    '& *': {
                        p: '0px',
                        lineHeight: '32px'
                    }
                }}
            >
                <Tooltip title="认知监控-学习过程监控" arrow>
                    <IconButton
                        size="small"
                        sx={{ ml: 1 }}
                        onClick={() => {
                            dispatch(
                                metacognitivePrompt({
                                    promptType: '认知监控-学习过程监控',
                                    currentMsgID: currentMsgID
                                })
                            );
                            dispatch(
                                getAction({
                                    actor: currentActor,
                                    verb: '弹出提示框',
                                    object: '元认知提示 id：' + currentMsgID,
                                    result: '弹出元认知提示：认知监控-学习过程监控',
                                    time: '',
                                    context: {
                                        cognitiveContext: '认知监控',
                                        otherContext: null,
                                        taskContext: '认知监控-学习过程监控'
                                    }
                                })
                            );
                        }}
                    >
                        <HelpIcon fontSize="inherit" />
                    </IconButton>
                </Tooltip>
            </Box>
            <Paper variant="outlined" sx={{ mt: 2, p: '20px 30px', '& *': { lineHeight: '27px' } }}>
                <Typography variant="h4" fontWeight="bold">
                    第三节 认知动力主义的认知取向
                </Typography>
                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    1. 情境认知
                </Typography>
                <Typography variant="body1">
                    情境认知主张要关注情境在和认知者的经验建立有意义的连接以提升知识、技能和经验之间的联系时的重要性，强调的是学习与学习环境的特定相关性，以及有意识或无意识的学习和适应新的社会群体的行为和信念体系（合法的边缘性参与）。知识与语言一样，它的构成中有指示性的部分，因此是一个生成于环境和活动中的产物。例如，一个概念将会在每个新使用的情境中演化，因为新的情境、商谈、活动将会不可避免地将其重铸为一个更新的形式。知识与对象有着具体的情境关系，如果脱离了这种关系则会变得毫无意义。
                </Typography>
                <Typography variant="body1">情境认知中有几个核心要素：</Typography>
                <Typography variant="body1">
                    <b>可供性（affordnce）：</b>
                    是指物理客体如何提供与认知主体交互的功能，以及提供何种交互的功能。在任何一个认知代理及其环境的作用中，内在的条件或者环境特征都允许认知代理来向环境执行某种行动（Greeno,
                    1994）
                </Typography>
                <Typography variant="body1">
                    <b>有效性（effectifites）：</b>
                    是指认知代理用以决定能做什么的能力，以及后来将发生的交互作用。知觉和行动是共同的由在某个时刻同时起作用的可供性和有效性所决定的。代理直接的知觉并作用于环境，在有效性的基础上决定提供什么样的可供性，而并不是仅仅回顾存贮的符号表征。知觉——行动而非记忆与恢复，一个知觉和行动的代理始于发展的环境耦合起来的。在情境认知理论中，表征指环境的外部形式，通过社会交互作用被创造出来表达意义，如语言、手势、艺术等，并且被知觉和以第一人称的意义上起作用
                </Typography>
                <Typography variant="body1">
                    <b>合法的边缘性参与（legitimate peripheral participation）：</b>
                    描述新人是如何成为一个学习共同体的一部分。合法的边缘性参与是情境认知的中心，所有的参与者通过持续的参与都有途径来获取和使用对其共同体游泳的资源，活动在一个共同体的情境中展开
                </Typography>
                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    2. 具身认知
                </Typography>
                <Typography variant="body1">
                    具身认知反对将心智视为一个操作符号的值专注于形式规则和过程的装置。Varela认为，认知依赖于经验，而经验来自具有各种感觉运动（sensorimotor）能力的身体（感知运动循环），而且，这些感觉运动的能力本身植根于一个更大的情境中，包含了生理、心理和文化等各个方面。
                </Typography>
                <Typography variant="body1">
                    从狭义上看，具身认知强调的是我们的心智、理性能力都是具身的，它们有赖于我们身体的具体的生理神经结构和活动图式（schema）；从广义上看，它指的是认知过程、认知发展和高水平的认知深深地根植于人的身体结构以及最初的身体和师姐的相互作用中。上述Wilson提出的六个观点，这里全部展开：
                </Typography>
                <Typography variant="body1">
                    ① 认知是情境的，认知活动发生于真实世界情境中，并且内在的涉及知觉和行动
                </Typography>
                <Typography variant="body1">
                    ②
                    认知是随实践变化的（time-pressured），认知必须通过如何在与环境的实时交互作用的压力下实现其功能
                </Typography>
                <Typography variant="body1">
                    ③
                    认知将工作卸载（off-load）到环境中，由于我们处理信息的能力有限，我们会利用环境减轻认知的工作量
                </Typography>
                <Typography variant="body1">
                    ④
                    环境是认知系统的一部分。在心智和世界之间的信息流是密集且连续的，研究者在研究认知活动时，难以将心智作为一个有意义的独立分析单元，而需要从系统的角度看待
                </Typography>
                <Typography variant="body1">
                    ⑤ 认知是用于行动的（cognition is for
                    action），心智的功能是指导行动的，诸如知觉或记忆等认知机制必须通过他们与环境相适应的行为的贡献来理解
                </Typography>
                <Typography variant="body1">
                    ⑥ 离线的认知是基于身体的（off-line cognition is
                    body-based），心智活动即使脱离了环境，它也根植于包括与环境交互作用的机制中，即感觉处理和运动调节的机制。
                </Typography>
                <Typography variant="body1">因此，具身认知具有以下的特征</Typography>
                <Typography variant="body1">
                    ①
                    具身性：心智不仅仅在头脑中，而是具身于包含在环境里的整个组织中。比如，空间认知能力就是由眼、手、头、脚等身体运动与大脑、环境之间的交互；又如我所研究的元认知，可以使用撰写日志、思维可视化等环境与工具，帮助学生在与环境的交互过程中（如撰写行为、修改行为、出声思考等），去认知自己的认知状态和发展情况；以及学生对学习过程中的身体感受、体验、情绪的具身监控，如何用元认知作用到此也是一个有趣的研究主题。
                </Typography>
                <Typography variant="body1">
                    ②
                    涌现：具身认知由自然发生的和自组织的过程组成，该过程贯穿和连接了大脑、身体和环境。涌现出现与各种地方要素和规则形成行动模式的系统中。通过自组织方式的涌现包括两条循环的因果回路。除了局部的交互作用上行引发全局模式之外，还有一个相应的下行因果链，由全局模式来控制和调节局部交互行为（如设置环境和边界条件）。这种下行的因果链是复杂非线性动力系统的典型特征，并可能发生于大脑、身体及环境的动力学耦合的多重层面上。
                </Typography>
                <Typography variant="body1">
                    ③ 自我-他人的共同决定（self-other
                    go-determination）：在社会活动中，具身认知从自我和他人的共同决定的动态中涌现出来。
                </Typography>
                <Typography variant="body1">
                    因此，具身认知的视角下，心智不再是积极的表征工具，其主要功能也不只是为外部世界创造内部模型。认知的内部过程和外部过程之间的联系时非常复杂的，包括内部来源（记忆、关注、执行功能）和外部来源（对象、人造物、环境）在不同时空范围内的协作。
                </Typography>
                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    3. 延展认知
                </Typography>
                <Typography variant="body1">
                    延展认知假设和认知心理学的传统假设相对，笼统地说，传统的的认知心理学中认为认知就是脑内神经元相互作用构成的活动，或者更确切的说是神经元的子集——因为不是所有神经元都参与了相应的认知过程。最多可以沿着神经系统把认知的含义扩展到感觉器官上去，但更进一步的就超出常规的直觉了。
                </Typography>
                <Typography variant="body1">
                    当然这不是严肃的理论反思，只是一种经验直觉的反思得到的预设，认知心理学家大都是在这些预设的基础上从事研究的。而把这些预设提炼出来、考察其合理性并作相应的论证就是哲学活动。认知心理学家一般不考虑这种哲学问题，他们依赖自己的直觉就能把研究做下去而且得到了显著的成果。
                </Typography>
                <Typography variant="body1">
                    延展认知则把认知的含义从传统的神经系统一直扩展到了我们的肌肉、使用的的工具甚至身边的环境中去。当然延展认知假设自身就分成很多个派别，并且依赖于不同的延展条件。
                </Typography>
                <Typography variant="body1">
                    这个问题本身还是有值得探讨的意义，因为如果对什么是认知的界定含糊不清，那认知心理学的根基就有问题，这会影响到方法论方面的问题。比如一旦延展认知假设成立，那可能很多人就会从人、工具和环境交互运作成的一个混沌的动力学系统出发来研究认知。
                </Typography>
                <Typography variant="body1">延展认知的认知取向中，存在五个关键的论证：</Typography>
                <Typography variant="body1" fontWeight="bold">
                    （1）耦合论证
                </Typography>
                <Typography variant="body1">
                    耦合论证诉诸于因果性，认为身体之外的工具和环境因素因果地影响了我们的认知，所以是认知的一部分。比如在大数运算中由于人类心算能力的有限就要借助纸笔辅助。在耦合论证的支持者看来，纸和笔就以因果的方式参与进了我们的认知之中，因而是认知的一部分。
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    （2）认知均等论证
                </Typography>
                <Typography variant="body1">
                    还是拿纸笔运算的例子来说，认知均等论证可能会假设存在一个超强心算能力的人，他在心里计算的过程和纸笔运算的过程在形式上相同，因此脑内脑外的活动没什么区别，都属于认知。
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    （3）延展认知系统论证
                </Typography>
                <Typography variant="body1">
                    延展认知系统论证是耦合论证的一个版本，就是把诸如纸笔运算作为一个被因果联系起来的系统，然后从系统中推出延展认知出来。
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    （4）互补性论证
                </Typography>
                <Typography variant="body1">
                    互补性论证认为人、工具和环境通过分工协作实现了一加一大于二的效果，提高了执行认知任务的效率，所以工具和环境也是认知的一部分。
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    （5）演化论证
                </Typography>
                <Typography variant="body1">
                    演化论证利用了演化论的资源，认为人类的认知是自然选择的结果，因而自然环境应该作为认知结构的一部分被纳入认知的范畴中去。
                </Typography>
            </Paper>
            <Paper sx={{ p: '20px 30px', mt: '10px' }}>
                <Box sx={{ display: 'flex' }}>
                    <Typography fontWeight="bold">完成进度:{number}%</Typography>
                    <Box
                        sx={{
                            '& *': {
                                p: '0px',
                                lineHeight: '32px'
                            }
                        }}
                    >
                        <Tooltip title="认知调节-学习过程监控" arrow>
                            <IconButton
                                size="small"
                                sx={{ ml: 1 }}
                                onClick={() => {
                                    dispatch(
                                        metacognitivePrompt({
                                            promptType: '认知调节-学习过程监控',
                                            currentMsgID: currentMsgID
                                        })
                                    );
                                    dispatch(
                                        getAction({
                                            actor: currentActor,
                                            verb: '弹出提示框',
                                            object: '元认知提示 id：' + currentMsgID,
                                            result: '弹出元认知提示：认知调节-学习过程监控',
                                            time: '',
                                            context: {
                                                cognitiveContext: '认知调节',
                                                otherContext: null,
                                                taskContext: '认知调节-学习过程监控'
                                            }
                                        })
                                    );
                                }}
                            >
                                <HelpIcon fontSize="inherit" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
                <Slider
                    value={number}
                    onChange={handleChangeNumber}
                    step={5}
                    marks
                    min={0}
                    max={100}
                    size="small"
                />
                <Button
                    onClick={() => {
                        dispatch(
                            getAction({
                                actor: currentActor,
                                verb: '点击按钮',
                                object: '按钮：保存进度按钮',
                                result: '对当前学习进度进行调控',
                                time: '',
                                context: {
                                    cognitiveContext: '认知监控',
                                    otherContext: null,
                                    taskContext: '学习进度：' + number
                                }
                            })
                        );
                    }}
                >
                    保存进度
                </Button>
            </Paper>
        </Box>
    );
};

export default Chapter2Session3;
