import React, { useState } from 'react';
// mui5
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
// custom components
import { Modal } from '@/components/common';
import CustomTable from '@/components/common/table';
import ProjectEvaluatedScale from '@/components/business/scale';
// mock
import { mockScaleList } from '@/utils/mock';
import { TextField } from '@mui/material';

const ScaleList = ({ handleOpenDetail }) => {
    // 查看量规-模态框
    const [isOpenScaleModal, setIsOpenScaleModal] = useState(false);
    // 新建评价-模态框
    const [isNewAssessment, setIsNewAssessment] = useState(false);
    return (
        <Box>
            <Box sx={{ mb: 2 }}>
                <Typography>
                    现在请你依据任务评价量表（
                    <Link
                        sx={{ '&:hover': { cursor: 'pointer' } }}
                        onClick={() => {
                            setIsOpenScaleModal(true);
                        }}
                    >
                        点击此处查看评价量表
                    </Link>
                    ），对你所完成的方案进行自我评价吧！你可以对你的方案进行<b>多次评价</b>
                    ，开始一次新的评价时请点击“开始新的评价”按钮进行自我评价。
                </Typography>
                <Box
                    sx={{
                        mt: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography fontWeight="bold">
                        如果评价之后觉得自己的方案还有可以改进的地方，可以重新返回“任务解决方案撰写”重新完善，之后再次进行评价。
                    </Typography>
                    <Box>
                        <Button
                            variant="contained"
                            disableElevation
                            size="small"
                            onClick={() => setIsNewAssessment(true)}
                        >
                            开始新的评价
                        </Button>
                    </Box>
                </Box>
            </Box>
            <CustomTable
                columns={[
                    { id: 'id', label: '#', minWidth: 50 },
                    { id: 'title', label: '标题', minWidth: 200 },
                    { id: 'score', label: '方案得分', minWidth: 200 },
                    { id: 'time', label: '评价时间', minWidth: 150 }
                ]}
                rows={mockScaleList}
                hasActions={
                    <Button size="small" variant="outlined" onClick={handleOpenDetail}>
                        详情
                    </Button>
                }
                renderTags={'type'}
            />
            <Modal
                open={isOpenScaleModal}
                onClose={() => setIsOpenScaleModal(false)}
                title={'方案评价量规'}
                content={<ProjectEvaluatedScale isNotEditable={true} />}
            />
            <Modal
                maxWidth={'sm'}
                open={isNewAssessment}
                onClose={() => setIsNewAssessment(false)}
                title={'开始新的方案评价'}
                content={
                    <Box>
                        <TextField label="评价方案名称" variant="standard" sx={{ width: '100%' }} />
                    </Box>
                }
                actions={
                    <Box>
                        <Button
                            variant="contained"
                            disableElevation
                            size="small"
                            sx={{ mr: 1 }}
                            onClick={() => {
                                setIsNewAssessment(false);
                                handleOpenDetail();
                            }}
                        >
                            确认
                        </Button>
                        <Button
                            color="secondary"
                            size="small"
                            onClick={() => setIsNewAssessment(false)}
                        >
                            取消
                        </Button>
                    </Box>
                }
            />
        </Box>
    );
};

export default ScaleList;