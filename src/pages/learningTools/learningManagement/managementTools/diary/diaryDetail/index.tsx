import React, { useEffect, useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// icon
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
// custom components
import { Modal } from '@/components/common';
import TagSelector from '@/components/common/tagSelector';
import { Editor } from '@tinymce/tinymce-react';
// redux
import { useAppSelector, useAppDispatch } from '@/store';
import { saveDiary, deleteDiaryById } from '@/store/slices';
// agent help
// import Tooltip from '@mui/material/Tooltip';
// import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import { metacognitivePrompt, getAction } from '@/store/slices';

const DiaryDetail = ({ handleOpenDiaryList }) => {
    const dispatch = useAppDispatch();
    const currentActor = useAppSelector((state) => state.actionLog.actor);
    const currentMsgID = useAppSelector((state) => state.agent.currentId);
    const currentDiaryInfo = useAppSelector((state) => state.diary.currentSelectDiary);
    // 笔记标题
    const [diaryTitle, setDiaryTitle] = useState('');
    // 标签字段
    const [diaryTags, setDiaryTags] = useState<string[]>([]);
    // 文本编辑器内容
    const [diaryContent, setDiaryContent] = useState('文本文字');
    // 删除日志modal
    const [openDiaryModal, setOpenDiaryModal] = useState(false);

    useEffect(() => {
        if (currentDiaryInfo) {
            setDiaryTitle(currentDiaryInfo.title);
            setDiaryTags(currentDiaryInfo.tags);
            setDiaryContent(currentDiaryInfo.content);
        }
    }, [currentDiaryInfo]);

    /**
     * TinyMCE Function
     */
    const handleChangeText = (newText) => {
        setDiaryContent(newText);
    };

    // save diary
    const handleSaveDiary = () => {
        let newDiary = {
            id: currentDiaryInfo?.id,
            title: diaryTitle,
            tags: diaryTags,
            content: diaryContent
        };
        dispatch(saveDiary(newDiary));
    };

    return (
        <Box>
            {/* 笔记标题 */}
            <Box sx={{ display: 'flex' }}>
                <InputBase
                    sx={{
                        width: '70%',
                        fontSize: '1.3rem',
                        fontWeight: 'bold',
                        mt: '-4px',
                        borderBottom: '1px solid grey'
                    }}
                    placeholder="请输入反思日志标题"
                    value={diaryTitle}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setDiaryTitle(event.target.value);
                    }}
                />
                <Box sx={{ ml: 'auto' }}>
                    <Tooltip title="认知评价-学习过程监控" arrow>
                        <IconButton
                            size="small"
                            onClick={() => {
                                dispatch(
                                    metacognitivePrompt({
                                        promptType: '认知评价-学习过程监控',
                                        currentMsgID: currentMsgID
                                    })
                                );
                                dispatch(
                                    getAction({
                                        actor: currentActor,
                                        verb: '弹出提示框',
                                        object: '元认识提示 id: ' + currentMsgID,
                                        result: '弹出元认知提示：认知评价-学习过程监控',
                                        time: '',
                                        context: {
                                            cognitiveContext: '认知评价',
                                            otherContext: null,
                                            taskContext: '认知评价-学习过程监控'
                                        }
                                    })
                                );
                            }}
                        >
                            <HelpIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="保存日志" arrow>
                        <IconButton
                            aria-label="delete"
                            size="small"
                            sx={{ ml: 1 }}
                            onClick={() => {
                                handleSaveDiary();
                                dispatch(
                                    getAction({
                                        actor: currentActor,
                                        verb: '点击按钮',
                                        object: '按钮：保存日志',
                                        result: '保存反思日志 id：' + currentDiaryInfo?.id,
                                        time: '',
                                        context: {
                                            cognitiveContext: '认知评价',
                                            otherContext:
                                                '反思日志标题：' +
                                                diaryTitle +
                                                ',内容：' +
                                                diaryContent,
                                            taskContext: null
                                        }
                                    })
                                );
                            }}
                        >
                            <SaveIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="删除日志" arrow>
                        <IconButton
                            aria-label="delete"
                            size="small"
                            sx={{ ml: 1 }}
                            onClick={() => {
                                setOpenDiaryModal(true);
                            }}
                        >
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="返回列表" arrow>
                        <IconButton
                            aria-label="delete"
                            size="small"
                            sx={{ ml: 1 }}
                            onClick={() => {
                                handleOpenDiaryList();
                                dispatch(
                                    getAction({
                                        actor: currentActor,
                                        verb: '点击按钮',
                                        object: '按钮：返回列表',
                                        result: '退出反思日志 id：' + currentDiaryInfo?.id,
                                        time: '',
                                        context: {
                                            cognitiveContext: '认知评价',
                                            otherContext: null,
                                            taskContext: null
                                        }
                                    })
                                );
                            }}
                        >
                            <KeyboardReturnIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </Box>

                {/* 删除日志modal */}
                <Modal
                    maxWidth="xs"
                    open={openDiaryModal}
                    onClose={() => setOpenDiaryModal(false)}
                    title={'删除日志确认'}
                    content={<Box sx={{ fontWeight: 'bold' }}>请确认是否删除日志！</Box>}
                    actions={
                        <Box>
                            <Button sx={{ mr: 1 }} onClick={() => setOpenDiaryModal(false)}>
                                取消
                            </Button>
                            <Button
                                variant="contained"
                                disableElevation
                                onClick={() => {
                                    if (currentDiaryInfo) {
                                        dispatch(
                                            getAction({
                                                actor: currentActor,
                                                verb: '点击按钮',
                                                object: '按钮：删除日志',
                                                result: '删除反思日志 id：' + currentDiaryInfo?.id,
                                                time: '',
                                                context: {
                                                    cognitiveContext: '认知评价',
                                                    otherContext: null,
                                                    taskContext: null
                                                }
                                            })
                                        );
                                        dispatch(deleteDiaryById(currentDiaryInfo.id));
                                        handleOpenDiaryList();
                                    }
                                }}
                            >
                                确认
                            </Button>
                        </Box>
                    }
                />
            </Box>
            {/* 笔记标签 */}
            <Divider sx={{ mt: 3, mb: 2 }} />
            <Box sx={{ mt: 2, mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', margin: '8px 5px' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            padding: '5px 10px',
                            borderRadius: '5px',
                            alignItems: 'center',
                            height: '42px',
                            '&:hover': { cursor: 'pointer', bgcolor: '#f3f3f3' }
                        }}
                    >
                        <LocalOfferIcon fontSize="small" />
                        <Typography width={'110px'} marginLeft={1}>
                            日志标签
                        </Typography>
                    </Box>
                    <TagSelector
                        value={diaryTags}
                        tagList={['元认知', '元认知意识', '认知调控', '自指', '自我概念']}
                        // tagList={[]}
                        onChange={(event, newValue) => {
                            setDiaryTags(newValue);
                            dispatch(
                                getAction({
                                    actor: currentActor,
                                    verb: '标签选择',
                                    object: '知识标签选择框',
                                    result: '选择反思日志所属的知识标签',
                                    time: '',
                                    context: {
                                        cognitiveContext: '认知评价',
                                        otherContext: '知识标签：' + newValue.join(','),
                                        taskContext: null
                                    }
                                })
                            );
                        }}
                        sx={{ flex: 1, mr: 1, ml: 1 }}
                        placeholder="请选择日志所属标签"
                    />
                </Box>
            </Box>
            <Divider sx={{ mt: 2, mb: 3 }} />
            {/* 笔记内容-文本编辑器 */}
            <Box>
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
                {/* <button onClick={log}>Log editor content</button> */}
            </Box>
        </Box>
    );
};

export default DiaryDetail;
