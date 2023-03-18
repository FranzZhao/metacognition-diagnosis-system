import React from 'react';
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
import TaskAltIcon from '@mui/icons-material/TaskAlt';
// charts
import NumberCard from '@/components/common/charts/numberCard';
import GaugeGrade from '@/components/common/charts/gaugeGrade';
import PieChart from '@/components/common/charts/pieChart';
import BarChart from '@/components/common/charts/barChart';
import { Chip, Grid } from '@mui/material';

const LearningPortfolio = () => {
    const theme = useTheme();

    return (
        <Box>
            {/* 学习画像：章节学习进度、任务完成进度、知识标签数量、知识笔记数量（以标签为分类）、知识地图数量（以标签为分类）、知识节点数量（以知识地图为分类）、知识关联数量（以知识地图为分类）
            <div>仪表盘：章节学习进度、任务完成进度、任务完成百分比</div>
            <div>
                数字统计：知识标签、知识笔记、知识地图、知识节点、知识关联数量、任务数量+任务完成百分比
            </div>
            <div>分类统计/扇形图：所有知识标签的使用比例</div>
            <div>知识标签统计（分类柱状图）：归属于不同知识标签的知识笔记和知识地图的数量</div>
            <div>知识地图统计（分类柱状图）：不同知识地图的节点、关联的数量</div> */}
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
            </Paper>
            {/* 数量统计 */}
            <Box sx={{ display: 'flex' }}>
                <NumberCard
                    number="24"
                    text="知识标签数量"
                    icon={<StyleIcon sx={{ fontSize: '2rem' }} />}
                    color={theme.palette.primary.main}
                />
                <NumberCard
                    number="33"
                    text="知识笔记数量"
                    icon={<DescriptionIcon sx={{ fontSize: '2rem' }} />}
                    color={theme.palette.success.main}
                />
                <NumberCard
                    number="33"
                    text="知识地图数量"
                    icon={<HubIcon sx={{ fontSize: '2rem' }} />}
                    color={theme.palette.error.main}
                />
                <NumberCard
                    number="76"
                    text="知识节点数量"
                    icon={<ScatterPlotIcon sx={{ fontSize: '2rem' }} />}
                    color={theme.palette.warning.light}
                />
                <NumberCard
                    number="56"
                    text="知识关联数量"
                    icon={<ShareIcon sx={{ fontSize: '2rem' }} />}
                    color={theme.palette.info.light}
                />
                <NumberCard
                    number="8"
                    text="待办任务数量"
                    icon={<TaskAltIcon sx={{ fontSize: '2rem' }} />}
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
                            <GaugeGrade data={[{ value: 0.5, name: '学习任务进度' }]} />
                        </Grid>
                        <Grid item sx={{ width: '33.3%' }}>
                            <GaugeGrade data={[{ value: 0.2, name: '章节学习进度' }]} />
                        </Grid>
                        <Grid item sx={{ width: '33.3%' }}>
                            <GaugeGrade data={[{ value: 0.9, name: '任务计划进度' }]} />
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
                        <Chip
                            label={'元认知-20'}
                            color="primary"
                            size="small"
                            sx={{ mr: 1, mb: 1 }}
                        />
                        <Chip
                            label={'自适应-10'}
                            color="primary"
                            size="small"
                            sx={{ mr: 1, mb: 1 }}
                        />
                        <Chip
                            label={'自我反思-23'}
                            color="primary"
                            size="small"
                            sx={{ mr: 1, mb: 1 }}
                        />
                        <Chip
                            label={'自指-11'}
                            color="primary"
                            size="small"
                            sx={{ mr: 1, mb: 1 }}
                        />
                        <Chip
                            label={'自我反思-43'}
                            color="primary"
                            size="small"
                            sx={{ mr: 1, mb: 1 }}
                        />
                        <Chip
                            label={'认知调节-2'}
                            color="primary"
                            size="small"
                            sx={{ mr: 1, mb: 1 }}
                        />

                        <Chip
                            label={'认知系统-6'}
                            color="primary"
                            size="small"
                            sx={{ mr: 1, mb: 1 }}
                        />
                    </Paper>
                    <Box sx={{ width: '65%', mb: '-60px' }}>
                        <PieChart />
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
                <BarChart />
            </Paper>
        </Box>
    );
};

export default LearningPortfolio;
