export const CPTaskAnalysisUpdateXML = {
    msgTitle: '认知计划-任务分析更新',
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
            promptTitle: '分析修正与补充',
            promptContent:
                '运用这些新掌握的知识对任务分析进行更新、修正和补充',
            answer: ''
        }
    ]
};

// <cognitivePrompt target="认知计划" context="任务分析更新">
//     <!-- 支持程度: 方向 -->
//     <direction>
//         <step sequence="1">任务分析回顾</step>
//         <step sequence="2">相关知识提取</step>
//         <step sequence="3">分析修正与补充</step>
//     </direction>
//     <!-- 支持程度: 框架 -->
//     <framework>
//         <step sequence="1">重新回顾自己最初对任务情境所做的分析</step>
//         <step sequence="2">剖析对当前任务情境进行解析的时候，需要使用到哪些已经掌握的知识</step>
//         <step sequence="3">运用这些新掌握的知识对任务分析进行更新、修正和补充</step>
//     </framework>
//     <!-- 支持程度: 指示 -->
//     <instruction>
//         <step sequence="1">思考当时进行任务分析之时，是从哪些维度进行的、分析了哪些要素、这些要素是否能够指向解决问题的核心</step>
//         <step sequence="2">回顾自己已经学习的新知识，特别是与任务情境相关的知识与方法有哪些，这些新的知识为自己带来了什么新的视角、新的观点</step>
//         <step sequence="3">
//             运用新获得的知识，重新对任务情境进行深度解析，分析问题存在的根源，可以从哪些维度进行解决，你所学会的知识能够帮助你如何提出新的、更全面、更完整的解决方案
//         </step>
//     </instruction>
//     <!-- 支持程度: 样例 -->
//     <modeling>
//         当初我在进行任务分析的时候，仅关注到了群体知识建构中学习环境这个维度。
//         而通过知识学习，我了解到了解决复杂教育系统中的问题不能仅从单一维度出发，而更应该从开放系统的角度，将整个学习生态作为整体进行剖析。
//         因此，我将重新从课堂学习生态系统的角度，对问题情境进行解析，不止涉及环境，还有环境中的主体，以及主体之间的交互模式，从系统的角度出发去解决学生在群体知识建构中存在的问题。
//     </modeling>
// </cognitivePrompt>`