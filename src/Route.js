/**
 * date         : 2021.09.10
 * creater      : suyeong.yoo
 * description  : router config page
 **/
import React from 'react';
import BaseLayout from './easydev/layout/base';
import Home from './easydev/view/home/Home';

const RouteConfig = [
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            { path: '/', element: <Home /> }
        ]
    }
];

export default RouteConfig;
