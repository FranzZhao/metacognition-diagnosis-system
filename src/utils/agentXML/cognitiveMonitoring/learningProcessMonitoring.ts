export const CMLearningProcessMonitoringXML = {
    msgTitle: '认知监控-学习过程监控',
    msgList: [
        {
            step: '1',
            promptTitle: '学习状态感知',
            promptContent:
                '分析自己在当前活动中的情感体验是如何的，是对当前的任务或学习的内容感到困惑、感到兴奋、感到过于复杂而难以把握等，请对此进行分析',
            answer: ''
        }
    ]
};

// <cognitivePrompt target="认知监控" context="学习过程监控">
//     <!-- 支持程度: 方向 -->
//     <direction>
//         <step sequence="1">学习状态感知</step>
//     </direction>
//     <!-- 支持程度: 框架 -->
//     <framework>
//         <step sequence="1">请对自己当前的学习情况、学习成果、情感体验进行反思</step>
//     </framework>
//     <!-- 支持程度: 指示 -->
//     <instruction>
//         <step sequence="1">
//             分析自己在当前活动中的情感体验是如何的，是对当前的任务或学习的内容感到困惑、感到兴奋、感到过于复杂而难以把握等，请做清晰的分析
//         </step>
//     </instruction>
//     <!-- 支持程度: 样例 -->
//     <modeling>
//         我发现我在阅读这部分知识的时候，产生了很多疑问，特别是关于情境认知的，和我之前的理解有很大的出入，我需要再重新思考一下之前的理解是否需要进行调整。
//     </modeling>
// </cognitivePrompt>
