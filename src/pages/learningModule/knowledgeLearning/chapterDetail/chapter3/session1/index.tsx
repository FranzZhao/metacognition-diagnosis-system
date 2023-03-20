import React, { useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const Chapter3Session1 = () => {
    const [number, setNumber] = useState<number | number[]>(0);

    const handleChangeNumber = (event: Event, newValue: number | number[]) => {
        setNumber(newValue);
    };

    return (
        <Box>
            <Paper variant="outlined" sx={{ mt: 2, p: '20px 30px', '& *': { lineHeight: '27px' } }}>
                <Typography variant="h4" fontWeight="bold">
                    第一节 情境认知理论的内涵
                </Typography>
                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    1. 情境认知的内涵
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    1.1 情境认知的含义
                </Typography>
                <Typography variant="body1">
                    情境认知理论认为，每个人的思维是适应于环境的，也就是说，是情境化的，因为人们所知觉到的，他们想象其活动的方式，他们身上所做的，是结合在一起发展的。而且，人们所知觉的、所思维的及所做的，是在一个根本上社会化的情境中发展起来的。所以，在学习中，情境认知理论强调情境的重要性。因为学习者在熟悉的情境中更容易将新知识与技能与自己已有的内容联系起来，即能够更容易地使学习者激活适当的图示。在情景认知理论中，陈述性知识（“知什么”）和程序性知识（“知如何”）被整合到了一个单一的框架中，即强调在教学与学习中要实现“知和做”的结合。情景学习的提倡者认为，如果在知和做相对分离的情境中教学时，则知识就处于惰性和不被使用的状态。
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    1.2 知识是鲜活的实践
                </Typography>
                <Typography variant="body1">
                    情境认知认为，知识是通过人们在社会中的鲜活实践而逐渐增长的。这些实践是有意义的行动，在某些文化系统中，这些行动彼此之间存在意义关系。而为了充分地了解学生在情景中的学习过程、方法等，需要更多地了解他所参与的社会文化群体——实践共同体。
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    1.3 学习是参与实践共同体
                </Typography>
                <Typography variant="body1">
                    在情景观中，学习被视为逐渐参与到实践共同体中。学习是参与，这将注意集中于如下方法：学习是个人、个人的行动、世界三者之间的一套的、不断更新的关系，即认为学习是一个共同创设（co-constitutive）的过程，在这一过程中所有的参与者通过其行动及在世界中的关系而发生改变或转化。
                </Typography>
                <Typography variant="body1">
                    上述的“行动”不难理解，但如何理解“在世界中的关系”呢？我们下面阐述。
                </Typography>
                <Typography variant="body1">
                    因为我们在社会文化群体中的学习，不只是参与一个共同体而已，而是多种不同的共同体之间相互作用、融合等。例如，教授与博士生之间组成的共同体，一般是教授担任“教师”的角色，而博士生是“学生”的角色。但是，如果这位博士生在计算机能力方面比教授更胜一筹，那么在处理计算机方面问题的时候，这位博士生就会成为教授的“老师”了。因此，不同共同体中的个体可能是完全相同的，但是他们具有不同的角色，而这个角色决定了人在实践共同体中作用。
                </Typography>
                <Typography variant="body1">
                    也就是说，学习塑造的不仅仅是我们所做的，也塑造了我们是谁以及我们如何解释我们所做的，即强调角色及角色认知的重要性。
                </Typography>

                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    2. 情境认知的理论基础
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    2.1 知觉的心态心理学
                </Typography>
                <Typography variant="body1">
                    知觉的生态心理学家吉布森（J. J.
                    Gibson）认为，研究者需要参照有机体所处在的环境来分析有机体的行为。他创造了潜在用途（affordance）以此来刻画环境对有机体行为的影响，或者有机体如何生活在其环境中。下面以钢琴为例进行解释。
                </Typography>
                <Typography variant="body1">
                    钢琴对于学习音乐的学生而言，是一个可以演奏音乐的器械；对于家庭主妇而言，它是一个很好的放置报纸杂志的地方；而对于一只小蟑螂而言，钢琴可能是它舒适的家。这样，钢琴的各种特点就被知觉到了，并根据谁的环境受到关注而导致了不同的行为。
                </Typography>
                <Typography variant="body1">
                    因此，潜在用途的观点表明，有机体及其环境之间是存在相互作用、互惠的关系。而对于学习理论而言，任何学习与教学都必须从学习者所处的文化开始，这就是情景认知理论的一个重要的标志。
                </Typography>

                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    2.2 教育中的多文化性
                </Typography>
                <Typography variant="body1">
                    在分析学习中设计的因素时，研究者们逐渐从心理因素转向了社会因素的分析，这也就导致了对跨文化、多文化的兴趣。达玛琳（Damarin）认为，要尊重学习者所来自的知识社区并帮助他们在多重世界中感到自在的重要性，并强调利用技术在教学中的潜在作用，以此来克服不同文化之间的差异。由此可知，学习者在文化中的地位成了学习中的一个重要的变量。
                </Typography>

                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    2.3 日常认知
                </Typography>
                <Typography variant="body1">
                    在比较实验中和日常生活中的活动时，常常可以发现，在测验情景中表现很差的人在其日常生活中，在类似的问题上却表现出很强的技能（Rogoff，1984）（可以联想类比一下自己考试的情况）。这种表现上的差异导致研究者提出了如下的理论：认知是由社会界定、解释和支持的（Rogoff,1984）。Rogoff总结说，日常思维“并非是不合逻辑的、草率的，相反，在处理实际问题时是合理有效的”。也就是说，成功推理的适应性需要在参与到各种相互作用中来考察，这些相互作用在多种情景下都是成功的。
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

export default Chapter3Session1;
