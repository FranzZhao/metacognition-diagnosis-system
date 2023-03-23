import React, { useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
// img
import img3_1 from '@/assets/img/img3-1.png';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { updateChapterLearningProcess } from '@/store/slices';
// agent help
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import { metacognitivePrompt } from '@/store/slices';

const Chapter3Session2 = () => {
    const dispatch = useAppDispatch();
    const currentMsgID = useAppSelector((state) => state.agent.currentId);
    const ChapterInfoList = useAppSelector((state) => state.knowledgeLearning.chapterInfoList);
    const [number, setNumber] = useState<number | number[]>(parseInt(ChapterInfoList[7].progress));

    const handleChangeNumber = (event: Event, newValue: number | number[]) => {
        setNumber(newValue);
        dispatch(
            updateChapterLearningProcess({
                chapterId: '8',
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
                <Typography variant="h4" fontWeight="bold">
                    第二节 情境认知的过程
                </Typography>
                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    1. 合法的边缘性参与
                </Typography>
                <Typography variant="body1">
                    将学习视作情境化的活动有其核心的定义性特征，即一种叫做合法的边缘性参与的过程(Lave
                    &
                    Wenger,1991)，这一过程描述了一位新参与实践共同体的学习者发展为全面参与者的方式。根据Lave和Wenger的观点，合法的边缘性参与应当理解为规定了隶属于某一时间共同体的方法
                    ，即不存在“非法的边缘性参与”这样的事情。
                </Typography>
                <Typography variant="body1">
                    ①
                    合法：“合法”指资源的社会组织及对资源的控制，只有合法的参与者才允许接触某一实践共同体中的资源
                </Typography>
                <Typography variant="body1">
                    ②
                    边缘性：边缘性的概念被用来区分实践的新来者与老资格的人，后者被视为“全面的”参与者。因此，边缘性可以理解为在某一个共同体所界定的参与领域中所处的位置。
                </Typography>
                <Typography variant="body1">
                    同时，需要注意的是，参与某一实践共同体较长一段时间后，参与的形式和个体的身份往往会发生一定的变化。当新来者进入共同体后，通过学习与实践参与，他们会法发展到相对于新来者是资深者的程度，最后他们成为真正的资深者。
                </Typography>
                <Typography variant="body1">
                    就教学而言，合法的边缘性参与带来的启示是：在教学与学习中需要关注一个非常丰富多样的领域，这个领域中有必要的行动者及与之相伴的其他形式的参与者，以此让行动者在不同形式的参与中学习、发展并塑造自我。
                </Typography>
                <Typography variant="body1">
                    在1988年，Wenger提出需要在三个宽泛的水平上看待学习就是参与：
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    （1）针对个体
                </Typography>
                <Typography variant="body1">
                    个体的学习意味着参与到学习者所属的共同体的实践中。
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    （2）针对组织
                </Typography>
                <Typography variant="body1">
                    共同体学习是一件精炼共同体的实践并确保有新成员（即合法的边缘性参与的循环过程：新来者→资深者→新的新来者）的事情。
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    （3）针对组织
                </Typography>
                <Typography variant="body1">
                    组织水平上的学习指的是一个维持实践共同体间相互联系的问题，借此某一组织就知道他所知道的，并由此编程一个有效的、有价值的组织。简言之，就是不同实践共同体之间的跨领域合作，保持不同实践共同体之间紧密的联系。
                </Typography>
                <Typography variant="body1">
                    因此，从“合法的边缘性参与”的角度来看情境学习，是一种宏观全面的角度。那么如果从微观角度看的话，这种参与涉及的是什么呢？如何理解“像实践共同体中资深者一样地思考与行动”的含义。这就需要从微观层面去理解情境学习中的认知过程，即下面将要讨论的：认知是指号的过程。
                </Typography>
                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    2. 认知是指号过程
                </Typography>
                <Typography variant="body1">
                    在传统的认知与记忆的所有模型中，都认为知识是外部显示的某些类型的内在表征。信息就在外面，可由人类的加工信息进行接收和存储，不管其具体形式是极意网络、认知结构还是图示。但是，情境认知理论的基本观点是：**学习设计社会参与，这样认知就是发生在世界中而不是在头脑内，学习不再被解释为与世界有点分离或在世界之外**（Whitson,1997），Clancy用另一种形式表达到：
                </Typography>
                <Typography variant="body1">
                    如果人类的知识不是由储存的描述所构成，那么，我们所说的与我们所做的关系是什么？说话不应当看做是把头脑中已有的内容带出来，而应当看做是改变内部内容的一种方式。说话不是重新表述已在大脑中下意识地公布了的内容，其本身就是一种表征活动。当我们与自己及其他人以前说过的和做过的事进行相互作用并对其重新知觉时，我们给事物起的名称及其意义，我们的理论，我们的观点，就在我们的行为中得以发展（Clancy，1997）。
                </Typography>
                <Typography variant="body1">
                    这样，从情境观点来看，认知是一种符号活动，或指号过程。那么如何理解情境学习理论的认识观和“指号过程”这一概念呢？我们下面通过一些具体的例子来进行分析。
                </Typography>
                <Typography variant="body1">
                    指号过程（semiosis）是指符号的持续不断的动态性和生产性活动。符号学理论认为，有关世界的所有知识都是通过符号传递的，而这些符号又是物理世界和有认知能力的有机体共同决定的。比如，一些原始人可能会用如下的图形来表示狗，而他们可以通过使用这个图形并通过手势、声音等来向部落里其他人解释这个符号的含义之后，这个图片就成了符号，即它产生了解释，群体中所有人对图画描绘的是一只狗的共同理解。
                </Typography>
                <img alt="指号" src={img3_1} />
                <Typography variant="body1">用符号来表示客体的方式有三种：</Typography>
                <Typography variant="body1">
                    ① 作为指标（如温度计中水银柱的上升是温度身高的符号）
                </Typography>
                <Typography variant="body1">
                    ② 作为图标（如原始人在洞穴中绘制出狗的形状）
                </Typography>
                <Typography variant="body1">③ 作为符号（如英语单词“dog”表示实际的动物）</Typography>
                <Typography variant="body1">
                    从一个客体开始，符号可以产生符号链，即一个符号代表一个客体，而另一个符号可以代表前面一个的符号，以此类推。这就叫做符号的生成性。在测量病人体温中可以看见这种生成性。体温超过37摄氏度就表明发烧，进一步的解释可能是：发烧是某种传染性疾病引起的，如果是这种疾病那就需要使用适当的维他命来增加病人的抵抗力，以便预防疾病。从这个例子中可以展现符号链和解释的潜能。
                </Typography>
                <Typography variant="body1">
                    但是，随着人么彼此相互作用以及与他们的物质世界的事物相互作用，他们创造了像语言和数学之类的符号系统来帮助他们表征知识及其对世界的理解。而这种符号系统发展的方式因不同的实践共同体而已，而且，这些符号系统变成了新来者在加入共同体时必须学习的语言和文化的一部分，由此，发生在共同体中的认知与学习发生了。让我们重新思考一下关于“洞穴人的狗”的案例，那副图片真的表示的是一只狗吗？请您重新回去看看那副图片。其他您会发现它可以表示任何动物：狐狸、狼、马等。那么我们需要如何其辨别呢？此时考古学家可能会根据洞穴中找到的骨头来分析，也就是说，根据不同的共同体特征、更具不同的情境来分析符号所拥有的意义。也就是说，符号是在产生它的文化中有它特定的意义。
                </Typography>
                <Typography variant="body1">
                    因此。在符号的产生、发展和解释的过程中，情境认知所认为的“指号过程”就发生了，而一个新加入者对这一符号的认识、解释的过程，也就是情境认知所认为的认知过程了。
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

export default Chapter3Session2;
