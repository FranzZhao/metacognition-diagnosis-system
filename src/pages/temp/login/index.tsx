import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextFiled from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// redux
import { useAppDispatch, useAppSelector } from '@/store';
import { setNewAgentMsg } from '@/store/slices';
import json from './test.json';

const LoginPage = () => {
    const dispatch = useAppDispatch();
    const xAPI = useAppSelector((state) => state.actionLog.actions);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Box>
            <Button
                variant="contained"
                onClick={() => {
                    console.log(xAPI);
                }}
            >
                输出行为json
            </Button>
            <Paper sx={{ p: '10px 20px', width: '450px' }}>
                <Typography
                    width="100%"
                    textAlign="center"
                    variant="h6"
                    fontWeight="bold"
                    marginTop="10px"
                >
                    用户登录
                </Typography>
                <TextFiled
                    sx={{ width: '100%' }}
                    variant="standard"
                    label="邮箱"
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(event.target.value)
                    }
                />
                <TextFiled
                    sx={{ width: '100%', mt: 2 }}
                    variant="standard"
                    label="密码"
                    type="password"
                    value={password}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(event.target.value)
                    }
                />
                <Button
                    variant="contained"
                    disableElevation
                    sx={{ width: '100%', mt: 2 }}
                    onClick={() => alert(email + '=>' + password)}
                >
                    登录
                </Button>
            </Paper>
        </Box>
    );
};

export default LoginPage;
