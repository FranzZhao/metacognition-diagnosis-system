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
    series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '90%',
            min: 0,
            max: 1,
            splitNumber: 8,
            axisLine: {
                lineStyle: {
                    width: 6,
                    color: [
                        [0.25, '#FF6E76'],
                        [0.5, '#FDDD60'],
                        [0.75, '#58D9F9'],
                        [1, '#7CFFB2']
                    ]
                }
            },
            pointer: {
                icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                length: '12%',
                width: 20,
                offsetCenter: [0, '-60%'],
                itemStyle: {
                    color: 'inherit'
                }
            },
            axisTick: {
                length: 12,
                lineStyle: {
                    color: 'inherit',
                    width: 2
                }
            },
            splitLine: {
                length: 20,
                lineStyle: {
                    color: 'inherit',
                    width: 5
                }
            },
            axisLabel: {
                color: '#464646',
                fontSize: 15,
                distance: -40,
                rotate: 'tangential',
                formatter: function (value) {
                    if (value === 0.875) {
                        return '胜利在望';
                    } else if (value === 0.625) {
                        return '即将完成';
                    } else if (value === 0.375) {
                        return '渐入佳境';
                    } else if (value === 0.125) {
                        return '逐渐起步';
                    }
                    return '';
                }
            },
            title: {
                offsetCenter: [0, '-10%'],
                fontSize: 15,
                fontWeight: 'bold'
            },
            detail: {
                fontSize: 30,
                offsetCenter: [0, '-35%'],
                valueAnimation: true,
                formatter: function (value) {
                    return Math.round(value * 100) + '%';
                },
                color: 'inherit'
            },
            data: []
        }
    ]
};

const GaugeGrade = ({ data }) => {
    const [gaugeGradeOption, setGaugeGradeOption] = useState<any>(initOption);

    useEffect(() => {
        // 一定要深拷贝！不然同类型的图只会显示最后的数据
        let newGaugeGradeOption = JSON.parse(JSON.stringify(gaugeGradeOption));
        newGaugeGradeOption.series[0].data = data;
        setGaugeGradeOption(newGaugeGradeOption);
    }, [data]);

    return (
        <ReactECharts
            echarts={echarts}
            option={gaugeGradeOption}
            // style={{ height: '200%' }}
            theme={'shine'}
        />
    );
};

export default GaugeGrade;
