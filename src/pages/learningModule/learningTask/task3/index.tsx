import React, { useState } from 'react';
// mui5
import Box from '@mui/material/Box';
// custom components
import ScaleList from './scaleList';
import ScaleDetail from './scaleDetail';

const Task3 = () => {
    const [view, setView] = useState<'list' | 'detail'>('list');
    return (
        <Box>
            {view === 'list' ? (
                <ScaleList handleOpenDetail={() => setView('detail')} />
            ) : (
                <ScaleDetail handleOpenList={() => setView('list')} />
            )}
        </Box>
    );
};

export default Task3;
