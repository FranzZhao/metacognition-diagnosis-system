import React, { useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
// icon
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
// custom components
import TagSelector from '@/components/common/tagSelector';
import { Editor } from '@tinymce/tinymce-react';

const DiaryDetail = ({ handleOpenDiaryList }) => {
    // 笔记标题
    const [diaryTitle, setDiaryTitle] = useState('');
    // 标签字段
    const [diaryTags, setDiaryTags] = useState([]);
    // 文本编辑器内容
    const [diaryContent, setDiaryContent] = useState('文本文字');

    /**
     * TinyMCE Function
     */
    const handleChangeText = (newText) => {
        setDiaryContent(newText);
    };
    
    return (
        <Box>
            {/* 笔记标题 */}
            <Box sx={{ display: 'flex' }}>
                <InputBase
                    sx={{
                        width: '85%',
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
                <Tooltip title="保存日志" arrow>
                    <IconButton
                        aria-label="delete"
                        size="small"
                        sx={{ ml: 'auto' }}
                        onClick={() => {
                            let noteInfo = {
                                diaryTitle: diaryTitle,
                                diaryTags: diaryTags,
                                diaryContent: diaryContent
                            };
                            console.log(noteInfo);
                        }}
                    >
                        <SaveIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="删除日志" arrow>
                    <IconButton aria-label="delete" size="small" sx={{ ml: 1 }}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="返回列表" arrow>
                    <IconButton
                        aria-label="delete"
                        size="small"
                        sx={{ ml: 1 }}
                        onClick={handleOpenDiaryList}
                    >
                        <KeyboardReturnIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
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
                        onChange={(event, newValue) => setDiaryTags(newValue)}
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
