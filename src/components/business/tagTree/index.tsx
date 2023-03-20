import React, { useEffect } from 'react';
// type
import { TagTreeProps, TagListProps } from '@/utils/types/knowledgeTag';
// mui5
import { styled } from '@mui/material/styles';
import { SvgIconProps } from '@mui/material/SvgIcon';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { TreeItemProps, treeItemClasses } from '@mui/lab/TreeItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import Label from '@mui/icons-material/Label';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

type StyledTreeItemProps = TreeItemProps & {
    bgColor?: string;
    color?: string;
    labelIcon: React.ElementType<SvgIconProps>;
    labelInfo?: string;
    labelText: string;
};

interface TagTreeComponentProps {
    data: TagTreeProps[];
    handleSelectedTag: (tagID: string) => void;
}

// TODO: 添加层级
const TagTree: React.FC<TagTreeComponentProps> = ({ data, handleSelectedTag }) => {
    // 标签项样式设置
    function StyledTreeItem(props: StyledTreeItemProps) {
        const { bgColor, color, labelIcon: LabelIcon, labelInfo, labelText, ...other } = props;

        return (
            <TreeItem
                onClick={() => {
                    console.log(other.nodeId);
                    handleSelectedTag(other.nodeId);
                }}
                label={
                    <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                        <Box
                            component={LabelIcon}
                            color="inherit"
                            sx={{ mr: 1, fontSize: '16px' }}
                        />
                        <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
                            {labelText}
                        </Typography>
                        <Typography variant="caption" color="inherit">
                            {labelInfo}
                        </Typography>
                    </Box>
                }
                {...other}
            />
        );
    }

    // 递归渲染
    const renderTree = (node: TagTreeProps) => {
        return (
            <StyledTreeItem
                key={node.id}
                nodeId={node.id}
                labelText={node.labelText}
                labelIcon={node.labelIcon}
                labelInfo={node.labelInfo}
                // onClick={(event) => {
                //     console.log('here =>', event);
                // }}
            >
                {node.children?.length === 0 ? null : node.children?.map((tag) => renderTree(tag))}
            </StyledTreeItem>
        );
    };

    return (
        <TreeView
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
            sx={{
                m: '5px 0',
                flexGrow: 1,
                minWidth: 200,
                // height: 'calc(100vh - 230px)',
                overflow: 'overlay',
                '&::-webkit-scrollbar': {
                    width: 0
                },
                '&::-webkit-scrollbar-thumb': {},
                '&:hover': {
                    '&::-webkit-scrollbar': {
                        width: 5
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#a4b7c670',
                        borderRadius: '4px'
                    }
                }
            }}
        >
            {data.map((tag) => renderTree(tag))}
            {/* <StyledTreeItem
                nodeId="无标签项目"
                labelText="无标签项目"
                labelIcon={BookmarkBorderIcon}
                labelInfo="10"
                color="#3c8039"
                bgColor="#e6f4ea"
            /> */}
        </TreeView>
    );
};

export default TagTree;
