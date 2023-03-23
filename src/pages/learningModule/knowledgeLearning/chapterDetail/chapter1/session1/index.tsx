import React, { useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
// img
import img1_1 from '@/assets/img/img1-1.png';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { updateChapterLearningProcess } from '@/store/slices';
// agent help
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import { metacognitivePrompt } from '@/store/slices';

const Chapter1Session1 = () => {
    const dispatch = useAppDispatch();
    const currentMsgID = useAppSelector((state) => state.agent.currentId);
    const ChapterInfoList = useAppSelector((state) => state.knowledgeLearning.chapterInfoList);
    const [number, setNumber] = useState<number | number[]>(parseInt(ChapterInfoList[0].progress));

    const handleChangeNumber = (event: Event, newValue: number | number[]) => {
        setNumber(newValue);
        dispatch(
            updateChapterLearningProcess({
                chapterId: '1',
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
                        }}
                    >
                        <HelpIcon fontSize="inherit" />
                    </IconButton>
                </Tooltip>
            </Box>
            <Paper variant="outlined" sx={{ mt: 2, p: '20px 30px', '& *': { lineHeight: '27px' } }}>
                <Typography variant="h4" fontWeight="bold" marginBottom="10px">
                    第一节 从还原论到系统论
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                    1. 还原论与经典科学研究
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    1.1 还原论的提出
                </Typography>
                <Typography variant="body1">
                    勒内·笛卡尔 René Descartes的三部哲学著作《物论 De Corpore》、《人论 De
                    Homine》、《政治论 De
                    Cive》形成一个完成的体系。其中1662年出版的《人论》中宣称：非人类动物可以被简化为自动机，从本质上讲，是一种消化鸭
                    Digesting
                    Duck的机械复杂版本。在机器人发展历史中，消化鸭是一种形状类似鸭子的机械装置，由Jacques
                    du
                    Vaucanson制造,并于1739年5月30日在法国公开。这只鸭子之所以引人注目，是因为它不仅能吃，还能拉（下蛋），而且它也常常被认为是利用橡皮管的第一个装置。笛卡尔则认为所有非人类动物可以在本质上被认为是这样一种机械装置的复杂版本。
                </Typography>
                <Typography variant="body1">
                    基于此，笛卡尔提出，如果一件事物过于复杂，以至于一下子难以解决，那么就可以将它分解成一些足够小的问题，分别加以分析，然后再将它们组合在一起，就能获得对复杂事物的完整、准确的认识。这是对于还原论的通俗表达。
                </Typography>
                <Typography variant="body1">
                    还原论
                    Reductionism也称为还原主义，是一种哲学思想，认为复杂的系统、事物、现象可以将其化解为各部分之组合来加以理解和描述。还原论的思想可追溯久远，但“还原论”却来自1951年美国逻辑哲学学家蒯因在《经验论的两个教条》一文。此后，还原论这一概念的内涵与外延都得到扩张。最新的大不列颠百科全书把还原论定义为：“在哲学上，还原论是一种观念，它认为某一给定实体是由更为简单或更为基础的实体所构成的集合或组合；或认为这些实体的表述可依据更为基础的实体的表述来定义。”
                </Typography>
                <Typography variant="body1">
                    还原论方法是经典科学方法的内核，将高层的、复杂的对象分解为较低层的、简单的对象来处理。
                </Typography>
                <Typography variant="body1">
                    还原论是一种有关现象之间的联系的哲学观点，这种观念认为，世界的本质在于简单性，并认为现象可以用其他更简单或更基本的现象来描述。它是一种将一个复杂的系统解释为其各部分的总和的思想和哲学立场。
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    1.2 还原论的定义
                </Typography>
                <Typography variant="body1">
                    《牛津哲学指南》指出，还原论是“哲学词汇中最常用和最常被滥用的术语之一”，并将其划分为三部分:
                </Typography>
                <Typography variant="body1">
                    ① 本体论还原论: 一种认为所有现实均是由最小数量的部分组成的信念。
                </Typography>
                <Typography variant="body1">
                    ② 方法论还原论: 一种用尽可能小的对象来提供解释的科学尝试。
                </Typography>
                <Typography variant="body1">
                    ③ 理论还原论:
                    认为新的理论不会取代或吸收旧的理论，而是将其简化为更基本的术语。理论还原本身可以分为翻译、推导和解释三个部分。
                </Typography>
                <Typography variant="body1">
                    还原论可以应用于任何现象，包括对象、问题、解释、理论和意义。
                </Typography>
                <Typography variant="body1">
                    对于科学而言，方法论还原论试图从个体、组成部分及其相互作用的角度对整个系统进行解释。例如，对气体温度的降低不能超过其运动着的分子的平均动能。托马斯
                    ·
                    内格尔和其他人还谈到了“心理物理学还原论”(试图将心理现象还原为物理和化学)和“物理化学还原论”(试图将生物学还原为物理和化学)。
                </Typography>
                <Typography variant="body1">
                    在一种非常简化的，有时是有争议的形式中，还原论被认为暗示一个系统只是它的部分的总和。然而，与之有着细微差别的观点是，一个系统完全由它的部分组成，但该系统将具有任何部分都没有的特征（这在本质上是涌现论的基础）。“机械论则侧重于解释整体更高层次的特征是如何从部分中产生的。”
                </Typography>
                <Typography variant="body1">
                    不过也有作者使用另外的定义。例如，约翰·鲍金霍恩所称的“观念”或“认识论”的还原论是西蒙·布莱克本和金在权所使用的定义:
                    还原论从形式上用另一类型的其他事实或实体替换论述中提及的某种类型的事实或实体，从而在它们之间提供一种联系。理查德·琼斯区分了本体论和认识论的还原论，他认为许多本体论和认识论的还原论者在肯定理论还原的同时，也肯定了不同程度的复杂性需要不同的概念。
                </Typography>
                <Typography variant="body1">
                    还原论的观点可以用解释的“层次”来表达，根据需要可以将较高的层次还原到较低的层次。这种对理解层次的使用在一定程度上反映了人类在记忆细节方面的局限性。然而，“大多数哲学家会坚持认为，我们在概念化现实中的角色(我们对理解层次的需要)不会改变现实中不同层次的组织确实有不同的‘属性’这一事实。”
                </Typography>
                <Typography variant="body1">
                    还原论还应与消除论区别开来：还原论者不否认现象的存在，而是用另一种现实来解释现象。消除论者否认现象本身的存在。例如，消除论者通过解释物理和化学过程来否认生命的存在。
                </Typography>
                <Typography variant="body1">
                    还原论并没有排除所谓涌现现象的存在，但它确实暗示了完全理解这些现象的能力，从它们组成的过程来看。这种还原论的理解与本体论或强涌现论有很大的不同，本体论或强涌现论认为，在“涌现”中出现的东西不仅仅是它从本体论意义上或认识论意义上出现的过程的总和。然而，一些物理学家声称还原论和涌现论是互补的:
                    对自然过程的解释二者都是必需的。
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    1.3 科学研究中的还原论
                </Typography>
                <Typography variant="body1">
                    还原论的思想和方法构成了许多现代科学发展良好的主题的基础，包括许多物理、化学和分子生物学。经典力学尤其可以被看作是一种还原论的框架。例如，我们根据太阳系的组成部分（太阳和行星）及其相互作用来理解太阳系。统计力学则可以被认为是宏观热力学定律与用微观组分解释宏观性质的还原方法的调和。
                </Typography>
                <Typography variant="body1">
                    生物学研究中的还原论表现最为明显，有人试图把生命运动形式归结为物理-化学运动形式，用物理-化学运动规律取代生物学规律。20世纪初的还原论者把人类社会运动还原为低等动物的运动，把生物学规律还原为分子运动规律，再继续还原为物理-化学过程。现代生物还原论借用分子生物学取得的成就，认为就像遗传过程可以还原为化学相互作用一样，所有生物现象都可归结为物理-化学运动。生物学中的还原论还主张学科之间的还原，如果一门学科的理论、规律可以说明另一学科的理论、规律，则后一学科可以向前一学科还原。
                </Typography>
                <Typography variant="body1">
                    心理学研究中的还原论痕迹十分明显。心理学独立后的第一个心理学派——构造心理学认为，心理学应该用实验内省的方法分析意识经验的内容或构造，从而找出意识的各个组成部分以及它们连接成为各种心理过程的规律。E.B.铁钦纳反对机能心理学派重视意识功用的特点，他只对确定组成意识经验的心理元素感兴趣，至于这样做有什么用处，他并不进行回答。铁钦纳在经过所谓分析之后，找到能意识到的44000-50000种最简单的感觉元素，这些感觉情感这两种最基本心理元素范畴内。显而易见构造心理学元素分析的方法与还原论显然是同出一辙的。
                </Typography>
                <Typography variant="body1">
                    20世纪前半期风靡美国的行为主义心理学也采用了还原论立场。行为主义的创始人J.B.华生认为，心理学应以客观的、可观察的行为为研究对象，放弃对捉摸不定的主观心理状态或意识状态进行探讨。行为主义者眼中的“心理”就是有机体的肌肉收缩或腺体分泌，“心理学规律”就应用S-R联结对行为的不同描述。实际上行为主义者在反对“心理”存在的过程中早已把“心理”还原为物理-化学变化了，因此行为主义被讥笑为“没有头脑的心理学”。行为主义者在对本能、习惯、情绪、动机、语言、思维的解释中贯穿了还原论的基本观点。例如，华生认为，言语动作就像打球、游泳一样，只不过是喉头内部一组肌肉的协调动作；言语习惯只不过是动作习惯的缩短或代替，婴儿学习言语的过程和养成其他动作习惯的过程是一致的。对于思维，华生也把它归结为细小的肌肉运动。华生还原论的最终归宿必然是将心理等同于身体变化的心身同一论。
                </Typography>

                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    2. 还原论的局限与新思想的出现
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    2.1 还原论的局限
                </Typography>
                <Typography variant="body1">
                    还原论者看到了事物不同层次间的联系，想从低级水平入手探索高级水平的规律，这种努力是可贵的。但是，低级水平与高级水平之间毕竟有质的区别，如果不考虑所研究对象的特点，简单地用低级运动形式规律代替高级运动形式规律，那就要犯机械论的错误。在心理学研究中，面临的研究对象十分复杂，而研究方法又很不成熟，在某种程度上，对研究对象进行科学分解，在更适合于研究水平上进行研究，对提示心理学规律来说，不仅是可取的，而且是必需的。但这种分解必须考虑心理学科的特殊性，不能在分解中丢掉原有心理现象的特殊意义，而将生动丰富的心理现象变为毫无意义的元素的集合体。
                </Typography>
                <Typography variant="body1">
                    与还原论相对的是整体论。整体论认为，事物从整体上看具有的一些属性——即所谓的涌现属性，这些属性不能用各个部分的和来解释。亚里士多德在《形而上学》一书中对整体主义的原则进行了简明的概括:
                    “整体大于部分之和”。
                </Typography>
                <Typography variant="body1">
                    因此，不恰当使用还原论限制了我们对复杂系统的理解。特别是，生态学家罗伯特·尤兰维奇
                    Robert
                    Ulanowicz说，科学必须发展技术来研究大规模组织影响小规模组织的方式，以及反馈循环在给定层次上创造结构的方式，而不受较低层次的组织细节的影响。他提倡使用信息理论作为研究自然系统倾向的框架。尤兰维奇把这些还原论的批评归因于哲学家卡尔·波普尔和生物学家罗伯特·罗森。
                </Typography>
                <Typography variant="body1">
                    诺贝尔物理学奖获得者菲利普·沃伦·安德森在他1972年发表在《Science》杂志的论文《More
                    is
                    different》中使用了对称性破缺是一个涌现现象的例子来论证还原论的局限性。他观察到，科学可以大致按线性层次排列——粒子物理学、固体物理学、化学、分子生物学、细胞生物学、生理学、心理学、社会科学——一门科学的基本实体遵循在层次中先于它的科学原理的原则。然而，这并不意味着一门科学只是先于它的科学的应用版本。他写道:
                    “在每一个阶段，全新的法则、概念和概括都是必要的，需要灵感和创造力，就像前一个阶段一样。心理学不是应用生物学，生物学也不是应用化学。”
                </Typography>

                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    2.2 系统思维的价值与意义
                </Typography>
                <Typography variant="body1">
                    系统思维的发展提供了寻求以整体而非简化的方式来描述问题的方法，并且许多科学家开始使用整体范式。在科学语境中使用这些术语时，整体论和还原论主要指的是什么样的模型或理论提供了对自然世界的有效解释。证伪假设、根据理论检验经验数据的科学方法在大体上是不变的，但这些方法指导哪些理论是值得考虑的。
                </Typography>
                <Typography variant="body1">
                    在许多情况下（例如气体动力学理论），只要对系统的组成部分有很好的了解，就可以预测系统作为一个整体的所有重要性质。在其他系统中，特别是与生命或与有关生命的涌现特性(形态发生、自生成和新陈代谢)
                    ，从系统各部分的知识来预测系统的涌现特性被认为几乎是不可能的。复杂性理论研究系统和后一种类型的性质。
                </Typography>
                <Typography variant="body1">
                    生态学家斯文·埃里克·乔根森在某些科学领域，特别是生态学领域，为整体方法提供了理论和实践两方面的论据。他认为，许多系统是如此复杂，以至于永远无法完全详细地描述它们。与物理学中的海森堡不确定性原理类似，他认为许多有趣的生态现象无法在实验室条件下复制，因此如果不以某种方式改变系统，就无法测量或观察。他还指出了生物系统中相互联系的重要性。他认为，科学只能通过概述无法回答的问题，并使用模型来进步，并且这些模型不是试图从较小的组织层次来解释一切，而是根据系统本身的规模来模拟它们，同时考虑到来自层次结构中更高和更低层次的一些（但不是全部）因素。
                </Typography>
                <Typography variant="body1">
                    在认知心理学领域，乔治·凯利发展了“建构替代主义”作为个人建构心理学的一种形式，也是他所认为的“累积碎片主义”的替代。在这一理论中，知识被看作是外部世界的成功的心理模型的构建，而不是独立的“真理金块”的累积。
                </Typography>

                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    3. 系统论与系统科学的诞生
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    3.1 系统论的内涵
                </Typography>
                <Typography variant="body1">
                    系统
                    system是一组构成有机整体的实体集合，这些实体之间相互作用或相互关联。系统由其时空边界所描述，被其所处环境包围并影响；系统也由其结构和目的所描述，表达为其功能。系统是系统理论
                    systems theory的研究对象。
                </Typography>
                <Typography variant="body1">
                    系统论 Systems
                    theory认为世界是一个由相互连接的部分组成的复杂系统。辨识系统的方法是定义系统的边界
                    (拓扑) Boundary
                    (topology)，即选择哪些实体位于系统内部，而哪些实体在外部——即作为环境的一部分。可以简化系统的表述（科学建模
                    Scientific modelling）以理解、预测或影响其未来活动。这些模型描绘了系统的结构
                    structure和行为 behavior。
                </Typography>
                <Typography variant="body1">
                    大多数系统是与周围环境交换物质和能量的开放系统Open system
                    ，例如汽车、咖啡机或地球。开放系统也可视为一个有界的转换过程，即输入转输出过程或过程集合的黑盒
                    black
                    box。输入被消耗，并产生输出。这里说的输入和输出是非常广义的。例如一艘客轮的输出是乘客从出发地向目的地的移动。
                </Typography>
                <img alt="开放系统" src={img1_1} />
                <Typography variant="body1">
                    在社会科学和认知科学中，主要研究的系统为人类模型和人类社会中的系统，主要有人类的大脑功能、心理过程，以及规范伦理学系统和社会/文化行为模式。管理科学、运筹学和组织发展学把人类组织视为亚系统或系统集合体等相互作用的元件的系统(概念系统)
                    ，该系统是众多复杂商业过程(组织行为)和组织结构的载体。组织发展理论家彼得·圣吉
                    Peter
                    Senge在他的《第五项修炼》一书中提出了组织作为系统的概念，并提出了系统思考的能力。系统思考
                    Systems
                    thinking是一种思考/推理和解决问题的方式。它以识别特定问题的系统特性为始，也可以是一种领导能力。有些人能在局部行动的同时放眼全局。他们会考虑其决定对大系统其他部分造成的潜在后果。这也是心理学上系统辅导的基础。
                </Typography>
                <Typography variant="body1">
                    而由此诞生的，在系统论指导下对系统的本质、属性、结构、功能等进行研究的学科，则被称为系统科学。
                </Typography>

                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    3.2 系统科学
                </Typography>
                <Typography variant="body1">
                    系统科学 Systems
                    science是研究自然、社会、认知、工程、技术和科学本身的系统本质——由简单到复杂的系统本质的交叉学科。对于系统科学家来说，世界可以理解为一个系统的系统。该领域的旨在发展适用于心理学、生物学、医学、通信、商业管理、计算机科学、工程学和社会科学等不同领域的跨学科的基础。
                </Typography>
                <Typography variant="body1">
                    系统科学涵盖了诸如复杂系统、控制论、动力系统理论、信息论、语言学或系统论等形式科学。它在自然科学、社会科学和工程学领域有应用，如控制论、运筹学、社会系统理论、系统生物学、系统动力学、人因学、系统生态学、计算机科学、系统工程学和系统心理学。系统科学通常强调的主题是:
                </Typography>
                <Typography variant="body1">① 整体观点；</Typography>
                <Typography variant="body1">② 系统与其嵌入环境之间的相互作用；</Typography>
                <Typography variant="body1">
                    ③ 动态行为的复杂轨迹(通常是微妙的)，有时是稳定的(因此具有加固性)
                    ，但在各种“边界条件”下可能变得极不稳定(因此具有破坏性)。
                </Typography>
                <Typography variant="body1">
                    对地球尺度生物圈/地球圈动力学的关注是系统科学寻求对自然问题提供有意义见解的一个例子。
                </Typography>
                <Typography variant="body1">
                    因此，系统理论是一个研究自然、社会和科学中的复杂系统的交叉学科。更具体地说，它是一个概念框架，人们可以通过它来分析或描述任何一组协同工作以产生某种结果的对象。
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
            </Paper>
        </Box>
    );
};

export default Chapter1Session1;
