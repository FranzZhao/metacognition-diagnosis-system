export const CPTaskFirstAnalysisXML  = {
    msgTitle: '认知计划-任务初步分析',
    msgList: [
        {
            step: '1',
            promptTitle: '任务特征',
            promptContent: '剖析任务情境的属性、涉及领域、关键问题等',
            answer: ''
        },
        {
            step: '2',
            promptTitle: '知识、能力与兴趣',
            promptContent: '分析自己的知识、能力与兴趣，及其与任务之间的关系',
            answer: ''
        },
        {
            step: '3',
            promptTitle: '任务选择',
            promptContent:
                '综合上述分析对任务进行选择',
            answer: ''
        },
        {
            step: '4',
            promptTitle: '任务解决思路',
            promptContent:
                '剖析问题解决的路径，如涉及的要素、对象、问题、突破点等',
            answer: ''
        }
    ]
};
// <cognitivePrompt target="认知计划" context="任务初步分析">
//     <!-- 支持程度: 方向 -->
//     <direction>
//         <step sequence="1">任务特征</step>
//         <step sequence="2">知识、能力与兴趣</step>
//         <step sequence="3">任务选择</step>
//         <step sequence="4">任务解决思路</step>
//     </direction>
//     <!-- 支持程度: 框架 -->
//     <framework>
//         <step sequence="1">剖析任务情境的属性、涉及领域、关键问题等</step>
//         <step sequence="2">分析自己的知识、能力与兴趣，及其与任务之间的关系</step>
//         <step sequence="3">综合上述分析对任务进行选择</step>
//         <step sequence="4">剖析问题解决的路径，如涉及的要素、对象、问题、突破点等</step>
//     </framework>
//     <!-- 支持程度: 指示 -->
//     <instruction>
//         <step sequence="1">运用自己"任务属性与策略"相关的知识，分析任务情境所具有的特征、关键问题、属性、相关领域、所需知识等</step>
//         <step sequence="2">分析自己所拥有的知识、能力和兴趣，并基于此分析哪个任务情境和自己的兴趣能力是最相符的</step>
//         <step sequence="3">依据对任务和自身的分析，现初步确定自己所想要解决的任务情境</step>
//         <step sequence="4">
//             运用自己暂时所用的知识，分析所选择的任务应当如何解决，包括涉及哪些关键对象、哪些核心问题、问题的层次和维度有哪些、哪些要点是突破的关键、有什么知识能够帮助解决这一问题
//         </step>
//     </instruction>
//     <!-- 支持程度: 样例 -->
//     <modeling>
//         当前任务是与学生群组知识建构相关的，希望解决的是学生在群体知识建构中参与度不高、社会存在感较低等问题。
//         我之前学习过程了与个体知识建构、知识表征相关的理论知识和实践策略，这也是我一直关注的、感兴趣的方向。
//         虽然我对群体层面的知识建构不是特别了解，但我还是希望选择这一任务，在解决的过程中补充关于群体知识建构的知识和方法。
//         我希望从学习环境这个角度出发去解决问题，因为群体知识建构的环境特征可能是影响学生参与度和依存感的关键，这可能是解决这一问题的关键。
//     </modeling>
// </cognitivePrompt>`;
