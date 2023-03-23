import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// redux
import { useAppSelector, useAppDispatch } from '@/store';
import { getAction } from '@/store/slices';

interface TagSelectorProps {
    value: any;
    onChange: (event: any, newValue: any) => void;
    tagList: string[];
    placeholder?: string;
    sx?: any;
}

const TagSelector: React.FC<TagSelectorProps> = ({ value, onChange, tagList, placeholder, sx }) => {
    const dispatch = useAppDispatch();
    const currentActor = useAppSelector((state) => state.actionLog.actor);
    const fullTagList = useAppSelector((state) => state.knowledgeTag.tagList);

    return (
        <Autocomplete
            multiple
            options={fullTagList.map((tag) => tag.labelText)}
            value={value}
            onChange={onChange}
            renderTags={(value: readonly string[], getTagProps) =>
                value.map((option: string, index: number) => (
                    <Chip color="warning" size="small" label={option} {...getTagProps({ index })} />
                ))
            }
            renderInput={(params) => (
                <TextField {...params} variant="standard" placeholder={placeholder} />
            )}
            noOptionsText={
                <Typography>
                    当前无标签可选, 请到
                    <Link
                        to={'/knowledgeTag'}
                        onClick={() => {
                            dispatch(
                                getAction({
                                    actor: currentActor,
                                    verb: '点击链接',
                                    object: '知识标签页面链接',
                                    result: '跳转至知识标签页面进行知识标签管理',
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
                        知识标签
                    </Link>
                    中添加标签
                </Typography>
            }
            sx={{ ...sx }}
        />
    );
};

export default TagSelector;
