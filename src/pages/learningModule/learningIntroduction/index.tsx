import React from 'react';
// mui5
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// img
import learningBG from '@/assets/img/learning-bg.jpg';

const LearningIntroduction = () => {
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
                <Box sx={{ width: '70%' }}>
                    学习内容简介：总体简介+三章简介
                    学习任务介绍：介绍任务要做什么
                    学习目标设定：提醒学生设定目标
                    学习工具介绍：如何使用工具……
                </Box>
                <Paper variant="outlined" sx={{ p: '10px', width: '30%' }}>
                    预备知识：学习科学、教育心理学、教育研究方法基础；学习收获：复杂系统理论入门、学习科学前沿研究视角、理论与教育实践融合、复杂教育研究思维
                    拓展材料：Complex Systems and Applied Linguistics, Psychology of Learning for Instruction, Embodiment and Embodied Design
                </Paper>
            </Box>
        </Box>
    );
};

export default LearningIntroduction;
