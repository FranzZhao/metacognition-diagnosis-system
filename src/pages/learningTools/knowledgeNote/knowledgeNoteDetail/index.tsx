import React, { useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
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
// TinyMCE
import { Editor } from '@tinymce/tinymce-react';

interface KnowledgeNoteDetailProps {
    handleOpenNoteList: () => void;
}

const KnowledgeNoteDetail: React.FC<KnowledgeNoteDetailProps> = ({ handleOpenNoteList }) => {
    const [text, setText] = useState('文本文字');

    const handleChangeText = (newText) => {
        setText(newText);
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
                    placeholder="请输入笔记标题"
                />
                <Tooltip title="保存笔记" arrow>
                    <IconButton
                        aria-label="delete"
                        size="small"
                        sx={{ ml: 'auto' }}
                        onClick={() => console.log(text)}
                    >
                        <SaveIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="删除笔记" arrow>
                    <IconButton aria-label="delete" size="small" sx={{ ml: 1 }}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="返回列表" arrow>
                    <IconButton
                        aria-label="delete"
                        size="small"
                        sx={{ ml: 1 }}
                        onClick={handleOpenNoteList}
                    >
                        <KeyboardReturnIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            </Box>
            {/* 笔记标签 */}
            {/* <Divider sx={{ mt: 2, mb: 2 }} /> */}
            <Box sx={{ mt: 3, mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', margin: '15px 5px' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            padding: '5px 10px',
                            borderRadius: '5px',
                            alignItems: 'center',
                            '&:hover': { cursor: 'pointer', bgcolor: '#f3f3f3' }
                        }}
                    >
                        <LocalOfferIcon fontSize="small" />
                        <Typography marginLeft={1}>笔记标签</Typography>
                    </Box>
                    <TextField
                        sx={{ ml: 1, flex: 1, width: '80%' }}
                        placeholder="请选择笔记所属标签"
                        variant="standard"
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', margin: '10px 5px' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            padding: '5px 10px',
                            borderRadius: '5px',
                            alignItems: 'center',
                            '&:hover': { cursor: 'pointer', bgcolor: '#f3f3f3' }
                        }}
                    >
                        <PaymentIcon fontSize="small" />
                        <Typography marginLeft={1}>笔记简介</Typography>
                    </Box>
                    <TextField
                        sx={{ ml: 1, flex: 1, width: '80%' }}
                        placeholder="请输入笔记简介"
                        variant="standard"
                    />
                </Box>
                {/* TODO: 以后再增加添加自定义标签的功能 */}
                {/* <Box sx={{ display: 'flex', alignItems: 'center', margin: '10px 5px' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            padding: '5px 10px',
                            borderRadius: '5px',
                            alignItems: 'center',
                            color: 'grey',
                            '&:hover': { cursor: 'pointer', bgcolor: '#f3f3f3' }
                        }}
                    >
                        <AddCircleOutlineIcon fontSize="small" />
                        <Typography marginLeft={1}>添加字段</Typography>
                    </Box>
                </Box> */}
            </Box>
            {/* <Divider sx={{ mt: 2, mb: 2 }} /> */}
            {/* 笔记内容-文本编辑器 */}
            <Box>
                <Editor
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    init={{
                        height: 430,
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
                    value={text}
                    onEditorChange={handleChangeText}
                />
                {/* <button onClick={log}>Log editor content</button> */}
            </Box>
        </Box>
    );
};

export default KnowledgeNoteDetail;
