import React, { useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DescriptionIcon from '@mui/icons-material/Description';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MediationIcon from '@mui/icons-material/Mediation';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
// custom components
import { KnowledgeGraph } from '@/components/business';
// mock
import { mockLinkData, mockNodeData, mockRelations } from '@/utils/mock';

interface KnowledgeMapDetailProp {
    handleOpenList: () => void;
}

const KnowledgeMapDetail: React.FC<KnowledgeMapDetailProp> = ({ handleOpenList }) => {
    // Graph state
    const [graph, setGraph] = useState({
        node: mockNodeData,
        link: mockLinkData,
        relations: mockRelations
    });

    const [view, setView] = React.useState('list');

    const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
        setView(nextView);
    };

    return (
        <Box>
            <Typography
                position="relative"
                zIndex="2"
                margin="10px 0px -35px 15px"
                fontSize="1.1rem"
                fontWeight="bold"
            >
                元认知知识地图
            </Typography>
            <Box sx={{ display: 'flex', mt: '-10px' }}>
                <Box sx={{ height: '100%', mt: '40px', ml: '10px', zIndex: 1 }}>
                    <Paper variant="outlined" sx={{ p: '5px', borderRadius: '8px' }}>
                        <Tooltip title="修改基本信息" arrow placement="right">
                            <IconButton aria-label="delete" size="small" sx={{ mb: '5px' }}>
                                <DescriptionIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        <Divider />
                        <Tooltip title="新增知识节点" arrow placement="right">
                            <IconButton aria-label="delete" size="small" sx={{ m: '5px 0' }}>
                                <AddCircleIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        <Divider />
                        <Tooltip title="新增知识关联" arrow placement="right">
                            <IconButton aria-label="delete" size="small" sx={{ mt: '5px' }}>
                                <MediationIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        <Divider />
                        <Tooltip title="返回知识列表" arrow placement="right">
                            <IconButton aria-label="delete" size="small" sx={{ mt: '5px' }}>
                                <KeyboardReturnIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </Paper>
                </Box>
                <Box sx={{ ml: '-52px', width: '100%' }}>
                    <KnowledgeGraph
                        nodeData={graph.node}
                        linkData={graph.link}
                        relations={graph.relations}
                    />
                </Box>
                {/* 信息面板 */}
                <Paper>信息内容</Paper>
            </Box>
        </Box>
    );
};

export default KnowledgeMapDetail;
