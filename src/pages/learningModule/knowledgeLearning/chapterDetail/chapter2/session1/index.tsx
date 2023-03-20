import React, { useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const Chapter2Session1 = () => {
    const [number, setNumber] = useState<number | number[]>(0);

    const handleChangeNumber = (event: Event, newValue: number | number[]) => {
        setNumber(newValue);
    };

    return (
        <Box>
            <Paper variant="outlined" sx={{ mt: 2, p: '20px 30px', '& *': { lineHeight: '27px' } }}>
                <Typography variant="h4" fontWeight="bold">
                    第一节 认知科学的发展与局限
                </Typography>
                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    1. 认知主义的内涵
                </Typography>
                <Typography variant="body1">
                    认知主义认为，认识是认知者对周围世界的心理表征进行心理操作，包括心理表征的生成、转换和删除等。具体而言，它是指：
                </Typography>
                <Typography variant="body1">
                    ① 认知状态是具有内容的计算心理表征的计算关系
                </Typography>
                <Typography variant="body1">
                    ② 认知过程（认知状态的改变）是具有内容的计算心理表征的计算操作
                </Typography>
                <Typography variant="body1">③ 计算的结构和表征（1、2点）都是数字的</Typography>
                <Typography variant="body1">
                    因此，认知主义将认知状态与过程分解为两个部分：一个部分是心灵表征，另一部分是计算操作。因此，表征与计算时认知主义的两大核心概念。
                </Typography>
                <Typography variant="body1">
                    表征的英文为“representation”，其中“re-”和“presentation”的组合，意指“重现”，并且通常和语义、意义、指称、意向、内容、关涉等概念相关。因此，认知主义认为心理表征是一种语义关系。因此，人的心智活动不能仅仅通过神经心理活动进行解释。因为神经元的激活或一直、功能模块的形成与运用无法说明它们是如何与心灵的具体内容相联系的（心理学的自洽性）。
                </Typography>
                <Typography variant="body1">
                    计算则是指认知科学家们将心理过程隐喻为计算过程。认为计算机在对一个被指定的函数进行输入输出处理行为时，其计算等价性可以映射、模拟出心灵的智力机制，认知认知和智能活动可以被编码为符号，并通过计算机进行模拟，如元胞自动机。而这也是当代人工智能领域所专注的关键。
                </Typography>
                <Typography variant="body1">
                    在20世纪80年代后，建立在计算表征、计算隐喻的认知主义逐渐显露其局限，许多学者也在认知主义的基础上开辟了研究认知的新路径。如情境认知（situated
                    cognition）、具身认知（embodied cognition）、延展认知（extended
                    mind）、动力学认知理论（dynamicist theory of
                    cognition）。这些理论与认知主义的区别在于：
                </Typography>
                <Typography variant="body1">
                    ① 不再将认知视为仅仅发生在大脑内部的信息处理过程
                </Typography>
                <Typography variant="body1">
                    ② 不再将知觉、思维及行为区分为严格的概念和独立的功能
                </Typography>
                <Typography variant="body1">
                    ③
                    不再强调内部表征对于认知和行为的核心作用，而是强调在认知过程中，智能体对身体感知和实时的环境因素的依赖作用、交互作用
                </Typography>
                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    2. 联结主义的内涵
                </Typography>
                <Typography variant="body1">
                    与认知主义的侧重不同，联结主义主要是通过对神经元和神经网络（neural
                    networks）的研究，概述神经系统的计算特征以及发展过程，尤其是通过大脑神经网络联结活动的形式类比来研究人类的认知活动。因此，联结主义也被成为一种联结计算心灵理论（connectionist
                    computational theory of
                    mind）。因此，联结主义的目的是通过解释心理现象与神经现象之间的密切关系，能够模拟人的大脑的总体结构和功能特点。
                </Typography>
                <Typography variant="body1">
                    因此，联结主义与认知主义相比，其主要变化体现在计算的结构和表征方式上。认知主义的数理逻辑关系被联结主义的神经元联结规则代替。但联结主义与认知主义一样，也赞同人的认知应当被视为（部分的）涉及表征的操作。联结主义的表征大体上可以分为定位式表征和分布式表征两种类型。定位式表征是一个具体单元专用于某一具体概念、性质或者个体，即单个单元的激活表示某一范围内的某个元素。分布式表征是一组单个单元的激活样式，表示某一范围内的某个元素，并且这些单元也同时参与其他表征。因此，联结主义的主要观点可以形式化的概述为：
                </Typography>
                <Typography variant="body1">① 认知状态是具有内容的心理表征的计算关系</Typography>
                <Typography variant="body1">
                    ② 认知过程（认知状态的转换）是心理表征的计算操作
                </Typography>
                <Typography variant="body1">③ 计算的结构和表征必须是联结的</Typography>
                <Typography variant="body1">
                    尽管学界对于连接主义是否是一种独立的研究范式仍存在争议，但是联结主义所体现的网络的动力系统的涌现思想却完全与传统认知主义的符号表征的计算思想不同，其孕育了20世纪90年代认知研究的交互英语及其理论框架，在认知主义和动力主义研究纲领中起到了承前启后的作用。
                </Typography>
                <Typography variant="h5" fontWeight="bold" margin="10px 0">
                    3. 传统认知科学的局限与新思路的诞生
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    3.1 传统认知科学的局限
                </Typography>
                <Typography variant="body1">
                    首先，并非所有的知识都可以形式化。而计算的首要条件就是客观对象的形式化。但人的认知得以产生的实际历史文化背景并不是确定的，同时也是动态的，演化的。包括：背景知识本身是不确定、是历史演化的；并非所有的知识背景都可以通过符号表征而进行逻辑演算
                </Typography>
                <Typography variant="body1">
                    其次，大脑信息处理功能的形式化无法解释人类自适应、自学习的能力。人类的四位活动总是在与环境的相互关联中发展的，而不是由建立在公理上的数学运算所能统一描述的。
                </Typography>
                <Typography variant="body1">
                    最后，还原论的计算思路不能解释意识问题。意识的重要特征是主观性、感受性和对反思的主动性。Holland也强调，意向性意识是在与环境交互中涌现出集群系统动力学的现象，而目前还没有理论和模型能够解释这种自涌现现象。
                </Typography>
                <Typography variant="h6" fontWeight="bold" margin="10px 0">
                    3.2 认知动力主义的兴起
                </Typography>
                <Typography variant="body1">
                    传统的认知研究将认知活动理解为脱离环境的仅仅具有内容的心智表征的计算活动。但这种抽象的、非交互式的建构模式没有考虑行动者知觉运动的物理背景、身体的活动图式及实时的环境对认知产生的影响。而认知动力系统理论则强调，身体与环境在认知中的作用，认为认知系统是由大脑、身体和周围环境组成的非线性的自组织系统。这些构成要素彼此耦合交互。认知过程具有涌现性（突现性）、生成性、具身性和情境性等特征。
                </Typography>
                <Typography variant="body1">
                    认知动力主义学者运用复杂系统的动力学理论研究认识，就是要将认知主义所暴露出的缺陷进行弥补：从认知发生的角度来理解认知，将认知视为一个动态的演变过程，而不是一个静态的计算结果；将认知理解为主客体之间互相的动力过程，而不是主体对客体消极被动的反应。
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

export default Chapter2Session1;
