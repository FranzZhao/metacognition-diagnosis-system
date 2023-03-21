import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const task1 =
    '陈老师是一位小学5年级的英语老师，她发现虽然她的学生们已经掌握了基础的语言知识，但在语言表达和语言思维等方面能力不足。陈老师发现原因主要在于课文过于强调单一语言情境以及缺乏实践训练的问题。现在请你依据已经学到的知识，将复杂性理论与教学实践进行结合，设计针对性的课堂学习环境与活动，可以从硬件环境、软件系统、学习活动、教学指导、外部支持等多个角度进行设计，请你充分地发挥所学习的知识帮助陈老师解决问题';
const task2 =
    '传统的考试总是以测评单一知识与技能，而且往往是脱离情境的。导致很多学生为了应付考试而一味地记忆、刷题。最终所培养出的学生是难以适应真实社会情境下的复杂问题。通过知识学习你也已经了解到了这个世界的复杂性特征，以及人类发展的动态性、非线性。现在请你敞开想象、合理地构思设计一下，如果未来的考试是以复杂性理论为指导思想的，那么这种考试形式会是如何的？要如何对学生进行评价？请以数学中的概率统计为主题进行构想与设计';

const getDate = () => {
    let date = new Date();
    let y = date.getFullYear();
    let m = (date.getMonth() + 1 + '').padStart(2, '0');
    let d = date.getDate().toString().padStart(2, '0');
    let h = date.getHours().toString().padStart(2, '0');
    let min = date.getMinutes().toString().padStart(2, '0');
    let s = date.getSeconds().toString().padStart(2, '0');
    return `${y}/${m}/${d} ${h}:${min}:${s}`;
};

interface Scale {
    id: number;
    title: string;
    time: string;
    normative1: number;
    normative2: number;
    normative3: number;
    purpose1: number;
    purpose2: number;
    purpose3: number;
    science1: number;
    science2: number;
    science3: number;
    innovation1: number;
    innovation2: number;
    score: number;
}

interface LearningTaskProps {
    // taskSelect: 1 | 2;
    taskContent: string;
    taskAnalysis: string;
    project: string;
    currentScaleId: number;
    selectScaleId: number;
    scaleList: Scale[];
}

const initialLearningTask: LearningTaskProps = {
    // taskSelect: 1,
    taskContent: task1,
    taskAnalysis: '',
    project: '',
    currentScaleId: 3,
    selectScaleId: 1,
    scaleList: [
        {
            id: 1,
            title: '测试评价1',
            time: getDate(),
            normative1: 1,
            normative2: 1,
            normative3: 1,
            purpose1: 1,
            purpose2: 1,
            purpose3: 1,
            science1: 1,
            science2: 1,
            science3: 1,
            innovation1: 1,
            innovation2: 1,
            score: 11
        },
        {
            id: 2,
            title: '测试评价2',
            time: getDate(),
            normative1: 2,
            normative2: 2,
            normative3: 2,
            purpose1: 2,
            purpose2: 2,
            purpose3: 2,
            science1: 2,
            science2: 2,
            science3: 2,
            innovation1: 2,
            innovation2: 2,
            score: 22
        }
    ]
};

// 更新任务选择
export const updateTaskSelect = createAsyncThunk('learningTask/taskSelect', (newTask: string) => {
    return {
        // taskSelect: newTask,
        taskContent: newTask
    };
});

// 方案计划保存
export const saveProject = createAsyncThunk('learningTask/saveProject', (project: string) => {
    return project;
});

// 任务分析保存
export const saveTaskAnalysis = createAsyncThunk(
    'learningTask/saveTaskAnalysis',
    (taskAnalysis: string) => {
        return taskAnalysis;
    }
);

// 打开对应的量规
export const openScaleById = createAsyncThunk('learningTask/openScale', (scaleId: number) => {
    // console.log('slice id ', scaleId);
    return scaleId;
});

// 根据id保存scale
export const saveScaleById = createAsyncThunk(
    'learningTask/saveScale',
    (params: {
        scaleId: number;
        title: string;
        normative1: number;
        normative2: number;
        normative3: number;
        purpose1: number;
        purpose2: number;
        purpose3: number;
        science1: number;
        science2: number;
        science3: number;
        innovation1: number;
        innovation2: number;
        score: number;
    }) => {
        return {
            id: params.scaleId,
            title: params.title,
            normative1: params.normative1,
            normative2: params.normative2,
            normative3: params.normative3,
            purpose1: params.purpose1,
            purpose2: params.purpose2,
            purpose3: params.purpose3,
            science1: params.science1,
            science2: params.science2,
            science3: params.science3,
            innovation1: params.innovation1,
            innovation2: params.innovation2,
            score: params.score
        };
    }
);

export const LearningTaskSlice = createSlice({
    name: 'learningTask',
    initialState: initialLearningTask,
    reducers: {},
    extraReducers: {
        [updateTaskSelect.fulfilled.type]: (state, action) => {
            state.taskContent = action.payload.taskContent;
        },
        [saveProject.fulfilled.type]: (state, action) => {
            state.project = action.payload;
        },
        [saveTaskAnalysis.fulfilled.type]: (state, action) => {
            state.taskAnalysis = action.payload;
        },
        [openScaleById.fulfilled.type]: (state, action) => {
            console.log('slice ', action.payload);
            state.selectScaleId = action.payload;
        },
        [saveScaleById.fulfilled.type]: (state, action) => {
            let newScaleContent = action.payload;
            let newScaleList = state.scaleList;
            newScaleList.map((scale, index) => {
                if (scale.id === newScaleContent.id) {
                    newScaleList[index].title = newScaleContent.title;
                    newScaleList[index].normative1 = newScaleContent.normative1;
                    newScaleList[index].normative2 = newScaleContent.normative2;
                    newScaleList[index].normative3 = newScaleContent.normative3;
                    newScaleList[index].purpose1 = newScaleContent.purpose1;
                    newScaleList[index].purpose2 = newScaleContent.purpose2;
                    newScaleList[index].purpose3 = newScaleContent.purpose3;
                    newScaleList[index].science1 = newScaleContent.science1;
                    newScaleList[index].science2 = newScaleContent.science2;
                    newScaleList[index].science3 = newScaleContent.science3;
                    newScaleList[index].innovation1 = newScaleContent.innovation1;
                    newScaleList[index].innovation2 = newScaleContent.innovation2;
                    newScaleList[index].score = newScaleContent.score;
                }
            });
        }
    }
});
