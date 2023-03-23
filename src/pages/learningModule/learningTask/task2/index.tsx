import React, { useState } from 'react';
// mui5
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
// custom components
import { Editor } from '@tinymce/tinymce-react';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { saveProject } from '@/store/slices';
// agent help
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import { metacognitivePrompt, getAction } from '@/store/slices';

const Task2 = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const currentActor = useAppSelector((state) => state.actionLog.actor);
    const currentMsgID = useAppSelector((state) => state.agent.currentId);
    const currentTask = useAppSelector((state) => state.learningTask.taskContent);
    const project = useAppSelector((state) => state.learningTask.project);
    // 文本编辑器内容
    const [diaryContent, setDiaryContent] = useState(project);

    /**
     * TinyMCE Function
     */
    const handleChangeText = (newText) => {
        setDiaryContent(newText);
    };

    // 保存文本内容
    const handleSaveProject = () => {
        dispatch(saveProject(diaryContent));
        // action log
        dispatch(
            getAction({
                actor: currentActor,
                verb: '输入文本',
                object: '任务解决方案',
                result: '保存所撰写的任务解决方案内容',
                time: '',
                context: {
                    cognitiveContext: '认知任务-任务解决方案撰写',
                    otherContext: '撰写内容：' + diaryContent,
                    taskContext: currentTask
                }
            })
        );
    };

    return (
        <Box>
            <Box sx={{ mb: 2 }}>
                <Typography fontWeight="bold">这是你已选择的任务：</Typography>
                <Alert severity="info" sx={{ margin: '10px 5px' }}>
                    {currentTask.length === 0 ? (
                        <p style={{ fontWeight: 'bold' }}>
                            你还未选择任务！请返回"任务分析与选择"环节中选择你想要解决的任务吧！
                        </p>
                    ) : (
                        currentTask
                    )}
                </Alert>
                <Typography>
                    <b>请根据任务描述，撰写解决该问题的方案吧！</b>再次提醒，请你充分运用
                    <b style={{ color: theme.palette.error.main }}>知识学习模块</b>
                    中的相关理论进行问题解决吧！
                </Typography>
            </Box>
            <Box sx={{ position: 'relative' }}>
                <Button
                    startIcon={<SaveIcon />}
                    variant="contained"
                    size="small"
                    disableElevation
                    sx={{
                        position: 'absolute',
                        zIndex: 2,
                        right: '20px',
                        top: '10px'
                    }}
                    onClick={handleSaveProject}
                >
                    保存方案
                </Button>
                <Tooltip title="认知监控-任务解决监控" arrow>
                    <IconButton
                        size="small"
                        sx={{
                            position: 'absolute',
                            zIndex: 2,
                            right: '150px',
                            top: '10px'
                        }}
                        onClick={() => {
                            dispatch(
                                metacognitivePrompt({
                                    promptType: '认知监控-任务解决监控',
                                    currentMsgID: currentMsgID
                                })
                            );
                            dispatch(
                                getAction({
                                    actor: currentActor,
                                    verb: '弹出提示框',
                                    object: '元认识提示 id: ' + currentMsgID,
                                    result: '弹出元认知提示：认知监控-任务解决监控',
                                    time: '',
                                    context: {
                                        cognitiveContext: '认知监控',
                                        otherContext: null,
                                        taskContext: '认知监控-任务解决监控'
                                    }
                                })
                            );
                        }}
                    >
                        <HelpIcon fontSize="inherit" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="认知表征-任务方案撰写" arrow>
                    <IconButton
                        size="small"
                        sx={{
                            position: 'absolute',
                            zIndex: 2,
                            right: '120px',
                            top: '10px'
                        }}
                        onClick={() => {
                            dispatch(
                                metacognitivePrompt({
                                    promptType: '认知表征-任务方案撰写',
                                    currentMsgID: currentMsgID
                                })
                            );
                            dispatch(
                                getAction({
                                    actor: currentActor,
                                    verb: '弹出提示框',
                                    object: '元认识提示 id: ' + currentMsgID,
                                    result: '弹出元认知提示：认知表征-任务方案撰写',
                                    time: '',
                                    context: {
                                        cognitiveContext: '认知表征',
                                        otherContext: null,
                                        taskContext: '认知表征-任务方案撰写'
                                    }
                                })
                            );
                        }}
                    >
                        <HelpIcon fontSize="inherit" />
                    </IconButton>
                </Tooltip>

                <Editor
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    init={{
                        height: 450,
                        menubar: false,
                        plugins: [
                            'advlist',
                            'autolink',
                            'lists',
                            'link',
                            'image',
                            'charmap',
                            'anchor',
                            'searchreplace',
                            'visualblocks',
                            'code',
                            'fullscreen',
                            'insertdatetime',
                            'media',
                            'table',
                            'preview',
                            'help',
                            'wordcount'
                        ],
                        toolbar:
                            'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style:
                            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    value={diaryContent}
                    onEditorChange={handleChangeText}
                />
            </Box>

            {/* <button onClick={log}>Log editor content</button> */}
        </Box>
    );
};

export default Task2;
