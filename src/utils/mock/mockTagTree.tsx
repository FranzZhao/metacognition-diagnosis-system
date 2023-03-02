// type
import { TagListProps } from '../types/knowledgeTag';
// icon
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

// mock: 知识标签列表树
export const mockTagLists: TagListProps[] = [
    {
        id: '1',
        parentID: null,
        labelText: '自指与元认知',
        labelIcon: LocalOfferIcon,
        labelInfo: '42'
    },
    {
        id: '2',
        parentID: null,
        labelText: '复杂系统',
        labelIcon: LocalOfferIcon,
        labelInfo: '32'
    },
    {
        id: '3',
        parentID: null,
        labelText: '类比与范畴',
        labelIcon: LocalOfferIcon,
        labelInfo: '22'
    },
    {
        id: '4',
        parentID: null,
        labelText: '认知动力主义',
        labelIcon: LocalOfferIcon,
        labelInfo: '12'
    },
    {
        id: '5',
        parentID: '1',
        labelText: '元认知',
        labelIcon: LocalOfferIcon,
        labelInfo: '2'
    },
    {
        id: '6',
        parentID: '1',
        labelText: '自指',
        labelIcon: LocalOfferIcon,
        labelInfo: '5'
    },
    {
        id: '7',
        parentID: '2',
        labelText: '自组织',
        labelIcon: LocalOfferIcon,
        labelInfo: '17'
    },
    {
        id: '8',
        parentID: '2',
        labelText: '涌现',
        labelIcon: LocalOfferIcon,
        labelInfo: '3'
    },
    {
        id: '9',
        parentID: '5',
        labelText: '元认知意识',
        labelIcon: LocalOfferIcon,
        labelInfo: '1'
    },
    {
        id: '10',
        parentID: '9',
        labelText: '学习赤字',
        labelIcon: LocalOfferIcon,
        labelInfo: '0'
    },
    {
        id: '11',
        parentID: '9',
        labelText: '调节赤字',
        labelIcon: LocalOfferIcon,
        labelInfo: '2'
    }
];

// mock: 知识标签内容列表
export const mockTagContentLists = [];

// mock: 知识标签详情内容
export const mockTagContentDetail = {};
