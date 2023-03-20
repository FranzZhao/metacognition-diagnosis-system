import React from 'react';
// mui5
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// custom components
import ProjectEvaluatedScale from '@/components/business/scale';

const ScaleDetail = ({ handleOpenList }) => {
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    m: '10px 0',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Typography fontWeight="bold">
                    现在请你依据任务评价量表，对你所完成的方案进行自我评价吧！
                </Typography>
                <Button variant="contained" disableElevation size="small" onClick={handleOpenList}>
                    返回评价列表
                </Button>
            </Box>

            <ProjectEvaluatedScale isNotEditable={false} />
        </Box>
    );
};

export default ScaleDetail;
