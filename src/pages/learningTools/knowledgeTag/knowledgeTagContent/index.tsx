import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { Box, Button, Divider, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import InputBase from '@mui/material/InputBase';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';
import CustomTable from '@/components/common/table';
// type
import { TagListProps } from '@/utils/types/knowledgeTag';
// mock
import { mockTagContentLists } from '@/utils/mock/mockTagTree';
// redux
import { useAppSelector, useAppDispatch } from '@/store';
import { saveTag } from '@/store/slices';
// agent help
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import { metacognitivePrompt, getAction } from '@/store/slices';

interface KnowledgeTagContentProps {
    selectedTagContent: TagListProps;
}

const KnowledgeTagContent: React.FC<KnowledgeTagContentProps> = ({ selectedTagContent }) => {
    const dispatch = useAppDispatch();
    const currentActor = useAppSelector((state) => state.actionLog.actor);
    const currentMsgID = useAppSelector((state) => state.agent.currentId);
    const currentSelectedTag = useAppSelector((state) => state.knowledgeTag.currentSelectTag);
    // 编辑修改标签内容
    const [isEdit, setIsEdit] = useState(false);
    // 标签标题
    const [tagTitle, setTagTitle] = useState('');
    // 标签内容
    const [tagContent, setTagContent] = useState('');
    // 关联项目table data
    const [tableData, setTableData] = useState<any>([]);

    useEffect(() => {
        if (currentSelectedTag) {
            setTagTitle(currentSelectedTag.labelText);
            setTagContent(currentSelectedTag.content);
        }
    }, [currentSelectedTag]);

    // 获取到该知识标签下的所有知识笔记、知识地图、反思日志、知识节点和知识关联
    const notesInfo = useAppSelector((state) => state.knowledgeNote.noteList);
    const mapsInfo = useAppSelector((state) => state.map.mapList);
    const diariesInfo = useAppSelector((state) => state.diary.diaryList);
    useEffect(() => {
        let num = 1;
        if (currentSelectedTag) {
            let tag = currentSelectedTag.labelText;
            // 知识笔记
            let tagItems: any[] = [];
            notesInfo.map((note) => {
                console.log(note);
                if (note.tags.includes(tag)) {
                    tagItems.push({
                        id: num,
                        title: note.title,
                        type: ['知识笔记'],
                        time: note.time
                    });
                    num += 1;
                }
            });
            // 知识地图
            mapsInfo.map((map) => {
                if (map.tags.includes(tag)) {
                    tagItems.push({
                        id: num,
                        title: map.title,
                        type: ['知识地图'],
                        time: map.time
                    });
                    num += 1;
                }
                map.nodes.map((node) => {
                    if (node.extraInfo.tags.includes(tag)) {
                        tagItems.push({
                            id: num,
                            title: node.name,
                            type: ['知识节点'],
                            time: '无'
                        });
                        num += 1;
                    }
                });
                map.links.map((link) => {
                    if (link.extraInfo.tags.includes(tag)) {
                        tagItems.push({
                            id: num,
                            title: link.value,
                            type: ['知识关联'],
                            time: '无'
                        });
                        num += 1;
                    }
                });
            });
            // 反思日志
            diariesInfo.map((diary) => {
                if (diary.tags.includes(tag)) {
                    tagItems.push({
                        id: num,
                        title: diary.title,
                        type: ['反思日志'],
                        time: diary.time
                    });
                    num += 1;
                }
            });
            setTableData(tagItems);
        }
    }, [currentSelectedTag, notesInfo, mapsInfo, diariesInfo]);

    return (
        <Paper sx={{ boxShadow: 'none' }}>
            {currentSelectedTag === null ? (
                <Box
                    sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'grey',
                        fontSize: '1.5rem',
                        mt: 2
                    }}
                >
                    请新建或选择标签以查看编辑标签内容
                </Box>
            ) : (
                <Box>
                    <Box sx={{ display: 'flex', margin: '10px 0' }}>
                        {isEdit ? (
                            <InputBase
                                sx={{
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    mt: '-4px',
                                    width: '50%',
                                    borderBottom: '1px solid black'
                                }}
                                placeholder="请输入标签名"
                                value={tagTitle}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                    setTagTitle(event.target.value)
                                }
                            />
                        ) : (
                            <Typography fontWeight="bold" fontSize="1.2rem">
                                {tagTitle}
                            </Typography>
                        )}

                        <Box sx={{ ml: 'auto' }}>
                            {isEdit ? (
                                <Button
                                    size="small"
                                    variant="contained"
                                    startIcon={<SaveIcon />}
                                    disableElevation
                                    sx={{ mr: 1 }}
                                    onClick={() => {
                                        setIsEdit(!isEdit);
                                        dispatch(
                                            saveTag({
                                                id: currentSelectedTag.id,
                                                labelText: tagTitle,
                                                content: tagContent
                                            })
                                        );
                                        dispatch(
                                            getAction({
                                                actor: currentActor,
                                                verb: '点击按钮',
                                                object: '修改标签信息',
                                                result: '修改知识标签 id:' + currentSelectedTag.id,
                                                time: '',
                                                context: {
                                                    cognitiveContext: '认知表征',
                                                    otherContext:
                                                        '知识标签：' +
                                                        tagTitle +
                                                        ', 内容：' +
                                                        tagContent,
                                                    taskContext: null
                                                }
                                            })
                                        );
                                    }}
                                >
                                    保存信息
                                </Button>
                            ) : (
                                <Button
                                    size="small"
                                    variant="contained"
                                    startIcon={<DriveFileRenameOutlineIcon />}
                                    disableElevation
                                    sx={{ mr: 1 }}
                                    onClick={() => setIsEdit(!isEdit)}
                                >
                                    修改信息
                                </Button>
                            )}
                            {/* <Button size="small" color="secondary" startIcon={<DeleteIcon />}>
                                删除标签
                            </Button> */}
                        </Box>
                    </Box>
                    {isEdit ? (
                        <TextField
                            value={tagContent}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setTagContent(event.target.value)
                            }
                            multiline
                            variant="standard"
                            sx={{
                                width: '100%'
                            }}
                        />
                    ) : (
                        <Typography margin={'15px 0'}>{tagContent}</Typography>
                    )}
                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <Box sx={{ display: 'flex' }}>
                        <Typography fontWeight="bold" marginBottom="10px" fontSize="1.1rem">
                            关联项目
                        </Typography>
                        <Box sx={{ ml: 'auto' }}>
                            <Tooltip title="认知表征-认知资料整理" arrow>
                                <IconButton
                                    size="small"
                                    onClick={() => {
                                        dispatch(
                                            metacognitivePrompt({
                                                promptType: '认知表征-认知资料整理',
                                                currentMsgID: currentMsgID
                                            })
                                        );
                                        dispatch(
                                            getAction({
                                                actor: currentActor,
                                                verb: '弹出提示框',
                                                object: '元认识提示 id: ' + currentMsgID,
                                                result: '弹出元认知提示：认知表征-认知资料整理',
                                                time: '',
                                                context: {
                                                    cognitiveContext: '认知表征',
                                                    otherContext: null,
                                                    taskContext: '认知表征-认知资料整理'
                                                }
                                            })
                                        );
                                    }}
                                >
                                    <HelpIcon fontSize="inherit" />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Box>

                    <CustomTable
                        columns={[
                            { id: 'id', label: '#', minWidth: 50 },
                            { id: 'title', label: '标题', minWidth: 200 },
                            { id: 'type', label: '类型', minWidth: 150 },
                            { id: 'time', label: '更新时间', minWidth: 150 }
                        ]}
                        rows={tableData}
                        // hasActions={
                        //     <Button size="small" variant="outlined">
                        //         详情
                        //     </Button>
                        // }
                        needAction={false}
                        renderTags={'type'}
                    />
                </Box>
            )}
        </Paper>
    );
};
export default KnowledgeTagContent;
