import React, { useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { updateChapterLearningProcess } from '@/store/slices';

const Chapter1Session3 = () => {
    const dispatch = useAppDispatch();
    const ChapterInfoList = useAppSelector((state) => state.knowledgeLearning.chapterInfoList);
    const [number, setNumber] = useState<number | number[]>(parseInt(ChapterInfoList[2].progress));

    const handleChangeNumber = (event: Event, newValue: number | number[]) => {
        setNumber(newValue);
        dispatch(
            updateChapterLearningProcess({
                chapterId: '3',
                process: newValue + ''
            })
        );
    };

    return (
        <Box>
            <Paper variant="outlined" sx={{ mt: 2, p: '20px 30px', '& *': { lineHeight: '27px' } }}>
                <Typography variant="h4" fontWeight="bold">
                    第三节 自组织与涌现
                </Typography>
                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    1. 自组织的内涵
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    1.1 自组织的定义
                </Typography>
                <Typography variant="body1">
                    自组织
                    Self-organization，在社会科学中也被称为自发秩序，是指一种起源于初始无序系统的部分元素之间的局部相互作用、所产生出某种形式的整体秩序的过程。当有足够的能量可用时，该过程可以是自发的，不需要任何外部主体
                    agent
                    进行控制。它通常是由看似随机的波动触发，并由正反馈放大。最终形成的自组织是完全分散的，分布在系统的所有组件中。因此，自组织通常是具有鲁棒性的，能够生存下来或者自我修复严重的干扰。混沌理论中讨论的自组织现象，其视角如同无序、不可预测的大海中的找到确定性的孤岛。
                </Typography>
                <Typography variant="body1">
                    自组织发生在物理，化学，生物，机器人和认知系统等许多领域。自组织的例子包括结晶，流体的热对流，化学振荡，动物种群，神经回路。
                </Typography>
                <Typography variant="body1">
                    自组织是在非平衡 Non-equilibrium
                    过程的物理学和化学反应中被发现的，通常将其描述为自组装 Self-assembly
                    。在生物学中，从分子到生态系统，这一概念已被证明是有效的。在自然科学和社会科学，例如经济学或人类学的许多其他学科的文献中也出现了自组织行为的引证。在诸如元胞自动机
                    Cellular automata 这样的数学系统中也观察到了自组织。自组织是与涌现 Emergence
                    概念相关的一个例子。
                </Typography>
                <Typography variant="body1">自组织依赖于四个基本要素：</Typography>
                <Typography variant="body1">
                    ① 很强的动态非线性特性，通常都会涉及正反馈和负反馈，虽然不是必然出现的
                </Typography>
                <Typography variant="body1">② 利用（已有的）和探测（未知的）之间的平衡</Typography>
                <Typography variant="body1">③ 多重互动</Typography>
                <Typography variant="body1">
                    ④ 能量的可用性（以克服熵增或无序的自然趋势）
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    1.2 科学研究中的自组织现象
                </Typography>
                <Typography variant="body1">
                    社会动物的自组织行为和简单数学结构的自组织现象，都表明在人类社会中应该存在自组织。自组织的迹象通常是自组织物理系统所体现出的统计属性。社会学，经济学，行为金融学和人类学中存在很多这样的例子，比如**临界质量
                    Critical mass**，**羊群效应 Herd behaviour**，**集体思维 Groupthink** 等。
                </Typography>
                <Typography variant="body1">
                    在社会理论中，尼古拉斯·卢曼 Niklas Luhmann 1984 引入了自我指涉
                    Self-referentiality的概念作为自组织理论的社会学应用。对于卢曼而言，社会系统的要素是自我再生产
                    Self-producing 的交流，即交流产生进一步的交流，因此，只要存在不断变化的交流，社会系统就可以自我复制。对于卢曼而言，人类就是系统环境中的传感器。卢曼通过功能分析
                    Functional analyses 和系统理论发展出一套关于社会及其子系统的进化论。
                </Typography>
                <Typography variant="body1">
                    在经济学中，市场经济有时被认为是自组织的。保罗·克鲁格曼 Paul Krugman
                    在他的著作《自组织经济 The Self Organizing Economy》
                    中阐述了市场自组织在商业周期中的作用。弗里德里希·哈耶克 Friedrich Hayek
                    创造了术语“ 耦合秩序 catallaxy” ，以描述一种“自愿合作的自组织系统
                    Self-organizing system of voluntary
                    co-operation”,这与自由市场经济中的自发秩序有关。新古典经济学家认为，加强中央计划通常会使自组织的经济体系效率降低。从另一个角度来看，经济学家认为市场失灵如此明显以至于自组织产生了不良结果，因此国家应指导生产和定价。大多数经济学家都采取中间立场，并建议将市场经济和计划经济
                    Command economy 的特征混合在一起 有时称为混合经济 Mixed
                    economy 。当应用在经济学领域时，自组织的概念很容易变成一种意识形态上的渗透。
                </Typography>
                <Typography variant="body1">
                    在教育领域，使他人“学习如何学习” 通常是指教导他们如何服从于被教导。自组织学习
                    Self-organised learning, SOL
                    否认“专家最了解”或存在“最佳方法”，反而坚持认为“个体层面显著的、相关的和可行意义的建构”，应由学习者进行体验性尝试。这可能是协作完成的，而且个人收获更大。
                    它被视为一生的过程，并不受限于特定的学习环境 家庭，学校，大学
                    ，也不受限于父母或教授等权威机构的控制。它需要通过学习者的亲身经历去尝试、并且不断去修正。它也不必受限于意识或语言。弗里特霍夫·卡普拉
                    Fritjof Capra
                    声称，这自组织学习，在心理学和教育中鲜为人知。它可能与控制论有关，因为它涉及负反馈控制回路
                    Negative feedback control
                    loop。它可以作为学习谈话或对话在学习者之间或一个人进行。
                </Typography>

                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    2. 涌现的内涵
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    2.1 涌现的定义
                </Typography>
                <Typography variant="body1">
                    涌现（或称突现、演生、层展）是当许多小的个体相互作用后产生了大的整体，而这个整体展现了构成它的个体所不具备的新特性的现象。涌现是复杂系统的核心特征，发现复杂系统的涌现规律是复杂性科学的重要目标，而涌现也是自组织的结果，是低层次系统通过自组织后产生的影响宏观系统的结果。
                </Typography>
                <Typography variant="body1">
                    在哲学、系统论、科学和艺术中，当一个实体被观察到具有其所有组成部分本身没有的属性时，涌现 emergence 就出现了。这些属性或行为只有当各个部分在一个更广泛的整体中相互作用时才会涌现。例如，当一辆自行车和骑手互动时，平稳的向前运动就出现了，但是两个部分都不能独自产生这种行为。
                </Typography>
                <Typography variant="body1">
                    涌现的概念在整合层次理论 theories of integrative levels 和复杂系统 theories of
                    complex
                    systems 理论中扮处于核心地位。例如，生物学所研究的生命现象是化学的一个涌现特性，而心理现象是从生物的神经生物学现象中涌现出的。
                </Typography>
                <Typography variant="body1">
                    在哲学中，强调涌现特性的理论被称为涌现论/涌现主义
                    emergentism。几乎所有涌现主义的叙述都包括一种认识论意义或本体论意义的不可化约性
                    irreducibility。
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    2.2 涌现的特性与过程
                </Typography>
                <Typography variant="body1">
                    当一些简单的个体（主体）在一个环境中运动时，可能会出现涌现的行为或涌现特性，形成整体层面更复杂的行为。如果涌现发生在不同的尺度上，那么原因通常是不同尺度之间的因果关系。换句话说，涌现特性通常意味着在系统中存在一种自上而下的反馈形式。出现涌现特性的过程可能发生在观察系统之后或观察时，并且通常可以通过变化累积所形成的模式来识别，这个过程一般称为“增长”。涌现行为之所以会出现，是因为不同尺度之间存在复杂的因果关系和反馈，这种关系被称为互联性
                    Interconnectivity。涌现特性本身既不是完全可预测的，也不是完全不可预测和前所未有的，而是代表系统进化的新层次。复杂的行为或者特性不是任何一类实体的特性，也不能轻易地从较低级别个体行为中预测或推断出来，事实上复杂行为不能简化为个体层面的行为。鸟群或鱼群的集体行为展现出的整体形状就可以看成是涌现特性的很好例子。
                </Typography>
                <Typography variant="body1">
                    涌现行为难以预测的一个原因是，系统个体之间相互作用的数量随个体的数量呈指数增长，从而允许许多新的微妙行为类型涌现出来。涌现通常是特定交互模式的产物。负反馈引入了有助于修复结构或行为的约束。相比之下，正反馈促进改变，允许局部变化发展成为全局模式。相互作用产生涌现特性的另一种方式是双相演化,这发生在相互作用是间歇出现的时候，引发两个阶段:
                    一个是模式的形成或增长，另一个是他们被提炼或移除。
                </Typography>
                <Typography variant="body1">
                    另一方面，个体之间仅仅有大量的相互作用本身并不足以保证出现涌现行为。许多相互作用可能是微不足道或无关紧要的，或者可能相互抵消。在某些情况下，大量的相互作用实际上可能阻碍有趣行为的涌现，因为它们制造了大量的”噪音”来干扰新涌现出现的”信号”。在达到临界点以能维持自身以前，这种涌现行为可能需要暂时与其他相互作用隔离。因此，促进涌现的不仅仅是个体之间连接的绝对数量，还有连接的方式。分层组织就是能够产生涌现行为的例子（政府机构的行为方式可能与政府机构的单个部门大不相同）。
                    但涌现行为也可能产生于更为分散的组织结构，如市场。在某些情况下，在涌现行为出现之前，系统必须达到多样性、组织性和连通性的组合阈值。
                </Typography>
                <Typography variant="body1">
                    无意识的后果和副作用都与涌现特性密切相关。Luc Steels写道:
                    “一个组件有一个特定的功能，但这不能识别为全局功能的子功能。相反，一个组件实现了一种行为，其副作用有助于实现全局功能每种行为都有副作用，副作用的总和就是整体的功能”。换句话说，具有“涌现功能”系统的全局或宏观功能是所有“副作用”的总和，即所有涌现特性和功能的总和。
                </Typography>
                <Typography variant="body1">
                    具有涌现特性或涌现结构的系统可能看起来有悖熵原理和热力学第二定律，因为尽管缺乏中央的指挥和控制，但他们形成并增加秩序。然而实际上并没有违反，因为开放系统可以从环境中获取信息和秩序。
                </Typography>

                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    2.3 人类社会中的涌现现象
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    （1）自发秩序
                </Typography>
                <Typography variant="body1">
                    人类群体如果能够自由地调节自己，往往会产生一种自发的秩序，而不是人们常常害怕的那种毫无意义的混乱。至少从中国古代的庄子以来，这种现象就已经存在于社会中了。人是社会系统的基本要素，它们不断地相互作用，创造、维持或割断相互之间的社会联系。社会系统中的社会纽带随着其结构的重构而不断变化。一个经典的环形交叉路口也是一个很好的例子，十分有效的组织汽车进进出出，以至于一些现代城市已经开始用环形交叉路口的红绿灯取代经常出现问题的十字路口的红绿灯，并取得了更好的结果。开源软件和
                    Wiki 项目提供了一个更加引人注目的例子。
                </Typography>
                <Typography variant="body1">
                    涌现过程或行为可以在许多其他地方看到，如城市、经济学中的垄断现象、计算机模拟和元胞自动机中的组织现象。无论何时，只要有大量的个体相互作用，一种秩序就会从混乱中产生（无序就会产生秩序;）一种模式、一种决定、一种结构或方向的改变就会发生。
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    （2）经济学
                </Typography>
                <Typography variant="body1">
                    股票市场（或任何市场）就是一个大规模涌现的例子。作为一个整体，它精确地调节着世界上各地公司的相对安全价格，然而它没有领导者。当没有中央计划的时候，就没有一个实体控制着整个市场的运作。经纪人或投资者只了解其投资组合中有限的几家公司，他们必须遵守市场的监管规则，对交易进行单独或大规模的分析。趋势和模式的出现则是由技术分析师深入研究的。
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    （3）语言学
                </Typography>
                <Typography variant="body1">
                    语言语法的结构和规律，或者至少是语言变化，被认为是一种涌现现象。虽然每个说话人只是试图达到自己的交际目的，但他或她使用语言的方式是特定的。如果有足够多的人这样做，语言就会改变。从更广泛的意义上讲，语言规范，即语言社会的语言习惯，可以看作是在各种社会环境下长期参与交际性解决问题的过程中涌现出来的一个系统。
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    （4）城市与建筑
                </Typography>
                <Typography variant="body1">
                    涌现结构在许多不同层次的组织或自发秩序中出现。涌现性自组织经常出现在非规划的、或分区没有被预先决定的城市布局中。对于涌现行为的跨学科研究通常不被认为是一个单一的领域，而是被划分到跨学科应用或问题领域中。
                </Typography>
                <Typography variant="body1">
                    建筑师可能不会设计一个建筑群的所有通道。相反，他们可能会让“通路”自发涌现：让人们自由选择走出道路，然后在道路已经磨损的地方铺设路面，比如“心选小路”。心选小路
                    Desire Path，也叫牛道 Cow Path 或者羊道 Goat Track
                    ，指行人或自行车频繁经过而形成的一条小路。这种小路通常是往返于两地之间距离最短且最易找到的路。一般情况下，当正式修建的道路绕远、路中间有沟，或者压根没有正式道路的地方就会出现“心选小路”。
                </Typography>
                <Typography variant="body1">
                    “2007年城市挑战 2007 Urban
                    Challenge”的航线方向和运载路径，可以被视为控制论出现的一个例子。道路使用模式，不确定的障碍物清除时间等，将共同工作形成一个复杂的涌现模式，它不能事先确切地计划。
                </Typography>
                <Typography variant="body1">
                    克里斯托佛·亚历山大建筑学派对涌现采取了更深入的方法，试图重写城市发展本身的发展过程，以建立一个与传统实践相联系的规划和设计的新方法论：一个涌现的城市主义。城市的涌现也与城市复杂性和城市演化的理论联系在一起。
                </Typography>
                <Typography variant="body1">
                    建筑生态学是一种概念框架，用于理解建筑和建筑环境之间动态相互依存的要素，包括建筑、居住者和更大的环境。
                    建筑生态学家哈尔·莱文 Hal
                    Levin并没有把建筑看作是无生命的或静态的物体，而是把它们看作是有生命和无生命系统的交界或交叉领域。室内环境的微生物生态学强烈依赖于建筑材料、居住者、内容、环境背景和室内外气候。大气化学与室内空气质量及室内发生的化学反应密切相关。这些化学物质可能是微生物的营养物质、中性物质或生物杀灭剂。这些微生物产生的化学物质会影响建筑材料与居民健康。
                    人类操纵通风、温度和湿度以达到舒适的环境，同时对居住和进化的微生物产生影响。
                </Typography>
                <Typography variant="body1">
                    Eric Bonabeau试图通过交通来定义涌现现象:
                    “交通堵塞实际上是非常复杂和神秘的。在个人层面上，每个司机都试图到达某个地方，并遵守（或打破）某些规则。这些规则中一些是法律上的（限速）
                    ，另一些是社会的或个人的（减速让另一个司机进入你的车道）。但是，交通堵塞是从这些个人行为中涌现出来的一个独立的、不同的事物。例如，高速公路上的交通堵塞可能无缘无故地向后延伸，即使车辆在向前行驶。”他还把涌现现象比作对市场趋势和员工行为的分析。
                </Typography>
            </Paper>
            <Paper sx={{ p: '20px 30px', mt: '10px' }}>
                <Typography fontWeight="bold">完成进度:{number}%</Typography>
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

export default Chapter1Session3;
