import React, { useEffect, useState } from 'react';
// type
import { TagTreeProps, TagListProps } from '@/utils/types/knowledgeTag';
// mui5
import { Box, Card, Button, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddBoxIcon from '@mui/icons-material/AddBox';
// custom components
import TagTree from '@/components/business/tagTree';
import KnowledgeTagContent from './knowledgeTagContent';
// mock data
import { mockTagLists } from '@/utils/mock/mockTagTree';

const KnowledgeTag = () => {
    // 知识标签树的获取&处理
    const KnowledgeTagTree = ({ tagList }) => {
        // const [tagList, setTagList] = useState<TagListProps[]>(mockTagLists);
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

        return <TagTree data={tagTree} />;
    };

    return (
        <Box
            sx={{
                display: 'flex'
            }}
        >
            <Card
                sx={{
                    boxShadow:
                        'rgb(50 50 93 / 2%) 0px 2px 5px -1px, rgb(0 0 0 / 5%) 0px 1px 3px -1px',
                    p: 1,
                    height: 'calc(100vh - 110px)',
                    minWidth: '250px'
                }}
            >
                <Typography margin="10px" fontWeight="bold">
                    知识标签列表
                </Typography>
                <Divider />
                <KnowledgeTagTree tagList={mockTagLists} />
                <Divider />
                <Button
                    variant="contained"
                    sx={{ width: '100%', m: '10px 0' }}
                    disableElevation
                    startIcon={<AddBoxIcon />}
                >
                    添加标签
                </Button>
            </Card>
            <Card
                sx={{
                    boxShadow:
                        'rgb(50 50 93 / 2%) 0px 2px 5px -1px, rgb(0 0 0 / 5%) 0px 1px 3px -1px',
                    p: '15px 20px',
                    ml: 2,
                    width: 'calc(100vw)',
                    height: 'calc(100vh - 110px)',
                    overflow: 'overlay',
                    '&::-webkit-scrollbar': {
                        width: 5
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#a4b7c670',
                        borderRadius: '4px'
                    }
                }}
            >
                <KnowledgeTagContent />
            </Card>
        </Box>
    );
};

export default KnowledgeTag;
