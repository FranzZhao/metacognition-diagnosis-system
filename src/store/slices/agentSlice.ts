import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// agent msg template
import {
    CPTaskFirstAnalysisXML,
    CPLearningObjectSettingXML,
    CPLearningObjectUpdateXML,
    CPTaskAnalysisUpdateXML
} from '@/utils/agentXML/cognitivePlanning';
import {
    CETaskAnalysisUpdateXML,
    CELearningProcessMonitoringXML,
    CETaskEvaluateUpdateXML
} from '@/utils/agentXML/cognitiveEvaluation';
import {
    CRepTaskProjectWriteXML,
    CRepCognitiveMaterialOrganizeXML
} from '@/utils/agentXML/cognitiveRepresentation';
import {
    CRLearningProcessMonitoringXML,
    // CRCognitiveGoalUpdateXML,
    CRTaskAnalysisUpdateXML
} from '@/utils/agentXML/cognitiveRegulation';
import {
    CMTaskSolvingMonitoringXML,
    CMLearningProcessMonitoringXML
} from '@/utils/agentXML/cognitiveMonitoring';

interface AgentMsgStep {
    step: string;
    promptTitle: string;
    promptContent: string;
    answer: string;
}

interface AgentMsgListProps {
    id: number;
    msgTitle: string;
    msgList: AgentMsgStep[];
}

interface AgentMsgSliceProps {
    currentId: number;
    msgList: AgentMsgListProps[];
    currentMsg: AgentMsgListProps | null;
    openAgent: boolean;
}

const initialAgentMsgState: AgentMsgSliceProps = {
    currentId: 1,
    msgList: [],
    currentMsg: null,
    openAgent: false
};

// action: 添加新的Agent Msg
export const setNewAgentMsg = createAsyncThunk('agent/setNewMsg', () => {
    let newMsg = { ...CPLearningObjectSettingXML };
    return newMsg;
});

// action: 获取当前agent msg
export const getAgentMsgByCode = createAsyncThunk('agent/getMsg', (msgCode: string) => {
    return msgCode;
});

// action: 设置当前打开的msg
export const setCurrentOpenAgentMsg = createAsyncThunk(
    'agent/openMsg',
    (msg: AgentMsgListProps) => {
        return msg;
    }
);

type PromptType =
    | '认知监控-学习过程监控'
    | '认知监控-任务解决监控'
    | '认知调节-学习过程监控'
    // | '认知调节-认知目标更新'
    | '认知调节-任务分析更新'
    | '认知计划-学习目标设定'
    | '认知计划-任务初步分析'
    | '认知计划-认知目标更新'
    | '认知计划-任务分析更新'
    | '认知表征-认知资料整理'
    | '认知表征-任务方案撰写'
    | '认知评价-学习过程监控'
    | '认知评价-任务分析更新'
    | '认知评价-任务迭代评价';

