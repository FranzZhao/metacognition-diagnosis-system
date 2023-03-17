import React, { useState } from 'react';
import DiaryList from './diaryList';
import DiaryDetail from './diaryDetail';

const Diary = () => {
    const [view, setView] = useState<'diaryList' | 'diaryDetail'>('diaryList');

    return (
        <React.Fragment>
            {view === 'diaryList' ? (
                <DiaryList handleOpenDiaryDetail={() => setView('diaryDetail')} />
            ) : (
                <DiaryDetail handleOpenDiaryList={() => setView('diaryList')} />
            )}
        </React.Fragment>
    );
};

export default Diary;
