export const CPLearningObjectUpdateXML = {
    msgTitle: '认知计划-认知目标更新',
    msgList: [
        {
            step: '1',
            promptTitle: '目标回顾',
            promptContent:
                '首先回顾学习目标和子目标，查看当初自己定下的任务是如何的。接着查看任务列表，校验自己当初设定的代办事项有哪些',
            answer: ''
        },
        {
            step: '2',
            promptTitle: '达成情况',
            promptContent:
                '结合目标和自己当前的学习情况、完成的内容等，分析实践与目标之间的差距或已经达成的情况',
            answer: ''
        },
        {
            step: '3',
            promptTitle: '目标更新',
            promptContent:
                '对自己的达成情况，更新任务进度，并且详细梳理接下来需要做的事情有哪些，可以对任务进行修改或提出新的学习方向',
            answer: ''
        }
    ]
};

// <cognitivePrompt target="认知计划" context="认知目标更新">
//     <!-- 支持程度: 方向 -->
//     <direction>
//         <step sequence="1">目标回顾</step>
//         <step sequence="2">达成情况</step>
//         <step sequence="3">目标更新</step>
//     </direction>
//     <!-- 支持程度: 框架 -->
//     <framework>
//         <step sequence="1">请使用“学习管理”工具回顾自己之前设定的目标</step>
//         <step sequence="2">分析当前学习情况与目标之间的差距。</step>
//         <step sequence="3">对目标进行更新、修正、删除或新任务的提出</step>
//     </framework>
//     <!-- 支持程度: 指示 -->
//     <instruction>
//         <step sequence="1">首先回顾学习目标和子目标，查看当初自己定下的任务是如何的。接着查看任务列表，校验自己当初设定的代办事项有哪些</step>
//         <step sequence="2">结合目标和自己当前的学习情况、完成的内容等，分析实践与目标之间的差距或已经达成的情况</step>
//         <step sequence="3">对自己的达成情况，更新任务进度，并且详细梳理接下来需要做的事情有哪些，可以对任务进行修改或提出新的学习方向</step>
//     </instruction>
//     <!-- 支持程度: 样例 -->
//     <modeling>
//         我当初设定的目标是：清晰地构建系统科学知识图谱。
//         虽然现在已经绘制好了相关的知识地图，但决定要素之间的关联比较混乱，思路结构还不够清晰，虽然达成了任务，但还有改进的空间。越清晰的知识地图越能帮助自己后面的任务解决。
//         所以我希望重新再阅读第一章的内容，并对知识地图进行重构，优化思维结构。
//     </modeling>
// </cognitivePrompt>`;
