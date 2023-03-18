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
// custom components
import TagTree from '@/components/business/tagTree';
import { Modal } from '@/components/common';

interface KnowledgeTagTreeProps {
    tagList: TagListProps[];
    handleSelectedTag: (tagID: string) => void;
}

const KnowledgeTagTree: React.FC<KnowledgeTagTreeProps> = ({ tagList, handleSelectedTag }) => {
    // 左侧标签树
    const [tagTree, setTagTree] = useState<TagTreeProps[]>([]);
    // 添加标签模态框
    const [isAddNewTag, setIsAddNewTag] = useState(false);
    // 选中的标签
    const [selectedTag, setSelectedTag] = useState();
    // 新建标签内容
    const [newTagContent, setNewTagContent] = useState();

    useEffect(() => {
        let newTagTree = handleTagListToTree();
        // console.log('tag tree =>', newTagTree);
        setTagTree(newTagTree);
    }, [tagList]);

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
    const handleTagListToTree = () => {
        let tempTagList: TagListProps[] = [...tagList];
        let rootTag: TagListProps[] = [];
        // 1. 先放置parentText为null的
        tagList.map((item) => {
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
                children: recursionTagList(item, tagList)
            });
        });
        return newTagTree;
        // setTagTree([...newTagTree]);
        // console.log(newTagTree);
    };

    return (
        <Box>
            <Typography margin="10px" fontWeight="bold">
                知识标签列表
            </Typography>
            <Divider />
            <TagTree data={tagTree} handleSelectedTag={handleSelectedTag} />
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
                            // value={newSubGoal}
                            // onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            //     setNewSubGoal(event.target.value)
                            // }
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
                                // setAddNewNode(newSubGoal);
                                setIsAddNewTag(false);
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
