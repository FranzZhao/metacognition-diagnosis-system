import React, { useEffect, useState } from 'react';
// echarts
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
// echarts theme
import { shine } from '../theme/shine';

echarts.use([SVGRenderer]);
// echarts theme
echarts.registerTheme('shine', shine);

const initOption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: [
            '元认知知识地图',
            '系统科学知识地图',
            '自我反思知识地图',
            '情境认知知识地图',
            '认知动力主义知识地图 '
        ]
    },
    series: [
        {
            name: '知识节点数量',
            type: 'bar',
            data: [12, 24, 12, 44, 2]
        },
        {
            name: '知识关联数量',
            type: 'bar',
            data: [20, 34, 6, 34, 1]
        }
    ]
};

const BarChart = ({ mapList, nodeList, linkList }) => {
    const [barChartOption, setBarChartOption] = useState(initOption);

    useEffect(() => {
        setBarChartOption({
            ...barChartOption,
            yAxis: {
                type: 'category',
                data: mapList
            },
            series: [
                {
                    name: '知识节点数量',
                    type: 'bar',
                    data: nodeList
                },
                {
                    name: '知识关联数量',
                    type: 'bar',
                    data: linkList
                }
            ]
        });
    }, [mapList, nodeList, linkList]);

    return (
        <ReactECharts
            echarts={echarts}
            option={barChartOption}
            // style={{ height: '300px' }}
            theme={'shine'}
        />
    );
};

export default BarChart;
