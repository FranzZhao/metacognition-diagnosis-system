import axios from 'axios';

// axis示例
export const request = axios.create({
    baseURL: process.env.MDS_BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});
