import React, { useEffect, useState } from 'react';
// mui5
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// icon
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import StyleIcon from '@mui/icons-material/Style';
import DescriptionIcon from '@mui/icons-material/Description';
import HubIcon from '@mui/icons-material/Hub';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import ShareIcon from '@mui/icons-material/Share';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
// charts
import NumberCard from '@/components/common/charts/numberCard';
import GaugeGrade from '@/components/common/charts/gaugeGrade';
import PieChart from '@/components/common/charts/pieChart';
import BarChart from '@/components/common/charts/barChart';
import { Chip, Grid } from '@mui/material';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
// agent help
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import { metacognitivePrompt } from '@/store/slices';

const LearningPortfolio = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const currentMsgID = useAppSelector((state) => state.agent.currentId);
    /** 数量统计 */
    // 知识标签
    const tagList = useAppSelector((state) => state.knowledgeTag.tagList);
    const [tagNum, setTagNum] = useState(0);
    // 知识笔记
    const noteList = useAppSelector((state) => state.knowledgeNote.noteList);
    const [noteNum, setNoteNum] = useState(0);
    // 知识地图
    const mapList = useAppSelector((state) => state.map.mapList);
    const [mapNum, setMapNum] = useState(0);
    const [nodeNum, setNodeNum] = useState(0);
    const [linkNum, setLinkNum] = useState(0);
    // 待办事项
    const todoList = useAppSelector((state) => state.todoList.todoList);
    // const [todoNum, setTodoNum] = useState(0);
    // 反思日志
    const diaryList = useAppSelector((state) => state.diary.diaryList);
    const [diaryNum, setDiaryNum] = useState(0);

    useEffect(() => {
        setTagNum(tagList.length);
        setNoteNum(noteList.length);
        setMapNum(mapList.length);
        let totalNodeNum = 0;
        let totalLinkNum = 0;
        mapList.map((map) => {
            totalNodeNum += map.nodes.length;
            totalLinkNum += map.links.length;
        });
        setNodeNum(totalNodeNum);
        setLinkNum(totalLinkNum);
        setDiaryNum(diaryList.length);
        // setTodoNum(todoList.length);
    }, [tagList, noteList, mapList, todoList]);

    /** 学习进度 */
    // TODO: 学习目标进度
    const objects = useAppSelector((state) => state.learningObject.subLearningObjects);
    const [objectProgress, setObjectProgress] = useState(0);
    // 章节进度
    const chapters = useAppSelector((state) => state.knowledgeLearning.chapterInfoList);
    const [chapterProgress, setChapterProgress] = useState(0);
    // 任务计划进度
    const [todoProgress, setTodoProgress] = useState(0);

    useEffect(() => {
        // 学习目标
        let totalObjectProgress = 0;
        objects.map((object) => {
            totalObjectProgress += object.progress;
        });
        setObjectProgress((totalObjectProgress / objects.length) * 0.01);
        // 章节进度
        let totalChapterProgress = 0;
        chapters.map((chapter) => {
            totalChapterProgress += parseInt(chapter.progress);
        });
        setChapterProgress((totalChapterProgress / chapters.length) * 0.01);
        // 任务进度
        let todoFinish = 0;
        todoList.map((todo) => {
            if (todo.isFinish) {
                todoFinish++;
            }
        });
        setTodoProgress(todoFinish / todoList.length);
    }, [objects, chapters, todoList]);

    // TODO: 知识标签统计
    const [tagPieChart, setTagPieChart] = useState<any[]>([]);
    useEffect(() => {
        let tagValueList: any[] = [];
        tagList.map((tag) => {
            tagValueList.push({
                name: tag.labelText,
                value: 0
            });
        });
        // console.log(tagValueList);
        tagValueList.map((tag, index) => {
            let totalNotes = 0;
            let totalMap = 0;
            let totalNodes = 0;
            let totalLinks = 0;
            let totalDiary = 0;
            noteList.map((note) => {
                if (note.tags.includes(tag.name)) {
                    totalNotes += 1;
                }
            });
            mapList.map((map) => {
                if (map.tags.includes(tag.name)) {
                    totalMap += 1;
                }
                map.nodes.map((node) => {
                    if (node.extraInfo.tags.includes(tag.name)) {
                        totalNodes += 1;
                    }
                });
                map.links.map((node) => {
                    if (node.extraInfo.tags.includes(tag.name)) {
                        totalLinks += 1;
                    }
                });
            });
            diaryList.map((diary) => {
                if (diary.tags.includes(tag.name)) {
                    totalDiary += 1;
                }
            });
            tagValueList[index].value =
                totalNotes + totalMap + totalNodes + totalLinks + totalDiary;
        });
        setTagPieChart(tagValueList);
        console.log(tagValueList);
    }, [tagList, mapList, noteList, diaryList]);

    // 知识地图统计
    const [mapNameList, setMapNameList] = useState<string[]>([]);
    const [eachMapNodeNum, setEachMapNodeNum] = useState<number[]>([]);
    const [eachMapLinkNum, setEachMapLinkNum] = useState<number[]>([]);
    useEffect(() => {
        let newMapNameList: string[] = [];
        let newEachMapNodeNum: number[] = [];
        let newEachMapLinkNum: number[] = [];
        mapList.map((map) => {
            newMapNameList.push(map.title);
            newEachMapNodeNum.push(map.nodes.length);
            newEachMapLinkNum.push(map.links.length);
        });
        setMapNameList(newMapNameList);
        setEachMapNodeNum(newEachMapNodeNum);
        setEachMapLinkNum(newEachMapLinkNum);
    }, [mapList]);

    return (
        <Box>
            {/* 标题 */}
            <Paper
                variant="outlined"
                sx={{
                    p: 2,
                    m: 1,
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    color: theme.palette.primary.dark
                }}
            >
                <EqualizerIcon sx={{ mr: 1 }} />
                <Box>学习分析面板</Box>
                <Tooltip title="认知调节-学习过程监控" arrow>
                    <IconButton
                        size="small"
                        sx={{ ml: 'auto' }}
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
            </Paper>
            {/* 数量统计 */}
            <Box sx={{ display: 'flex' }}>
                <NumberCard
                    number={tagNum}
                    text="知识标签数量"
                    icon={<StyleIcon sx={{ fontSize: '2rem' }} />}
                    color={theme.palette.primary.main}
                />
                <NumberCard
                    number={noteNum}
                    text="知识笔记数量"
                    icon={<DescriptionIcon sx={{ fontSize: '2rem' }} />}
                    color={theme.palette.success.main}
                />
                <NumberCard
                    number={mapNum}
                    text="知识地图数量"
                    icon={<HubIcon sx={{ fontSize: '2rem' }} />}
                    color={theme.palette.error.main}
                />
                <NumberCard
                    number={nodeNum}
                    text="知识节点数量"
                    icon={<ScatterPlotIcon sx={{ fontSize: '2rem' }} />}
                    color={theme.palette.warning.light}
                />
                <NumberCard
                    number={linkNum}
                    text="知识关联数量"
                    icon={<ShareIcon sx={{ fontSize: '2rem' }} />}
                    color={theme.palette.info.light}
                />
                <NumberCard
                    number={diaryNum}
                    text="反思日志数量"
                    icon={<PsychologyAltIcon sx={{ fontSize: '2rem' }} />}
                    color={theme.palette.secondary.light}
                />
            </Box>
            {/* 进度统计 */}
            <Paper variant="outlined" sx={{ p: 2, m: 1 }}>
                <Box
                    sx={{
                        fontWeight: 'bold',
                        color: theme.palette.primary.dark,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <PublishedWithChangesIcon sx={{ mr: 1 }} />
                    <Box>学习进度</Box>
                </Box>
                <Box>
                    <Grid container>
                        <Grid item sx={{ width: '33.3%' }}>
                            <GaugeGrade data={[{ value: objectProgress, name: '学习目标进度' }]} />
                        </Grid>
                        <Grid item sx={{ width: '33.3%' }}>
                            <GaugeGrade data={[{ value: chapterProgress, name: '章节学习进度' }]} />
                        </Grid>
                        <Grid item sx={{ width: '33.3%' }}>
                            <GaugeGrade data={[{ value: todoProgress, name: '待办事项进度' }]} />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
            {/* 知识标签统计 */}
            <Paper variant="outlined" sx={{ p: 2, m: 1 }}>
                <Box
                    sx={{
                        fontWeight: 'bold',
                        color: theme.palette.primary.dark,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <StyleIcon sx={{ mr: 1 }} />
                    <Box>知识标签统计</Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Paper
                        variant="outlined"
                        sx={{
                            p: 2,
                            m: 1,
                            width: '35%',
                            height: '200px',
                            overflowY: 'overlay',
                            overflowX: 'hidden',
                            '&::-webkit-scrollbar': {
                                width: 5
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: '#a4b7c670',
                                borderRadius: '4px'
                            }
                        }}
                    >
                        {tagPieChart.map((tag) => {
                            return (
                                <Chip
                                    key={tag.name}
                                    label={tag.name + '-' + tag.value}
                                    color="primary"
                                    size="small"
                                    sx={{ mr: 1, mb: 1 }}
                                />
                            );
                        })}
                    </Paper>
                    <Box sx={{ width: '65%', mb: '-60px' }}>
                        <PieChart data={tagPieChart} />
                    </Box>
                </Box>
            </Paper>
            {/* 知识地图统计 */}
            <Paper variant="outlined" sx={{ p: 2, m: 1 }}>
                <Box
                    sx={{
                        fontWeight: 'bold',
                        color: theme.palette.primary.dark,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <HubIcon sx={{ mr: 1 }} />
                    <Box>知识地图统计</Box>
                </Box>
                <BarChart
                    mapList={mapNameList}
                    nodeList={eachMapNodeNum}
                    linkList={eachMapLinkNum}
                />
            </Paper>
        </Box>
    );
};

export default LearningPortfolio;
