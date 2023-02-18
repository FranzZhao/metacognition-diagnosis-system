一些可以复用的按钮，保证样式一致。

有：

-   TextButton 文字按钮
-   PrimaryBtn 主要按钮（默认文字为确定）
-   SecondaryBtn 次要按钮（默认文字为取消）
-   TertiaryBtn 三级按钮（无默认文字）
-   ListSwitch 切换到列表视图按钮
-   CardSwitch 切换到卡片视图按钮
-   AddFab

```js
import { TextButton, AddFab, SecondaryBtn, PrimaryBtn, TertiaryBtn } from './';
import { Stack, Box } from '@mui/material';

<Stack direction="row" spacing={1}>
    <TextButton>文字按钮</TextButton>
    <SecondaryBtn />
    <PrimaryBtn />
    <PrimaryBtn>OK</PrimaryBtn>
    <TertiaryBtn>三级按钮</TertiaryBtn>
    <AddFab />
</Stack>;
```
