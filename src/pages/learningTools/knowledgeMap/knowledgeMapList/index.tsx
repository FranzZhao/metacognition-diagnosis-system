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
import { getMapById } from '@/store/slices';

interface KnowledgeMapListProps {
    handleOpenDetail: () => void;
}

const KnowledgeMapList: React.FC<KnowledgeMapListProps> = ({ handleOpenDetail }) => {
    const dispatch = useAppDispatch();
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
