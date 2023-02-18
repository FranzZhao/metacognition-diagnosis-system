### Modal 模态框:

```js
import { Modal } from './';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
const [open, setOpen] = React.useState(false);
// 中间内容
const ModalContent = <div>自定义内容</div>;
//  关闭弹出框
const handleClose = () => {
    setOpen(false);
};
// 打开弹出框
const handleClick = () => {
    setOpen(true);
};
<Box>
    <Modal
        open={open}
        title="搜索"
        maxWidth="sm"
        content={ModalContent}
        onClose={handleClose}
        actions={
            <div>
                {/*{showErrorText && <Typography color="error">有未填字段</Typography>}*/}
                <Button
                    variant="outlined"
                    onClick={handleClose}
                    sx={{
                        background: 'rgb(242 243 245)',
                        color: 'rgb(29 33 41)',
                        border: 0,
                        borderRadius: '3px 3px 3px 3px',
                        marginRight: '10px'
                    }}
                >
                    取消
                </Button>
                <Button variant="contained" onClick={handleClose}>
                    确定
                </Button>
            </div>
        }
    />
    <Button variant="contained" onClick={handleClick}>
        点击
    </Button>
</Box>;
```
