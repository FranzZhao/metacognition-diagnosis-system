import React, { useState } from 'react';
// mui
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// custom components
import ToolCard from '@/components/common/toolCard';
import KnowledgeTagTree from '@/pages/learningTools/knowledgeTag/knowledgeTagTree';
import KnowledgeTagContent from '@/pages/learningTools/knowledgeTag/knowledgeTagContent';
// mock data
import { mockTagLists } from '@/utils/mock/mockTagTree';
// type
import { TagListProps } from '@/utils/types/knowledgeTag';
import { Divider } from '@mui/material';

interface KnowledgeTagToolProps {
    /** 关闭工具卡片 */
    handleClose: () => void;
}

const KnowledgeTagTool: React.FC<KnowledgeTagToolProps> = ({ handleClose }) => {
    const theme = useTheme();
    // 标签数组
    const [tagList, setTagList] = useState(mockTagLists);
    // 选择的标签内容
    const [selectedTag, setSelectedTag] = useState<TagListProps>(mockTagLists[0]);
    // 查看选中标签的内容
    const [isCheckTagContent, setIsCheckTagContent] = useState(false);

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
        <ToolCard
            cardWidth="500px"
            title={
                <Typography fontSize={'14px'} color={'white'}>
                    知识标签小工具
                </Typography>
            }
            icon={
                <Avatar
                    sx={{
                        bgcolor: theme.palette.warning.light,
                        width: '20px',
                        height: '20px'
                    }}
                >
                    <LocalOfferIcon sx={{ fontSize: '12px' }} />
                </Avatar>
            }
            action={handleClose}
            content={
                <Box>
                    {isCheckTagContent ? (
                        <>
                            <Button
                                size="small"
                                variant="contained"
                                disableElevation
                                onClick={() => setIsCheckTagContent(false)}
                                sx={{ width: '100%' }}
                            >
                                返回标签列表
                            </Button>
                            <Divider sx={{ mt: 1 }} />
                            <KnowledgeTagContent selectedTagContent={selectedTag} />
                        </>
                    ) : (
                        <Box sx={{ '& *': { position: 'unset', zIndex: 1 } }}>
                            <KnowledgeTagTree
                                tagList={tagList}
                                handleSelectedTag={handleSelectedTag}
                            />
                            <Button
                                variant="contained"
                                sx={{ width: '100%' }}
                                color="secondary"
                                disableElevation
                                onClick={() => setIsCheckTagContent(true)}
                            >
                                查看选中标签内容
                            </Button>
                        </Box>
                    )}
                </Box>
            }
            contentSX={{ height: '380px' }}
        />
    );
};

export default KnowledgeTagTool;
