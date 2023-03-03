import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Box, Button, Divider, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import InputBase from '@mui/material/InputBase';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';
import CustomTable from '@/components/common/table';
// mock
import { mockTagContentLists } from '@/utils/mock/mockTagTree';

export default function KnowledgeTagContent() {
    // 编辑修改标签内容
    const [isEdit, setIsEdit] = useState(false);

    return (
        <Paper sx={{ boxShadow: 'none' }}>
            <Box sx={{ display: 'flex', margin: '10px 0' }}>
                {isEdit ? (
                    <InputBase
                        sx={{ fontSize: '1.2rem', fontWeight: 'bold', mt: '-4px' }}
                        placeholder="请输入标签名"
                    />
                ) : (
                    <Typography fontWeight="bold" fontSize="1.2rem">
                        自指与元认知
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
                    value="元认知是认知系统中的高阶认知主体（higher-order cognitive agent），是认知系统实现自指（self-reference）的认知组件（cognitive components），即以认知系统自身为对象进行表征与计算，涉及与认知相关的知识（认知知识，对认知状态的表征）和指向认知的调控（认知调控，包含意识、自愿控制等，对认知状态的计算），其目的在于通过对认知系统中的要素与过程进行感知、调节与规范，使认知系统适应各类复杂认知情境。"
                    multiline
                    variant="standard"
                    sx={{
                        width: '100%'
                    }}
                />
            ) : (
                <Typography margin={'15px 0'}>
                    元认知是认知系统中的高阶认知主体（higher-order cognitive
                    agent），是认知系统实现自指（self-reference）的认知组件（cognitive
                    components），即以认知系统自身为对象进行表征与计算，涉及与认知相关的知识（认知知识，对认知状态的表征）和指向认知的调控（认知调控，包含意识、自愿控制等，对认知状态的计算），其目的在于通过对认知系统中的要素与过程进行感知、调节与规范，使认知系统适应各类复杂认知情境。
                </Typography>
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
}
