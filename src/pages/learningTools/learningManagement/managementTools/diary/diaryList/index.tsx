import React from 'react';
// mui5
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
// custom component
import CustomTable from '@/components/common/table';
// mock
import { mockDiaryList } from '@/utils/mock';

const DiaryList = ({ handleOpenDiaryDetail }) => {
    return (
        <Box>
            <Box sx={{ display: 'flex' }}>
                <Typography fontWeight="bold" fontSize="1.2rem" marginBottom="15px">
                    反思日志列表
                </Typography>
                <Box sx={{ ml: 'auto' }}>
                    <Button
                        variant="contained"
                        disableElevation
                        startIcon={<AddBoxIcon />}
                        onClick={handleOpenDiaryDetail}
                        size="small"
                    >
                        新建反思日志
                    </Button>
                </Box>
            </Box>
            <CustomTable
                columns={[
                    { id: 'id', label: '#', minWidth: 50 },
                    { id: 'title', label: '标题', minWidth: 200 },
                    { id: 'tags', label: '标签', minWidth: 200 },
                    { id: 'time', label: '更新时间', minWidth: 150 }
                ]}
                rows={mockDiaryList}
                hasActions={
                    <Button size="small" variant="outlined" onClick={handleOpenDiaryDetail}>
                        详情
                    </Button>
                }
                renderTags={'tags'}
                sx={{
                    height: 'calc(100vh - 234px)'
                }}
            />
        </Box>
    );
};

export default DiaryList;
