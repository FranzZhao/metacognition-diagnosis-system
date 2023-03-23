import React, { useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
// img
import img2_1 from '@/assets/img/img2-1.gif';
import img2_2 from '@/assets/img/img2-2.gif';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { updateChapterLearningProcess } from '@/store/slices';
// agent help
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import { metacognitivePrompt, getAction } from '@/store/slices';
import Button from '@mui/material/Button';

const Chapter1Session2 = () => {
    const dispatch = useAppDispatch();
    const currentActor = useAppSelector((state) => state.actionLog.actor);
    const currentMsgID = useAppSelector((state) => state.agent.currentId);
    const ChapterInfoList = useAppSelector((state) => state.knowledgeLearning.chapterInfoList);
    const [number, setNumber] = useState<number | number[]>(parseInt(ChapterInfoList[1].progress));

    const handleChangeNumber = (event: Event, newValue: number | number[]) => {
        setNumber(newValue);
        dispatch(
            updateChapterLearningProcess({
                chapterId: '2',
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
                    第二节 复杂系统及其内涵
                </Typography>
                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    1. 复杂系统
                </Typography>
                <Typography variant="body1">
                    复杂系统 complex
                    system由许多相互作用的元素组成。复杂系统的例子无处不在：全球气候、有机体、人脑、电网、交通、通讯系统等基础设施网络、城市社会和经济组织网络、生态系统、活细胞、甚至整个宇宙，这些都可以看作是复杂系统。
                </Typography>
                <Typography variant="body1">
                    复杂系统是指那些本身难以直接建模的系统，因为系统组成元素之间以及系统和环境之间存在依赖、竞争、关联等复杂的相互作用。系统之所以“复杂”，是因为在这些相互作用中会产生如非线性
                    nonlinearity、涌现 emergence、自发秩序 spontaneous order 、适应性
                    adaptation以及反馈回路 feedback
                    loops等特殊性质。因为这些系统出现在不同领域，所以对不同领域系统的共性研究慢慢发展成为一个独立的研究领域。大部分情况下，复杂系统都可以表示成一个网络，网络中的节点表示元素，连边表示相互作用。
                </Typography>
                <Typography variant="body1">
                    复杂系统理论是系统科学中的一个前沿方向，它是复杂性科学的主要研究任务。复杂性科学被称为21
                    世纪的科学，它的主要目的就是要揭示复杂系统的一些难以用现有科学方法解释的动力学行为。与传统的还原论方法不同，复杂系统理论强调用整体论和还原论相结合的方法去分析系统。目前，复杂系统理论还处于萌芽阶段，它可能蕴育着一场新的系统学乃至整个传统科学方法的革命。生命系统、社会系统都是复杂系统，复杂系统理论的应用在系统生物学的研究与生物系统计算机数学建模中具有重要的意义。
                </Typography>
                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    2. 复杂系统的重要概念
                </Typography>
                <Typography variant="body1">
                    复杂系统这一术语，通常是指对复杂系统的研究，表示一种新的科学研究方法。主要研究：系统元素之间的关系如何产生集体行为，系统和环境之间如何进行相互作用，将集体、系统层面的行为作为研究的基本对象。因此，复杂系统可以看作是还原论
                    reductionism的替代范式，主要解释系统的组成部分和相互关系。
                </Typography>
                <Typography variant="body1">
                    作为一个跨学科的研究领域，复杂系统吸收了许多其他领域的研究理论，如借鉴物理学对自组织
                    self-organization的研究，社会科学对自发秩序 spontaneous order的研究，数学对混沌
                    chaos的研究，生物学对适应性
                    adaptation的研究。因此“复杂系统”是一个宽泛的术语，涵盖了不同领域的研究方法，包括统计物理学、信息论、非线性动力学、人类学、计算机科学、气象学、社会学、经济学、心理学和生物学等。其中包含的重要概念有：系统、复杂性、网络、非线性、涌现、自组织与适应。
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    2.1 系统
                </Typography>
                <Typography variant="body1">
                    复杂系统主要关注的是系统的行为和性质。一个系统
                    system，广义地讲，是由一组实体，通过实体之间的交互、关联、或者依赖，形成一个统一的整体。系统一般由边界来定义，边界决定了哪些属于系统内的一部分，而位于系统边界之外的部分则构成了该系统的环境。一个系统可以表现出与系统个体行为和性质不一样的特性。这些系统层面（整体）的性质和特征通过系统与环境相互作用，或者由系统的部分行为体现出来（例如，对外部刺激作出反应）。此处“行为”的概念意味着，研究系统也涉及到对随时间演化的过程研究（或者，在数学中，叫做相空间参数化）。
                    由于其广泛的、跨学科的适用性，系统是复杂系统中极其重要的概念。
                </Typography>
                <Typography variant="body1">
                    作为一个研究领域，复杂系统是系统论的一个子领域。
                    尽管广义的系统理论也侧重于研究相互作用实体的集体行为，但复杂系统研究的是更广泛的一类系统，包括传统还原论方法也能适用的非复杂系统。事实上，系统理论试图探索和描述所有类型的系统，主要目标就是发明对各研究领域都有用的理论。
                </Typography>
                <Typography variant="body1">
                    至于系统理论和复杂系统的关系，系统理论强调系统各部分之间的关系和依赖在一定程度上决定了整个系统的性质，有助于说明复杂系统的跨学科研究视角：具有共享属性的概念连接了不同领域的系统，同时证明无论是什么样的复杂系统，都可以通过建模方法对系统进行科学研究。同时复杂系统重要的特定概念，如涌现
                    emergence、反馈回路 feedback loops和适应性 adaptation，也起源于系统理论。
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    2.2 复杂性
                </Typography>
                <Typography variant="body1">
                    “系统表现出复杂性”意味着很难从其行为中推断出系统的性质。任何忽略这些差异和特性，或者将差异和特性视为噪声的建模方法都是不准确也没有效果的。到目前为止，还没有完全通用的复杂系统理论来解决这些问题，因此研究人员必须结合特定的领域解决问题。研究人员解决这些问题的方法是将建模的主要任务看做是刻画复杂性，而不简化系统的复杂性。
                </Typography>
                <Typography variant="body1">
                    虽然目前还没有被广泛认可的复杂性的精确定义，但是有很多关于复杂性的典型例子。例如，如果系统具有混沌行为(对初始条件表现出极度敏感的行为)
                    ，或者如果它们具有涌现特性(这些特性从它们的组成元素中看不出来，但来源于在一个系统中产生的关系和依赖)
                    ，或者如果它们难以计算建模(如果它们的参数数量的增加快于系统大小的增加)
                    ，那么系统就可能是复杂的。
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    2.3 网络
                </Typography>
                <Typography variant="body1">
                    复杂系统中相互作用的部分组成一个网络，网络是离散对象及其相互关系的集合，通常描述为由边连接的顶点图。
                    网络可以描述系统中个体之间的关系，例如：电路中逻辑门之间的关系，基因调控网络中的基因之间的关系，或者任何其他相关实体之间的关系。
                </Typography>
                <Typography variant="body1">
                    网络经常用来刻画复杂系统中的复杂性。因此，把复杂系统当作网络来研究，可以使图论和网络科学得到广泛应用。例如，一些复杂系统也是复杂网络，它们具有相变和幂律度分布等特性，这些特性容易导致涌现或混沌行为。一个完全图中，边的数量随着顶点数量的增加而幂次增长，这一特性进一步揭示了大型网络中复杂性的来源:
                    随着网络的增长，实体之间的关系增加要远快于实体数量的增加。
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    2.4 非线性
                </Typography>
                <Typography variant="body1">
                    复杂系统通常具有非线性行为，意味着输入相同的状态和内容，系统可能会作出不同的回应。在数学和物理学中，非线性描述的是输入和输出不成比例的系统。当给定输入变化时，系统产生的结果可能远大于或远小于输入的变化，甚至根本没有输出（这取决于系统当前的状态或参数值的取值）。
                </Typography>
                <Typography variant="body1">
                    复杂系统中一个有意思的研究就是非线性动力系统，它是由一个或多个非线性项组成的微分方程组。一些非线性动力系统，如
                    洛伦兹系统，可以产生一种称为**混沌**的数学现象。 **混沌**，适用于复杂系统，通常是指是指对初始条件的敏感依赖，如“蝴蝶效应”
                    。在这样一个系统中，小的初始改变状态可能会导致截然不同的结果。因此，混沌行为的数值模拟非常困难，因为在计算的中间阶段，很小的扰动误差会导致模型产生极为不准确的结果。此外，即使在想他刺激下，如果一个复杂的系统回到一个之前的初始状态，它可能会表现出和之前状态完全不一样的行为，完全不同的行为反应，所以混沌也对经验推断的方式提出了挑战。
                </Typography>
                <img alt="洛伦兹系统" src={img2_1} />
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    2.5 涌现
                </Typography>
                <Typography variant="body1">
                    复杂系统的另一个共同特征是涌现行为和特性的存在：这些是系统层面的特征，无法从其组成部分中孤立地表现出来，而是由它们在系统中一起形成的相互作用、依赖或关系所形成。涌现广泛地描述了这类行为的出现，并且在社会科学和物理科学研究的系统中都有广泛应用。涌现通常是指复杂系统中出现的无计划却有组织的行为，也可以指系统的崩溃，可用于描述从组成系统的较小实体层面难以预测或无法预测的现象。
                </Typography>
                <Typography variant="body1">
                    在复杂系统中，涌现特性被广泛研究的其中一个例子就是元胞自动机 Cellular
                    Automata。在元胞自动机中，一个由细胞组成的网格，每个细胞都是处于某种状态，且这些状态是有限的，然后根据一组简单的规则进行演化。这些规则指导每个细胞与其邻近细胞进行“相互作用”。
                    尽管这些规则只是局部定义的，但是它们已经被证明能够产生全局性的有趣行为，例如康威的生命游戏
                    Conway's Game of Life。
                </Typography>
                <img alt="康威生命游戏" src={img2_2} />

                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    2.6 自组织
                </Typography>
                <Typography variant="body1">
                    当涌现用于描述无计划的秩序出现时，是指自发秩序(在社会科学中)或自组织(在物理科学中)。自发秩序可以在羊群行为中看到，即一群个体在没有集中计划安排的情况下协调他们的行动；在某些晶体的整体对称性中可以看到自组织，例如雪花的径向对称性，这种对称性来自于水分子与其周围环境之间的局部吸引力和排斥力。
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    2.7 适应
                </Typography>
                <Typography variant="body1">
                    复杂适应系统 Complex Adaptive
                    Systems，简称CAS，是复杂系统的特例，这类系统具有改变和从经验中学习的能力，因此具有适应性。复杂适应系统的例子包括股票市场，社会昆虫，蚁群、生物圈和生态系统，大脑和免疫系统、细胞和发育中的胚胎，城市、制造业和在文化和社会系统中比如政党或者社区等人类社会群体活动。
                </Typography>
                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    3. 复杂系统与情境的互动因果关系
                </Typography>
                <Typography variant="body1">
                    复杂系统之所以复杂，主要源于如下原因：相互作用（系统的发展不是孤立、割裂、互不联系的，而是相互作用、相互制约的统一整体）、循环反馈（时间变化过程中，此刻的结果对下一刻系统输出的影响，具有反馈机制）和临界相变（组织从一个状态变化为另一个状态，其中的临界是一个非常重要的点）。
                </Typography>
                <Typography variant="body1">
                    因此，开放系统无法独立于境脉，因为系统和环境之间存在能量或物质的流动。开放系统不仅适应它们的境脉，而且引发境脉中的变化；这些系统不仅依赖境脉，而且影响境脉。这里所指的“境脉”是系统活跃其中的“此时此地”，是“事件内嵌其中的活动场域”。因此，复杂系统的开放性与境脉是不可分离的，随着系统的历时变化，系统与境脉因素相互作用、相互关联。例如学习活动下的认知生态系统是和社会、文化、身体相互关联的，认知/心智通过不断与物理环境和社会文化环境相互作用，从而促成心智的涌现特性（Gibbs,
                    2006）。因此，在复杂性理论框架中，复杂系统的境脉依赖揭示了围绕在系统周围、解析系统行为的“框架”，境脉的“此时此地”塑造系统、指挥系统、调适系统。
                </Typography>
                <Typography variant="body1">
                    因此，复杂性理论将系统中的主体、要素与境脉视为是耦合（coupling）的。由于这种耦合，境脉本身在主体与环境的相互使用（co-adaptation）过程中也会发生转变。这种系统被称为具有操作闭合（operational
                    closure）的系统。理解操作闭合的关键不是基于输入与输出的关系，因为在操作闭合的系统中，过程的结果就是过程本身（Varela
                    et al., 1991）。这种解释便是“互动因果关系（reciprocal causality）”（Thompson &
                    Varela,
                    2001），其中，从个体互动中“向上”涌现模式，但“向下”受制于系统历史轨迹和当前社会文化规范。
                </Typography>
                <Typography variant="body1">
                    如果一种境脉影响复杂系统，那么它就可以被纳为系统态空间的一个维度。如果合适，它还可以被纳为集体变量。被纳入态空间之后，境脉影响将影响系统轨迹，促进吸引子区域的发展，因此就会引起相移、自组织和涌现。此时，境脉因素对于系统并不是外在的，而是系统的一部分（论复杂系统的具身性）。在可视化隐喻中，系统的态空间被呈现为“可能性景观”（如图1.2），景观根据需要具有许多维度，如身体、认知和社会文化等维度。因此，境脉成为系统经过的景观，系统的运动改变了境脉。
                </Typography>
                <Typography variant="body1">
                    因此，境脉在复杂性理论中具有“特殊地位”，复杂系统中的境脉将此时此刻发生的事情（当前的境脉：context
                    is the ‘here-and-now’ in which a system is
                    active）、系统的变化与系统在某段时间内涌现的“总体秩序”这三者相关联（the ‘special
                    status’ of context in complexity theory in connecting what happens in here and
                    now with change in the system and with the emergence of ‘global order’ in the
                    system over time）。其中，总体秩序（global
                    order）是指系统的涌现吸引子状态。Thelen与Smith（1994）指出：
                </Typography>
                <Typography variant="body1">
                    “动态系统解释了总体秩序（global order）和局部细节（local
                    detail）。总体秩序和局部变化性是一回事，二者密不可分，并赋予境脉一个特殊地位，即当前时空的作用。境脉（当前时空）的重要性包括三个方面。首先，境脉生成（make）总体秩序。总体秩序是具体境脉中感知和行为的历史；总体秩序正是通过反复的当前时空经验发展而成的。其次，境脉选择（select）总体秩序，因此，我们能够做出性质不同的各种动作。最后，境脉适调（adapt）总体知识，它匹配所涉任务的过往时空的历史。境脉生成、选择、适调知识……因为总体秩序由当前时空所生成，并表现在当前时空的细节中，它在根本上总是依赖境脉的。”
                </Typography>
                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    4. 复杂系统与不同领域的科学研究
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    4.1 实践中的复杂性
                </Typography>
                <Typography variant="body1">
                    传统的处理复杂性的方法是减少或限制的方式。通常情况下，这涉及到部门化
                    ompartmentalization : 将一个大的系统划分成独立的部分。
                    例如，组织将他们的工作分成不同的部门，每个部门处理不同的问题。
                    工程系统设计通常采用模块化组件。
                    然而，当部门之间的连接出现问题时，模块化设计很容易失败。
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    4.2 复杂性与教育
                </Typography>
                <Typography variant="body1">
                    福斯曼 Forsman、莫尔 Moll 和林德
                    Linder关注学生持续学习的问题，探讨了“将复杂性科学作为一个框架来扩展物理教育研究
                    physics education research法应用的可行性”
                    ，发现“在复杂性科学的视角内构建社会网络分析，为广泛的物理教育研究PER主题提供了新的强大的适用性”。
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    4.3 复杂性管理
                </Typography>
                <Typography variant="body1">
                    随着项目和收购变得越来越复杂，公司和政府面临着挑战去找到有效方法来管理大型收购，例如：陆军未来战斗系统（FCS）。FCS收购依赖于相互关联的部分，而它们之间的相互作用是无法预测的，随着收购变得越来越以网络为中心和复杂化，企业将被迫设法管理复杂性，而政府将面临挑战去提供有效治理，以确保灵活性和韧性
                    resiliency。
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    4.4 复杂性与建模
                </Typography>
                <Typography variant="body1">
                    弗里德里希·哈耶克 F. A.
                    Hayek对早期复杂性理论的主要贡献之一，是他对“人类预测简单系统行为的能力”与“透过建模预测复杂系统行为的能力”二者之间的区别。
                    他认为，经济学和一般复杂现象的科学一样，都包括生物学、心理学等等，不能像物理处理本质上简单现象一样去建模。哈耶克明确地解释了通过建模的复杂现象，只能对模式进行预测，而不能对非复杂现象进行精确的预测。
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    4.5 复杂性与网络科学
                </Typography>
                <Typography variant="body1">
                    一个复杂的系统通常由许多组成部分及其相互作用组成。
                    这样一个系统可以用一个网络来表示，其中节点代表组成部分，连边代表它们之间的相互作用。例如，因特网可以表示为一个由节点(计算机)和连边(计算机之间的直接连接)组成的网络。
                    利用渗流理论 percolation theory研究了其对故障的恢复能力。
                    其他的例子还有社交网络、航空公司网络、生物网络和气候网络，网络也可能失效也会自动恢复。
                    复杂系统之间的相互作用也可以被建模为网络的网络。
                    关于它们的故障和恢复特。城市交通可以表示为一个网络，加权链路表示两个节点(节点)之间的速度。
                    这种方法在衡量一个城市的整体交通效率时是很有用的。
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

export default Chapter1Session2;
