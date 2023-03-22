import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface TagSelectorProps {
    value: any;
    onChange: (event: any, newValue: any) => void;
    tagList: string[];
    placeholder?: string;
    sx?: any;
}

const TagSelector: React.FC<TagSelectorProps> = ({ value, onChange, tagList, placeholder, sx }) => {
    return (
        <Autocomplete
            multiple
            options={tagList.map((tag) => tag)}
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
                    当前无标签可选, 请到<Link to={'/knowledgeTag'}>知识标签</Link>中添加标签
                </Typography>
            }
            sx={{ ...sx }}
        />
    );
};

export default TagSelector;
