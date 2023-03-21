import React, { useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
// img
import img4_1 from '@/assets/img/img4-1.png';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { updateChapterLearningProcess } from '@/store/slices';

const Chapter3Session3 = () => {
    const dispatch = useAppDispatch();
    const ChapterInfoList = useAppSelector((state) => state.knowledgeLearning.chapterInfoList);
    const [number, setNumber] = useState<number | number[]>(parseInt(ChapterInfoList[8].progress));

    const handleChangeNumber = (event: Event, newValue: number | number[]) => {
        setNumber(newValue);
        dispatch(
            updateChapterLearningProcess({
                chapterId: '9',
                process: newValue + ''
            })
        );
    };

    return (
        <Box>
            <Paper variant="outlined" sx={{ mt: 2, p: '20px 30px', '& *': { lineHeight: '27px' } }}>
                <Typography variant="h4" fontWeight="bold">
                    第三节 情境认知的教学含义
                </Typography>
                <Typography variant="body1">
                    前面分析了情境认知的基本理论和观点，确实有些抽象和难以理解，但是对于学习心理学而言最重要的是去解释和帮助教师的教学与学生的学习。那么，如何利用情境认知理论来进行教学与学习的设计呢？情境认知理论家们总结出了四个常用的策略。
                </Typography>
                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    1. 认知学徒制
                </Typography>
                <Typography variant="body1">
                    根据布朗等人（1989）的观点，学生参与实践共同体的一种方式是通过认知学徒，也就是学校儿童可以通过成为历史、数学、科学这些领域的学徒而获得历史学家、数学家、科学家的知识与技能。这种学徒的概念和教学方法在高等教育中已经是教学计划的一部分了，也就是采用实习的形式，让学生在真实的情境中练习他们花数年时间学习的技能和知识。从广义上来说，利用项目式学习或基于项目的任务解决也是认知学徒的一种表现形式，不过要求项目是更长期、多方面的。
                </Typography>
                <Typography variant="body1">
                    但是，需要重点强调的是，如何认知学徒制没有更好的规划和监控，就很可能使整个“学徒”的过程变得相当乏味、压抑，甚至仅仅是完成了某些实践活动而根本没有掌握其中所承载的、更为复杂的知识与技能。根据科斯纳等人的观点（Kirshner
                    &
                    Whitson,1997），认知学徒制不应当与商业的学徒制完全一样，因为这会牺牲学校所提供的抽象的和反思性活动的机会。因此，认知学徒制的过程中应当重视两种共同体之间的相互作用（即抽象性学习与反思活动与真实情景中任务解决活动所代表的两个共同体：学校和实习场），这样实习生或学徒就有机会批判性地发丝自己正在学习的内容。
                </Typography>
                <Typography variant="body1">
                    柯林斯等人（1991）针对认知学徒制，设计如如下所示的四个维度来支持认知学徒制学习环境的设计，包括内容、方法、顺序与社会性/社会学。
                </Typography>
                <img alt="认知学徒制" src={img4_1} />

                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    2. 抛锚式教学
                </Typography>
                <Typography variant="body1">
                    1990年，范德比尔特的认知与技术小组（CTGV）引入了抛锚式教学的思想，作为实施情境教学条件的一种手段。他们通过富含信息的资源环境，可以为解决复杂问题和显示的问题提供情景化的场景。例如，让学生在“计算乘船旅行中所需要的燃料”这样的解决数学问题的情境中，让学生利用提供的资源，去学习、分析、解决这类情境问题。
                </Typography>

                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    3. 学习共同体
                </Typography>
                <Typography variant="body1">
                    情境学习是学会在一个以知识为工作内容的实践共同体中如何发挥作用（Bereiter，1997），那么如何在教学中实践呢？
                </Typography>
                <Typography variant="body1">
                    在学校的传统社会结构中，教师通过课堂活动、教科书及其他可能的媒体向学生传授知识，即以教师为主导的教学形式，且教师需要安排一切的学习活动、目标、手段等。而当课堂成为学习共同体时，其社会结构就变了教师和学生合作来实现重要的目标，这些目标是由师生双方共同确立的。同时，在实践过程中要强调分布式的专业知识，即让学生在共同体学习中有机会接触到不同的事物、不同的领域知识。
                </Typography>

                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    4. 在情境中进行评价
                </Typography>
                <Typography variant="body1">
                    在“2.3
                    日常认知”中我们了解到，测验成绩并不能代表学生掌握了某一项技能，不管学生是取得好的成绩还是不好的成绩，都不能随意地下定结论。因此，在情境认知理论中，需要强调学习过程与学习结果分析的相结合。柯林斯（1990）提出了三部分的评价模型可作为评价情境学习的一种方法：
                </Typography>
                <Typography variant="body1">
                    （1）诊断：教师必须随时分析学者的进展情况，并据此改变方法、顺序及其他学习的条件以满足学习者实时的需要（以调整教学活动、内容为主要目的）。
                </Typography>
                <Typography variant="body1">
                    （2）总结性的统计：分析学习者成绩随时间变化的模式和趋势，记录学习者每周的学习情况数据（以分析学生的学习情况为主要目的）
                </Typography>
                <Typography variant="body1">
                    （3）作品选集：强调作品的制作（过程）与评价（结果）中，学生与教师的共同参与。
                </Typography>

                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    5. 总结
                </Typography>
                <Typography variant="body1">
                    情境认知理论导致了对学习看法的一次革命，现在学术界对于“认知观”和“情境观”两种看待学习的方式来存在着一定的争论（因为二者看上次确实有一定的相互矛盾）。但是Rose（1999）认为“关于人们如何变得熟练这一问题，我们不能期待只拥有一种唯一的解释”，二者分别从认知世界和现实世界中得到了一定的验证和丰富，那么对于教学实践而言，针对某一情境下出现的问题，我们以不同的观点来分析、看待、认知和解决问题，何尝不是令人感到兴奋和有趣的呢。
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

export default Chapter3Session3;
