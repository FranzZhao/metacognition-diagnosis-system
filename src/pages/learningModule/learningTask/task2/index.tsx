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

const Task2 = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
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
