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

interface KnowledgeTagContentProps {
    selectedTagContent: TagListProps;
}

const KnowledgeTagContent: React.FC<KnowledgeTagContentProps> = ({ selectedTagContent }) => {
    // 编辑修改标签内容
    const [isEdit, setIsEdit] = useState(false);
    // 标签标题
    const [tagTitle, setTagTitle] = useState(selectedTagContent.labelText);
    // 标签内容
    const [tagContent, setTagContent] = useState(selectedTagContent.content);

    useEffect(() => {
        setTagTitle(selectedTagContent.labelText);
        setTagContent(selectedTagContent.content);
    }, [selectedTagContent]);

    return (
        <Paper sx={{ boxShadow: 'none' }}>
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
                    <Button
                        size="small"
                        variant="contained"
                        startIcon={isEdit ? <SaveIcon /> : <DriveFileRenameOutlineIcon />}
                        disableElevation
                        sx={{ mr: 1 }}
                        onClick={() => setIsEdit(!isEdit)}
                    >
                        {isEdit ? '保存信息' : '修改信息'}
                    </Button>
                    <Button size="small" color="secondary" startIcon={<DeleteIcon />}>
                        删除标签
                    </Button>
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
            <Typography fontWeight="bold" marginBottom="10px" fontSize="1.1rem">
                关联项目
            </Typography>
            <CustomTable
                columns={[
                    { id: 'id', label: '#', minWidth: 50 },
                    { id: 'title', label: '标题', minWidth: 200 },
                    { id: 'type', label: '类型', minWidth: 150 },
                    { id: 'time', label: '更新时间', minWidth: 150 }
                ]}
                rows={mockTagContentLists}
                hasActions={
                    <Button size="small" variant="outlined">
                        详情
                    </Button>
                }
                renderTags={'type'}
            />
        </Paper>
    );
};
export default KnowledgeTagContent;
