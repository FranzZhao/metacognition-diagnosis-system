export const CMTaskSolvingMonitoringXML = {
    msgTitle: '认知监控-任务解决监控',
    msgList: [
        {
            step: '1',
            promptTitle: '任务进展分析',
            promptContent:
                '分析当前任务方案撰写过程中存在的困难点有哪些、有什么问题是还需要解决的、当前的方案完成程度如何、还需要补充哪些内容等。',
            answer: ''
        }
    ]
};

// <cognitivePrompt target="认知监控" context="任务解决监控">
//     <!-- 支持程度: 方向 -->
//     <direction>
//         <step sequence="1">任务进展分析</step>
//     </direction>
//     <!-- 支持程度: 框架 -->
//     <framework>
//         <step sequence="1">请对自己当前的任务进行情况、问题解决程度等进行反思</step>
//     </framework>
//     <!-- 支持程度: 指示 -->
//     <instruction>
//         <step sequence="1">
//             分析当前任务方案撰写过程中存在的困难点有哪些、有什么问题是还需要解决的、当前的方案完成程度如何、还需要补充哪些内容等。
//         </step>
//     </instruction>
//     <!-- 支持程度: 样例 -->
//     <modeling>
//         在撰写方案的时候，我发现我似乎没有很明确、很清晰地使用复杂系统理论来帮助我解决问题，或许我需要重新考虑一下如何将理论知识更好地利用起来。
//     </modeling>
// </cognitivePrompt>