// action: 在特定的学习环节、学习工具、认知情境下打开特定的agent以激发、显化学习者的元认知活动
// 本质是新建agent
export const metacognitivePrompt = createAsyncThunk(
    'agent/metacognitivePrompt',
    (params: { promptType: PromptType; currentMsgID: number }) => {
        const { promptType, currentMsgID } = params;
        let promptMsg: AgentMsgListProps;
        switch (promptType) {
            case '认知监控-学习过程监控':
                promptMsg = {
                    id: currentMsgID,
                    msgList: CMLearningProcessMonitoringXML.msgList,
                    msgTitle: CMLearningProcessMonitoringXML.msgTitle
                };
                break;
            case '认知监控-任务解决监控':
                promptMsg = {
                    id: currentMsgID,
                    msgList: CMTaskSolvingMonitoringXML.msgList,
                    msgTitle: CMTaskSolvingMonitoringXML.msgTitle
                };
                break;
            case '认知调节-学习过程监控':
                promptMsg = {
                    id: currentMsgID,
                    msgList: CRLearningProcessMonitoringXML.msgList,
                    msgTitle: CRLearningProcessMonitoringXML.msgTitle
                };
                break;
            // case '认知调节-认知目标更新':
            //     promptMsg = {
            //         id: currentMsgID,
            //         msgList: CRCognitiveGoalUpdateXML.msgList,
            //         msgTitle: CRCognitiveGoalUpdateXML.msgTitle
            //     };
            //     break;
            case '认知调节-任务分析更新':
                promptMsg = {
                    id: currentMsgID,
                    msgList: CRTaskAnalysisUpdateXML.msgList,
                    msgTitle: CRTaskAnalysisUpdateXML.msgTitle
                };
                break;
            case '认知计划-学习目标设定':
                promptMsg = {
                    id: currentMsgID,
                    msgList: CPLearningObjectSettingXML.msgList,
                    msgTitle: CPLearningObjectSettingXML.msgTitle
                };
                break;
            case '认知计划-任务初步分析':
                promptMsg = {
                    id: currentMsgID,
                    msgList: CPTaskFirstAnalysisXML.msgList,
                    msgTitle: CPTaskFirstAnalysisXML.msgTitle
                };
                break;
            case '认知计划-认知目标更新':
                promptMsg = {
                    id: currentMsgID,
                    msgList: CPLearningObjectUpdateXML.msgList,
                    msgTitle: CPLearningObjectUpdateXML.msgTitle
                };
                break;
            case '认知计划-任务分析更新':
                promptMsg = {
                    id: currentMsgID,
                    msgList: CPTaskAnalysisUpdateXML.msgList,
                    msgTitle: CPTaskAnalysisUpdateXML.msgTitle
                };
                break;
            case '认知表征-认知资料整理':
                promptMsg = {
                    id: currentMsgID,
                    msgList: CRepCognitiveMaterialOrganizeXML.msgList,
                    msgTitle: CRepCognitiveMaterialOrganizeXML.msgTitle
                };
                break;
            case '认知表征-任务方案撰写':
                promptMsg = {
                    id: currentMsgID,
                    msgList: CRepTaskProjectWriteXML.msgList,
                    msgTitle: CRepTaskProjectWriteXML.msgTitle
                };
                break;
            case '认知评价-学习过程监控':
                promptMsg = {
                    id: currentMsgID,
                    msgList: CELearningProcessMonitoringXML.msgList,
                    msgTitle: CELearningProcessMonitoringXML.msgTitle
                };
                break;
            case '认知评价-任务分析更新':
                promptMsg = {
                    id: currentMsgID,
                    msgList: CETaskAnalysisUpdateXML.msgList,
                    msgTitle: CETaskAnalysisUpdateXML.msgTitle
                };
                break;
            default:
                // 最后一个：认知评价-任务迭代评价
                promptMsg = {
                    id: currentMsgID,
                    msgList: CETaskEvaluateUpdateXML.msgList,
                    msgTitle: CETaskEvaluateUpdateXML.msgTitle
                };
                break;
        }
        return promptMsg;
    }
);

// action: 保存agent msg中学生的回答
export const savePromptAnswer = createAsyncThunk('agent/save', (answerInfo: any) => {
    return answerInfo;
});

// slice
export const AgentSlice = createSlice({
    name: 'agent',
    initialState: initialAgentMsgState,
    reducers: {
        closeAgent: (state) => {
            state.openAgent = false;
        }
    },
    extraReducers: {
        [setCurrentOpenAgentMsg.fulfilled.type]: (state, action) => {
            state.currentMsg = action.payload;
        },
        [setNewAgentMsg.fulfilled.type]: (state, action) => {
            state.msgList.push({
                ...action.payload,
                id: state.currentId
            });
            state.currentId = state.currentId + 1;
        },
        [metacognitivePrompt.fulfilled.type]: (state, action) => {
            let newAgentMsg = action.payload;
            state.openAgent = true;
            state.currentMsg = newAgentMsg;
            state.currentId += 1;
            let totalAgentMsg: AgentMsgListProps[] = [...state.msgList];
            totalAgentMsg.push(newAgentMsg);
            state.msgList = [...totalAgentMsg];
        },
        [savePromptAnswer.fulfilled.type]: (state, action) => {
            let newMsgInfo = action.payload;
            // console.log('save msg =>', action.payload);
            let newMsgList: AgentMsgListProps[] = [...state.msgList];
            state.msgList.map((msg, index) => {
                if (msg.id === newMsgInfo.id) {
                    newMsgList[index].msgList = newMsgInfo.msgList;
                }
            });
            state.msgList = [...newMsgList];
        }
    }
});
