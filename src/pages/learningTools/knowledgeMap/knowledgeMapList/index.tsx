import React from 'react';
// mui5
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// custom component
import CustomTable from '@/components/common/table';
// mock
import { mockKnowledgeMapList } from '@/utils/mock';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { getMapById, getAction } from '@/store/slices';

interface KnowledgeMapListProps {
    handleOpenDetail: () => void;
}

const KnowledgeMapList: React.FC<KnowledgeMapListProps> = ({ handleOpenDetail }) => {
    const dispatch = useAppDispatch();
    const currentActor = useAppSelector((state) => state.actionLog.actor);
    const mapList = useAppSelector((state) => state.map.mapList);

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
                rows={mapList}
                // hasActions={
                //     <Button size="small" variant="outlined" onClick={handleOpenDetail}>
                //         详情
                //     </Button>
                // }
                needAction={true}
                openDetail={(id: any) => {
                    dispatch(
                        getAction({
                            actor: currentActor,
                            verb: '点击按钮',
                            object: '表格按钮：编辑知识地图',
                            result: '编辑知识地图 id：' + id,
                            time: '',
                            context: {
                                cognitiveContext: '认知表征',
                                otherContext: null,
                                taskContext: null
                            }
                        })
                    );
                    dispatch(getMapById(id)).then(() => {
                        handleOpenDetail();
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

export default KnowledgeMapList;
