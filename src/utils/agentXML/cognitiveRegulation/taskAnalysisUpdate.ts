export const CRTaskAnalysisUpdateXML = {
    msgTitle: '认知调节-任务分析更新',
    msgList: [
        {
            step: '1',
            promptTitle: '任务分析回顾',
            promptContent: '请重新回顾你之前所写下的任务分析',
            answer: ''
        },
        {
            step: '2',
            promptTitle: '已有知识提取',
            promptContent: '现在依据你已经学习的知识内容，分析哪些知识与任务分析的领域是相关的',
            answer: ''
        },
        {
            step: '3',
            promptTitle: '局限分析',
            promptContent: '现在基于你掌握的知识，反思当时所做的任务分析存在什么局限',
            answer: ''
        },
        {
            step: '4',
            promptTitle: '任务分析更新',
            promptContent: '根据所分析出的局限，对任务分析进行调整，适当情况下也可以重新选择任务情境',
            answer: ''
        }
    ]
};

// <cognitivePrompt target="认知调节" context="任务分析更新">
//     <!-- 支持程度: 方向 -->
//     <direction>
//         <step sequence="1">任务分析回顾</step>
//         <step sequence="2">已有知识提取</step>
//         <step sequence="3">局限分析</step>
//         <step sequence="4">任务分析更新</step>
//     </direction>
//     <!-- 支持程度: 框架 -->
//     <framework>
//         <step sequence="1">请重新回顾你之前所写下的任务分析</step>
//         <step sequence="2">现在依据你已经学习的知识内容，分析哪些知识与任务分析的领域是相关的</step>
//         <step sequence="3">现在基于你掌握的知识，反思当时所做的任务分析存在什么局限</step>
//         <step sequence="4">根据所分析出的局限，对任务分析进行调整，适当情况下也可以重新选择任务情境</step>
//     </framework>
//     <!-- 支持程度: 指示 -->
//     <instruction>
//         <step sequence="1">重新回顾当时所写的任务分析包含了哪些要素，是从什么角度进行分析的，探讨了哪些问题</step>
//         <step sequence="2">根据问题的维度、内容、要素和层次等，分析你所掌握的哪些知识是可以运用到其中的</step>
//         <step sequence="3">运用自己现在已经掌握的知识，分析这些要素、维度、问题和角度是否完善，还有哪些内容是被忽略了，哪些内容实际上是不合适的</step>
//         <step sequence="4">
//             现在根据你所发现的问题，重新对任务进行调整，思考从哪些方面能够更好地解决问题，突破当时没有考虑的问题。
//         </step>
//     </instruction>
//     <!-- 支持程度: 样例 -->
//     <modeling>
//         当时我对学生群体知识建构的问题的分析，是停留在学习环境层面。而通过学习了情境认知理论的相关知识后我发现，不止学习环境是影响知识建构的关键，学生群体内的知识分享、参与共同体的协作过程同样也是影响知识建构的关键。
//         因此，现在我需要重新从“合法的边缘性参与”这个角度对问题进行重新审核和更新。
//     </modeling>
// </cognitivePrompt>`;
