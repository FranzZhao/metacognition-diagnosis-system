export let mockRelations = ['关系1', '关系2', '关系3'];

export let mockNodeData = [
    {
        id: 'node1',
        name: '知识点1',
        draggable: true, // 节点是否可拖拽，只在使用力引导布局的时候有用。
        symbolSize: [100, 100],
        itemStyle: {
            color: '#9c27b0'
        },
        extraInfo: {
            intro: '知识节点1的简介',
            tags: ['元认知', '自指']
        }
    },
    {
        id: 'node2',
        name: '导数的定义',
        draggable: true,
        symbolSize: [88, 88],
        itemStyle: {
            color: '#009688'
        },
        extraInfo: {
            intro: '导数的定义的简介',
            tags: ['元认知', '自指']
        }
    },
    {
        id: 'node3',
        name: '定义',
        draggable: true,
        symbolSize: [76, 76],
        itemStyle: {
            color: '#009688'
        },
        extraInfo: {
            intro: '知识节点3的简介',
            tags: ['元认知', '自指']
        }
    }
];

export let mockLinkData = [
    {
        target: 'node1',
        source: 'node2',
        value: '关系2',
        extraInfo: {
            id: 'link1',
            intro: '关系2简介',
            tags: ['自我概念']
        }
    },
    {
        target: 'node2',
        source: 'node3',
        value: '关系1',
        extraInfo: {
            id: 'link2',
            intro: '关系1简介',
            tags: ['自我概念']
        }
    },
    {
        target: 'node3',
        source: 'node1',
        value: '关系3',
        extraInfo: {
            id: 'link3',
            intro: '关系3简介',
            tags: ['自我概念']
        }
    }
];

export const mockKnowledgeMapList = [
    {
        id: 1,
        title: '元认知知识地图',
        intro: '',
        tags: ['元认知', '自指'],
        time: '2021/12/30 18:23:42',
        nodes: mockNodeData,
        links: mockLinkData,
        relations: mockRelations
    },
    {
        id: 2,
        title: '复杂系统科学知识地图',
        intro: '',
        tags: ['系统科学', '自组织'],
        time: '2021/12/30 18:23:42',
        nodes: [],
        links: [],
        relations: []
    },
    {
        id: 3,
        title: '语言学知识地图',
        intro: '',
        tags: ['认知语言学', '认知语用学'],
        time: '2021/12/30 18:23:42',
        nodes: [],
        links: [],
        relations: []
    }
];
