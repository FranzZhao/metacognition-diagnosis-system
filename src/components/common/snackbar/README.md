```js
import Snackbar from './index.tsx';
import { Box, Button, Typography } from '@mui/material';

const [openMsg, setOpenMsg] = React.useState(false);

<Box>
    <Button variant="contained" disableElevation size="small" onClick={() => setOpenMsg(true)}>
        打开消息
    </Button>
    <Snackbar
        type={'info'}
        open={openMsg}
        handleClose={() => setOpenMsg(false)}
        info={<Typography>请对当前学习状态进行反思</Typography>}
    />
</Box>;
```
