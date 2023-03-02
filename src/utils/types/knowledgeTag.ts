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
