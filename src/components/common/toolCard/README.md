### ToolCard 工具卡片

```js
import ToolCard from './index.tsx';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import HubIcon from '@mui/icons-material/Hub';

<ToolCard
    title={
        <Typography fontSize={'14px'} color={'white'}>
            知识地图小工具
        </Typography>
    }
    icon={
        <Avatar sx={{ bgcolor: '#ff8e0b', width: '20px', height: '20px' }}>
            <HubIcon sx={{ fontSize: '12px' }} />
        </Avatar>
    }
    action={() => {}}
    content={'卡片内容'}
/>;
```
