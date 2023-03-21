export const xmlText = `
<cognitivePrompt target="认知评价" context="学习过程监控">
    <direction>
        <step sequence="1">学习状态感知</step>
        <step sequence="2">学习计划回顾</step>
        <step sequence="3">评价与策略调节</step>
    </direction>
    <framework>
        <step sequence="1">请对自己当前的学习情况、学习成果、情感体验进行反思</step>
        <step sequence="2">重新回顾一下自己在进行学习之前所定下的目标、计划和待办事项有什么</step>
        <step sequence="3">现在基于目标和实际情况的差距，对学习过程进行评价、分析和反思，然后选择合适的行动策略</step>
    </framework>
    <instruction>
        <step sequence="1">
            分析自己在当前活动中的情感体验是如何的，是对当前的任务或学习的内容感到困惑、感到兴奋、感到过于复杂而难以把握等，请做清晰的分析
        </step>
        <step sequence="2">
            请打开“学习管理”工具中的目标与待办事项分析，分析一下你所制定的学习任务有哪些，与当前的学习进度情况的关系是如何的
        </step>
        <step sequence="3">
            现在请你在状态感知以及学习目标的基础上，仔细分析你产生这种反应、情绪、感受的原因是什么，是因为知识难度过大，还是因为自己没有仔细阅读，还是其他原因。请你做仔细的评价，并分析可能的解决方案是什么。
        </step>
    </instruction>
    <modeling>
        我发现我在阅读这部分知识的时候，产生了很多疑问。特别是关于情境认知的，和我之前的理解有很大的出入，我之前只是把情境认知理解为一种强调学习活动情境的理论，却没有思考到其系统、实践与共同体层面的意义。接下来我需要重新对自己的知识结构和思维过程做一定的调整。
    </modeling>
</cognitivePrompt>
`;
