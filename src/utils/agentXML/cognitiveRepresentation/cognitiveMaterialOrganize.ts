export const CRepCognitiveMaterialOrganizeXML = {
    msgTitle: '认知表征-认知资料整理',
    msgList: [
        {
            step: '1',
            promptTitle: '知识内容总结',
            promptContent: '对你刚刚学习过的知识内容和要点进行概括性的总结',
            answer: ''
        },
        {
            step: '2',
            promptTitle: '知识结构分析',
            promptContent: '分析这些知识要点直接的结构关系',
            answer: ''
        },
        {
            step: '3',
            promptTitle: '新旧知识关联',
            promptContent: '思考与你自己原有的知识之间的关系，同样整合到你的知识结构中',
            answer: ''
        }
    ]
};
// <cognitivePrompt target="认知表征" context="认知资料整理">
//     <!-- 只在知识地图中呈现 -->
//     <!-- 支持程度: 方向 -->
//     <direction>
//         <step sequence="1">知识内容总结</step>
//         <step sequence="2">知识结构分析</step>
//         <step sequence="3">新旧知识关联</step>
//     </direction>
//     <!-- 支持程度: 框架 -->
//     <framework>
//         <step sequence="1">对你刚刚学习过的知识内容和要点进行概括性的总结</step>
//         <step sequence="2">分析这些知识要点直接的结构关系</step>
//         <step sequence="3">思考与你自己原有的知识之间的关系，同样整合到你的知识结构中</step>
//     </framework>
//     <!-- 支持程度: 指示 -->
//     <instruction>
//         <step sequence="1">依据知识点、内容维度、关键要素等，对知识内容进行粒度分析，抽取出当中的关键要素和内容，与关键的知识标签建立联系，或是新建知识标签</step>
//         <step sequence="2">
//             运用知识地图结构梳理知识点之间的关系。需要注意的是！知识点之间的关联也是一个重要的对象，为什么关联、如何关联、关联的内容是什么等，都是在建立知识结构是需要考虑的</step>
//         <step sequence="3">分析你自己曾经掌握的知识与内容，剖析这些知识要点与新的知识点之间的关联，在关联中梳理他们的关系是互补、完善或是冲突、挑战</step>
//     </instruction>
//     <!-- 支持程度: 样例 -->
//     <modeling>
//         这次学习的知识内容是认知动力主义中的三种不同认知取向，一共有情境认知、具身认知和延展认知三个关键点。他们都是认知动力主义这些认知科学观下的不同认知视角和应用，虽然从不同的角度分析认知的发展与结构，但他们的本质思想都是用系统观进行认知研究。所以他们之上有一个更大的知识点：认知系统观。
//         之前我有了解过情境认知的内容，但我仅仅把它当做一个强调在真实情景下学习与实践的理论而已，并没有理解到其本质，对我原有的知识和理解进行了补充。
//     </modeling>
// </cognitivePrompt>`;