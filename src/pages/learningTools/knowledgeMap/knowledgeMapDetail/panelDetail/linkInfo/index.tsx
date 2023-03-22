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
// custom components
import TagSelector from '@/components/common/tagSelector';
// mock data
import { mockNodeData } from '@/utils/mock';

const LinkInfo = ({
    open,
    nodeList,
    handleClosePanel,
    linkInfo,
    handleUpdateData,
    handleDeleteLink
}) => {
    // 关联名称
    const [linkName, setLinkName] = useState('');
    // 关联简介
    const [linkIntro, setLinkIntro] = useState('');
    // 标签字段
    const [linkTag, setLinkTag] = useState([]);
    // 关联：起始节点
    const [startNode, setStartNode] = useState('');
    // 关联：目标节点
    const [endNode, setEndNode] = useState('');

    useEffect(() => {
        setLinkName(linkInfo.data.value);
        setLinkIntro(linkInfo.data.extraInfo.intro);
        setLinkTag(linkInfo.data.extraInfo.tags);
        setStartNode(linkInfo.data.source);
        setEndNode(linkInfo.data.target);
        let nodeList: any[] = [];
        mockNodeData.map((node) => {
            nodeList.push({
                id: node.id,
                name: node.name
            });
        });
    }, [linkInfo]);

    const handleChangeStartNode = (event: SelectChangeEvent) => {
        setStartNode(event.target.value);
    };

    const handleChangeEndNode = (event: SelectChangeEvent) => {
        setEndNode(event.target.value);
    };

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
                    知识关联 | 信息编辑
                </Typography>
                <IconButton aria-label="delete" size="small" onClick={handleClosePanel}>
                    <HighlightOffIcon fontSize="inherit" />
                </IconButton>
            </Box>
            <Box sx={{ m: '5px 0 20px' }}>
                <TextField
                    label="知识关联名称"
                    variant="standard"
                    sx={{ width: '100%', m: '5px 0' }}
                    value={linkName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setLinkName(event.target.value)
                    }
                />
                <TextField
                    label="知识关联简介"
                    variant="standard"
                    sx={{ width: '100%', m: '5px 0' }}
                    value={linkIntro}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setLinkIntro(event.target.value)
                    }
                />
                <Typography variant="caption">知识关联简介</Typography>
                <TagSelector
                    value={linkTag}
                    onChange={(event, newValue) => setLinkTag(newValue)}
                    tagList={['元认知', '元认知意识', '认知调控', '自指', '自我概念']}
                    sx={{ width: '100%' }}
                    placeholder="请选择标签"
                />
                <FormControl variant="standard" sx={{ mt: '10px', width: '100%' }}>
                    <InputLabel>起始节点</InputLabel>
                    <Select value={startNode} onChange={handleChangeStartNode}>
                        {nodeList.map((node) => {
                            return (
                                <MenuItem key={node.id} value={node.id}>
                                    {node.name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ mt: '10px', width: '100%' }}>
                    <InputLabel>目标节点</InputLabel>
                    <Select value={endNode} onChange={handleChangeEndNode}>
                        {nodeList.map((node) => {
                            return (
                                <MenuItem key={node.id} value={node.id}>
                                    {node.name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Button
                    startIcon={<SaveIcon />}
                    variant="contained"
                    sx={{ width: '49%' }}
                    disableElevation
                    onClick={() => {
                        let newLinkInfo = {
                            id: linkInfo.data.extraInfo.id,
                            linkName: linkName,
                            linkIntro: linkIntro,
                            linkTag: linkTag,
                            startNode: startNode,
                            endNode: endNode
                        };
                        // console.log('link info update =>', newLinkInfo);
                        handleUpdateData('link', newLinkInfo);
                    }}
                >
                    保存关联
                </Button>
                <Button
                    startIcon={<DeleteIcon />}
                    variant="text"
                    color="secondary"
                    sx={{ width: '49%', ml: 'auto' }}
                    onClick={() => {
                        handleDeleteLink(linkInfo);
                    }}
                >
                    删除关联
                </Button>
            </Box>
        </Box>
        // </Fade>
    );
};

export default LinkInfo;
