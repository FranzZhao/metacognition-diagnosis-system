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
import { deleteNoteById, saveNoteById } from '@/store/slices';

interface FeatureProps {
    id: number;
    title: string;
    content: string;
}

interface KnowledgeNoteDetailProps {
    handleOpenNoteList: () => void;
}

const KnowledgeNoteDetail: React.FC<KnowledgeNoteDetailProps> = ({ handleOpenNoteList }) => {
    const dispatch = useAppDispatch();
    const currentNoteContent = useAppSelector((state) => state.knowledgeNote.currentOpenNote);
    // 笔记标题
    const [noteTitle, setNoteTitle] = useState('');
    // 标签字段
    const [noteTags, setNoteTags] = useState<string[]>([]);
    // 笔记简介字段
    const [noteIntro, setNoteIntro] = useState('');
    // 自定义字段
    const [extraFeature, setExtraFeature] = useState<FeatureProps[]>([]);
    // 文本编辑器内容
    const [text, setText] = useState('');
    // 删除笔记
    const [openDeleteNoteModal, setOpenDeleteNoteModal] = useState(false);

    useEffect(() => {
        if (currentNoteContent) {
            setNoteTitle(currentNoteContent.title);
            setNoteTags(currentNoteContent.tags);
            setNoteIntro(currentNoteContent.intro);
            setText(currentNoteContent.content);
        }
    }, [currentNoteContent]);

    /**
     * 自定义字段 Function
     */
    // 自定义字段内容更新
    const handleChangeExtraFeatureContent =
        (id: number, target: 'title' | 'content') =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            let newExtraFeatureList = [...extraFeature];
            extraFeature.map((feature, idx) => {
                if (feature.id === id) {
                    newExtraFeatureList[idx][target] = event.target.value;
                }
            });
            setExtraFeature(newExtraFeatureList);
        };

    // 添加自定义字段
    const handleAddNewExtraFeature = () => {
        let newExtraFeatureList = [...extraFeature];
        // 计算新添加字段的id
        let newID = 0;
        if (newExtraFeatureList.length !== 0) {
            // 不是第一个新添加字段, 获取列表最后一个的id后+1
            newID = newExtraFeatureList[newExtraFeatureList.length - 1].id + 1;
        }
        newExtraFeatureList.push({
            id: newID,
            title: '',
            content: ''
        });
        setExtraFeature(newExtraFeatureList);
    };

    // 删除自定义字段
    const handleDeleteExtraFeature = (id: number) => {
        let newExtraFeatureList = [...extraFeature];
        extraFeature.map((feature, idx) => {
            if (feature.id === id) {
                newExtraFeatureList.splice(idx, 1);
            }
        });
        setExtraFeature(newExtraFeatureList);
    };

    /**
     * TinyMCE Function
     */
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
                    value={noteTitle}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setNoteTitle(event.target.value);
                    }}
                />
                <Tooltip title="保存笔记" arrow>
                    <IconButton
                        aria-label="delete"
                        size="small"
                        sx={{ ml: 'auto' }}
                        onClick={() => {
                            let noteInfo = {
                                id: currentNoteContent?.id,
                                title: noteTitle,
                                tags: noteTags,
                                intro: noteIntro,
                                // extraFeature: extraFeature,
                                content: text
                            };
                            console.log(noteInfo);
                            dispatch(saveNoteById(noteInfo));
                        }}
                    >
                        <SaveIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="删除笔记" arrow>
                    <IconButton
                        aria-label="delete"
                        size="small"
                        sx={{ ml: 1 }}
                        onClick={() => setOpenDeleteNoteModal(true)}
                    >
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
                {/* 删除笔记modal */}
                <Modal
                    maxWidth="xs"
                    open={openDeleteNoteModal}
                    onClose={() => setOpenDeleteNoteModal(false)}
                    title={'删除笔记确认'}
                    content={<Box sx={{ fontWeight: 'bold' }}>请确认是否删除笔记！</Box>}
                    actions={
                        <Box>
                            <Button sx={{ mr: 1 }} onClick={() => setOpenDeleteNoteModal(false)}>
                                取消
                            </Button>
                            <Button
                                variant="contained"
                                disableElevation
                                onClick={() => {
                                    if (currentNoteContent) {
                                        dispatch(deleteNoteById(currentNoteContent.id));
                                        handleOpenNoteList();
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
            {/* <Divider sx={{ mt: 2, mb: 2 }} /> */}
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
                            笔记标签
                        </Typography>
                    </Box>
                    <TagSelector
                        value={noteTags}
                        tagList={['元认知', '元认知意识', '认知调控', '自指', '自我概念']}
                        // tagList={[]}
                        onChange={(event, newValue) => setNoteTags(newValue)}
                        sx={{ flex: 1, mr: 1, ml: 1 }}
                        placeholder="请选择笔记所属标签"
                    />
                </Box>
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
                        <PaymentIcon fontSize="small" />
                        <Typography width={'110px'} marginLeft={1}>
                            笔记简介
                        </Typography>
                    </Box>
                    <TextField
                        sx={{ ml: 1, mr: 1, flex: 1 }}
                        placeholder="请输入笔记简介"
                        variant="standard"
                        value={noteIntro}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            setNoteIntro(event.target.value)
                        }
                    />
                </Box>
                {/* 自定义字段 */}
                {/* {extraFeature.map((feature) => (
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', margin: '8px 5px' }}
                        key={feature.id}
                    >
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
                            <Tooltip title="删除字段" arrow>
                                <RemoveCircleOutlineIcon
                                    fontSize="small"
                                    onClick={() => {
                                        console.log('feature ->', feature.id);
                                        handleDeleteExtraFeature(feature.id);
                                    }}
                                />
                            </Tooltip>
                            <TextField
                                sx={{ ml: 1, width: '110px' }}
                                placeholder="自定义字段名"
                                variant="standard"
                                value={feature.title}
                                onChange={handleChangeExtraFeatureContent(feature.id, 'title')}
                            />
                        </Box>
                        <TextField
                            sx={{ ml: 1, mr: 1, flex: 1 }}
                            placeholder="请输入自定义字段的内容"
                            variant="standard"
                            value={feature.content}
                            onChange={handleChangeExtraFeatureContent(feature.id, 'content')}
                        />
                    </Box>
                ))} */}

                {/* 新添加自定义字段 */}
                {/* <Box sx={{ display: 'flex', alignItems: 'center', margin: '8px 5px' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            padding: '5px 10px',
                            borderRadius: '5px',
                            alignItems: 'center',
                            color: 'grey',
                            height: '42px',
                            '&:hover': { cursor: 'pointer', bgcolor: '#f3f3f3' }
                        }}
                        onClick={handleAddNewExtraFeature}
                    >
                        <AddCircleOutlineIcon fontSize="small" />
                        <Typography marginLeft={1}>添加自定义字段</Typography>
                    </Box>
                </Box> */}
            </Box>
            <Divider sx={{ mt: 2, mb: 2 }} />
            {/* 笔记内容-文本编辑器 */}
            <Box>
                <Editor
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    init={{
                        height: 420,
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
