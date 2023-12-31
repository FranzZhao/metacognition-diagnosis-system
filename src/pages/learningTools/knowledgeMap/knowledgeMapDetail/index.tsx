import React, { useEffect, useState } from 'react';
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
import SaveIcon from '@mui/icons-material/Save';
// custom components
import { KnowledgeMap } from '@/components/business';
// mock
import { mockLinkData, mockNodeData, mockRelations } from '@/utils/mock';
// panel detail
import AddNewNode from './panelDetail/addNewNode';
import MapInfo from './panelDetail/mapInfo';
import AddNewLink from './panelDetail/addNewLink';
import NodeInfo from './panelDetail/nodeInfo';
import LinkInfo from './panelDetail/linkInfo';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { saveMapById } from '@/store/slices';
// agent help
import HelpIcon from '@mui/icons-material/Help';
import { metacognitivePrompt, getAction } from '@/store/slices';

interface MapProps {
    mapInfo: any;
    node: any[];
    link: any[];
    relations: any[];
}

interface KnowledgeMapDetailProp {
    mapInfo: any;
    handleOpenList: () => void;
    canvasHeight?: string;
}

const KnowledgeMapDetail: React.FC<KnowledgeMapDetailProp> = ({
    mapInfo,
    handleOpenList,
    canvasHeight = 'calc(100vh - 150px)'
}) => {
    const dispatch = useAppDispatch();
    const currentActor = useAppSelector((state) => state.actionLog.actor);
    const currentMsgID = useAppSelector((state) => state.agent.currentId);
    const currentMapInfo = useAppSelector((state) => state.map.currentSelectMap);
    // map state
    const [map, setMap] = useState<MapProps>({
        mapInfo: mapInfo,
        node: mockNodeData,
        link: mockLinkData,
        relations: mockRelations
    });
    // 呈现在页面上的知识地图标题
    const [mapTitle, setMapTitle] = useState('');
    // 点击的节点信息
    const [nodeInfo, setNodeInfo] = useState({});
    // 点击的节点信息
    const [linkInfo, setLinkInfo] = useState({});
    // 页面试图切换
    const [open, setOpen] = useState<
        'mapInfo' | 'addNewNode' | 'addNewLink' | 'nodeInfo' | 'linkInfo' | null
    >(null);

    useEffect(() => {
        if (currentMapInfo) {
            setMap({
                mapInfo: {
                    mapTitle: currentMapInfo.title,
                    mapIntro: currentMapInfo.intro,
                    mapTags: currentMapInfo.tags
                },
                node: currentMapInfo.nodes,
                link: currentMapInfo.links,
                relations: currentMapInfo.relations
            });
            setMapTitle(currentMapInfo.title);
        }
    }, [currentMapInfo]);

    // handle map elements click
    const echartsClick = {
        click: (e) => {
            if (e.dataType === 'node') {
                // console.log(e);
                setOpen('nodeInfo');
                setNodeInfo(e);
                dispatch(
                    getAction({
                        actor: currentActor,
                        verb: '点击节点',
                        object: '点击知识节点: ' + e.data.name,
                        result: '查看知识节点信息',
                        time: '',
                        context: {
                            cognitiveContext: '认知表征',
                            otherContext: '知识地图：' + mapTitle,
                            taskContext: null
                        }
                    })
                );
            }
            if (e.dataType === 'edge') {
                // console.log(e);
                setOpen('linkInfo');
                setLinkInfo(e);
                dispatch(
                    getAction({
                        actor: currentActor,
                        verb: '点击关联',
                        object: '点击知识关联: ' + e.data.value,
                        result: '查看知识关联信息',
                        time: '',
                        context: {
                            cognitiveContext: '认知表征',
                            otherContext: '知识地图：' + mapTitle,
                            taskContext: null
                        }
                    })
                );
            }
        }
    };

    // 修改知识地图基本信息
    const handleUpdateMapInfo = (newData: any) => {
        setMap({
            ...map,
            mapInfo: newData
        });
        setMapTitle(newData.mapTitle);
        dispatch(
            getAction({
                actor: currentActor,
                verb: '编辑信息',
                object: '知识地图信息',
                result: '编辑知识地图基本信息',
                time: '',
                context: {
                    cognitiveContext: '认知表征',
                    otherContext: '知识地图：' + newData.mapTitle,
                    taskContext: null
                }
            })
        );
    };

    // 修改已有节点与关联的信息
    const handleChangeMap = (type: 'node' | 'link', newData: any) => {
        let newNodeList = [...map.node];
        let newLinkList = [...map.link];
        let newRelations: any[] = [];
        // 更新节点信息
        if (type === 'node') {
            newNodeList.map((node, idx) => {
                if (node.id === newData.id) {
                    newNodeList[idx] = {
                        id: newData.id,
                        name: newData.nodeName,
                        draggable: true, // 节点是否可拖拽，只在使用力引导布局的时候有用。
                        symbolSize: [newData.nodeSize, newData.nodeSize],
                        itemStyle: {
                            color: newData.nodeColor
                        },
                        extraInfo: {
                            intro: newData.nodeIntro,
                            tags: newData.nodeTag
                        }
                    };
                    dispatch(
                        getAction({
                            actor: currentActor,
                            verb: '编辑信息',
                            object: '知识节点信息',
                            result: '修改知识节点信息',
                            time: '',
                            context: {
                                cognitiveContext: '认知表征',
                                otherContext: '知识节点：' + newData.nodeName,
                                taskContext: null
                            }
                        })
                    );
                }
            });
        }
        // 更新关联信息
        if (type === 'link') {
            newLinkList.map((link, idx) => {
                if (link.extraInfo.id === newData.id) {
                    newLinkList[idx] = {
                        target: newData.endNode,
                        source: newData.startNode,
                        value: newData.linkName,
                        extraInfo: {
                            id: newData.id,
                            intro: newData.linkIntro,
                            tags: newData.linkTag
                        }
                    };
                    dispatch(
                        getAction({
                            actor: currentActor,
                            verb: '编辑信息',
                            object: '知识关联信息',
                            result: '修改知识关联信息',
                            time: '',
                            context: {
                                cognitiveContext: '认知表征',
                                otherContext: '知识关联：' + newData.linkName,
                                taskContext: null
                            }
                        })
                    );
                }
            });
        }
        // 更新relations
        newLinkList.map((link) => newRelations.push(link.value));
        // 更新map全部信息
        setMap({
            ...map,
            node: newNodeList,
            link: newLinkList,
            relations: newRelations
        });
    };

    // 删除知识节点
    const handleDeleteNode = (node) => {
        let nodeId = node.data.id;
        // 删掉知识节点
        let newNodes = [...map.node];
        map.node.map((data, index) => {
            if (data.id === nodeId) {
                newNodes.splice(index, 1);
            }
        });
        // 删掉对应的知识关联
        let newLinks = [...map.link];
        let deleteLinkIndex: number[] = [];
        newLinks.map((link, index) => {
            if (link.target === nodeId || link.source === nodeId) {
                deleteLinkIndex.push(index);
            }
        });
        newLinks = newLinks.filter((item, index) => !deleteLinkIndex.includes(index));
        // console.log('delete link', newLinks);
        setMap({
            ...map,
            node: newNodes,
            link: newLinks
        });
        dispatch(
            getAction({
                actor: currentActor,
                verb: '删除节点',
                object: '知识节点：' + node.data.name,
                result: '删除知识节点及其关联',
                time: '',
                context: {
                    cognitiveContext: '认知表征',
                    otherContext: null,
                    taskContext: null
                }
            })
        );
    };

    // 删除知识关联
    const handleDeleteLink = (link) => {
        let linkId = link.data.extraInfo.id;
        let newLinks = [...map.link];
        map.link.map((data, index) => {
            if (data.extraInfo.id === linkId) {
                newLinks.splice(index, 1);
            }
        });
        setMap({
            ...map,
            link: newLinks
        });
        dispatch(
            getAction({
                actor: currentActor,
                verb: '删除关联',
                object: '知识关联：' + link.data.value,
                result: '删除知识关联',
                time: '',
                context: {
                    cognitiveContext: '认知表征',
                    otherContext: null,
                    taskContext: null
                }
            })
        );
    };

    // 新增知识节点
    const handleAddNewNode = (newData) => {
        let newNodeList = [...map.node];
        newNodeList.push({
            id: newData.id,
            name: newData.nodeName,
            draggable: true, // 节点是否可拖拽，只在使用力引导布局的时候有用。
            symbolSize: [newData.nodeSize, newData.nodeSize],
            itemStyle: {
                color: newData.nodeColor
            },
            extraInfo: {
                intro: newData.nodeIntro,
                tags: newData.nodeTag
            }
        });
        dispatch(
            getAction({
                actor: currentActor,
                verb: '新增节点',
                object: '知识节点：' + newData.nodeName,
                result: '新增知识节点',
                time: '',
                context: {
                    cognitiveContext: '认知表征',
                    otherContext: null,
                    taskContext: null
                }
            })
        );
        setMap({
            ...map,
            node: newNodeList
        });
    };

    // 新增知识关联
    const handleAddNewLink = (newData) => {
        let newLinkList = [...map.link];
        let newRelations = [...map.relations];
        newLinkList.push({
            target: newData.endNode,
            source: newData.startNode,
            value: newData.linkName,
            extraInfo: {
                id: newData.id,
                intro: newData.linkIntro,
                tags: newData.linkTag
            }
        });
        // newLinkList.map((link) => newRelations.push(link.value));
        newLinkList.map((link) => {
            if (!newRelations.includes(link.value)) {
                newRelations.push(link.value);
            }
        });
        dispatch(
            getAction({
                actor: currentActor,
                verb: '新增关联',
                object: '知识关联：' + newData.linkName,
                result: '新增知识关联',
                time: '',
                context: {
                    cognitiveContext: '认知表征',
                    otherContext: null,
                    taskContext: null
                }
            })
        );
        setMap({
            ...map,
            link: newLinkList,
            relations: newRelations
        });
    };

    // 保存地图信息到redux
    const handleSaveMapInfo = () => {
        dispatch(
            saveMapById({
                id: currentMapInfo?.id,
                title: map.mapInfo.mapTitle,
                intro: map.mapInfo.mapIntro,
                tags: map.mapInfo.mapTags,
                nodes: map.node,
                links: map.link,
                relations: map.relations
            })
        );
        dispatch(
            getAction({
                actor: currentActor,
                verb: '点击按钮',
                object: '按钮：保存 知识地图id' + currentMapInfo?.id,
                result: '更新知识地图信息',
                time: '',
                context: {
                    cognitiveContext: '认知表征',
                    otherContext: null,
                    taskContext: null
                }
            })
        );
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
                    知识地图：{mapTitle}
                </Typography>
                {/* 知识地图编辑工具 */}
                <Box
                    sx={{ height: '160px', zIndex: 1, position: 'absolute', bottom: 90, left: 20 }}
                >
                    <Paper variant="outlined" sx={{ p: '5px', borderRadius: '8px' }}>
                        <Tooltip title="认知表征-认知资料整理" arrow placement="right">
                            <IconButton
                                size="small"
                                sx={{ mb: '5px' }}
                                onClick={() => {
                                    dispatch(
                                        metacognitivePrompt({
                                            promptType: '认知表征-认知资料整理',
                                            currentMsgID: currentMsgID
                                        })
                                    );
                                    dispatch(
                                        getAction({
                                            actor: currentActor,
                                            verb: '弹出提示框',
                                            object: '元认识提示 id: ' + currentMsgID,
                                            result: '弹出元认知提示：认知表征-认知资料整理',
                                            time: '',
                                            context: {
                                                cognitiveContext: '认知表征',
                                                otherContext: null,
                                                taskContext: '认知表征-认知资料整理'
                                            }
                                        })
                                    );
                                }}
                            >
                                <HelpIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        <Divider />
                        <Tooltip title="修改基本信息" arrow placement="right">
                            <IconButton
                                aria-label="delete"
                                size="small"
                                sx={{ mb: '5px' }}
                                onClick={() => setOpen('mapInfo')}
                            >
                                <DescriptionIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        <Divider />
                        <Tooltip title="新增知识节点" arrow placement="right">
                            <IconButton
                                aria-label="delete"
                                size="small"
                                sx={{ m: '5px 0' }}
                                onClick={() => setOpen('addNewNode')}
                            >
                                <AddCircleIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        <Divider />
                        <Tooltip title="新增知识关联" arrow placement="right">
                            <IconButton
                                aria-label="delete"
                                size="small"
                                sx={{ mt: '5px' }}
                                onClick={() => setOpen('addNewLink')}
                            >
                                <MediationIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        <Divider />
                        <Tooltip title="保存知识地图" arrow placement="right">
                            <IconButton
                                aria-label="delete"
                                size="small"
                                sx={{ mt: '5px' }}
                                onClick={handleSaveMapInfo}
                            >
                                <SaveIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        <Divider />
                        <Tooltip title="返回知识列表" arrow placement="right">
                            <IconButton
                                aria-label="delete"
                                size="small"
                                sx={{ mt: '5px' }}
                                onClick={() => {
                                    handleOpenList();
                                    dispatch(
                                        getAction({
                                            actor: currentActor,
                                            verb: '点击按钮',
                                            object: '退出知识地图 id:' + currentMapInfo?.id,
                                            result: '完成知识地图的查看或编辑并退出',
                                            time: '',
                                            context: {
                                                cognitiveContext: '认知表征',
                                                otherContext: null,
                                                taskContext: null
                                            }
                                        })
                                    );
                                }}
                            >
                                <KeyboardReturnIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </Paper>
                </Box>
                {/* 知识地图主体 */}
                <KnowledgeMap
                    nodeData={map.node}
                    linkData={map.link}
                    relations={map.relations}
                    echartsClick={echartsClick}
                    canvasHeight={canvasHeight}
                />
                {/* 信息面板 */}
                <Box
                    sx={{
                        '&>div': {
                            height: canvasHeight
                            // overflow: 'overlay'
                        }
                    }}
                >
                    {open === 'mapInfo' && (
                        <MapInfo
                            mapInfo={map.mapInfo}
                            open={open === 'mapInfo'}
                            handleClosePanel={() => setOpen(null)}
                            handleUpdateMapInfo={handleUpdateMapInfo}
                        />
                    )}
                    {open === 'addNewNode' && (
                        <AddNewNode
                            open={open === 'addNewNode'}
                            handleClosePanel={() => setOpen(null)}
                            handleAddNewNode={handleAddNewNode}
                        />
                    )}
                    {open === 'addNewLink' && (
                        <AddNewLink
                            open={open === 'addNewLink'}
                            nodeList={map.node}
                            handleClosePanel={() => setOpen(null)}
                            handleAddNewLink={handleAddNewLink}
                        />
                    )}
                    {open === 'nodeInfo' && (
                        <NodeInfo
                            nodeInfo={nodeInfo}
                            open={open === 'nodeInfo'}
                            handleClosePanel={() => setOpen(null)}
                            handleUpdateData={handleChangeMap}
                            handleDeleteNode={handleDeleteNode}
                        />
                    )}
                    {open === 'linkInfo' && (
                        <LinkInfo
                            linkInfo={linkInfo}
                            open={open === 'linkInfo'}
                            nodeList={map.node}
                            handleClosePanel={() => setOpen(null)}
                            handleUpdateData={handleChangeMap}
                            handleDeleteLink={handleDeleteLink}
                        />
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default KnowledgeMapDetail;
