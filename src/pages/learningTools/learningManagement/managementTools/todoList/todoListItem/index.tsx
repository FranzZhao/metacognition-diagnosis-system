import React, { useState } from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import InputBase from '@mui/material/InputBase';
import CheckIcon from '@mui/icons-material/Check';

const TodoListItems = ({ todoList, handleToggle, handleDeleteItem, handleUpdateItem }) => {
    // TODO: 删除的时候可以有一个小弹框，询问是否确认删除
    const [isUpdateID, setIsUpdateID] = useState(0);
    const [updateContent, setUpdateContent] = useState('');

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {todoList.map((value, idx) => {
                const labelId = `checkbox-list-label-${value.id}`;
                return (
                    <Box key={value.id}>
                        {idx === 0 && <Divider />}
                        <ListItem
                            key={value.id}
                            secondaryAction={
                                <Box>
                                    {isUpdateID === value.id ? (
                                        <Box>
                                            <IconButton
                                                edge="end"
                                                aria-label="comments"
                                                size="small"
                                                onClick={() => {
                                                    setIsUpdateID(0);
                                                    handleUpdateItem({
                                                        id: value.id,
                                                        content: updateContent,
                                                        isFinish: value.isFinish
                                                    });
                                                }}
                                            >
                                                <CheckIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                    ) : (
                                        <Box>
                                            {/* 修改： 已完成的不出现修改按钮 */}
                                            {!value.isFinish && (
                                                <IconButton
                                                    edge="end"
                                                    aria-label="comments"
                                                    size="small"
                                                    onClick={() => {
                                                        setIsUpdateID(value.id);
                                                        setUpdateContent(value.content);
                                                    }}
                                                >
                                                    <DriveFileRenameOutlineIcon fontSize="small" />
                                                </IconButton>
                                            )}
                                            {/* 删除 */}
                                            <IconButton
                                                edge="end"
                                                aria-label="comments"
                                                size="small"
                                                onClick={() => handleDeleteItem(value)}
                                            >
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                    )}
                                </Box>
                            }
                            disablePadding
                            sx={{ width: '100%' }}
                        >
                            {isUpdateID === value.id ? (
                                <InputBase
                                    sx={{
                                        borderBottom: '1px solid grey',
                                        margin: '8px 10px',
                                        width: '93%'
                                    }}
                                    placeholder="输入新增任务计划的基本内容"
                                    value={updateContent}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                        setUpdateContent(event.target.value)
                                    }
                                />
                            ) : (
                                <ListItemButton
                                    role={undefined}
                                    onClick={handleToggle(value)}
                                    dense
                                >
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={value.isFinish}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        id={labelId}
                                        primary={value.content}
                                        sx={{
                                            textDecoration: value.isFinish ? 'line-through' : 'none'
                                        }}
                                    />
                                </ListItemButton>
                            )}
                        </ListItem>
                        <Divider />
                    </Box>
                );
            })}
        </List>
    );
};

export default TodoListItems;
