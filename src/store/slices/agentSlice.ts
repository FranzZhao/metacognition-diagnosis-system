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
    CRCognitiveGoalUpdateXML,
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
    currentMsg: AgentMsgListProps;
}

const initialAgentMsgState: AgentMsgSliceProps = {
    currentId: 7,
    msgList: [
        {
            id: 1,
            msgTitle: CPLearningObjectSettingXML.msgTitle,
            msgList: CPLearningObjectSettingXML.msgList
        },
        {
            id: 2,
            msgTitle: CMLearningProcessMonitoringXML.msgTitle,
            msgList: CMLearningProcessMonitoringXML.msgList
        },
        {
            id: 3,
            msgTitle: CRCognitiveGoalUpdateXML.msgTitle,
            msgList: CRCognitiveGoalUpdateXML.msgList
        },
        {
            id: 4,
            msgTitle: CRepCognitiveMaterialOrganizeXML.msgTitle,
            msgList: CRepCognitiveMaterialOrganizeXML.msgList
        },
        {
            id: 5,
            msgTitle: CPTaskAnalysisUpdateXML.msgTitle,
            msgList: CPTaskAnalysisUpdateXML.msgList
        },
        {
            id: 6,
            msgTitle: CETaskAnalysisUpdateXML.msgTitle,
            msgList: CETaskAnalysisUpdateXML.msgList
        }
    ],
    currentMsg: {
        id: 6,
        msgTitle: CETaskAnalysisUpdateXML.msgTitle,
        msgList: CETaskAnalysisUpdateXML.msgList
    }
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

// slice
export const AgentSlice = createSlice({
    name: 'agent',
    initialState: initialAgentMsgState,
    reducers: {},
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
        }
    }
});
