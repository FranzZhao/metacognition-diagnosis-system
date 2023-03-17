import React, { useState } from 'react';
// mui5
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import Fade from '@mui/material/Fade';
// custom components
import TagSelector from '@/components/common/tagSelector';

const MapInfo = ({ open, mapInfo, handleClosePanel, handleUpdateMapInfo }) => {
    // 知识地图标题
    const [mapTitle, setMapTitle] = useState(mapInfo.mapTitle);
    // 知识地图简介
    const [mapIntro, setMapIntro] = useState(mapInfo.mapIntro);
    // 标签字段
    const [mapTags, setMapTags] = useState(mapInfo.mapTags);

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
                    知识地图 | 信息编辑
                </Typography>
                <IconButton aria-label="delete" size="small" onClick={handleClosePanel}>
                    <HighlightOffIcon fontSize="inherit" />
                </IconButton>
            </Box>
            <Box sx={{ m: '5px 0 20px' }}>
                <TextField
                    label="知识地图标题"
                    variant="standard"
                    sx={{ width: '100%', m: '5px 0' }}
                    value={mapTitle}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setMapTitle(event.target.value)
                    }
                />
                <TextField
                    label="知识地图简介"
                    variant="standard"
                    sx={{ width: '100%', m: '5px 0' }}
                    value={mapIntro}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setMapIntro(event.target.value)
                    }
                />
                <Typography variant="caption">知识地图标签</Typography>
                <TagSelector
                    value={mapTags}
                    onChange={(event, newValue) => setMapTags(newValue)}
                    tagList={['元认知', '元认知意识', '认知调控', '自指', '自我概念']}
                    sx={{ width: '100%' }}
                    placeholder="请选择标签"
                />
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Button
                    startIcon={<SaveIcon />}
                    variant="contained"
                    sx={{ width: '49%' }}
                    disableElevation
                    onClick={() => {
                        let newMapInfo = {
                            mapTitle: mapTitle,
                            mapIntro: mapIntro,
                            mapTags: mapTags
                        };
                        handleUpdateMapInfo(newMapInfo);
                        handleClosePanel();
                    }}
                >
                    保存信息
                </Button>
                <Button
                    startIcon={<DeleteIcon />}
                    variant="text"
                    color="secondary"
                    sx={{ width: '49%', ml: 'auto' }}
                >
                    删除地图
                </Button>
            </Box>
        </Box>
        // </Fade>
    );
};

export default MapInfo;
