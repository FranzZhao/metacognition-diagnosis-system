import React, { useState, useEffect } from 'react';
// type
import { TagTreeProps, TagListProps } from '@/utils/types/knowledgeTag';
// mui5
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
// custom components
import TagTree from '@/components/business/tagTree';

interface KnowledgeTagTreeProps {
    tagList: TagListProps[];
}

const KnowledgeTagTree: React.FC<KnowledgeTagTreeProps> = ({ tagList }) => {
    const [tagTree, setTagTree] = useState<TagTreeProps[]>([]);

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
            <TagTree data={tagTree} />
            <Divider />
            <Button
                variant="contained"
                sx={{ width: '100%', m: '10px 0' }}
                disableElevation
                startIcon={<AddBoxIcon />}
            >
                添加标签
            </Button>
        </Box>
    );
};

export default KnowledgeTagTree;
