export const CRepTaskProjectWriteXML = {
    msgTitle: '认知表征-任务方案撰写',
    msgList: [
        {
            step: '1',
            promptTitle: '目标分析',
            promptContent: '请分析你在撰写这份方案时，所希望解决的问题是什么，是指向什么话题的',
            answer: ''
        },
        {
            step: '2',
            promptTitle: '知识提取',
            promptContent: '思考你前面所学习的知识内容中，哪些可以对你进行问题解决提供支持',
            answer: ''
        },
        {
            step: '3',
            promptTitle: '方案生成',
            promptContent: '结合目标以及你所学习的知识，生成解决问题的方案',
            answer: ''
        }
    ]
};
// <cognitivePrompt target="认知表征" context="任务方案撰写">
//     <!-- 支持程度: 方向 -->
//     <direction>
//         <step sequence="1">目标分析</step>
//         <step sequence="2">知识提取</step>
//         <step sequence="3">方案生成</step>
//     </direction>
//     <!-- 支持程度: 框架 -->
//     <framework>
//         <step sequence="1">请分析你在撰写这份方案时，所希望解决的问题是什么，是指向什么话题的</step>
//         <step sequence="2">思考你前面所学习的知识内容中，哪些可以对你进行问题解决提供支持</step>
//         <step sequence="3">结合目标以及你所学习的知识，生成解决问题的方案</step>
//     </framework>
//     <!-- 支持程度: 指示 -->
//     <instruction>
//         <step sequence="1">
//             回顾你前面所做的任务分析，思考解决这个任务涉及了哪些关键问题、需要从哪些维度进行思考、这些维度之间的关系是什么，不同要素在整体问题系统中的作用是什么，如何逐个突破</step>
//         <step sequence="2">
//             你所掌握的知识中，哪些知识点是与问题领域相关的，哪些知识虽然不是相同领域，但却能够为你提供类比和借鉴的，请仔细思考你头脑中的知识库有哪些知识经验是可用的，有价值的
//         </step>
//         <step sequence="3">
//             接下来，你可以将前面所做的问题要点分析和知识点进行关联，分析不同知识点能够解决哪些问题要点，进行关联后梳理出你的思维逻辑和论证链条，并将其写成解决方案文档吧。
//         </step>
//     </instruction>
//     <!-- 支持程度: 样例 -->
//     <modeling>
//         在这个问题中，我希望探讨学习环境对学生群体知识建构的影响，其中包括学习环境有哪些要素、知识建构有哪些过程，二者之间的关联关系是如何的等核心要点。
//         而我所掌握的系统科学相关的知识中，社会群体的涌现现象、情境与复杂系统的关系、社会群体中的非线性动力等。这些知识能够为解答学习环境与学生群体知识建构提供跨领域的借鉴与思考。
//         因此，我打算将复杂系统中的这些理论作为隐喻，剖析环境与学生之间、学生与学生之间的复杂关系，并从中发现解决学生知识建构参与的关键点是在哪一层面涌现出的。
//     </modeling>
// </cognitivePrompt>`;