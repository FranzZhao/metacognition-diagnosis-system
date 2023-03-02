import React from 'react';
// mui5
import { styled } from '@mui/material/styles';
import { Box, Card, Button, Divider } from '@mui/material';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { TreeItemProps, treeItemClasses } from '@mui/lab/TreeItem';
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
import { SvgIconProps } from '@mui/material/SvgIcon';
import AddBoxIcon from '@mui/icons-material/AddBox';

declare module 'react' {
    interface CSSProperties {
        '--tree-view-color'?: string;
        '--tree-view-bg-color'?: string;
    }
}

type StyledTreeItemProps = TreeItemProps & {
    bgColor?: string;
    color?: string;
    labelIcon: React.ElementType<SvgIconProps>;
    labelInfo?: string;
    labelText: string;
};

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    [`& .${treeItemClasses.content}`]: {
        color: theme.palette.text.secondary,
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '&.Mui-expanded': {
            fontWeight: theme.typography.fontWeightRegular
        },
        '&:hover': {
            backgroundColor: theme.palette.action.hover
        },
        '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
            color: 'var(--tree-view-color)'
        },
        [`& .${treeItemClasses.label}`]: {
            fontWeight: 'inherit',
            color: 'inherit'
        }
    },
    [`& .${treeItemClasses.group}`]: {
        marginLeft: 0,
        [`& .${treeItemClasses.content}`]: {
            paddingLeft: theme.spacing(2)
        }
    }
}));

function StyledTreeItem(props: StyledTreeItemProps) {
    const { bgColor, color, labelIcon: LabelIcon, labelInfo, labelText, ...other } = props;

    return (
        <StyledTreeItemRoot
            label={
                <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                    <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
                    <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
                        {labelText}
                    </Typography>
                    <Typography variant="caption" color="inherit">
                        {labelInfo}
                    </Typography>
                </Box>
            }
            style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor
            }}
            {...other}
        />
    );
}

const KnowledgeTag = () => {
    return (
        <Box
            sx={{
                display: 'flex'
            }}
        >
            <Card
                sx={{
                    boxShadow:
                        'rgb(50 50 93 / 2%) 0px 2px 5px -1px, rgb(0 0 0 / 5%) 0px 1px 3px -1px',
                    p: 1,
                    height: 'calc(100vh - 110px)',
                    minWidth: '250px'
                }}
            >
                <Typography margin="10px" fontWeight="bold">
                    知识标签列表
                </Typography>
                <Divider />
                <TreeView
                    aria-label="gmail"
                    defaultExpanded={['3']}
                    defaultCollapseIcon={<ArrowDropDownIcon />}
                    defaultExpandIcon={<ArrowRightIcon />}
                    defaultEndIcon={<div style={{ width: 24 }} />}
                    sx={{
                        m: '5px 0',
                        flexGrow: 1,
                        minWidth: 200,
                        height: 'calc(100vh - 230px)',
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
                    <StyledTreeItem nodeId="1" labelText="All Mail" labelIcon={MailIcon} />
                    <StyledTreeItem nodeId="2" labelText="Trash" labelIcon={DeleteIcon} />
                    <StyledTreeItem nodeId="3" labelText="Categories" labelIcon={Label}>
                        <StyledTreeItem
                            nodeId="5"
                            labelText="Social"
                            labelIcon={SupervisorAccountIcon}
                            labelInfo="90"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                            nodeId="6"
                            labelText="Updates"
                            labelIcon={InfoIcon}
                            labelInfo="2,294"
                            color="#e3742f"
                            bgColor="#fcefe3"
                        />
                        <StyledTreeItem
                            nodeId="7"
                            labelText="Forums"
                            labelIcon={ForumIcon}
                            labelInfo="3,566"
                            color="#a250f5"
                            bgColor="#f3e8fd"
                        />
                        <StyledTreeItem
                            nodeId="8"
                            labelText="Promotions"
                            labelIcon={LocalOfferIcon}
                            labelInfo="733"
                            color="#3c8039"
                            bgColor="#e6f4ea"
                        />
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="4" labelText="History" labelIcon={Label} />

                    <StyledTreeItem nodeId="1" labelText="All Mail" labelIcon={MailIcon} />
                    <StyledTreeItem nodeId="2" labelText="Trash" labelIcon={DeleteIcon} />
                    <StyledTreeItem nodeId="3" labelText="Categories" labelIcon={Label}>
                        <StyledTreeItem
                            nodeId="5"
                            labelText="Social"
                            labelIcon={SupervisorAccountIcon}
                            labelInfo="90"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                            nodeId="6"
                            labelText="Updates"
                            labelIcon={InfoIcon}
                            labelInfo="2,294"
                            color="#e3742f"
                            bgColor="#fcefe3"
                        />
                        <StyledTreeItem
                            nodeId="7"
                            labelText="Forums"
                            labelIcon={ForumIcon}
                            labelInfo="3,566"
                            color="#a250f5"
                            bgColor="#f3e8fd"
                        />
                        <StyledTreeItem
                            nodeId="8"
                            labelText="Promotions"
                            labelIcon={LocalOfferIcon}
                            labelInfo="733"
                            color="#3c8039"
                            bgColor="#e6f4ea"
                        />
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="4" labelText="History" labelIcon={Label} />

                    <StyledTreeItem nodeId="1" labelText="All Mail" labelIcon={MailIcon} />
                    <StyledTreeItem nodeId="2" labelText="Trash" labelIcon={DeleteIcon} />
                    <StyledTreeItem nodeId="3" labelText="Categories" labelIcon={Label}>
                        <StyledTreeItem
                            nodeId="5"
                            labelText="Social"
                            labelIcon={SupervisorAccountIcon}
                            labelInfo="90"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                        />
                        <StyledTreeItem
                            nodeId="6"
                            labelText="Updates"
                            labelIcon={InfoIcon}
                            labelInfo="2,294"
                            color="#e3742f"
                            bgColor="#fcefe3"
                        />
                        <StyledTreeItem
                            nodeId="7"
                            labelText="Forums"
                            labelIcon={ForumIcon}
                            labelInfo="3,566"
                            color="#a250f5"
                            bgColor="#f3e8fd"
                        />
                        <StyledTreeItem
                            nodeId="8"
                            labelText="Promotions"
                            labelIcon={LocalOfferIcon}
                            labelInfo="733"
                            color="#3c8039"
                            bgColor="#e6f4ea"
                        />
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="4" labelText="History" labelIcon={Label} />
                </TreeView>
                <Divider />
                <Button
                    variant="contained"
                    sx={{ width: '100%', m: '10px 0' }}
                    disableElevation
                    startIcon={<AddBoxIcon />}
                >
                    添加标签
                </Button>
            </Card>
            <Card
                sx={{
                    boxShadow:
                        'rgb(50 50 93 / 2%) 0px 2px 5px -1px, rgb(0 0 0 / 5%) 0px 1px 3px -1px',
                    p: 2,
                    ml: 2,
                    width: 'calc(100vw)'
                }}
            >
                知识标签详情
            </Card>
        </Box>
    );
};

export default KnowledgeTag;
