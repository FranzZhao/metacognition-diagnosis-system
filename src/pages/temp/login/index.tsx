import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextFiled from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// redux
import { useAppDispatch } from '@/store';
import { setNewAgentMsg } from '@/store/slices';
import json from './test.json';

const LoginPage = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Box>
            <Button
                variant="contained"
                onClick={() => {
                    dispatch(setNewAgentMsg());
                }}
            >
                新增msg
            </Button>
            <Button
                variant="contained"
                onClick={() => {
                    // alert('json测试')'
                    console.log(json);
                    // fetch('./test.json')
                    //     .then((response) => response.json())
                    //     .then((json) => console.log(json));
                }}
            >
                操作行为写入json测试
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
