import React, { useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { TextField } from '@mui/material';
// custom component
import { Modal } from '@/components/common';
import CustomTable from '@/components/common/table';
// mock
import { mockDiaryList } from '@/utils/mock';
// redux
import { useAppSelector, useAppDispatch } from '@/store';
import { getDiaryById, newDiary } from '@/store/slices';

const DiaryList = ({ handleOpenDiaryDetail }) => {
    const dispatch = useAppDispatch();
    const currentDiaryList = useAppSelector((state) => state.diary.diaryList);
    // 新建反思日志
    const [openNewDiaryModal, setOpenNewDiaryModal] = useState(false);
    // 新建笔记标题
    const [newDiaryTitle, setNewDiaryTitle] = useState('');

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
                        onClick={() => setOpenNewDiaryModal(true)}
                        size="small"
                    >
                        新建反思日志
                    </Button>
                    <Modal
                        maxWidth="sm"
                        open={openNewDiaryModal}
                        onClose={() => setOpenNewDiaryModal(false)}
                        title={'新建笔记'}
                        content={
                            <Box>
                                <TextField
                                    variant="standard"
                                    label="新建笔记标题"
                                    value={newDiaryTitle}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setNewDiaryTitle(event.target.value);
                                    }}
                                    sx={{ width: '100%' }}
                                />
                            </Box>
                        }
                        actions={
                            <Box>
                                <Button size="small" onClick={() => setOpenNewDiaryModal(false)}>
                                    取消
                                </Button>
                                <Button
                                    variant="contained"
                                    disableElevation
                                    size="small"
                                    onClick={() => {
                                        dispatch(newDiary(newDiaryTitle)).then(() => {
                                            setOpenNewDiaryModal(false);
                                            setNewDiaryTitle('');
                                        });
                                    }}
                                >
                                    确认
                                </Button>
                            </Box>
                        }
                    />
                </Box>
            </Box>
            <CustomTable
                columns={[
                    { id: 'id', label: '#' },
                    { id: 'title', label: '标题' },
                    { id: 'tags', label: '标签' },
                    { id: 'time', label: '更新时间' }
                ]}
                rows={currentDiaryList}
                // hasActions={
                //     <Button size="small" variant="outlined" onClick={handleOpenDiaryDetail}>
                //         详情
                //     </Button>
                // }
                needAction={true}
                openDetail={(id) => {
                    dispatch(getDiaryById(id)).then(() => {
                        handleOpenDiaryDetail();
                    });
                }}
                renderTags={'tags'}
                sx={{
                    height: 'calc(100vh - 234px)'
                }}
            />
        </Box>
    );
};

export default DiaryList;
