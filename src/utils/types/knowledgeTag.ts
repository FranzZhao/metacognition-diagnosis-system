import React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';

// 列表的tag标签树
export interface TagListProps {
    /** tag标签id */
    id: string;
    /** tag所属父节点 */
    parentID: string | null;
    /** tag标签 */
    labelText: string;
    /** tag icon */
    labelIcon: React.ElementType<SvgIconProps>;
    /** tag 数量标识 */
    labelInfo: string;
    /** tag 标签内容 */
    content: string;
}

// 树状的tag标签树
export interface TagTreeProps {
    /** tag标签id */
    id: string;
    /** tag标签 */
    labelText: string;
    /** tag icon */
    labelIcon: React.ElementType<SvgIconProps>;
    /** tag 数量标识 */
    labelInfo: string;
    /** tag的子节点 */
    children?: TagTreeProps[];
}

// 知识标签关联项目的表格
export interface TagAssociatedItemsProps {
    /** 表格ID-每个项目自己的id */
    id: string;
    /** 项目标题 */
    title: string;
    /** 项目类型 */
    type: any;
    /** 更新时间 */
    time: string;
}
