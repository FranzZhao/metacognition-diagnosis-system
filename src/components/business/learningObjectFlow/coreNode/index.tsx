import React, { useCallback } from 'react';
// react flow
import { Handle, Position } from 'reactflow';
// mui5
import Paper from '@mui/material/Paper';

const CoreNode = ({ data }) => {
    // const onChange = useCallback((evt) => {
    //     console.log(evt.target.value);
    // }, []);

    return (
        <>
            <Handle
                type="source"
                id="core-source"
                position={Position.Right}
                style={{
                    backgroundColor: 'steelblue',
                    border: 'none'
                }}
            />
            <Paper
                variant="outlined"
                sx={{
                    p: '5px 12px',
                    border: '3px solid steelblue',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: 'steelblue',
                    wordWrap: 'normal',
                    width: '180px'
                }}
            >
                {data.label}
            </Paper>
        </>
    );
};

export default CoreNode;
