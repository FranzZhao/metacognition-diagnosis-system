import { lazy } from 'react';
import * as React from 'react';
import type { RouteObject } from 'react-router-dom';
import MainLayout from '../components/layout/mainLayout';
import Home from '../pages/home';
import LearningIntroduction from '../pages/learningModule/learningIntroduction';
import LearningTask from '../pages/learningModule/learningTask';
import KnowledgeLearning from '../pages/learningModule/knowledgeLearning';
import LearningPortfolio from '../pages/learningTools/learningPortfolio';
import LearningManagement from '../pages/learningTools/learningManagement';
import KnowledgeMap from '../pages/learningTools/knowledgeMap';
import KnowledgeTag from '../pages/learningTools/knowledgeTag';
import KnowledgeNote from '../pages/learningTools/knowledgeNote';
import BlankPage404 from '../pages/temp/404';

export const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home />, name: '个人空间', module: '主页' },
            {
                // 学习概览
                index: false,
                path: '/learningIntroduction',
                element: <LearningIntroduction />,
                name: '学习概览',
                module: '学习模块'
            },
            {
                // 学习任务
                path: '/learningTask',
                element: <LearningTask />,
                name: '学习任务',
                module: '学习模块'
            },
            {
                // 知识学习
                path: '/knowledgeLearning',
                element: <KnowledgeLearning />,
                name: '知识学习',
                module: '学习模块'
            },
            {
                // 学习画像
                path: '/learningPortfolio',
                element: <LearningPortfolio />,
                name: '学习画像',
                module: '学习工具'
            },
            {
                // 学习管理
                path: '/learningManagement',
                element: <LearningManagement />,
                name: '学习管理',
                module: '学习工具'
            },
            {
                // 知识地图
                path: '/knowledgeMap',
                element: <KnowledgeMap />,
                name: '知识空间',
                module: '学习工具'
            },
            {
                // 知识标签
                path: '/knowledgeTag',
                element: <KnowledgeTag />,
                name: '知识标签',
                module: '学习工具'
            },
            {
                // 知识笔记
                path: '/knowledgeNote',
                element: <KnowledgeNote />,
                name: '知识笔记',
                module: '学习工具'
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

const routers = [
    {
        path: '/',
        element: lazy(() => import('@pages/home')),
        index: true
    }
];

const handleRoutesTree = (routes, module) => {
    const routesTree: any[] = [];
    // let currentModule = '';
    routes.map((route) => {
        if (module === route.module) {
            routesTree.push(route);
        }
    });
};
