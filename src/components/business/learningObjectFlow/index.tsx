import React, { useState, useEffect, useCallback } from 'react';
// react-flow
import 'reactflow/dist/style.css';
import ReactFlow, {
    useNodesState,
    useEdgesState,
    addEdge,
    Background,
    Controls,
    Position
} from 'reactflow';
import CustomNode from './customNode';
import CoreNode from './coreNode';

// const initBgColor = '#1A192B';
const nodeTypes = {
    core: CoreNode,
    customNode: CustomNode
};
const connectionLineStyle = { stroke: '#000000' };
const snapGrid: [number, number] = [20, 20];

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

interface LearningObjectFlowProps {
    sx: React.CSSProperties;
}

const LearningObjectFlow = ({ coreLearningObject, newNodeLabel }) => {
    // 更新子目标节点内容
    const handleChangeNodeText = (data) => {
        let newNode = [...nodes];
        console.log('nodes', nodes);
        newNode.map((node, index) => {
            if (node.id === data.id) {
                newNode[index].data.label = data.text;
            }
        });
        setNodes(newNode);
    };
    const initNodes = [
        {
            id: '1',
            type: 'core',
            data: { label: coreLearningObject },
            position: { x: 0, y: 40 }
        },
        {
            id: '2',
            type: 'customNode',
            data: { label: '子目标1', handleChangeNodeText: handleChangeNodeText },
            position: { x: 250, y: 0 }
        },
        {
            id: '3',
            type: 'customNode',
            data: { label: '子目标2', handleChangeNodeText: handleChangeNodeText },
            position: { x: 250, y: 80 }
        },
        {
            id: '4',
            type: 'customNode',
            data: { label: '子目标3', handleChangeNodeText: handleChangeNodeText },
            position: { x: 250, y: 160 }
        }
    ];
    const initEdges = [
        {
            id: 'e1-2',
            source: '1',
            target: '2',
            animated: true
            // style: { stroke: '#000000' }
        },
        {
            id: 'e1-3',
            source: '1',
            target: '3',
            sourceHandle: 'a',
            animated: true
            // style: { stroke: '#000000' }
        }
    ];
    const [nodes, setNodes, onNodesChange] = useNodesState<any>(initNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);
    // const [bgColor, setBgColor] = useState(initBgColor);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
        []
    );

    useEffect(() => {
        if (newNodeLabel.length !== 0) {
            let newNodes = [...nodes];
            newNodes.push({
                id: newNodeLabel,
                type: 'customNode',
                data: { label: newNodeLabel, handleChangeNodeText: handleChangeNodeText },
                position: { x: 0, y: 0 }
            });
            console.log('new nodes =>', newNodes);
            setNodes(newNodes);
        }
    }, [newNodeLabel]);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            // style={{ background: bgColor }}
            nodeTypes={nodeTypes}
            // connectionLineStyle={connectionLineStyle}
            snapToGrid={true}
            snapGrid={snapGrid}
            defaultViewport={defaultViewport}
            fitView
            attributionPosition="bottom-right"
        >
            <Background />
            <Controls />
        </ReactFlow>
    );
};

export default LearningObjectFlow;
