import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

const task1 =
    '陈老师是一位小学5年级的英语老师，她发现虽然她的学生们已经掌握了基础的语言知识，但在语言表达和语言思维等方面能力不足。陈老师发现原因主要在于课文过于强调单一语言情境以及缺乏实践训练的问题。现在请你依据已经学到的知识，将复杂性理论与教学实践进行结合，设计针对性的课堂学习环境与活动，可以从硬件环境、软件系统、学习活动、教学指导、外部支持等多个角度进行设计，请你充分地发挥所学习的知识帮助陈老师解决问题';
const task2 =
    '传统的考试总是以测评单一知识与技能，而且往往是脱离情境的。导致很多学生为了应付考试而一味地记忆、刷题。最终所培养出的学生是难以适应真实社会情境下的复杂问题。通过知识学习你也已经了解到了这个世界的复杂性特征，以及人类发展的动态性、非线性。现在请你敞开想象、合理地构思设计一下，如果未来的考试是以复杂性理论为指导思想的，那么这种考试形式会是如何的？要如何对学生进行评价？请以数学中的概率统计为主题进行构想与设计';

const Task1 = ({ handleGetTask }) => {
    const theme = useTheme();
    const [selectedTask, setSelectedTask] = useState<any>(task1);

    useEffect(() => {
        handleGetTask(selectedTask);
    }, [selectedTask]);

    const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        let currentTask = (event.target as HTMLInputElement).value;
        setSelectedTask(currentTask);
    };

    return (
        <Box
            sx={{
                '& *': {
                    padding: '5px 0',
                    lineHeight: '27px'
                }
            }}
        >
            <Typography>
                在本次任务中，你将学习<b>《复杂系统与学习理论》</b>
                的知识内容，在其中你将掌握前沿学科复杂系统科学的基本理论与思想，并探索系统论的观念和方法与和与你所熟悉的学习科学相结合，或是对一些你之前已经了解的概念用系统科学的视角进行全新地解析。
            </Typography>
            <Typography>
                除了学习《复杂系统与学习理论》的知识外，我们希望你能够将这些理论知识转化成为实践，能够
                <b>运用系统的思想与理论解决现实教育领域中难解的复杂问题</b>
                。下面我们为你提供了两个可选择的问题，请你仔细阅读每个任务的描述，并从中选择一个你觉得你感兴趣的，或是你力所能及、能够解决的问题。
                <b style={{ color: theme.palette.error.main }}>
                    特别地，我们希望你运用好复杂系统理论的知识来解决这些现实中的难题，撰写一份解决方案，体现出你对复杂性理论的掌握与应用程度
                </b>
                。
            </Typography>
            <Typography>
                当你选择好你所想要解决的任务后，我们邀请你
                <b>在文本输入框中简单地写下你对这个任务的分析</b>
                ，可以谈论你为什么选择这个任务、这个任务的什么特征吸引到了你、你希望如何解决、你预想大概可能的解决方案是如何的等等，请你随便畅谈你对这个任务的分析与看法。
            </Typography>
            <Typography>
                <b style={{ color: theme.palette.primary.main }}>提示：</b>
                如果你对复杂系统科学或是下面两个问题的描述不是很清晰的话，可以先大致阅读“知识学习”环节中的内容，之后再进行任务选择。
            </Typography>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={selectedTask}
                    onChange={handleChangeTask}
                    name="radio-buttons-group"
                >
                    <FormControlLabel
                        value={task1}
                        control={<Radio />}
                        label={
                            <Typography sx={{ ml: 1 }}>
                                <b>任务情境1：</b>
                                {task1}
                            </Typography>
                        }
                    />
                    <Divider sx={{ margin: '10px 0' }} />
                    <FormControlLabel
                        value={task2}
                        control={<Radio />}
                        label={
                            <Typography sx={{ ml: 1 }}>
                                <b>任务情境2：</b>
                                {task2}
                            </Typography>
                        }
                    />
                </RadioGroup>
            </FormControl>
            <Typography fontWeight="bold" color={theme.palette.primary.main}>
                请在此写下你对你所选择的任务的分析：
            </Typography>
            <TextField label="任务分析" multiline rows={5} sx={{ width: '100%', mt: 2 }} />
        </Box>
    );
};

export default Task1;
