import React, { useState } from 'react';
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
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center',
        // doesn't perfectly work with our tricks, disable it
        selectedMode: false
    },
    series: [
        {
            name: 'Access From',
            itemStyle: {
                borderRadius: 4
                // borderColor: '#fff',
                // borderWidth: 3
            },
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '70%'],
            // adjust the start angle
            startAngle: 180,
            label: {
                show: true,
                formatter(param) {
                    // correct the percentage
                    return param.name + ' (' + param.percent * 2 + '%)';
                }
            },
            data: [
                { value: 1048, name: '元认知' },
                { value: 735, name: '自适应' },
                { value: 580, name: '自我反思' },
                { value: 484, name: '认知调节' },
                { value: 300, name: '自指' },
                { value: 500, name: '认知系统' },
                {
                    // make an record to fill the bottom 50%
                    value: 1048 + 735 + 580 + 484 + 300 + 500,
                    itemStyle: {
                        // stop the chart from rendering this piece
                        color: 'none',
                        decal: {
                            symbol: 'none'
                        }
                    },
                    label: {
                        show: false
                    }
                }
            ]
        }
    ]
};

const PieChart = () => {
    const [pieChartOption, setPieChartOption] = useState(initOption);

    return (
        <ReactECharts
            echarts={echarts}
            option={pieChartOption}
            // style={{ height: '200%' }}
            theme={'shine'}
        />
    );
};

export default PieChart;
