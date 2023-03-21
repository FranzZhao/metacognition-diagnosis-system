export const CPLearningObjectSettingXML = {
    msgTitle: '认知计划-学习目标设定',
    msgList: [
        {
            step: '1',
            promptTitle: '能力基础',
            promptContent: '确定已掌握的知识与能力',
            answer: ''
        },
        {
            step: '2',
            promptTitle: '学习目标',
            promptContent: '希望通过学习达成什么目标, 这一目标与自己当前的能力关系是如何的',
            answer: ''
        },
        {
            step: '3',
            promptTitle: '知识应用',
            promptContent:
                '分析在学习过程中如何应用自已经掌握的知识技能',
            answer: ''
        }
    ]
};

// <cognitivePrompt target="认知计划" context="学习目标设定">
//     <!-- 支持程度: 方向 -->
//     <direction>
//         <step sequence="1">能力基础</step>
//         <step sequence="2">学习目标</step>
//         <step sequence="3">知识应用</step>
//     </direction>
//     <!-- 支持程度: 框架 -->
//     <framework>
//         <step sequence="1">确定已掌握的知识与能力</step>
//         <step sequence="2">希望通过学习达成什么目标, 这一目标与自己当前的能力关系是如何的</step>
//         <step sequence="3">分析在学习过程中如何应用自已经掌握的知识技能</step>
//     </framework>
//     <!-- 支持程度: 指示 -->
//     <instruction>
//         <step sequence="1">思考自己在正式开始学习之前，已经掌握了相关领域中的哪些知识、具备了哪些相关能力，由此了解自己的知识基础</step>
//         <step sequence="2">确定自己将通过何种方法进行学习，最终能够掌握什么知识和技能，由此解决何种问题、实现哪些目标</step>
//         <step sequence="3">分析自己已经掌握的知识将如何帮助自己开展学习，如何帮助自己解决学习过程中可能会出现的困难</step>
//     </instruction>
//     <!-- 支持程度: 样例 -->
//     <modeling>
//         我已经学习过学习科学的基础知识，了解了信息加工理论的基本内容。而现在准备开始学习情境认知理论，我想知道二者有什么区别，为什么要提出情境认知理论这个新的学习理论。
//     </modeling>
// </cognitivePrompt>
