import { lazy } from 'react';
import * as React from 'react';
import type { RouteObject } from 'react-router-dom';
import { Outlet, Link, useRoutes, useParams, useNavigate } from 'react-router-dom';
import MainLayout from './components/layout/mainLayout';
import { Box, Button } from '@mui/material';
import { routes } from './utils/routers';

export default function App() {
    // let routes: RouteObject[] = [
    //     {
    //         path: '/',
    //         element: <MainLayout />,
    //         children: [
    //             { index: true, element: <Home /> },
    //             {
    //                 path: '/courses',
    //                 element: <Courses />,
    //                 children: [
    //                     { index: true, element: <CoursesIndex /> },
    //                     { path: '/courses/:id', element: <Course /> }
    //                 ]
    //             },
    //             { path: '*', element: <NoMatch /> }
    //         ]
    //     }
    // ];

    // The useRoutes() hook allows you to define your routes as JavaScript objects
    // instead of <Routes> and <Route> elements. This is really just a style
    // preference for those who prefer to not use JSX for their routes config.
    let element = useRoutes(routes);

    return <Box>{element}</Box>;
}
