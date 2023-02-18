# 团队协作规范

-   [团队协作规范](#团队协作规范)
    -   [commit 规范](#commit规范)
    -   [代码规范和美化](#代码规范和美化)
        -   [命名规范：](#命名规范)
        -   [顺序规范：](#顺序规范)
    -   [分支开发规范](#分支开发规范)
    -   [前后端开发约定](#前后端开发约定)

## commit 规范

[git commit 规范](https://zhuanlan.zhihu.com/p/182553920)

即`<type>(<scope>): <subject>`
具体描述（subject）可以中文；scope 为可选项，标识本次提交主要涉及的模块；type 使用以下标识，方便追溯、识别，

1. feat：新功能（feature）
2. fix：修补 bug
3. docs：文档（documentation）
4. style： 格式（不影响代码运行的变动
5. refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
6. perf：优化相关，比如提升性能、体验。
7. test：增加测试
8. chore：构建过程或辅助工具的变动
9. revert：回滚到上一个版本。
10. merge：代码合并。
11. sync：同步主线或分支的 Bug。

项目使用 husky+commitlint，**不符合规范的 commit 将不会被允许提交。**

## 代码规范和美化

使用 eslint+prettier 规范大部分写法。除此之外需要注意以下几点。

### 命名规范：

-   变量函数命名： camelCase 小驼峰
-   类型接口命名： PascalCase 大驼峰；不要使用 I 做为接口名前缀。
-   注意同一概念，命名保持统一，具体可查询[前后端命名统一](https://wuseshi.coding.net/p/kongmingtai/wiki/12)
-   命名表明用途
-   React Event Handler 命名（[参考](https://hackmd.io/@z/react-event-handler)）
    -   定义参数名称时(Prop Name)，以`on`开头;
    -   传入的事件处理函数(Function Name)以`handle`开头
    -   `onClick={handleClick}`

### 顺序规范：

推荐每个组件中的代码顺序一致性，有利于维护。供参考

```js static
// import，大致顺序：react、路由库、其他功能库、mui组件库、本地组件、store、样式资源
import React from 'react';
...

// interface
interface ExampleProps{
  ...
}

const Example = (props: ExampleProps) => {
    // props
    const {...} = props;

    // 路由 hooks
    const history = useHistory();
    const params = useParams();
    ...

    // redux hooks
    const token = useAppSelector((state) => state.user.token);
    const dispatch = useAppDispatch();
    ...


    // react hooks
    const [state, setState] = useState(0);
    useEffect(()=>{
      ...
    })

    // 事件函数/普通函数
    const handleClick = (e) => { ... }

    // 最后，render 方法
    const renderxxx = () => {
      ...
    }

    return (...)
}
```

## 分支开发规范

[参考：Git 多人协作开发流程分支管理方案](https://segmentfault.com/a/1190000041218863)

-   master：主分支，持续集成，推送就自动部署；
-   dev：主开发分支；
-   feat-xxx：以功能（feature）为单位的开发分支；完成后并入 dev 并删除。一开始先以模块划分，后面以具体功能划分。

```bash
# 以dev分支为起点创建一个功能分支f-xxx：
　git checkout -b f-xxx dev

# 开发完成后，将功能分支合并到dev分支：
　git checkout dev

　git merge --no-ff f-xxx

# 删除feature分支：
　git branch -d f-xxx
```

## 前后端开发约定

见 coding 里的[wiki](https://wuseshi.coding.net/p/kongmingtai/wiki/8#user-content-%E5%89%8D%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91%E7%BA%A6%E5%AE%9A)
