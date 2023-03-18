import React, { useState } from 'react';
// mui5
import { Box, Card } from '@mui/material';
import Button from '@mui/material/Button';
// custom components
import KnowledgeTagTree from './knowledgeTagTree';
import KnowledgeTagContent from './knowledgeTagContent';
// mock data
import { mockTagLists } from '@/utils/mock/mockTagTree';
// type
import { TagListProps } from '@/utils/types/knowledgeTag';

const KnowledgeTag = () => {
    // 标签数组
    const [tagList, setTagList] = useState(mockTagLists);
    // 选择的标签内容
    const [selectedTag, setSelectedTag] = useState<TagListProps>(mockTagLists[0]);

    // 设定选中标签
    const handleSelectedTag = (tagID: string) => {
        // console.log('selected ID =>', tagID);
        let select;
        // 依据ID找到tag内容
        tagList.map((tag, index) => {
            if (tag.id === tagID) {
                select = tag;
            }
        });
        // TODO: 一个页面上不好看的bug, 添加了setSelectedTag之后, tagTree总是会重新渲染, 导致第一个也会处于hover状态，但点击外面就恢复了
        setSelectedTag(select);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            {/* 左侧tag标签数 */}
            <Card
                sx={{
                    boxShadow:
                        'rgb(50 50 93 / 2%) 0px 2px 5px -1px, rgb(0 0 0 / 5%) 0px 1px 3px -1px',
                    p: 1,
                    height: 'calc(100vh - 110px)',
                    minWidth: '250px'
                }}
            >
                <KnowledgeTagTree tagList={tagList} handleSelectedTag={handleSelectedTag} />
            </Card>
            {/* 右侧tag标签内容 */}
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
                <KnowledgeTagContent selectedTagContent={selectedTag} />
            </Card>
        </Box>
    );
};

export default KnowledgeTag;
