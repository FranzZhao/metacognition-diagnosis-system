import React, { useState, useCallback } from 'react';
// react flow
import { Handle, Position } from 'reactflow';
// mui5
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

const CustomNode = ({ id, data }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [text, setText] = useState(data.label);

    // const onChange = useCallback((evt) => {
    //     console.log(evt.target.value);
    // }, []);

    return (
        <>
            <Handle
                type="target"
                id="custom-target"
                position={Position.Left}
                style={{ backgroundColor: '#3c7e3c', border: 'none' }}
            />
            <Paper
                variant="outlined"
                sx={{
                    p: '5px 12px',
                    border: '3px solid #3c7e3c',
                    color: '#3c7e3c',
                    display: 'flex',
                    alignItems: 'center',
                    wordWrap: 'normal',
                    maxWidth: '250px'
                }}
            >
                {isEdit ? (
                    <InputBase
                        value={text}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setText(event.target.value);
                        }}
                        sx={{ width: '150px', '& input': { padding: '0px' } }}
                    />
                ) : (
                    <Typography fontSize="16px">{data.label}</Typography>
                )}
                <IconButton
                    size="small"
                    sx={{ ml: 1, color: '#3c7e3c', p: '3px' }}
                    onClick={() => {
                        if (isEdit) {
                            data.handleChangeNodeText({
                                id: id,
                                text: text
                            });
                        }
                        setIsEdit(!isEdit);
                    }}
                >
                    {isEdit ? (
                        <CheckCircleIcon fontSize="inherit" />
                    ) : (
                        <DriveFileRenameOutlineIcon fontSize="inherit" />
                    )}
                </IconButton>
            </Paper>
            <Handle
                type="source"
                id="custom-source"
                position={Position.Right}
                style={{ backgroundColor: '#3c7e3c', border: 'none' }}
            />
        </>
    );
};

export default CustomNode;
