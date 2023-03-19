import * as React from 'react';
// icon
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DnsIcon from '@mui/icons-material/Dns';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import EventIcon from '@mui/icons-material/Event';
import HubIcon from '@mui/icons-material/Hub';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
// element
import MainLayout from '@/components/layout/mainLayout';
import Home from '@/pages/home';
import LearningIntroduction from '@/pages/learningModule/learningIntroduction';
import LearningTask from '@/pages/learningModule/learningTask';
import KnowledgeLearning from '@/pages/learningModule/knowledgeLearning';
import LearningPortfolio from '@/pages/learningTools/learningPortfolio';
import LearningManagement from '@/pages/learningTools/learningManagement';
import KnowledgeMap from '@/pages/learningTools/knowledgeMap';
import KnowledgeTag from '@/pages/learningTools/knowledgeTag';
import KnowledgeNote from '@/pages/learningTools/knowledgeNote';
import BlankPage404 from '@/pages/temp/404';

export const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            // {
            //     index: true,
            //     path: '/',
            //     element: <Home />,
            //     name: '个人空间',
            //     module: '主页',
            //     icon: <HomeIcon />
            // },
            {
                // 学习概览
                index: true,
                path: '/',
                element: <LearningIntroduction />,
                name: '学习概览',
                module: '学习模块',
                icon: <MapIcon />
            },
            {
                // 学习任务
                path: '/learningTask',
                element: <LearningTask />,
                name: '学习任务',
                module: '学习模块',
                icon: <LocalLibraryIcon />
            },
            {
                // 知识学习
                path: '/knowledgeLearning',
                element: <KnowledgeLearning />,
                name: '知识学习',
                module: '学习模块',
                icon: <DnsIcon />
            },
            {
                // 学习画像
                path: '/learningPortfolio',
                element: <LearningPortfolio />,
                name: '分析面板',
                module: '学习工具',
                icon: <EqualizerIcon />
            },
            {
                // 学习管理
                path: '/learningManagement',
                element: <LearningManagement />,
                name: '学习管理',
                module: '学习工具',
                icon: <EventIcon />
            },
            {
                // 知识地图
                path: '/knowledgeMap',
                element: <KnowledgeMap />,
                name: '知识地图',
                module: '学习工具',
                icon: <HubIcon />
            },
            {
                // 知识标签
                path: '/knowledgeTag',
                element: <KnowledgeTag />,
                name: '知识标签',
                module: '学习工具',
                icon: <LocalOfferIcon />
            },
            {
                // 知识笔记
                path: '/knowledgeNote',
                element: <KnowledgeNote />,
                name: '知识笔记',
                module: '学习工具',
                icon: <NoteAltIcon />
            },
            { path: '*', element: <BlankPage404 />, name: '空页面', module: '辅助页面' }
            // {
            //     path: '/courses',
            //     element: <Courses />,
            //     children: [
            //         { index: true, element: <CoursesIndex /> },
            //         { path: '/courses/:id', element: <Course /> }
            //     ]
            // },
        ]
    }
];
