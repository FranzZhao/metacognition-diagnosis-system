# MUI

本版本使用[mui v5](https://mui.com/zh/material-ui/getting-started/overview/)，有以下一些注意点：

## 尽量使用 MUI Component

> sx only works with MUI component, not HTML element. So you need to replace div. You can use Box instead.

html element 的 classname 比较麻烦，要么用 style，要么直接用 mui component 替换。比如：div 用 Box 替换，再用 sx 去设定样式

## 使用 styled

[styled 文档](https://mui.com/zh/system/styled/)

## 注意 sx 的使用

[sx 文档](https://mui.com/zh/system/getting-started/the-sx-prop/)

sx 适合内联一次性样式，且[sx 性能不佳](https://stackoverflow.com/questions/68383046/is-there-a-performance-difference-between-the-sx-prop-and-the-makestyles-functio)，避免将它用于在页面上呈现大量元素的组件

比如列表项、网格或表格单元格、菜单项和其他体积较大的元素。最好将样式项控制在 5 项以内。

## 注意代码拆分

原先是样式文件和组件文件分离，现在使用 css in js 有点难分；所以以可重用的样式组件来分离样式代码，不要让一个文件太臃肿

```jsx static
// create
const Div = styled('div')({
  background: "white",
});
export Div;
```

```jsx static
// use
import React from 'react';
import { Div } from './Div';

const Page = () => {
    return <Div />;
};
```

## 少使用 style

> CSS classes are generally better for performance than inline styles. (by React 官方文档)

[style](https://www.quora.com/What-is-better-inline-styling-or-CSS-classes)

避免编写内联样式，内联样式存在以下问题：

-   不能轻易地在元素、页面或不同项目之间重用样式
-   丢失有用的特性，如伪类
-   覆盖内联样式的唯一方法是在样式表中使用 !important（您应该尽可能避免使用 !important）

尽可能用 sx 替代。而且 sx 可以实现伪类。比如：实现了按钮 hover 时的样式设置

```js static
<Button
    sx={{
        '&:hover': {
            color: 'red'
        }
    }}
>
    Text
</Button>
```

sx 还可以和 className 配合使用，比如下面这块代码，实现了对内部 class=link 的 a 标签的样式设置

```js static
<Box
    sx={{
        '.link': {
            color: 'red'
        }
    }}
>
    <a className="link">link</a>
</Box>
```
