export const CETaskAnalysisUpdateXML = {
    msgTitle: '认知评价-任务分析更新',
    msgList: [
        {
            step: '1',
            promptTitle: '任务分析回顾',
            promptContent: '重新回顾自己最初对任务情境所做的分析',
            answer: ''
        },
        {
            step: '2',
            promptTitle: '相关知识提取',
            promptContent: '剖析对当前任务情境进行解析的时候，需要使用到哪些已经掌握的知识',
            answer: ''
        },
        {
            step: '3',
            promptTitle: '问题分析与诊断',
            promptContent:
                '运用这些知识对自己当时所做的任务分析情况进行评价，诊断其中可能存在的问题和不足',
            answer: ''
        }
    ]
};

// <cognitivePrompt target="认知评价" context="任务分析更新">
//     <direction>
//         <step sequence="1">任务分析回顾</step>
//         <step sequence="2">相关知识提取</step>
//         <step sequence="3">问题分析与诊断</step>
//     </direction>
//     <framework>
//         <step sequence="1">重新回顾自己最初对任务情境所做的分析</step>
//         <step sequence="2">剖析对当前任务情境进行解析的时候，需要使用到哪些已经掌握的知识</step>
//         <step sequence="3">运用这些知识对自己当时所做的任务分析情况进行评价，诊断其中可能存在的问题和不足</step>
//     </framework>
//     <instruction>
//         <step sequence="1">思考当时进行任务分析之时，是从哪些维度进行的、分析了哪些要素、这些要素是否能够指向解决问题的核心</step>
//         <step sequence="2">回顾自己已经学习的新知识，特别是与任务情境相关的知识与方法有哪些，这些新的知识为自己带来了什么新的视角、新的观点</step>
//         <step sequence="3">
//             运用自己掌握的知识，从任务分析维度、关键要素、核心问题等角度对任务分析的质量、成效、全面性等进行详细的分析和诊断
//         </step>
//     </instruction>
//     <modeling>
//         当初我在进行任务分析的时候，仅关注到了群体知识建构中学习环境这个维度。
//         而通过知识学习，我了解到了解决复杂教育系统中的问题不能仅从单一维度出发，而更应该从开放系统的角度，将整个学习生态作为整体进行剖析。
//         因此，我需要重新利用现在学到的知识重新对任务分析的维度进行拓展。
//     </modeling>
// </cognitivePrompt>
