import React from 'react';
// mui5
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// custom component
import CustomTable from '@/components/common/table';
// mock
import { mockNoteList } from '@/utils/mock';
// redux
import { useAppSelector, useAppDispatch } from '@/store';
import { openNoteById, getAction } from '@/store/slices';

interface KnowledgeNoteListProps {
    handleOpenDetail: () => void;
}

const KnowledgeNoteList: React.FC<KnowledgeNoteListProps> = ({ handleOpenDetail }) => {
    const dispatch = useAppDispatch();
    const currentActor = useAppSelector((state) => state.actionLog.actor);
    const noteList = useAppSelector((state) => state.knowledgeNote.noteList);

    return (
        <Box>
            <Typography fontWeight="bold" fontSize="1.2rem" marginBottom="15px">
                所有笔记列表
            </Typography>

            <CustomTable
                columns={[
                    { id: 'id', label: '#', minWidth: 50 },
                    { id: 'title', label: '标题', minWidth: 200 },
                    { id: 'tags', label: '标签', minWidth: 200 },
                    { id: 'time', label: '更新时间', minWidth: 150 }
                ]}
                rows={noteList}
                needAction={true}
                openDetail={(id) => {
                    // console.log('note id =>', id);
                    dispatch(openNoteById(id)).then(() => {
                        handleOpenDetail();
                    });
                    dispatch(
                        getAction({
                            actor: currentActor,
                            verb: '点击按钮',
                            object: '表格按钮 笔记id：' + id,
                            result: '查看笔记内容',
                            time: '',
                            context: {
                                cognitiveContext: '认知表征',
                                otherContext: null,
                                taskContext: null
                            }
                        })
                    );
                }}
                renderTags={'tags'}
                sx={{
                    height: 'calc(100vh - 234px)'
                }}
            />
        </Box>
    );
};

export default KnowledgeNoteList;
