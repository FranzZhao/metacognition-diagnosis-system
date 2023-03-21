export const CETaskEvaluateUpdateXML = {
    msgTitle: '认知评价-任务迭代评价',
    msgList: [
        {
            step: '1',
            promptTitle: '基于评价量表的分析',
            promptContent: '请根据我们所提供的评价量规，对自己的方案进行客观评价',
            answer: ''
        },
        {
            step: '2',
            promptTitle: '局限与不同的总结',
            promptContent: '通过评价之后，分析你的方案还存在哪些不足',
            answer: ''
        },
        {
            step: '3',
            promptTitle: '任务迭代',
            promptContent:
                '现在请你回到“任务解决方案撰写”模块中，重新更新自己的解决方案',
            answer: ''
        }
    ]
};

// <cognitivePrompt target="认知评价" context="任务迭代评价">
//     <!-- 支持程度: 方向 -->
//     <direction>
//         <step sequence="1">基于评价量表的分析</step>
//         <step sequence="2">局限与不同的总结</step>
//         <step sequence="3">任务迭代</step>
//     </direction>
//     <!-- 支持程度: 框架 -->
//     <framework>
//         <step sequence="1">请根据我们所提供的评价量规，对自己的方案进行客观评价</step>
//         <step sequence="2">通过评价之后，分析你的方案还存在哪些不足</step>
//         <step sequence="3">现在请你回到“任务解决方案撰写”模块中，重新更新自己的解决方案</step>
//     </framework>
//     <!-- 支持程度: 指示 -->
//     <instruction>
//         <step sequence="1">请仔细阅读评价量规，分析应当从哪些方面、运用哪些标准对方案进行分析</step>
//         <step sequence="2">依据评价量规，分析自己的方案在规范性、目的性、科学性和创新性等方面存在的不足、局限</step>
//         <step sequence="3">依据自己所分析的不足和局限，重新回到解决方案中，对方案进行迭代更新，记住对着评价量规进行方案调整</step>
//     </instruction>
//     <!-- 支持程度: 样例 -->
//     <modeling>
//         评价量规中提到了方案的目的性，但在我的分析论述中，只是将问题进行分析后，就围绕其中的主题进行论述，并没有很抓住核心问题，有点跑偏了，讨论的话题太多。
//         因此，我觉得可以把思路再收敛收敛，重新聚焦到核心的任务问题上，而不要延伸太多，保证解决方案的问题指向性。
//     </modeling>
// </cognitivePrompt>
