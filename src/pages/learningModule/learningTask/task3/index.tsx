import React from 'react';
// mui5
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// custom components
import ProjectEvaluatedScale from '@/components/business/scale';

const Task3 = () => {
    return (
        <Box>
            <Box sx={{ mb: 2 }}>
                <Typography>
                    请依据下面的任务评价量表，对你所完成的方案进行自我评价吧！如果评价之后觉得自己的方案还有可以改进的地方，可以重新返回“任务解决方案撰写”重新完善，之后再次进行评价。
                </Typography>
            </Box>

            <ProjectEvaluatedScale />
        </Box>
    );
};

export default Task3;
