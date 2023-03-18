import React from 'react';
// mui5
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const NumberCard = ({ number, text, icon, color }) => {
    return (
        <Paper variant="outlined" sx={{ width: '100%', height: '100%', p: '10px', m: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <Box
                    sx={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: color
                    }}
                >
                    {number}
                </Box>
                <Box sx={{ color: color }}>{icon}</Box>
            </Box>
            <Box sx={{ fontSize: '0.8rem', ml: '18px', mb: '5px' }}>{text}</Box>
        </Paper>
    );
};

export default NumberCard;
