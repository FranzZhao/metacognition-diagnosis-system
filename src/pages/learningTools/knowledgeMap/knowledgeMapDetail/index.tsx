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
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
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

    const [open, setOpen] = useState(false);

    const [view, setView] = React.useState('list');

    const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
        setView(nextView);
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', width: '100%', position: 'relative' }}>
                {/* 知识地图标题 */}
                <Typography
                    position="absolute"
                    top="20px"
                    left="20px"
                    zIndex="1"
                    fontSize="1.1rem"
                    fontWeight="bold"
                >
                    元认知知识地图
                </Typography>
                {/* 知识地图编辑工具 */}
                <Box
                    sx={{ height: '160px', zIndex: 1, position: 'absolute', bottom: 20, left: 20 }}
                >
                    <Paper variant="outlined" sx={{ p: '5px', borderRadius: '8px' }}>
                        <Tooltip title="修改基本信息" arrow placement="right">
                            <IconButton
                                aria-label="delete"
                                size="small"
                                sx={{ mb: '5px' }}
                                onClick={() => setOpen(!open)}
                            >
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
                <KnowledgeGraph
                    nodeData={graph.node}
                    linkData={graph.link}
                    relations={graph.relations}
                />
                {/* 信息面板 */}
                <Fade in={open}>
                    <Box
                        sx={{
                            position: 'absolute',
                            right: 0,
                            width: '300px',
                            background: '#c2d7e0d9',
                            height: 'calc(100vh - 150px)'
                        }}
                    >
                        信息内容
                    </Box>
                </Fade>
            </Box>
        </Box>
    );
};

export default KnowledgeMapDetail;
