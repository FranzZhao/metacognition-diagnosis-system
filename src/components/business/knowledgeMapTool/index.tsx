import React, { useState } from 'react';
// mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import HubIcon from '@mui/icons-material/Hub';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
// custom components
import { Modal } from '@/components/common';
import ToolCard from '@/components/common/toolCard';
import KnowledgeMapList from '@/pages/learningTools/knowledgeMap/knowledgeMapList';
import KnowledgeMapDetail from '@/pages/learningTools/knowledgeMap/knowledgeMapDetail';
import TagSelector from '@/components/common/tagSelector';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { newMap, getAction } from '@/store/slices';

interface KnowledgeMaoToolProps {
    /** 关闭工具卡片 */
    handleClose: () => void;
}

const KnowledgeMapTool: React.FC<KnowledgeMaoToolProps> = ({ handleClose }) => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const currentActor = useAppSelector((state) => state.actionLog.actor);
    // 知识地图详情：编辑知识地图 & 新建知识地图
    const [isKnowledgeMapDetail, setIsKnowledgeMapDetail] = useState(false);
    // 新建知识地图的信息
    const [newMapInfo, setNewMapInfo] = useState({
        mapTitle: '',
        mapIntro: '',
        mapTags: []
    });
    // 打开新建知识地图模态框
    const [openModal, setOpenModal] = useState(false);

    return (
        <Box sx={{ zIndex: 100 }}>
            <ToolCard
                title={
                    <Typography fontSize={'14px'} color={'white'}>
                        知识地图小工具
                    </Typography>
                }
                icon={
                    <Avatar
                        sx={{
                            bgcolor: theme.palette.success.light,
                            width: '20px',
                            height: '20px'
                        }}
                    >
                        <HubIcon sx={{ fontSize: '12px' }} />
                    </Avatar>
                }
                action={handleClose}
                content={
                    <Box>
                        {isKnowledgeMapDetail ? (
                            <KnowledgeMapDetail
                                mapInfo={newMapInfo}
                                handleOpenList={() => setIsKnowledgeMapDetail(false)}
                                canvasHeight="370px"
                            />
                        ) : (
                            <Box>
                                <Button
                                    variant="contained"
                                    sx={{ width: '100%', m: '10px 0' }}
                                    disableElevation
                                    startIcon={<AddBoxIcon />}
                                    onClick={() => setOpenModal(true)}
                                >
                                    新建知识地图
                                </Button>
                                <KnowledgeMapList
                                    handleOpenDetail={() => setIsKnowledgeMapDetail(true)}
                                />
                            </Box>
                        )}
                    </Box>
                }
                contentSX={{ height: '380px' }}
                cardWidth="600px"
            />
            {/* 新建标签模态框 */}
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                title={'新建知识笔记'}
                maxWidth="sm"
                content={
                    <Box>
                        <TextField
                            label="知识地图标题"
                            variant="standard"
                            sx={{ width: '100%', m: '5px 0' }}
                            value={newMapInfo.mapTitle}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setNewMapInfo({
                                    ...newMapInfo,
                                    mapTitle: event.target.value
                                })
                            }
                        />
                        <TextField
                            label="知识节点简介"
                            variant="standard"
                            sx={{ width: '100%', m: '5px 0' }}
                            value={newMapInfo.mapIntro}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setNewMapInfo({
                                    ...newMapInfo,
                                    mapIntro: event.target.value
                                })
                            }
                        />
                        <Typography variant="caption">知识节点标签</Typography>
                        <TagSelector
                            value={newMapInfo.mapTags}
                            onChange={(event, newValue) => {
                                setNewMapInfo({
                                    ...newMapInfo,
                                    mapTags: newValue
                                });
                            }}
                            tagList={['元认知', '元认知意识', '认知调控', '自指', '自我概念']}
                            sx={{ width: '100%' }}
                            placeholder="请选择标签"
                        />
                    </Box>
                }
                actions={
                    <Box>
                        <Button
                            color="secondary"
                            size="small"
                            sx={{ mr: 1 }}
                            onClick={() => setOpenModal(false)}
                        >
                            取消
                        </Button>
                        <Button
                            variant="contained"
                            disableElevation
                            size="small"
                            onClick={() => {
                                dispatch(
                                    getAction({
                                        actor: currentActor,
                                        verb: '点击按钮',
                                        object: '按钮：新建知识地图',
                                        result: '创建新的知识地图:' + newMapInfo.mapTitle,
                                        time: '',
                                        context: {
                                            cognitiveContext: '认知表征',
                                            otherContext: null,
                                            taskContext: null
                                        }
                                    })
                                );
                                dispatch(newMap(newMapInfo)).then(() => {
                                    setOpenModal(false);
                                });
                                setNewMapInfo({
                                    mapTitle: '',
                                    mapIntro: '',
                                    mapTags: []
                                });
                                // setIsKnowledgeMapDetail(!isKnowledgeMapDetail);
                            }}
                        >
                            确定
                        </Button>
                    </Box>
                }
            />
        </Box>
    );
};

export default KnowledgeMapTool;
