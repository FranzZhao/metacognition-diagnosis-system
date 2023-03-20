import React from 'react';

// session
import Chapter1Session1 from './chapter1/session1';
import Chapter1Session2 from './chapter1/session2';
import Chapter1Session3 from './chapter1/session3';
import Chapter2Session1 from './chapter2/session1';
import Chapter2Session2 from './chapter2/session2';
import Chapter2Session3 from './chapter2/session3';
import Chapter3Session1 from './chapter3/session1';
import Chapter3Session2 from './chapter3/session2';
import Chapter3Session3 from './chapter3/session3';

const ChapterDetail = ({ session }) => {
    switch (session) {
        case '1':
            return <Chapter1Session1 />;
            break;
        case '2':
            return <Chapter1Session2 />;
            break;
        case '3':
            return <Chapter1Session3 />;
            break;
        case '4':
            return <Chapter2Session1 />;
            break;
        case '5':
            return <Chapter2Session2 />;
            break;
        case '6':
            return <Chapter2Session3 />;
            break;
        case '7':
            return <Chapter3Session1 />;
            break;
        case '8':
            return <Chapter3Session2 />;
            break;
        default:
            return <Chapter3Session3 />;
            break;
    }
};

export default ChapterDetail;
