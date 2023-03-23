import React, { useState, useEffect } from 'react';
// type
import { TagTreeProps, TagListProps } from '@/utils/types/knowledgeTag';
// mui5
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// custom components
import TagTree from '@/components/business/tagTree';
import { Modal } from '@/components/common';
import { mockTagLists } from '@/utils/mock';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { getAction } from '@/store/slices';
import { addNewTag, selectTagById } from '@/store/slices/knowledgeTagSlice';

interface KnowledgeTagTreeProps {
    tagList: TagListProps[];
    handleSelectedTag: (tagID: string) => void;
    isPositionRelative?: boolean;
}

const KnowledgeTagTree: React.FC<KnowledgeTagTreeProps> = ({
    tagList,
    handleSelectedTag,
    isPositionRelative = true
}) => {
    const dispatch = useAppDispatch();
    const currentActor = useAppSelector((state) => state.actionLog.actor);
    const currentTagList = useAppSelector((state) => state.knowledgeTag.tagList);
    // 左侧标签树
    const [tagTree, setTagTree] = useState<TagTreeProps[]>([]);
    // 添加标签模态框
    const [isAddNewTag, setIsAddNewTag] = useState(false);
    // 选中的标签
    const [selectedTag, setSelectedTag] = useState();
    // 新建标签内容
    const [newTag, setNewTag] = useState({
        labelText: '',
        parentID: '',
        content: ''
    });

    useEffect(() => {
        let newTagTree = handleTagListToTree(currentTagList);
        setTagTree(newTagTree);
    }, [currentTagList]);

    // 递归
    const recursionTagList = (item: TagListProps, list: TagListProps[]): TagTreeProps[] => {
        let childrenList: TagTreeProps[] = [];
        list.map((tag) => {
            if (tag.parentID === item.id) {
                // 递归要先进入函数，再赋值返回
                let subTagChildren = recursionTagList(tag, list);
                childrenList.push({
                    id: tag.id,
                    labelText: tag.labelText,
                    labelIcon: tag.labelIcon,
                    labelInfo: tag.labelInfo,
                    children: subTagChildren
                });
            }
        });
        return childrenList;
    };

    // 将数组转化为树结构
    const handleTagListToTree = (list) => {
        let tempTagList: TagListProps[] = [...list];
        let rootTag: TagListProps[] = [];
        // 1. 先放置parentText为null的
        list.map((item) => {
            if (item.parentID === null) {
                rootTag.push(item);
            } else {
                tempTagList.push(item);
            }
        });
        // 2. 通过递归完成剩下的children分配
        let newTagTree: TagTreeProps[] = [];
        rootTag.map((item) => {
            newTagTree.push({
                id: item.id,
                labelText: item.labelText,
                labelIcon: item.labelIcon,
                labelInfo: item.labelInfo,
                children: recursionTagList(item, list)
            });
        });
        return newTagTree;
    };

    const boxPositionStyle = { position: isPositionRelative ? 'relative' : 'unset' };
    const buttonPositionStyle = { position: isPositionRelative ? 'absolute' : 'unset' };
    return (
        <Box sx={{ height: '100%', width: '100%', ...boxPositionStyle }}>
            <Typography margin="10px" fontWeight="bold">
                知识标签列表
            </Typography>
            <Divider />
            <TagTree
                data={tagTree}
                handleSelectedTag={(tagId: string) => {
                    // console.log('select id =>', tagId);
                    dispatch(selectTagById(tagId));
                    dispatch(
                        getAction({
                            actor: currentActor,
                            verb: '点击列表',
                            object: '知识标签列表',
                            result: '选中知识标签 id:' + tagId,
                            time: '',
                            context: {
                                cognitiveContext: '认知表征',
                                otherContext: null,
                                taskContext: null
                            }
                        })
                    );
                }}
            />
            <Box sx={{ ...buttonPositionStyle, bottom: '0', width: '100%' }}>
                <Divider />
                <Button
                    variant="contained"
                    sx={{ width: '100%', m: '10px 0' }}
                    disableElevation
                    startIcon={<AddBoxIcon />}
                    onClick={() => setIsAddNewTag(true)}
                >
                    添加标签
                </Button>
            </Box>

            {/* 添加标签模态框 */}
            <Modal
                maxWidth="xs"
                open={isAddNewTag}
                onClose={() => setIsAddNewTag(false)}
                title={'添加子目标'}
                content={
                    <>
                        <TextField
                            variant="standard"
                            label="标签名称"
                            placeholder="请输入标签名称"
                            sx={{ width: '100%' }}
                            value={newTag.labelText}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setNewTag({
                                    ...newTag,
                                    labelText: event.target.value
                                })
                            }
                        />
                        <FormControl variant="standard" sx={{ width: '100%', mt: 2 }}>
                            <InputLabel>选择父标签</InputLabel>
                            <Select
                                value={newTag.parentID}
                                onChange={(event: SelectChangeEvent) => {
                                    setNewTag({
                                        ...newTag,
                                        parentID: event.target.value
                                    });
                                }}
                                label="选择父标签"
                            >
                                <MenuItem value="null">该标签为顶级父标签</MenuItem>
                                <Divider />
                                {currentTagList.map((tag) => {
                                    return (
                                        <MenuItem key={tag.id} value={tag.id}>
                                            {tag.labelText}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                        <TextField
                            variant="standard"
                            label="标签内容"
                            placeholder="请输入标签内容"
                            sx={{ width: '100%', mt: 2 }}
                            value={newTag.content}
                            multiline
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setNewTag({
                                    ...newTag,
                                    content: event.target.value
                                })
                            }
                        />
                    </>
                }
                actions={
                    <>
                        <Button
                            variant="contained"
                            size="small"
                            disableElevation
                            onClick={() => {
                                dispatch(
                                    getAction({
                                        actor: currentActor,
                                        verb: '点击按钮',
                                        object: '添加知识标签',
                                        result: '添加新的知识标签:' + newTag.labelText,
                                        time: '',
                                        context: {
                                            cognitiveContext: '认知表征',
                                            otherContext: null,
                                            taskContext: null
                                        }
                                    })
                                );
                                dispatch(addNewTag(newTag)).then(() => {
                                    setIsAddNewTag(false);
                                    setNewTag({
                                        labelText: '',
                                        parentID: '',
                                        content: ''
                                    });
                                });
                            }}
                        >
                            确认
                        </Button>
                        <Button
                            size="small"
                            color="secondary"
                            onClick={() => setIsAddNewTag(false)}
                        >
                            取消
                        </Button>
                    </>
                }
            />
        </Box>
    );
};

export default KnowledgeTagTree;
