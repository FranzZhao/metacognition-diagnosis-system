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
        labelInfo: '42',
        content: '自指与元认知的内容'
    },
    {
        id: '2',
        parentID: null,
        labelText: '复杂系统',
        labelIcon: BookmarkIcon,
        labelInfo: '32',
        content: '复杂系统的内容'
    },
    {
        id: '3',
        parentID: null,
        labelText: '类比与范畴',
        labelIcon: BookmarkIcon,
        labelInfo: '22',
        content: '类比与范畴的内容'
    },
    {
        id: '4',
        parentID: null,
        labelText: '认知动力主义',
        labelIcon: BookmarkIcon,
        labelInfo: '12',
        content: '认知动力主义的内容'
    },
    {
        id: '5',
        parentID: '1',
        labelText: '元认知',
        labelIcon: BookmarkIcon,
        labelInfo: '2',
        content: '元认知是认知系统中的高阶认知主体（higher-order cognitive agent），是认知系统实现自指（self-reference）的认知组件（cognitive components），即以认知系统自身为对象进行表征与计算，涉及与认知相关的知识（认知知识，对认知状态的表征）和指向认知的调控（认知调控，包含意识、自愿控制等，对认知状态的计算），其目的在于通过对认知系统中的要素与过程进行感知、调节与规范，使认知系统适应各类复杂认知情境。'
    },
    {
        id: '6',
        parentID: '1',
        labelText: '自指',
        labelIcon: BookmarkIcon,
        labelInfo: '5',
        content: '自指的内容'
    },
    {
        id: '7',
        parentID: '2',
        labelText: '自组织',
        labelIcon: BookmarkIcon,
        labelInfo: '17',
        content: '自组织的内容'
    },
    {
        id: '8',
        parentID: '2',
        labelText: '涌现',
        labelIcon: BookmarkIcon,
        labelInfo: '3',
        content: '涌现的内容'
    },
    {
        id: '9',
        parentID: '5',
        labelText: '元认知意识',
        labelIcon: BookmarkIcon,
        labelInfo: '1',
        content: '元认知意识的内容'
    },
    {
        id: '10',
        parentID: '9',
        labelText: '学习赤字',
        labelIcon: BookmarkIcon,
        labelInfo: '0',
        content: '学习赤字的内容'
    },
    {
        id: '11',
        parentID: '9',
        labelText: '调节赤字',
        labelIcon: BookmarkIcon,
        labelInfo: '2',
        content: '调节赤字的内容'
    }
];

// mock: 知识标签内容列表
export const mockTagContentLists: TagAssociatedItemsProps[] = [
    {
        id: '1',
        title: '元认知知识',
        type: [{ label: '知识节点', color: 'warning' }],
        time: '2021/12/30 18:23:42'
    },
    {
        id: '2',
        title: '元认知调节',
        type: [{ label: '知识节点', color: 'warning' }],
        time: '2021/12/30 18:23:42'
    },
    {
        id: '3',
        title: '自指',
        type: [{ label: '知识关联', color: 'info' }],
        time: '2021/12/30 18:23:42'
    },
    {
        id: '4',
        title: '认知知识的内涵',
        type: [{ label: '知识笔记', color: 'success' }],
        time: '2021/12/30 18:23:42'
    },
    {
        id: '5',
        title: '认知知识的发展',
        type: [{ label: '文本信息', color: 'error' }],
        time: '2021/12/30 18:23:42'
    },
    {
        id: '6',
        title: '元认知知识',
        type: [{ label: '知识节点', color: 'warning' }],
        time: '2021/12/30 18:23:42'
    },
    {
        id: '7',
        title: '元认知调节',
        type: [{ label: '知识节点', color: 'warning' }],
        time: '2021/12/30 18:23:42'
    },
    {
        id: '8',
        title: '自指',
        type: [{ label: '知识关联', color: 'info' }],
        time: '2021/12/30 18:23:42'
    },
    {
        id: '9',
        title: '认知知识的内涵',
        type: [{ label: '知识笔记', color: 'success' }],
        time: '2021/12/30 18:23:42'
    },
    {
        id: '10',
        title: '认知知识的发展',
        type: [{ label: '文本信息', color: 'error' }],
        time: '2021/12/30 18:23:42'
    }
];
