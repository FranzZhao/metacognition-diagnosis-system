import React, { useEffect, useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import Fade from '@mui/material/Fade';
// react-color
import { CirclePicker } from 'react-color';
// custom components
import TagSelector from '@/components/common/tagSelector';

const materialColor = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#ffeb3b',
    '#ffc107',
    '#ff9800',
    '#f57c00',
    '#ff5722',
    '#795548',
    '#9e9e9e',
    '#607d8b'
];

const NodeInfo = ({ open, handleClosePanel, nodeInfo, handleUpdateData, handleDeleteNode }) => {
    // 节点名称
    const [nodeName, setNodeName] = useState('');
    // 节点简介
    const [nodeIntro, setNodeIntro] = useState('');
    // 标签字段
    const [nodeTag, setNodeTag] = useState([]);
    // 节点颜色
    const [nodeColor, setNodeColor] = useState('');
    // 节点大小
    const [nodeSize, setNodeSize] = React.useState('');

    const handleChangeNodeSize = (event: SelectChangeEvent) => {
        setNodeSize(event.target.value);
    };

    const handleChangeNodeColor = (newNodeColor, event) => {
        setNodeColor(newNodeColor.hex);
    };

    useEffect(() => {
        setNodeName(nodeInfo.data.name);
        setNodeIntro(nodeInfo.data.extraInfo.intro);
        setNodeTag(nodeInfo.data.extraInfo.tags);
        setNodeColor(nodeInfo.color);
        setNodeSize(nodeInfo.data.symbolSize[0]);
    }, [nodeInfo]);

    return (
        // <Fade in={open}>
        <Box
            sx={{
                position: 'absolute',
                right: 0,
                width: '300px',
                background: '#d5e7eff0',
                height: 'calc(100vh - 150px)',
                p: 2,
                overflowY: 'overlay',
                overflowX: 'hidden',
                '&::-webkit-scrollbar': {
                    width: 5
                },
                '&::-webkit-scrollbar-thumb': {
                    background: '#a4b7c670',
                    borderRadius: '4px'
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Typography fontWeight="bold" fontSize="1.1rem">
                    知识节点 | 信息编辑
                </Typography>
                <IconButton aria-label="delete" size="small" onClick={handleClosePanel}>
                    <HighlightOffIcon fontSize="inherit" />
                </IconButton>
            </Box>
            <Box sx={{ m: '5px 0 20px' }}>
                <TextField
                    label="知识节点名称"
                    variant="standard"
                    sx={{ width: '100%', m: '5px 0' }}
                    value={nodeName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setNodeName(event.target.value)
                    }
                />
                <TextField
                    label="知识节点简介"
                    variant="standard"
                    sx={{ width: '100%', m: '5px 0' }}
                    value={nodeIntro}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setNodeIntro(event.target.value)
                    }
                />
                <Typography variant="caption">知识节点标签</Typography>
                <TagSelector
                    value={nodeTag}
                    onChange={(event, newValue) => setNodeTag(newValue)}
                    tagList={['元认知', '元认知意识', '认知调控', '自指', '自我概念']}
                    sx={{ width: '100%' }}
                    placeholder="请选择标签"
                />
                <FormControl variant="standard" sx={{ mt: '10px', width: '100%' }}>
                    <InputLabel>知识节点大小</InputLabel>
                    <Select value={nodeSize} onChange={handleChangeNodeSize}>
                        <MenuItem value={55}>小</MenuItem>
                        <MenuItem value={65}>较小</MenuItem>
                        <MenuItem value={76}>适中</MenuItem>
                        <MenuItem value={88}>较大</MenuItem>
                        <MenuItem value={100}>大</MenuItem>
                    </Select>
                </FormControl>
                <Box sx={{ mt: '10px' }}>
                    <div style={{ marginBottom: '10px', fontSize: '0.8rem' }}>知识节点标签</div>
                    <CirclePicker
                        color={nodeColor}
                        onChangeComplete={handleChangeNodeColor}
                        colors={materialColor}
                        circleSize={20}
                        width={'300px'}
                    />
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Button
                    startIcon={<SaveIcon />}
                    variant="contained"
                    sx={{ width: '49%' }}
                    disableElevation
                    onClick={() => {
                        let newNodeInfo = {
                            id: nodeInfo.data.id,
                            nodeName: nodeName,
                            nodeIntro: nodeIntro,
                            nodeTag: nodeTag,
                            nodeSize: nodeSize,
                            nodeColor: nodeColor
                        };
                        // console.log('node info update =>', newNodeInfo);
                        handleUpdateData('node', newNodeInfo);
                    }}
                >
                    保存信息
                </Button>
                <Button
                    startIcon={<DeleteIcon />}
                    variant="text"
                    color="secondary"
                    sx={{ width: '49%', ml: 'auto' }}
                    onClick={() => {
                        handleDeleteNode(nodeInfo);
                    }}
                >
                    删除节点
                </Button>
            </Box>
        </Box>
        // </Fade>
    );
};

export default NodeInfo;
