# 元认知诊断系统前端说明文档

新建项目基础命令

```
# create react app with typescript
npx create-react-app my-app --template typescript

# mui5
npm install @mui/material @emotion/react @emotion/styled

# mui5 icon
npm install @mui/icons-material

# react router
npm i react-router-dom

# redux
npm install @reduxjs/toolkit redux react-redux redux-persist

# axios
npm install axios

```

git commit 规范

-   feat：新功能（feature）
-   fix：修补 bug
-   docs：文档（documentation）
-   style： 格式（不影响代码运行的变动
-   refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
-   perf：优化相关，比如提升性能、体验。
-   test：增加测试
-   chore：构建过程或辅助工具的变动
-   revert：回滚到上一个版本。
-   merge：代码合并。
-   sync：同步主线或分支的 Bug。

组件库

```
# react-styleguidist
npm install --save-dev react-styleguidist
npm install --save-dev react-docgen-typescript

# setting: styleguide.config.js

# start react-styleguidist
npx styleguidist server
```
