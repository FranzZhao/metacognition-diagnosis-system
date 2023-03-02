// type
import { TagListProps, TagAssociatedItemsProps } from '../types/knowledgeTag';
// icon
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Chip from '@mui/material/Chip';

// mock: 知识标签列表树
export const mockTagLists: TagListProps[] = [
    {
        id: '1',
        parentID: null,
        labelText: '自指与元认知',
        labelIcon: BookmarkIcon,
        labelInfo: '42'
    },
    {
        id: '2',
        parentID: null,
        labelText: '复杂系统',
        labelIcon: BookmarkIcon,
        labelInfo: '32'
    },
    {
        id: '3',
        parentID: null,
        labelText: '类比与范畴',
        labelIcon: BookmarkIcon,
        labelInfo: '22'
    },
    {
        id: '4',
        parentID: null,
        labelText: '认知动力主义',
        labelIcon: BookmarkIcon,
        labelInfo: '12'
    },
    {
        id: '5',
        parentID: '1',
        labelText: '元认知',
        labelIcon: BookmarkIcon,
        labelInfo: '2'
    },
    {
        id: '6',
        parentID: '1',
        labelText: '自指',
        labelIcon: BookmarkIcon,
        labelInfo: '5'
    },
    {
        id: '7',
        parentID: '2',
        labelText: '自组织',
        labelIcon: BookmarkIcon,
        labelInfo: '17'
    },
    {
        id: '8',
        parentID: '2',
        labelText: '涌现',
        labelIcon: BookmarkIcon,
        labelInfo: '3'
    },
    {
        id: '9',
        parentID: '5',
        labelText: '元认知意识',
        labelIcon: BookmarkIcon,
        labelInfo: '1'
    },
    {
        id: '10',
        parentID: '9',
        labelText: '学习赤字',
        labelIcon: BookmarkIcon,
        labelInfo: '0'
    },
    {
        id: '11',
        parentID: '9',
        labelText: '调节赤字',
        labelIcon: BookmarkIcon,
        labelInfo: '2'
    }
];

// mock: 知识标签内容列表
export const mockTagContentLists: TagAssociatedItemsProps[] = [
    {
        id: '1',
        title: '元认知知识',
        type: <Chip color="warning" size="small" label="知识节点" />,
        time: '2021/12/30 18:23:42'
    },
    {
        id: '2',
        title: '元认知调节',
        type: <Chip color="warning" size="small" label="知识节点" />,
        time: '2021/12/30 18:23:42'
    },
    {
        id: '3',
        title: '自指',
        type: <Chip color="info" size="small" label="知识关联" />,
        time: '2021/12/30 18:23:42'
    },
    {
        id: '4',
        title: '认知知识的内涵',
        type: <Chip color="success" size="small" label="知识笔记" />,
        time: '2021/12/30 18:23:42'
    },
    {
        id: '5',
        title: '认知知识的发展',
        type: <Chip color="error" size="small" label="文本信息" />,
        time: '2021/12/30 18:23:42'
    },
    {
        id: '6',
        title: '元认知知识',
        type: <Chip color="warning" size="small" label="知识节点" />,
        time: '2021/12/30 18:23:42'
    },
    {
        id: '7',
        title: '元认知调节',
        type: <Chip color="warning" size="small" label="知识节点" />,
        time: '2021/12/30 18:23:42'
    },
    {
        id: '8',
        title: '自指',
        type: <Chip color="info" size="small" label="知识关联" />,
        time: '2021/12/30 18:23:42'
    },
    {
        id: '9',
        title: '认知知识的内涵',
        type: <Chip color="success" size="small" label="知识笔记" />,
        time: '2021/12/30 18:23:42'
    },
    {
        id: '10',
        title: '认知知识的发展',
        type: <Chip color="error" size="small" label="文本信息" />,
        time: '2021/12/30 18:23:42'
    },
    {
        id: '11',
        title: '元认知知识',
        type: <Chip color="warning" size="small" label="知识节点" />,
        time: '2021/12/30 18:23:42'
    },
    {
        id: '12',
        title: '元认知调节',
        type: <Chip color="warning" size="small" label="知识节点" />,
        time: '2021/12/30 18:23:42'
    },
    {
        id: '13',
        title: '自指',
        type: <Chip color="info" size="small" label="知识关联" />,
        time: '2021/12/30 18:23:42'
    },
    {
        id: '14',
        title: '认知知识的内涵',
        type: <Chip color="success" size="small" label="知识笔记" />,
        time: '2021/12/30 18:23:42'
    },
    {
        id: '15',
        title: '认知知识的发展',
        type: <Chip color="error" size="small" label="文本信息" />,
        time: '2021/12/30 18:23:42'
    }
];
